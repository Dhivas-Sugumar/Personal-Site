import React from "react";
import ContactMeForm from "./ContactMeForm";
import { GitHub, Linkedin  } from "react-feather";
import { H3 } from "../../styles/styles";
import ContactMeLink from "./ContactMeLink";
import { Grid } from "@mui/material";
 
const ContactMe : React.FC = () => {
    return (
        <Grid container spacing={2}>
  <Grid item xs={4}>
    <div>
            <ContactMeLink
            brand="github"
            link="https://github.com/Dhivas-Sugumar"
            icon={<GitHub/>}
            />
            <ContactMeLink
            brand="LinkedIn"
            link="https://github.com/Dhivas-Sugumar"
            icon={<Linkedin/>}
            />
            </div>
  </Grid>
  <Grid item xs={8}>
    <ContactMeForm/>
  </Grid>
</Grid>
    )
}

export default ContactMe