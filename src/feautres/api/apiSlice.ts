import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.VITE_API_URL + "/api/v1",
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});
