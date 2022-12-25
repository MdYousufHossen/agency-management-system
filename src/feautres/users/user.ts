import { apiSlice } from "../api/apiSlice";
export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<usersType, void>({
            query: () => "/user/allusers",
        }),
        getUser: builder.query<{ data: userType }, string>({
            query: (email: string) => `/user/finduser?email=${email}`,
        }),
    }),
});

export const { useGetUsersQuery, useGetUserQuery } = userApi;
