import styled from "@emotion/styled";
import { max } from "../../../lib/breakpoints";

const StyledProjectItemCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 35em;

    border-radius: 2em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 2em 0;

    @media ${max.tablet} {
        flex-direction: column; 
        height: 47.5em;
    }
`

const StyledProjectItemImage = styled.div`
    padding: 2em 2em;
`

const StyledProjectItemTitle = styled.div`
    font-size: 5em;
    @media ${max.tablet} {
        font-size: 4em; 
    }
`

const StyledProjectItemContent = styled.div`
    padding: 2em 2em;
    width: 50%
    @media ${max.tablet} {
        width: 95%; 
    }

`

const TechnologiesContainer = styled.div`
    padding: 1.5em 0em
    media ${max.tablet} {
        width: 95%; 
    }
`

const StyledProjectItemTechnologiesContainer = styled.div`
    display: flex;
    flex-direction: row;
    media ${max.tablet} {
        flex-direction: column;
    }
`

const StyledProjectItemDate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 4em;


`

export { StyledProjectItemCard, StyledProjectItemImage,
     StyledProjectItemContent, StyledProjectItemTechnologiesContainer,
     StyledProjectItemTitle, StyledProjectItemDate, TechnologiesContainer}