import { io } from "socket.io-client";
import { apiSlice } from "../api/apiSlice";

// export declare interface messageType {
//     _id: string;
//     conversationId: string;
//     sender: userType;
//     receiver: userType;
//     message: string;
//     // createdAt?: string;
//     // updatedAt?: string;
// }
export interface messageResType {
    messages: messageType[];
    totalCount: number;
}
interface messagesType {
    data: messageResType;
}

export const messageApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMessages: builder.query<messagesType, string>({
            query: (id) => `/chat/message?conversationId=${id}&sort=-createdAt`,

            async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
                //create socket
                const socket = io(import.meta.env.VITE_API_URL as string, {
                    query: {
                        conversationId: arg,
                    },
                    reconnectionDelay: 1000,
                    reconnection: true,
                    // withCredentials: true,
                    // reconnectionAttemps: "10",
                    transports: ["websocket"],
                    agent: false,
                    upgrade: false,
                    rejectUnauthorized: false,
                });

                try {
                    await cacheDataLoaded;
                    socket.on("message", (data: any) => {
                        if (arg == data.data.conversationId) {
                            updateCachedData((draft) => {
                                draft.data.messages.unshift(data.data);
                            });
                        }
                    });
                } catch (err) {}
                await cacheEntryRemoved;
                socket.close();
            },
        }),
        getMoreMessages: builder.query({
            query: ({ id, page }: { id: string; page: number }) => `/chat/message?conversationId=${id}&page=${page}&limit=${10}&sort=-createdAt`,

            async onQueryStarted({ id }, { queryFulfilled, dispatch }) {
                try {
                    const messages = await queryFulfilled;
                    if (messages.data.data.messages.length > 0) {
                        // dispatch(
                        //     apiSlice.util.updateQueryData("getMessages", id, (draft) => {
                        //         return {
                        //             status: draft.status,
                        //             data: {
                        //                 messages: [...draft.data.messages, ...messages.data.data.messages],
                        //                 totalCount: Number(draft.data.totalCount),
                        //             },
                        //         };
                        //     }),
                        // );
                    }
                } catch (err) {}
            },
        }),
        addMessage: builder.mutation<messageType, Partial<Pick<messageType, "conversationId" & "sender" & "receiver" & "message">>>({
            query: (data: Pick<messageType, "conversationId" & "sender" & "receiver" & "message">) => ({
                url: "/chat/message",
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useGetMessagesQuery, useAddMessageMutation } = messageApi;
