import { Grid } from "@mui/material";
import React from "react";
import { ExperienceItemProps } from "../../../../lib/types";
import { DateContainer, H4, P } from "../../../styles/styles";
import ResumeItemDate from "../ResumeItemDate";
import { ExperienceItemContainer, ExperienceItemLocation, ExperienceItemTitle } from "./ExperienceItem.styles";

const ExperienceItem : React.FC<ExperienceItemProps> = (
    {
      company,
      location,
      title,
      startDate,
      endDate,
      description  
    }
) => {
    return(
        <ExperienceItemContainer>
<Grid container spacing={2}>
        <Grid item xs={10}>
            <Grid item xs={12}>
                <ExperienceItemTitle>
                {title}

                </ExperienceItemTitle>
            </Grid>
            <Grid item xs={12}>
                <ExperienceItemLocation>
                {company} | {location}

                </ExperienceItemLocation>
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
                <ResumeItemDate start={startDate} end={endDate} />
        </Grid>

    </Grid>
        </ExperienceItemContainer>
        
    )
}

export default ExperienceItem