import { GitHub } from "@mui/icons-material"
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material"
import { type FC } from "react"

const Footer: FC = () => {
  return <Box
    sx={{
      backgroundColor: theme => theme.palette.primary.main,
      color: theme => theme.palette.primary.contrastText,
      minHeight: "200px"
    }}
  >
    <Container
      sx={{
        py: 2
      }}
    >
      <Grid container>
        <Grid item xs={4}>
          <Stack spacing={1}>
            <Typography
              variant="h3"
            >
              Not A Real Company
            </Typography>
            <Typography variant="body1">
              This page is a part of a portfolio project
            </Typography>
            <Typography variant="body1">
              By Braden Godley
            </Typography>
            <Button
              endIcon={
                <GitHub/>
              }
              variant="contained"
              color="secondary"
            >
              GitHub
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  </Box>
}

export default Footer
