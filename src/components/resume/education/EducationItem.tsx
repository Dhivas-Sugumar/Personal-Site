import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery'
import { EducationItemProps } from "../../../../lib/types";
import { H4, P } from "../../../styles/styles";
import { ResumeItemContainer, ResumeItemDivider, ResumeItemLocation, ResumeItemTitle } from "../ResumeItem.styles";
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
                    <ResumeItemTitle>
                    {level}
                    </ResumeItemTitle>
                    <ResumeItemLocation>
                    {school} | {location}
                    </ResumeItemLocation>
                    {isMobileVersion && <ResumeItemDate start={startDate} end={endDate} />}
                    <P>
                        {degrees}
                    </P>
                    <P>
                        Achievements: {acheivements}
                    </P>                 
                    <P>
                         {activities && `Activities: ${activities}`  }
                    </P>                     
                {!isMobileVersion &&<ResumeItemDate start={startDate} end={endDate} />}
        <ResumeItemDivider/>
        </ResumeItemContainer>

    )
}

export default EducationItem