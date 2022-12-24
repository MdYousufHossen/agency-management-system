import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: userTypes = {
    token: undefined,
    user: undefined,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action: PayloadAction<Required<userTypes>>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) => {
            state.token = undefined;
            state.user = undefined;
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
