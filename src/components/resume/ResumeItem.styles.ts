import styled from "@emotion/styled";
import { H4, P } from "../../styles/styles";

const ResumeItemContainer = styled.div`
    padding: 5em 4em;
    border-bottom: 0.1em solid black;
`

const ResumeItemTitle= styled(H4)`
    font-size: 1.5em;
    font-weight: bold;
`

const ResumeItemLocation = styled(P)`
    font-size: 1.2em;
`

export {ResumeItemContainer, ResumeItemTitle, ResumeItemLocation}