import { type FC, type ReactNode } from "react"
import { Box, Container, Typography } from "@mui/material"

interface HeroPageProps {
  header: string
  subtitle: string
  button?: ReactNode
  image: string
  alignment: "left" | "right"
  colorFilter?: string
}

const HeroPage: FC<HeroPageProps> = ({ header, subtitle, button, image, alignment = "left", colorFilter = "blue" }) => {
  return <Box
    sx={{
      minHeight: "500px",
      maxWidth: "100%",
      width: "100%",
      aspectRatio: "2.2 / 1",
      position: "relative"
    }}
  >
    <Box sx={{
      width: "100%",
      height: "100%",
      backgroundImage: theme => `linear-gradient(
        to bottom,
        rgba(0,0,0,.3) 0%, 
        ${theme.palette.common.black} 100%), 
        url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      backgroundPosition: "center"
    }}>
    </Box>
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0
      }}
    >
      <Container maxWidth="md" sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: alignment === "left" ? "flex-start" : "flex-end",
        textAlign: alignment
      }}>
        <Box
          maxWidth="80%"
          sx={{
            height: "40%"
          }}
        >
          <Typography variant="h1" color="white">
            {header}
          </Typography>
          <Typography color="white" variant="subtitle1">
            {subtitle}
          </Typography>
          <Box
            mt={2}
          >
            {button}
          </Box>
        </Box>
      </Container>
    </Box>
  </Box>
}

export default HeroPage
