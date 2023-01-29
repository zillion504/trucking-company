import { Box, type BoxProps } from "@mui/material"
import { type PropsWithChildren, type FC } from "react"

interface ThreeColorDividerProps {
  reverse?: boolean
}

const ThreeColorDivider: FC<ThreeColorDividerProps> = ({ reverse = false }) => {
  if (!reverse) {
    return <Box>
      <Box
        sx={{
          width: "100%",
          height: "25px",
          background: theme => `linear-gradient(
            to right, 
            ${theme.palette.background.default}, 
            ${theme.palette.background.default} 50%, 
            ${theme.palette.secondary.main} 50%, 
            ${theme.palette.secondary.main} 100% 
          )`,
          position: "relative"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "33%",
            top: 0,
            width: "33%",
            height: "100%",
            backgroundColor: theme => theme.palette.primary.main,
            clipPath: "polygon(2% 0, 100% 0, 98% 100%, 0% 100%)"
          }}
        />
      </Box>
      <Box 
        sx={{
          width: "100%",
          height: "5px",
          backgroundColor: theme => theme.palette.primary.main
        }}
      />
    </Box>
  } else {
    return <Box>
      <Box 
        sx={{
          width: "100%",
          height: "5px",
          backgroundColor: theme => theme.palette.primary.main
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: "25px",
          background: theme => `linear-gradient(
            to right, 
            ${theme.palette.primary.main}, 
            ${theme.palette.primary.main} 50%, 
            ${theme.palette.background.default} 50%, 
            ${theme.palette.background.default} 100% 
          )`,
          position: "relative"
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "33%",
            top: 0,
            width: "33%",
            height: "100%",
            backgroundColor: theme => theme.palette.secondary.main,
            clipPath: "polygon(0 0, 98% 0, 100% 100%, 02% 100%)"
          }}
        />
      </Box>
      
    </Box>
  }
}

export default ThreeColorDivider
