import { apiSlice } from "../api/apiSlice";

export const projectApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query<ProjectTypes, void>({
            query: () => "/project",
        }),
        addProject: builder.mutation<ProjectResType, Partial<Pick<projectType, "name" & "description" & "team" & "author">>>({
            query: (data) => ({
                url: "/project",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const res = await queryFulfilled;
                    dispatch(
                        apiSlice.util.updateQueryData("getProjects" as never, undefined as never, (draft: any) => {
                            draft.data.push(res.data.data);
                        }),
                    );
                } catch {}
            },
        }),
        projectUpdate: builder.mutation<any, Partial<updateType>>({
            query: ({ id, data }) => ({
                url: `/project?id=${id}`,
                method: "PATCH",
                body: data,
            }),
            async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
                // pessimistically cache update start

                const patchResult = dispatch(
                    apiSlice.util.updateQueryData("getProjects" as never, undefined as never, (draft: any) => {
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
        deleteProject: builder.mutation<any, any>({
            query: (id) => ({
                url: `/project?id=${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useGetProjectsQuery, useAddProjectMutation, useProjectUpdateMutation, useDeleteProjectMutation } = projectApi;
