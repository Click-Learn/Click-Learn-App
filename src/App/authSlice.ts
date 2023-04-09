import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

const token = window.localStorage.getItem('ClickLearnLogged');
let initialState = null;

if (token) {
    const { email } : any = jwtDecode(token);
    initialState =  email ;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            window.localStorage.setItem('ClickLearnLogged', action.payload);
            const { email } : any= jwtDecode(action.payload);
            console.log(email);
            state =  email;
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