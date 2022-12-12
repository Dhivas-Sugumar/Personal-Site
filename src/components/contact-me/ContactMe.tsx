import React from "react";
import ContactMeForm from "./ContactMeForm";
import { H3 } from "../../styles/styles";
import ContactMeLink from "./ContactMeLink";
 
const ContactMe : React.FC = () => {
    return (
        <div>
            <ContactMeLink
            brand="github"
            link="https://github.com/Dhivas-Sugumar"
            icon=""
            />
            <ContactMeForm/>
        </div>
    )
}

export default ContactMe