import styled from "@emotion/styled";
import { Divider } from "@mui/material";
import { H4, P } from "../../styles/styles";

const ResumeItemContainer = styled.div`
    padding: 5em 4em;
`

const ResumeItemTitle= styled(H4)`
    font-size: 1.5em;
    font-weight: bold;
`

const ResumeItemLocation = styled(P)`
    font-size: 1.2em;
`

const ResumeItemDivider = styled(Divider)`
    margin-top: 3em;
`

export {ResumeItemContainer, ResumeItemTitle, ResumeItemLocation,
    ResumeItemDivider}