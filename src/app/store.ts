import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "~/feautres/api/apiSlice";
import authSlice from "~/feautres/auth/authSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
