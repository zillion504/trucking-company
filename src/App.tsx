import { Box } from "@mui/material"
import DarkLightThemeProvider from "components/DarkLightThemeProvider"
import Footer from "components/Footer"
import NavigationBar from "components/NavigationBar"
import Homepage from "pages/Homepage"
import { type FC } from "react"
import { Provider } from "react-redux"
import { store } from "store"

const App: FC = () => {
  return (
    <Provider store={store}>
      <DarkLightThemeProvider>
        <NavigationBar/>
        <Box
          sx={{
            width: "100%"
          }}
        >
          <Homepage/>
        </Box>
        <Footer/>
      </DarkLightThemeProvider>
    </Provider>
  )
}

export default App
