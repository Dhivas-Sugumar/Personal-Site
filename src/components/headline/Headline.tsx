import React from "react";
import TextLoop from "../animation-components/TextLoop/TextLoop";
import { HeadlineText } from "./Headline.styles";


const Headline : React.FC = () => {
    return (
        <div id="intro">
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
        </div>
    )
}

export default Headline