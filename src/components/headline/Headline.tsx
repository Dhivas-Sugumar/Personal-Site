import { useMediaQuery } from "@mui/material";
import React from "react";
import { max } from "../../../lib/breakpoints";
import TextLoop from "../animation-components/TextLoop/TextLoop";
import { HeadlineContainer, HeadlineText } from "./Headline.styles";


const Headline : React.FC = () => {
    const isMobileVersion = useMediaQuery(max.tablet)

    if (isMobileVersion) {
        return null;
    }
    return (
        <HeadlineContainer id="intro">
            <HeadlineText>
                <TextLoop texts={
                    ["SOFTWARE DEVELOPER",
                     "STUDENT",
                     "DESIGNER",
                     "READER",
                     "SPACE ENTHUSIAST",
                     "AURORA CHASER",
                     "TRAVELLER",
                     "PLANT DAD", 
                     "PHILOSOPHY ENTHUSIAST" 
                    ]
                    } 
                />
            </HeadlineText>
        </HeadlineContainer>
    )
}

export default Headline