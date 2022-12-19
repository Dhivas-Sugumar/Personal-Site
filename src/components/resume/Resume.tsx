import React from "react";
import { H1 } from "../../styles/styles";
import Education from "./education/Education";
import Experience from "./experience/Experience";

const Resume : React.FC = () => {
    return (
        <>
        <H1>Resume</H1>
        <Education />
        <Experience/>
        </>
    )
}

export default Resume