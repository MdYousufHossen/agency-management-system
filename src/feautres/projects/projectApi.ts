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
                const res = await queryFulfilled;
                console.log("project res:", res);
                dispatch(
                    apiSlice.util.updateQueryData("getProjects", undefined, (draft) => {
                        console.log("project draft", draft);
                        draft.data.unshift(res.data.data);
                    }),
                );
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
                    apiSlice.util.updateQueryData("getProjects", undefined, (draft) => {
                        const draftData = draft.data.find((m) => m._id == id);
                        draftData.status = data.status;
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

export const { useGetProjectsQuery, useAddProjectMutation, useProjectUpdateMutation } = projectApi;
