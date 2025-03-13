import { createSlice } from "@reduxjs/toolkit";

const initState = {
    username: '',
    email: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        setUser(state, action){
            state.username = action.payload.username;
            state.email = action.payload.email;
        }
    }
});

export const userReducer = userSlice.reducer;
export const { setUser } =  userSlice.actions;