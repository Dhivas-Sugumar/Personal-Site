import { Link } from "@mui/material";
import React from "react";
import { ContactMeLinkProps } from "../../../lib/types";
import ContactMe from "./ContactMe";
import { ContactMeLinkText, StyledContactMeLinkContainer } from "./ContactMeLink.styles";

const ContactMeLink : React.FC<ContactMeLinkProps> = ( {brand, link , icon} ) => {
    return (
            <Link
                href={link}
                target="_blank"
                underline={"none"}

            >
                        <StyledContactMeLinkContainer  whileHover={{ scale: 1.1 }}>

                <ContactMeLinkText>
                {brand}
                </ContactMeLinkText>
                {icon}
                </StyledContactMeLinkContainer>

            </Link>
    )
}

export default ContactMeLink