import { Grid } from "@mui/material";
import React from "react";
import { ExperienceItemProps } from "../../../../lib/types";
import { H4, P } from "../../../styles/styles";

const ExperienceItem : React.FC<ExperienceItemProps> = (
    {
      company,
      location,
      title,
      dates,
      description  
    }
) => {
    return(
        <Grid container spacing={2}>
        <Grid item xs={10}>
            <Grid item xs={12}>
                <H4>
                    {company} | {location}
                </H4>
            </Grid>
            <Grid item xs={12}>
                <P>
                    {title}
                </P>
            </Grid>
            <Grid item xs={12}>
                <ul>
                    {description.map(
                        (item) => {
                            return <li>{item}</li>
                        }
                    )}
                </ul>
            </Grid>
        </Grid>
        <Grid item xs={2}>
            <P>{dates}</P>
        </Grid>

    </Grid>
    )
}

export default ExperienceItem