import { store } from "store/"
import { setDarkMode } from "store/features/mainSlice"

test("it changes darkmode correctly", () => {
  // Should be initially false
  expect(store.getState().main.darkMode).toBe(false)

  store.dispatch(setDarkMode(true))
  expect(store.getState().main.darkMode).toBe(true)

  store.dispatch(setDarkMode(false))
  expect(store.getState().main.darkMode).toBe(false)
})
