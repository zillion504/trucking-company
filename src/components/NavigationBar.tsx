import { Box, Stack, Typography, Button } from "@mui/material"
import { type FC } from "react"

const NavigationBar: FC = () => {
  return (
    <Box
      sx={{
        height: "100px",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0)"
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          background: theme => `linear-gradient(
            to right, 
            ${theme.palette.background.default}, 
            ${theme.palette.background.default} 50%, 
            ${theme.palette.secondary.main} 50%, 
            ${theme.palette.secondary.main} 100% 
          )`,
          px: 3
        }}
        color="primary"
      >
        <Typography 
          variant="h3" 
          fontWeight={600}
          color="primary"
        >
          ROADRUNNER
          <br/>
          LOGISTICS
        </Typography>
        
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: theme => theme.palette.primary.main,
            color: "#fff",
            height: "100%",
            px: 10,
            clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)"
          }}
        >
          <Stack
            spacing={1}
            direction="row"
          >
            <Button variant="text" color="inherit">
              Services
            </Button>
            <Button variant="text" color="inherit">
              Fleet
            </Button>
            <Button variant="text" color="inherit">
              About
            </Button>
            <Button variant="text" color="inherit">
              Careers
            </Button>
            <Button variant="text" color="inherit">
              Contact
            </Button>
          </Stack>
        </Box>

        <Stack
          spacing={1}
          direction="row"
          sx={{
            color: "#fff"
          }}
        >
          <Button variant="text" color="inherit">
            Customer Portal
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default NavigationBar
