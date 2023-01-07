import { Divider, Grid, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material"
import React from "react"
import Image from "next/image"
import { ProjectItemProps } from "../../../lib/types"
import { H3, H4, P } from "../../styles/styles"
import ResumeItemDate from "../resume/ResumeItemDate"
import { StyledProjectItemCard, StyledProjectItemContent, StyledProjectItemDate, StyledProjectItemImage, StyledProjectItemTechnologiesContainer, StyledProjectItemTextContainer, StyledProjectItemTitle, TechnologiesContainer } from "./ProjectItem.styles"
import bullet from "../../assets/bullet.png"
import { max } from "../../../lib/breakpoints"
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
    const isMobileVersion = useMediaQuery(max.tablet)

    return (
        <StyledProjectItemCard>
            {!isMobileVersion && <StyledProjectItemImage>
            {image}
            </StyledProjectItemImage> }
            <StyledProjectItemContent>
            <StyledProjectItemTitle>
                {title}
            </StyledProjectItemTitle>
            {isMobileVersion && <ResumeItemDate start={startDate} end={endDate} />}
            <StyledProjectItemTextContainer>
            <List>
            {description.map((item, index) => {
                return (
                    <>
                    <ListItem key={index}>
                    {!isMobileVersion && <ListItemIcon>
                <Image src={bullet} alt={">"} width={20} height={20}/>
              </ListItemIcon>}
                        <ListItemText primary={item} />
                    </ListItem>
                    </>

                )
                
})}
            </List>
            </StyledProjectItemTextContainer>

            <TechnologiesContainer>
            <H4>Technologies Used</H4>
                <StyledProjectItemTechnologiesContainer>
                    {technologies.map((technology) => {return technology})}
                </StyledProjectItemTechnologiesContainer>
            </TechnologiesContainer>
            </StyledProjectItemContent>
            <StyledProjectItemDate>
            {!isMobileVersion && <ResumeItemDate start={startDate} end={endDate} />}
            </StyledProjectItemDate>
        </StyledProjectItemCard>
        
    )
}

export default ProjectItem