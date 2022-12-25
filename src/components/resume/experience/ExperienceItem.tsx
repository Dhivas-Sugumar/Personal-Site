import { Grid } from "@mui/material";
import React from "react";
import { ExperienceItemProps } from "../../../../lib/types";
import { H4, P } from "../../../styles/styles";
import { ExperienceItemContainer } from "./ExperienceItem.styles";

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
        <ExperienceItemContainer>
<Grid container spacing={2}>
        <Grid item xs={10}>
            <Grid item xs={12}>
                <H4>
                {title}

                </H4>
            </Grid>
            <Grid item xs={12}>
                <P>
                {company} | {location}

                </P>
            </Grid>
            <Grid item xs={12} className="mt-6">
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
        </ExperienceItemContainer>
        
    )
}

export default ExperienceItem