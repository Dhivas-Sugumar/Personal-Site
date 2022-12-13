import { FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";
 
const ContactMeForm : React.FC = () => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [message , setMessage] = useState('');

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
      
<form onSubmit={handleSubmit}>
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
<FormLabel>
  Message
  </FormLabel>    
  <TextField
              type="text"
              placeholder="What's on your mind?"
              required
              onChange={e => setMessage(e.target.value)}
            />       
          <input type="submit" value="Submit" />
        </form>
    )
}

export default ContactMeForm