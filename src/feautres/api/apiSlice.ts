import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}/api/v1`,
        prepareHeaders: (headers, { getState }) => {
            // Get the token from your Redux state
            const localAuth = localStorage.getItem("auth");

            if (localAuth) {
                const token = JSON.parse(localAuth).token;
                headers.set("Authorization", `Bearer ${token}`);
            }

            return headers;
        },
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});
