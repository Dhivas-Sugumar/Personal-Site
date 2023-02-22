import styled from "@emotion/styled";
import { max } from "../../../lib/breakpoints";

const AboutMeText = styled.h5`
    font-size: 2em
`

const AboutMeContainer = styled.div`
    margin: 5em 4em;
    @media ${max.tablet} {
        margin: 1em 4em 5em; 
    }
`

const AboutMeContentContainer = styled.div`
    display: flex; 
    flex-direction: row;
    @media ${max.tablet} {
        flex-direction: column;
    }
`

export {AboutMeText, AboutMeContainer, AboutMeContentContainer}