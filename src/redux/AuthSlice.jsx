import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    loading: null,
    error: null,
    user: null
}

const AuthSlice = createSlice({
    name: 'authslice',
    initialState: initialState,
    reducers: {
        SetUser: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null,
                state.loading = null,
                state.error = null
        }
    }
});


export const { SetUser, logout } = AuthSlice.actions

export default AuthSlice.reducer