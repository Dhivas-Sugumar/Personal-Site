import React from "react";
import ContactMeForm from "./ContactMeForm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { H1} from "../../styles/styles";
import ContactMeLink from "./ContactMeLink";
import { useMediaQuery } from "@mui/material";
import { ContactMeContainer, ContactMeContentContainer, StyledContactMeLinksContainer } from "./ContactMe.styles";
import { max } from "../../../lib/breakpoints";
 
const ContactMe : React.FC = () => {
  const isMobileVersion = useMediaQuery(max.tablet)

    return (
      <ContactMeContainer>
          <H1>Contact Me</H1>
          <ContactMeContentContainer>
          {!isMobileVersion && <StyledContactMeLinksContainer>
            <ContactMeLink
            brand="Github"
            link="https://github.com/Dhivas-Sugumar"
            icon={<FontAwesomeIcon icon={["fab", "github"]} size={"3x"}/>}
            />
            <ContactMeLink
            brand="LinkedIn"
            link="https://www.linkedin.com/in/dhivas-sugumar/"
            icon={<FontAwesomeIcon icon={["fab", "linkedin"]} size={"3x"}/>}
            />
              </StyledContactMeLinksContainer> }
    <ContactMeForm/>
    {isMobileVersion && <StyledContactMeLinksContainer>
            <ContactMeLink
            brand="Github"
            link="https://github.com/Dhivas-Sugumar"
            icon={<FontAwesomeIcon icon={["fab", "github"]} size={"3x"}/>}
            />
            <ContactMeLink
            brand="LinkedIn"
            link="https://www.linkedin.com/in/dhivas-sugumar/"
            icon={<FontAwesomeIcon icon={["fab", "linkedin"]} size={"3x"}/>}
            />
              </StyledContactMeLinksContainer> }
          </ContactMeContentContainer>

    
      </ContactMeContainer>

    )
}

export default ContactMe