import { apiSlice } from "../api/apiSlice";

export const teamApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeams: builder.query<TeamTypes, void>({
            query: () => `/team`,
        }),
        createTeam: builder.mutation<TeamResType, Partial<Pick<TeamType, "name" & "description" & "user">>>({
            query: (data) => ({
                url: "/team",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // pessimistically cache update start
                const res = await queryFulfilled;
                dispatch(
                    apiSlice.util.updateQueryData("getTeams" as never, undefined as never, (draft: any) => {
                        draft.data.unshift(res.data.data);
                    }),
                );
            },
        }),
        updateTeam: builder.mutation<any, Partial<any>>({
            query: ({ id, data }) => ({
                url: `/team?id=${id}`,
                method: "PATCH",
                body: data,
            }),
            async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
                // pessimistically cache update start

                const patchResult = dispatch(
                    apiSlice.util.updateQueryData("getTeams" as never, undefined as never, (draft: any) => {
                        const draftData = draft.data.find((m: any) => m._id == id);
                        draftData.user.push(data);
                    }),
                );
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            },
        }),
        deleteTeam: builder.mutation<any, any>({
            query: (id) => ({
                url: `/team?id=${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useGetTeamsQuery, useCreateTeamMutation, useUpdateTeamMutation, useDeleteTeamMutation } = teamApi;
