import Cookies from "universal-cookie"
import { type Middleware, type Dispatch, type AnyAction } from "redux"

const cookies = new Cookies()

const darkModeCookieMiddleware: Middleware = (_store: any) => (next: Dispatch) => (action: AnyAction) => {
  if (action.type === "main/setDarkMode") {
    cookies.set("dark-mode", action.payload, {
      sameSite: "strict"
    })
  }

  next(action)
}

export { darkModeCookieMiddleware }
