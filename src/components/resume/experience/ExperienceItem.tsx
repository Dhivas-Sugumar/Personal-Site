import { Divider, Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { max } from "../../../../lib/breakpoints";
import { ExperienceItemProps } from "../../../../lib/types";
import { ResumeItemContainer, ResumeItemContentContainer, ResumeItemDateContainer, ResumeItemDivider, ResumeItemLocation, ResumeItemTitle } from "../ResumeItem.styles";
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
    const isMobileVersion = useMediaQuery(max.tablet)
    return(
        <ResumeItemContainer>
                <ResumeItemContentContainer>
                <ResumeItemTitle>
                {title}

                </ResumeItemTitle>

                <ResumeItemLocation>
                {company} | {location}

                </ResumeItemLocation>
                {isMobileVersion && <ResumeItemDate start={startDate} end={endDate} isProject={false} />}

                <ul>
                    {description.map(
                        (item, index) => {
                            return <li key={index}>{item}</li>
                        }
                    )}
                </ul>
                </ResumeItemContentContainer>
                {!isMobileVersion &&
                <ResumeItemDateContainer>
                        <ResumeItemDate start={startDate} end={endDate} isProject={false}/>
                </ResumeItemDateContainer>  
        }
    <ResumeItemDivider/>
    </ResumeItemContainer>
        
    )
}

export default ExperienceItem