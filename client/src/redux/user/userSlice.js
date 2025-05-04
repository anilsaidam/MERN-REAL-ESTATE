import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,  // Initialize error as null
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
            state.error = null;  // Clear errors when starting new attempt
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearError: (state) => {
            state.error = null;  // Add clearError reducer
        }
    }
});

export const { signInStart, signInSuccess, signInFailure, clearError } = userSlice.actions;
export default userSlice.reducer;