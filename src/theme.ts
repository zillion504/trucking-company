import { createTheme, type ThemeOptions } from "@mui/material/styles"
import { deepmerge } from "@mui/utils"

const themeBase: ThemeOptions = {
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "\"Segoe UI\"",
      "\"Roboto\"",
      "\"Helvetica\"",
      "\"Arial\"",
      "sans-serif",
      "\"Apple Color Emoji\"",
      "\"Segoe UI Emoji\"",
      "\"Segoe UI Symbol\""
    ].join(","),
    h1: {
      fontSize: 48,
      fontWeight: 600
    },
    h2: {
      fontSize: 36,
      fontWeight: 600
    },
    h3: {
      fontSize: 30,
      fontWeight: 500
    },
    h4: {
      fontSize: 26,
      fontWeight: 500
    },
    h5: {
      fontSize: 22,
      fontWeight: 500
    },
    h6: {
      fontSize: 20,
      fontWeight: 500
    },
    body1: {
      fontSize: 16,
      fontWeight: 400
    },
    body2: {
      fontSize: 14,
      fontWeight: 400
    }
  },
  // shadows: Array(25).fill("none"),
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
    }
  }
}

const lightPalette: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "hsl(145, 82.2%, 19.8%)",
      contrastText: "#fff"
    },
    secondary: {
      main: "#fff",
      contrastText: "#000"
    },
    info: {
      main: "hsl(0, 0%, 40%)"
    },
    common: {
      white: "#fff",
      black: "#020202"
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
      main: "hsl(145, 72.2%, 35%)",
      contrastText: "#fff"
    },
    info: {
      main: "hsl(0, 0%, 70%)"
    },
    secondary: {
      main: "#fff",
      contrastText: "#000"
    },
    common: {
      white: "#fff",
      black: "#020202"
    },
    background: {
      paper: "hsl(145, 70%, 10%)",
      default: "hsl(145, 40%, 5%)"
    }
  }
}

const darkTheme = createTheme(deepmerge(themeBase, darkPalette))
const lightTheme = createTheme(deepmerge(themeBase, lightPalette))

export { darkTheme, lightTheme }
