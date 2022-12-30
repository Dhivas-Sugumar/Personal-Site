import styled from "@emotion/styled";

const StyledProjectItemCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 35em;

    border-radius: 2em;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const StyledProjectItemImage = styled.div`
    padding: 2em 2em;
`

const StyledProjectItemTitle = styled.div`
    font-size: 5em;
`

const StyledProjectItemContent = styled.div`
    padding: 2em 2em;
    width: 50%

`

const TechnologiesContainer = styled.div`
    padding: 1.5em 0em
`

const StyledProjectItemTechnologiesContainer = styled.div`
    display: flex;
    flex-direction: row;
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