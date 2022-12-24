import React from "react";
import { H1 } from "../../styles/styles";
import TextLoop from "../animation-components/TextLoop/TextLoop";


const Headline : React.FC = () => {
    return (
        <div id="intro">
            <H1>
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
            </H1>
        </div>
    )
}

export default Headline