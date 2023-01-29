import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { type MainState } from "types/store/features/mainSlice"
import Cookies from "universal-cookie"

const cookies = new Cookies()

const initialState: MainState = {
  darkMode: cookies.get("dark-mode") === "true"
}

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload
    }
  }
})

export const {
  setDarkMode
} = mainSlice.actions

export default mainSlice.reducer
