import { Grid } from "@mui/material";
import React from "react";
import { EducationItemProps } from "../../../../lib/types";
import { H4, P } from "../../../styles/styles";
import { ResumeItemContainer, ResumeItemLocation, ResumeItemTitle } from "../ResumeItem.styles";
import ResumeItemDate from "../ResumeItemDate";

const EducationItem: React.FC<EducationItemProps> = (
    {
        school,
        location,
        level,
        startDate,
        endDate,
        degrees,
        acheivements,

        activities
    }
) => {
    return (
        <ResumeItemContainer>
                    <Grid container spacing={2}>
            <Grid item xs={10}>
                <Grid item xs={12}>
                    <ResumeItemTitle>
                    {level}
                    </ResumeItemTitle>
                </Grid>
                <Grid item xs={12}>
                    <ResumeItemLocation>
                    {school} | {location}
                    </ResumeItemLocation>
                </Grid>
                <Grid item xs={12} className={"mt-4"}>
                    <P>
                        {degrees}
                    </P>
                </Grid>
                <Grid item xs={12} className={"mt-0.5"}>
                    <P>
                        Achievements: {acheivements}
                    </P>                 
                </Grid>
                <Grid item xs={12} className={"mt-0.5"}>
                    <P>
                         {activities && `Activities: ${activities}`  }
                    </P>                     
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <ResumeItemDate start={startDate} end={endDate} />
            </Grid>

        </Grid>
        </ResumeItemContainer>

    )
}

export default EducationItem