import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { StyledSkillsHeading } from "../resume/skills/Skills.styles";

const StyledContactMeForm = styled.div`
display: flex;
flex-direction: column;
align-content: center;
width: 85%;
height: 35em;
border-radius: 2em;
border: 0.0.5em solid black;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`
const StyledContactMeFormInputContainer = styled.div`
    margin: 2em 2em;
    display: flex;
    flex-direction: row;
`

const StyledContactMeFormInput = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;

    padding: 0.5em 3em;
`

const StyledContactMeFormMessageInput = styled.div`
display: block;
margin: 2em 5em;
width: 95%;

`

const StyledContactMeFormMessageField = styled(TextField)`
width: 75%
height: 10em;
`

export {StyledContactMeForm, StyledContactMeFormInputContainer,
    StyledContactMeFormInput, StyledContactMeFormMessageInput,
    StyledContactMeFormMessageField
}