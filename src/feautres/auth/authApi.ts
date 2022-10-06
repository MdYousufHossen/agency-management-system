import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<ResTypes, Partial<RegisterTypes>>({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(data, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                    );
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                    );
                } catch {}
            },
        }),
        login: builder.mutation<ResTypes, Partial<Pick<RegisterTypes, "email" | "password">>>({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(data, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                    );
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.user,
                        }),
                    );
                } catch {}
            },
        }),
    }),
});
export const { useLoginMutation, useRegisterMutation } = authApi;
