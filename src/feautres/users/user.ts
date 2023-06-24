import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "../auth/authSlice";
export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<usersType, void>({
            query: () => "/user/allusers",
        }),
        getUser: builder.query<{ data: userType }, string>({
            query: (email: string) => `/user/finduser?email=${email}`,
        }),
        updateUser: builder.mutation<any, any>({
            query: ({ data, email }) => ({
                url: `/user/updateuser?email=${email}`,
                method: "PATCH",
                body: data,
            }),
            async onQueryStarted(data, { queryFulfilled, dispatch, getState }) {
                try {
                    const { data } = await queryFulfilled;
                    const state: any = getState();
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            token: state.auth.token,
                            user: data.data,
                        }),
                    );
                    dispatch(
                        userLoggedIn({
                            token: state.auth.token,
                            user: data.data,
                        }),
                    );
                } catch {}
            },
        }),
    }),
});

export const { useGetUsersQuery, useGetUserQuery, useUpdateUserMutation } = userApi;
