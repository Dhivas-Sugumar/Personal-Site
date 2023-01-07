import { Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import { max } from "../../../lib/breakpoints";
import Me from "../../assets/me.jpg"
import { H1, H2 } from "../../styles/styles";
import { AboutMeContainer, AboutMeContentContainer, AboutMeText } from "./AboutMe.styles";

const AboutMe : React.FC = () => {
    const isMobileVersion = useMediaQuery(max.tablet)

    return (
        <AboutMeContainer>
        <H1>About Me</H1>
        <AboutMeContentContainer>
        <AboutMeText>
            {`Hi I'm Dhivas, a computer science
            student at Northeastern university and software developer based in Boston.
            Currently coding at Hackbeanpot and teaching at Northeastern University.`}
        </AboutMeText>
            <Image src={Me} width={400} height={500} alt={"Picture of Dhivas"}/>
        </AboutMeContentContainer>
        </AboutMeContainer>


    )
}

export default AboutMe