import { CssBaseline, ThemeProvider } from "@mui/material"
import { type PropsWithChildren, type FC } from "react"
import { useAppSelector } from "store"
import { lightTheme, darkTheme } from "../theme"

const DarkLightThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const darkMode: boolean = useAppSelector(state => state.main.darkMode)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}

export default DarkLightThemeProvider
