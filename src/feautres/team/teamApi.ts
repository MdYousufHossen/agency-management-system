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
                console.log("res", res.data.data);
                dispatch(
                    apiSlice.util.updateQueryData("getTeams" as never, undefined as never, (draft: any) => {
                        draft.data.unshift(res.data.data);
                    }),
                );
            },
        }),
    }),
});

export const { useGetTeamsQuery, useCreateTeamMutation } = teamApi;
