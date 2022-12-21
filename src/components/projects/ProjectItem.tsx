import { Grid } from "@mui/material"
import React from "react"
import { ProjectItemProps } from "../../../lib/types"
import { H3, P } from "../../styles/styles"

const ProjectItem: React.FC<ProjectItemProps> = (
    {
        title, 
        image,
        date, 
        description,
        technologies
    }
) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={4}>
                {image}
            </Grid>
            <Grid item xs={8}>
                <H3>{title}</H3>
                <P>{date}</P>
                <P>{description}</P>
                <div>
                    {technologies.map((technology) => {return technology})}
                </div>
            </Grid>
        </Grid>
    )
}

export default ProjectItem