import { Link } from "@mui/material";
import React from "react";
import { ContactMeLinkProps } from "../../../lib/types";

const ContactMeLink : React.FC<ContactMeLinkProps> = ( {brand, link , icon} ) => {
    return (
        <div>
            {brand}
            <Link
                href={link}
                target="_blank"

            >
                {icon}
            </Link>
        </div>
    )
}

export default ContactMeLink