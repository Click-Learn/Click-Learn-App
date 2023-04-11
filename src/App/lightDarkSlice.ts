import { createSlice } from '@reduxjs/toolkit'

let webMode = window.localStorage.getItem("webMode");

  const initialState = {
    toggle: webMode === "light" ? true : false
  }

const chosenMode = createSlice({
  name: 'modeToggle',
  initialState,
  reducers: {
    setDark: (state) => {
      state.toggle = true
      window.localStorage.setItem("webMode","light")
    },
    setLight: (state) => {
      state.toggle = false
      window.localStorage.setItem("webMode", "dark")
    }
  }
});

export const { setDark, setLight } = chosenMode.actions

export default chosenMode.reducer