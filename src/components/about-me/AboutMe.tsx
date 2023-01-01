import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import Me from "../../assets/me.jpg"
import { AboutMeContainer, AboutMeText } from "./AboutMe.styles";

const AboutMe : React.FC = () => {
    return (
        <AboutMeContainer>
        <Grid container spacing={2}>
            <Grid item xs={8}>
            <AboutMeText>
            Hi I'm Dhivas, a computer science
            student at Northeastern university and software developer based in Boston.
            Currently coding at Clora.
        </AboutMeText>
            </Grid>
            <Grid item xs={4}>
            <Image src={Me} width={400} height={500} alt={"Picture of Dhivas"}/>

            </Grid>

        </Grid>
        </AboutMeContainer>


    )
}

export default AboutMe