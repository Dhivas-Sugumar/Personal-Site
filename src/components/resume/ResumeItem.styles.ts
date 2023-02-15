import styled from "@emotion/styled";
import { Divider } from "@mui/material";
import { H4, P } from "../../styles/styles";

const ResumeItemContainer = styled.div`
    padding: 2em 4em;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const ResumeItemContentContainer = styled.div`
    width: 87.5%;
`

const ResumeItemDateContainer = styled.div`
    align-self: flex-end;
`

const ResumeItemTitle= styled(H4)`
    font-size: 1.5em;
    font-weight: bold;
`

const ResumeItemLocation = styled(P)`
    font-size: 1.2em;
`

const ResumeItemDivider = styled(Divider)`
    margin: 1em 0;
    background-color: #000000
`

export {ResumeItemContainer, ResumeItemTitle, ResumeItemLocation,
    ResumeItemDivider, ResumeItemContentContainer, 
    ResumeItemDateContainer
}