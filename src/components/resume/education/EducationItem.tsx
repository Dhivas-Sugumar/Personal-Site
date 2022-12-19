import { Grid } from "@mui/material";
import React from "react";
import { EducationItemProps } from "../../../../lib/types";
import { H4, P } from "../../../styles/styles";

const EducationItem: React.FC<EducationItemProps> = (
    {
        name,
        location,
        level,
        dates,
        degrees,
        acheivements,
        activities
    }
) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={10}>
                <Grid item xs={12}>
                    <H4>
                        {name} {location}
                    </H4>
                </Grid>
                <Grid item xs={12}>
                    <P>
                        {level}
                    </P>
                </Grid>
                <Grid item xs={12}>
                    <P>
                        {degrees}
                    </P>
                </Grid>
                <Grid item xs={12}>
                    <P>
                        Achievements: {acheivements}
                    </P>                 
                </Grid>
                <Grid item xs={12}>
                    <P>
                         {activities && `Activities: ${activities}`  }
                    </P>                     
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <P>{dates}</P>
            </Grid>

        </Grid>
    )
}

export default EducationItem