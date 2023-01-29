import { Box } from "@mui/material"
import DarkLightThemeProvider from "components/DarkLightThemeProvider"
import Footer from "components/Footer"
import NavigationBar from "components/NavigationBar"
import Homepage from "pages/Homepage"
import { type FC } from "react"

const App: FC = () => {
  return (
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
  )
}

export default App
