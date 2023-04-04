import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toggle: true
}

const chosenMode = createSlice({
  name: 'modeToggle',
  initialState,
  reducers: {
    setDark: (state) => {
      state.toggle = true
    },
    setLight: (state) => {
      state.toggle = false
    }
  }
});

export const { setDark, setLight } = chosenMode.actions

export default chosenMode.reducer