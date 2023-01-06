import styled from "@emotion/styled";
import { max } from "../../../../lib/breakpoints";

const StyledSkillsRow = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    margin: 2em 0;
    @media (${max.desktop}) {
        flex-direction: column;
    }
`

const StyledSkillsHeading = styled.div`
    display: block;
    text-align: center;
`

export {StyledSkillsRow, StyledSkillsHeading}