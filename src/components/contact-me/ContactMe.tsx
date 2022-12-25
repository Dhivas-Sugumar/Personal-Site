import React from "react";
import ContactMeForm from "./ContactMeForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { H3 } from "../../styles/styles";
import ContactMeLink from "./ContactMeLink";
import { Grid } from "@mui/material";
 
const ContactMe : React.FC = () => {
    return (
        <Grid container spacing={2} id="contact">
  <Grid item xs={4}>
    <div>
            <ContactMeLink
            brand="github"
            link="https://github.com/Dhivas-Sugumar"
            icon={<FontAwesomeIcon icon={["fab", "github"]}/>}
            />
            <ContactMeLink
            brand="LinkedIn"
            link="https://github.com/Dhivas-Sugumar"
            icon={<FontAwesomeIcon icon={["fab", "linkedin"]}/>}
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