import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import Me from "../../assets/me.jpg"
import { P } from "../../styles/styles";

const AboutMe : React.FC = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <P>
            Hiya, I am Dhivas, a computer science
            student at Northeastern university and software developer based in Boston.
            Currently coding at Clora.
        </P>
            </Grid>
            <Grid item xs={6}>
            <Image src={Me} alt={"Picture of Dhivas"}/>

            </Grid>

        </Grid>

    )
}

export default AboutMe