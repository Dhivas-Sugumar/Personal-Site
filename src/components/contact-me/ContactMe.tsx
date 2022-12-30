import React from "react";
import ContactMeForm from "./ContactMeForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { H1} from "../../styles/styles";
import ContactMeLink from "./ContactMeLink";
import { Grid } from "@mui/material";
 
const ContactMe : React.FC = () => {
    return (
        <Grid container spacing={2} id="contact">
          <Grid item xs={12}>
          <H1>Contact Me!</H1>

          </Grid>
  <Grid item xs={4}>
    <div>
            <ContactMeLink
            brand="Github"
            link="https://github.com/Dhivas-Sugumar"
            icon={<FontAwesomeIcon icon={["fab", "github"]} size={"3x"}/>}
            />
            <ContactMeLink
            brand="LinkedIn"
            link="https://github.com/Dhivas-Sugumar"
            icon={<FontAwesomeIcon icon={["fab", "linkedin"]} size={"3x"}/>}
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