import { configureStore } from "@reduxjs/toolkit";
import chosenWebMode from "./lightDarkSlice";

export const store = configureStore({
    reducer: {
       chosenMode: chosenWebMode,
    }

})