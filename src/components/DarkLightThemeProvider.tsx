import { CssBaseline, ThemeProvider } from "@mui/material"
import { type PropsWithChildren, type FC } from "react"
import { lightTheme, darkTheme } from "../theme"

interface DarkLightThemeProviderProps {
  darkMode: boolean
};

const DarkLightThemeProvider: FC<PropsWithChildren<DarkLightThemeProviderProps>> = ({ children, darkMode }) => {
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}

export default DarkLightThemeProvider
