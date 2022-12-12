import { Link } from "@mui/material";
import Image from "next/image";
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
                <Image 
                src={icon} 
                alt={`${brand} logo`}
                />
            </Link>
        </div>
    )
}

export default ContactMeLink