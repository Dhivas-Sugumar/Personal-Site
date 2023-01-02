import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import { StyledSkillsHeading } from "../resume/skills/Skills.styles";

const StyledContactMeForm = styled.div`
display: flex;
flex-direction: column;
align-content: center;
width: 85%;
height: 37.5em;
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

const StyledContactMeFormHeading = styled.div`
    margin-top: 1.5em;
    text-align: center;
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

const StyledContactMeFormButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

const StyledContactMeFormButton = styled(Button)`
    margin-right: 6em;
    padding-right: 2em;
    color: #000000;
`

export {StyledContactMeForm, StyledContactMeFormInputContainer,
    StyledContactMeFormInput, StyledContactMeFormMessageInput,
    StyledContactMeFormMessageField, StyledContactMeFormHeading,
    StyledContactMeFormButtonContainer, StyledContactMeFormButton
}