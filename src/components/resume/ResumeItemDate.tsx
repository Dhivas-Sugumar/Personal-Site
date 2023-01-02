import React from "react";
import { ResumeItemDateProps } from "../../../lib/types";
import { DateContainer, DateText } from "./ResumeItemDate.styles";

const ResumeItemDate : React.FC<ResumeItemDateProps> = ({
    start,
    end
}) => {
    return(
        <DateContainer>
            <DateText>{start}</DateText>
            <DateText>-</DateText>
            <DateText>{end}</DateText>

        </DateContainer>
    )
}

export default ResumeItemDate