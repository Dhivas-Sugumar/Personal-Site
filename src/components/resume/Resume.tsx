import React from "react";
import { H1 } from "../../styles/styles";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import { StyledResumeContainer } from "./Resume.styles";
import Skills from "./skills/Skills";

const Resume : React.FC = () => {
    return (
        <StyledResumeContainer id="resume">
        <H1>Resume</H1>
        <Education />
        <Experience/>
        <Skills/>
        </StyledResumeContainer>
    )
}

export default Resume