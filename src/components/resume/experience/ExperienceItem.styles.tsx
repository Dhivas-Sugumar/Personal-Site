import styled from "@emotion/styled";
import { H4, P } from "../../../styles/styles";

const ExperienceItemContainer = styled.div`
    padding: 5em 4em;
    border-bottom: 0.1em solid black;
`

const ExperienceItemTitle= styled(H4)`
    font-size: 1.5em;
    font-weight: bold;
`

const ExperienceItemLocation = styled(P)`
    font-size: 1.2em;
`

export {ExperienceItemContainer, ExperienceItemTitle, ExperienceItemLocation}