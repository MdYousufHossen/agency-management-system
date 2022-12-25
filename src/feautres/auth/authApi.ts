import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation<ResTypes, Partial<RegisterTypes>>({
            query: (data) => ({
                url: "/user/signup",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(data, { queryFulfilled, dispatch }) {
                try {
                    const { data } = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            token: data.data.token,
                            user: data.data.user,
                        }),
                    );
                    dispatch(
                        userLoggedIn({
                            token: data.data.token,
                            user: data.data.user,
                        }),
                    );
                } catch {}
            },
        }),
        login: builder.mutation<ResTypes, Partial<Pick<RegisterTypes, "email" | "password">>>({
            query: (data) => ({
                url: "/user/login",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(data, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            token: result.data.data.token,
                            user: result.data.data.user,
                        }),
                    );
                    dispatch(
                        userLoggedIn({
                            token: result.data.data.token,
                            user: result.data.data.user,
                        }),
                    );
                } catch {}
            },
        }),
    }),
});
export const { useLoginMutation, useRegisterMutation } = authApi;
