import styled from "@emotion/styled";
import { H3 } from "../../styles/styles";

const StyledHeaderContainer = styled.header`
    padding: 4em 4em;
    position: -webkit-sticky;
    position: sticky;
    top: -5px;
`
const HeaderName = styled(H3)`
    float: left
`
const HeaderLoop = styled.div`
  display: flex;
  justify-content: center;

`

const HeaderLoopText = styled(H3)`
    margin-right: 20em;
`
const StyledHeaderNotesContainer = styled.div`
float: right;
`



export {StyledHeaderContainer, HeaderName, 
    HeaderLoop, HeaderLoopText, StyledHeaderNotesContainer}