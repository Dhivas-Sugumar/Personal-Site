import { Button, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { Send } from "react-feather";
import { H3, H4 } from "../../styles/styles";
import { StyledContactMeForm, StyledContactMeFormButton, StyledContactMeFormButtonContainer, StyledContactMeFormHeading, StyledContactMeFormInput, StyledContactMeFormInputContainer, StyledContactMeFormMessageField, StyledContactMeFormMessageInput } from "./ContactMeForm.styles";

const ContactMeForm: React.FC = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        message: message,
      }),
    })
      .then((res) => {
        if (res.status !== 200) {
          alert("Message send failed!")
        }
        else {
          alert("Message sent successfully!")
        }
      })
      .catch((err) => {
        alert("Message send failed!")

      });
  };


  return (
    <StyledContactMeForm>
      <StyledContactMeFormHeading>
        <H3>Reach Out!</H3>
      </StyledContactMeFormHeading>
            <form onSubmit={handleSubmit}>
        <StyledContactMeFormInputContainer>
          <StyledContactMeFormInput>
            <H4>
            Name
            </H4>

        <TextField
          type="text"
          required
          onChange={e => setName(e.target.value)}
        />
          </StyledContactMeFormInput>

          <StyledContactMeFormInput>

          <H4>
            Email
            </H4>
        <TextField
          type="text"
          required
          onChange={e => setEmail(e.target.value)}
        />
                  </StyledContactMeFormInput>

        </StyledContactMeFormInputContainer>
    <StyledContactMeFormMessageInput>
    <H4>
            {`What's on your mind?`}
            </H4>
        <StyledContactMeFormMessageField
          type="text"
          multiline
          minRows={8}
          required
          style={{width:810}}
          onChange={e => setMessage(e.target.value)}
        />
    </StyledContactMeFormMessageInput>
      
      <StyledContactMeFormButtonContainer>
                <StyledContactMeFormButton variant="outlined" endIcon={<Send/>}>
          Send
        </StyledContactMeFormButton>  
      </StyledContactMeFormButtonContainer>
    </form>  
    </StyledContactMeForm>
  
  )
}

export default ContactMeForm