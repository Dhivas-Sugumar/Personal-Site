import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery'
import { EducationItemProps } from "../../../../lib/types";
import { H4, P } from "../../../styles/styles";
import { ResumeItemContainer, ResumeItemContentContainer,ResumeItemDateContainer, ResumeItemDivider, ResumeItemLocation, ResumeItemTitle } from "../ResumeItem.styles";
import ResumeItemDate from "../ResumeItemDate";
import {max} from '../../../../lib/breakpoints'

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
    const isMobileVersion = useMediaQuery(max.tablet)
    return (
        <ResumeItemContainer>
            <ResumeItemContentContainer>
            <ResumeItemTitle>
                    {level}
                    </ResumeItemTitle>
                    <ResumeItemLocation>
                    {school} | {location}
                    </ResumeItemLocation>
                    {isMobileVersion && <ResumeItemDate start={startDate} end={endDate} isProject={false} />}
                    <P>
                        {degrees}
                    </P>
                    <P>
                        Achievements: {acheivements}
                    </P>                 
                    <P>
                         {activities && `Activities: ${activities}`  }
                    </P>  
            </ResumeItemContentContainer>
         
        {!isMobileVersion &&
                <ResumeItemDateContainer>
                        <ResumeItemDate start={startDate} end={endDate} isProject={false} />
                </ResumeItemDateContainer>  
        }
        <ResumeItemDivider/>
        </ResumeItemContainer>

    )
}

export default EducationItem