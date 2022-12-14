import React from "react";
import ContactMeForm from "./ContactMeForm";
import { GitHub, Linkedin  } from "react-feather";
import { H3 } from "../../styles/styles";
import ContactMeLink from "./ContactMeLink";
 
const ContactMe : React.FC = () => {
    return (
        <div>
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

            <ContactMeForm/>
        </div>
    )
}

export default ContactMe