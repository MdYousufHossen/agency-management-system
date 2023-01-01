import { apiSlice } from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTask: builder.query<TaskTypes, void>({
            query: () => "/task",
        }),
        addTask: builder.mutation<TaskResType, Partial<Pick<taskType, "project" & "description" & "team" & "author">>>({
            query: (data) => ({
                url: "/task",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const res = await queryFulfilled;
                    dispatch(
                        apiSlice.util.updateQueryData("getTask" as never, undefined as never, (draft: any) => {
                            draft.data.push(res.data.data);
                        }),
                    );
                } catch {}
            },
        }),
        taskUpdate: builder.mutation<any, Partial<updateTaskType>>({
            query: ({ id, data }) => ({
                url: `/task?id=${id}`,
                method: "PATCH",
                body: data,
            }),
            async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
                // pessimistically cache update start

                const patchResult = dispatch(
                    apiSlice.util.updateQueryData("getTask" as never, undefined as never, (draft: any) => {
                        const draftData = draft.data.find((m: any) => m._id == id);
                        draftData.status = data?.status;
                    }),
                );
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            },
        }),
        deleteTask: builder.mutation<any, any>({
            query: (id) => ({
                url: `/task?id=${id}`,
                method: "DELETE",
            }),
            async onQueryStarted(id, { queryFulfilled, dispatch }) {
                // pessimistically cache update start

                const patchResult = dispatch(
                    apiSlice.util.updateQueryData("getTask" as never, undefined as never, (draft: any) => {
                        const draftData = draft.data.filter((m: { _id: any }) => m._id != id);
                        draft.data = draftData;
                    }),
                );
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            },
        }),
    }),
});

export const { useGetTaskQuery, useAddTaskMutation, useTaskUpdateMutation, useDeleteTaskMutation } = taskApi;
