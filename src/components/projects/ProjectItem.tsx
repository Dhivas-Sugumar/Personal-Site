import { Divider, Grid, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import React from "react"
import Image from "next/image"
import { ProjectItemProps } from "../../../lib/types"
import { H3, H4, P } from "../../styles/styles"
import ResumeItemDate from "../resume/ResumeItemDate"
import { StyledProjectItemCard, StyledProjectItemContent, StyledProjectItemDate, StyledProjectItemImage, StyledProjectItemTechnologiesContainer, StyledProjectItemText, StyledProjectItemTitle, TechnologiesContainer } from "./ProjectItem.styles"
import bullet from "../../assets/bullet.png"
const ProjectItem: React.FC<ProjectItemProps> = (
    {
        title, 
        image,
        startDate,
        endDate, 
        description,
        technologies
    }
) => {
    return (
        <StyledProjectItemCard>
            <StyledProjectItemImage>
            {image}
            </StyledProjectItemImage>
            <StyledProjectItemContent>
            <StyledProjectItemTitle>
                {title}
            </StyledProjectItemTitle>
            <List>
            {description.map((item, index) => {
                return (
                    <>
                    <ListItem key={index}>
                    <ListItemIcon>
                <Image src={bullet} alt={">"} width={20} height={20}/>
              </ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItem>
                    </>

                )
                
})}
            </List>
            <TechnologiesContainer>
            <H4>Technologies Used</H4>
                <StyledProjectItemTechnologiesContainer>
                    {technologies.map((technology) => {return technology})}
                </StyledProjectItemTechnologiesContainer>
            </TechnologiesContainer>
            </StyledProjectItemContent>
            <StyledProjectItemDate>
            <ResumeItemDate start={startDate} end={endDate} />
            </StyledProjectItemDate>
        </StyledProjectItemCard>
        
    )
}

export default ProjectItem