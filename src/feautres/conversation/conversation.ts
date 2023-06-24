import { io } from "socket.io-client";
import { apiSlice } from "../api/apiSlice";
import { messageApi } from "../message/message";

export declare interface conversationType {
    _id: string;
    user: userType[];
    lastMessage: string;
    createdAt: string;
    updatedAt: string;
}
interface conversationsType {
    data: conversationType[];
}

export const conversationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getConversations: builder.query<conversationsType, string>({
            query: (email: string) => `/chat/conversation?email=${email}`,
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
                    socket.on("conversation", (data: any) => {
                        const isEmailVisible = data.data.user.find((item: any) => item.email == arg);
                        if (isEmailVisible) {
                            updateCachedData((draft) => {
                                const draftData = draft.data.find((item) => item._id == data.data._id);
                                if (draftData) {
                                    draftData.lastMessage = data.data.lastMessage;
                                    draftData.updatedAt = data.data.updatedAt;
                                    draft.data.sort((a, b) => new Date(b.updatedAt).valueOf() - new Date(a.updatedAt).valueOf());
                                }
                            });
                        }
                    });
                } catch (err) {}
                await cacheEntryRemoved;
                socket.close();
            },
        }),
        getConversationalUsers: builder.mutation<any, Partial<string[]>>({
            query: (emails: string[]) => ({
                url: "/chat/conversationaluser",
                method: "POST",
                body: emails,
            }),
        }),
        addConversation: builder.mutation<any, Partial<any>>({
            query: (data: any) => ({
                url: "/chat/conversation",
                method: "POST",
                body: {
                    user: [data.sender, data.receiver],
                    lastMessage: data.message,
                },
            }),
            async onQueryStarted(data, { queryFulfilled, dispatch }) {
                try {
                    const conversation = await queryFulfilled;
                    if (conversation?.data.data._id) {
                        dispatch(
                            apiSlice.util.updateQueryData("getConversations" as never, data.sender.email as never, (draft: any) => {
                                draft.data.unshift(conversation.data.data);
                            }),
                        );
                        dispatch(
                            messageApi.endpoints.addMessage.initiate({
                                conversationId: conversation.data.data._id,
                                sender: data.sender,
                                receiver: data.receiver,
                                message: data.message,
                            }),
                        );
                        // update conversation cache
                    }
                } catch (err) {}
            },
        }),
    }),
});

export const { useGetConversationsQuery, useGetConversationalUsersMutation, useAddConversationMutation } = conversationApi;
