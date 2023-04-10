import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const token = window.localStorage.getItem('ClickLearnLogged');
let initialState = null;

if (token) {
    const { email, name, picture } : any = jwtDecode(token);
    initialState =  { email, name, picture } ;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            window.localStorage.setItem('ClickLearnLogged', action.payload);
            const { email, name, picture } : any= jwtDecode(action.payload);
            console.log({email, name, picture});
            state =  { email, name, picture };
            return state;
        },

        logoutRedux: (state) => {
            window.localStorage.removeItem('ClickLearnLogged');
            return null;
        },
    }
})

export const { loginRedux, logoutRedux } = authSlice.actions;

export default authSlice.reducer;