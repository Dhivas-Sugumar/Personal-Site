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
            {`Hiya I am Dhivas, a computer science
            student at Northeastern university and software developer based in Boston.
            I am currently coding as a full stack web developer for Hackbeanpot, Inc - a boston based hackathon.
            I am particularly interested in Mobile App development, cloud computing, and the use of machine learning to 
            percieve and understand human emotion. Outside of school and work I love to hike and travel, read philosophy, and window shop for my next house plant.
            I would love to connect and chat on any opportunity!`}
        </AboutMeText>
            <Image src={Me} width={400} height={500} alt={"Picture of Dhivas"}/>
        </AboutMeContentContainer>
        </AboutMeContainer>


    )
}

export default AboutMe