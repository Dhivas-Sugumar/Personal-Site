import { Link } from "@mui/material";
import React from "react";
import { ContactMeLinkProps } from "../../../lib/types";

const ContactMeLink : React.FC<ContactMeLinkProps> = ( {brand, link , icon} ) => {
    return (
        <div>
            <Link
                href={link}
                target="_blank"

            >
                {brand}
                {icon}
            </Link>
        </div>
    )
}

export default ContactMeLink