import { Divider, Grid } from "@mui/material";
import React from "react";
import { ExperienceItemProps } from "../../../../lib/types";
import { ResumeItemContainer, ResumeItemDivider, ResumeItemLocation, ResumeItemTitle } from "../ResumeItem.styles";
import ResumeItemDate from "../ResumeItemDate";

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
        <ResumeItemContainer>
<Grid container spacing={2}>
        <Grid item xs={10}>
            <Grid item xs={12}>
                <ResumeItemTitle>
                {title}

                </ResumeItemTitle>
            </Grid>
            <Grid item xs={12}>
                <ResumeItemLocation>
                {company} | {location}

                </ResumeItemLocation>
            </Grid>
            <Grid item xs={12} className="mt-6">
                <ul>
                    {description.map(
                        (item, index) => {
                            return <li key={index}>{item}</li>
                        }
                    )}
                </ul>
            </Grid>
        </Grid>
        <Grid item xs={2}>
                <ResumeItemDate start={startDate} end={endDate} />
        </Grid>

    </Grid>
    <ResumeItemDivider/>
        </ResumeItemContainer>
        
    )
}

export default ExperienceItem