import { Button, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import { Send } from "react-feather";
import { RoundedBorderContainer } from "../../styles/styles";

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
    <RoundedBorderContainer>
      <form onSubmit={handleSubmit}>
      <div>
        <FormLabel>
          Name
        </FormLabel>
        <TextField
          type="text"
          required
          onChange={e => setName(e.target.value)}
        />

        <FormLabel>
          Email
        </FormLabel>
        <TextField
          type="text"
          required
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <FormLabel>
          Message
        </FormLabel>
        <TextField
          type="text"
          placeholder="What's on your mind?"
          required
          onChange={e => setMessage(e.target.value)}
        />
      </div>
      <div>
                <Button variant="contained" endIcon={<Send />}>
          Send
        </Button>  
      </div>
    </form>
    </RoundedBorderContainer>
    
  )
}

export default ContactMeForm