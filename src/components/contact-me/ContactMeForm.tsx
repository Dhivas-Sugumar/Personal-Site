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
              // toast error
              // reset values
            }
            // toast success
          })
          .catch((err) => {
              // toast error
              // reset values
          });
      };


    return (
<form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              required
              placeholder="bram"
              onChange={e => setName(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Email
            <input
              type="text"
              required
              placeholder="bram@bram.com"
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <br />
          <br />
          <label>
            Message: (required)
            <textarea
              type="text"
              required
              placeholder="What's on your mind?"
              onChange={e => setMessage(e.target.value)}
            />
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
    )
}

export default ContactMeForm