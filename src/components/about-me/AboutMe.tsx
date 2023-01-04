import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import Me from "../../assets/me.jpg"
import { H1, H2 } from "../../styles/styles";
import { AboutMeContainer, AboutMeText } from "./AboutMe.styles";

const AboutMe : React.FC = () => {
    return (
        <AboutMeContainer>
        <H1>About Me</H1>

        <Grid container spacing={2}>
            <Grid item xs={9}>
            <AboutMeText>
            {`Hi I'm Dhivas, a computer science
            student at Northeastern university and software developer based in Boston.
            Currently coding at Hackbeanpot and teaching at Northeastern University.`}
        </AboutMeText>
            </Grid>
            <Grid item xs={3}>
            <Image src={Me} width={400} height={500} alt={"Picture of Dhivas"}/>

            </Grid>

        </Grid>
        </AboutMeContainer>


    )
}

export default AboutMe