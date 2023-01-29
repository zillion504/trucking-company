import { createTheme, type Shadows, type ThemeOptions } from "@mui/material/styles"
import { deepmerge } from "@mui/utils"

const themeBase: ThemeOptions = {
  typography: {
    fontFamily: [
      "\"Heebo\"",
      "\"Helvetica\"",
      "\"Arial\"",
      "sans-serif",
      "\"Apple Color Emoji\"",
      "\"Segoe UI Emoji\"",
      "\"Segoe UI Symbol\""
    ].join(","),
    h1: {
      textTransform: "uppercase",
      fontSize: 80,
      fontWeight: 600,
      fontFamily: "Teko",
      lineHeight: "100%"
    },
    h2: {
      fontSize: 48,
      fontWeight: 600,
      fontFamily: "Teko",
      lineHeight: "100%"

    },
    h3: {
      fontSize: 40,
      fontWeight: 500,
      fontFamily: "Teko",
      lineHeight: "100%"

    },
    h4: {
      fontSize: 30,
      fontWeight: 500,
      fontFamily: "Teko",
      lineHeight: "100%"

    },
    h5: {
      fontSize: 26,
      fontWeight: 500,
      fontFamily: "Teko",
      lineHeight: "100%"

    },
    h6: {
      fontSize: 24,
      fontWeight: 500,
      fontFamily: "Teko",
      lineHeight: "100%"

    },
    body1: {
      fontSize: 22,
      fontWeight: 400,
      lineHeight: "120%"
    },
    body2: {
      fontSize: 22,
      fontWeight: 400
    },
    subtitle1: {
      fontSize: 22,
      fontWeight: 400,
      lineHeight: "130%"
    },
    button: {
      fontWeight: 600
    },
    fontSize: 22
  },
  shadows: Array(25).fill("none") as Shadows,
  shape: {
    borderRadius: 0
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
          textDecoration: "none"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: "1px"
        }
      }
    }
  }
}

const lightPalette: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "hsl(0, 82.2%, 40.8%)",
      contrastText: "#fff"
    },
    secondary: {
      main: "hsl(0, 5%, 5%)",
      contrastText: "#fff"
    },
    info: {
      main: "hsl(0, 0%, 40%)"
    },
    common: {
      white: "#fff",
      black: "hsl(0, 5%, 5%)"
    },
    background: {
      paper: "hsl(145, 30%, 85.8%)",
      default: "hsl(145, 40%, 98.8%)"
    }
  }
}

const darkPalette: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(0, 60%, 45%)"
    },
    secondary: {
      main: "hsl(0, 100%, 15%)"
    },
    common: {
      black: "hsl(0, 0%, 5%)"
    },
    background: {
      default: "hsl(0, 0%, 5%)"
    }
  }
}

const darkTheme = createTheme(deepmerge(themeBase, darkPalette))
const lightTheme = createTheme(deepmerge(themeBase, lightPalette))

export { darkTheme, lightTheme }
