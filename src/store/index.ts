import { configureStore } from "@reduxjs/toolkit"
import mainSlice from "./features/mainSlice"
import { darkModeCookieMiddleware } from "./middleware/darkModeCookieMiddleware"

export const store = configureStore({
  reducer: {
    main: mainSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([darkModeCookieMiddleware])
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
