import { Box, Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { type FC } from "react"
import truckWideImage from "assets/images/wideangletruck.jpg"
import truckImage from "assets/images/truck.jpg"
import HeroPage from "components/HeroPage"
import ThreeColorDivider from "components/ThreeColorDivider"
import { ArrowRight, Agriculture, AcUnit, Warning, Scale, WineBar } from "@mui/icons-material"

const Homepage: FC = () => {
  return (
    <>
      <Box>
        <HeroPage
          image={truckWideImage} 
          header={"Trucking Done Right"} 
          subtitle={"At RoadRunner Logistics, we're committed to providing our customers with the best possible service. Trust us to handle all your transportation needs so you can focus on what you do best - running your business."} 
          alignment={"right"}
        />
      </Box>
      <ThreeColorDivider reverse/>
      <Container
        sx={{
          my: 6
        }}
      >
        <Typography variant="h2" color="primary">
          WHAT WE OFFER
        </Typography>
        <Typography variant="body1" color="initial">
          We offer the following high quality services for a reasonable price:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <AcUnit/>
            </ListItemIcon>
            <ListItemText
              primary="Dry / Refrigerated Van"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Scale/>
            </ListItemIcon>
            <ListItemText
              primary="Flatbed"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Warning/>
            </ListItemIcon>
            <ListItemText
              primary="Hazardous Materials"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Agriculture/>
            </ListItemIcon>
            <ListItemText
              primary="Livestock"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WineBar/>
            </ListItemIcon>
            <ListItemText
              primary="Fragile Goods"
            />
          </ListItem>
        </List>

        <Button variant="contained">
          View Our Services
        </Button>
      </Container>
      <ThreeColorDivider/>
      <HeroPage
        image={truckImage}
        header={"Big Rigs = Big Wins"}
        subtitle={"Are you passionate about trucking? Apply to become one of our drivers today and join the club."}
        alignment="left"
        button={
          <Button
            variant="contained"
            endIcon={<ArrowRight/>}
          >
            Apply Now
          </Button>
        }
      />
      <ThreeColorDivider reverse/>
      <Container
        sx={{
          my: 6
        }}
      >
        <Typography 
          variant="h2" 
          color="primary"
          mb={4}
        >
          OUR MISSION
        </Typography>
        <Grid container spacing={2} mb={3}>
          <Grid item xs={4}>
            <Typography variant="h3" color="primary">
              On-Time Delivery
            </Typography>
            <Typography variant="body1" color="initial">
              RoadRunner&apos;s 99% on-time delivery rate guarantees your cargo arrives on schedule. 
              Trust in our experienced drivers and technology for real-time updates and peace of mind.
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h3" color="primary">
              Cargo Expertise
            </Typography>
            <Typography variant="body1" color="initial">
              Our experienced drivers are equipped to handle all types of cargo, including machinery, hazmat, livestock, fragile goods. 
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h3" color="primary">
              Driver Character
            </Typography>
            <Typography variant="body1" color="initial">
              We maintain impeccable standards for driver safety and character. Our drivers undergo regular safety training and evaluations to ensure the highest standards of safety.
            </Typography>
          </Grid>
        </Grid>
        <Button
          endIcon={<ArrowRight/>}
        >
          Learn more about RoadRunner&apos;s mission
        </Button>
      </Container>
      <ThreeColorDivider/>
    </>
  )
}

export default Homepage
