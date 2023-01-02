import React from "react";
import TextLoop from "../animation-components/TextLoop/TextLoop";
import { HeadlineContainer, HeadlineText } from "./Headline.styles";


const Headline : React.FC = () => {
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