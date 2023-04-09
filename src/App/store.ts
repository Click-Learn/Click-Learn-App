import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import chosenWebMode from "./lightDarkSlice";

export const store = configureStore({
    reducer: {
       chosenMode: chosenWebMode,
       authSlice: authSlice
    }

})