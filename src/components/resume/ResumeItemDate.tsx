import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { max } from "../../../lib/breakpoints";
import { ResumeItemDateProps } from "../../../lib/types";
import { P } from "../../styles/styles";
import { DateContainer, DateText } from "./ResumeItemDate.styles";

const ResumeItemDate : React.FC<ResumeItemDateProps> = ({
    start,
    end
}) => {
    const isMobileVersion = useMediaQuery(max.tablet)
  

        if(isMobileVersion) {
            return(<DateContainer>
                {start}-{end}
            </DateContainer>)
        }
        else {
            return(<DateContainer>
            <DateText>{start}</DateText>
            <DateText>-</DateText>
            <DateText>{end}</DateText>

        </DateContainer>)
        }

}

export default ResumeItemDate