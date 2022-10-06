import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.VITE_API_URL,
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});
