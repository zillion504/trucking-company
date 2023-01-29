import { configureStore } from "@reduxjs/toolkit"
import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
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

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
