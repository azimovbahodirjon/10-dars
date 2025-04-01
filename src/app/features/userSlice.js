import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthReady: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.user = payload;
        },
        logout: (state, { payload }) => {
            state.user = null;
        },
        authIsReady: (state, { payload }) => {
            state.isAuthReady = false;
        },
    },
});

export const { authIsReady, login, logout } = userSlice.actions;
export default userSlice.reducer;