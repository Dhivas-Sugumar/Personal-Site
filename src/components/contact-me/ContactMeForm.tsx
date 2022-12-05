import React, { useState } from "react";
 
const ContactMeForm : React.FC = () => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [messgae , setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
        setSendInProgress(true);
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
              setMessageCallout("📧 Message Failed to Send! 😵");
              setHsla("hsla(10, 50%, 50%, .10)");
            }
    
            setSendInProgress(false);
            setMessageSent(true);
          })
          .catch((err) => {
            console.log(err);
            setMessageCallout("📧 Message Failed to Send! 😵");
            setHsla("hsla(10, 50%, 50%, .10)");
            setSendInProgress(false);
            setMessageSent(true);
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
              onChange={() => setName(event.target.value)}
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
              onChange={() => setEmail(event.target.value)}
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
              onChange={() => setMessage(event.target.value)}
            />
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
    )
}

export default ContactMeForm