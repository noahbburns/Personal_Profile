import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import sendIcon from "../assets/send.svg";

const Contact = () => {
  const form = useRef();
  const [emailsSent, setEmailsSent] = useState(0);
  const [isLimitReached, setIsLimitReached] = useState(false);

  useEffect(() => {
    const storedCount = localStorage.getItem('emailsSent');
    if (storedCount) {
      setEmailsSent(parseInt(storedCount));
      setIsLimitReached(parseInt(storedCount) >= 2);
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (emailsSent >= 2) {
      setIsLimitReached(true);
      return;
    }

    emailjs
      .sendForm(
        "service_qwec9af",
        "template_k20h0sr",
        form.current,
        "5CTcsliWI6CMJMBwO"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          const newCount = emailsSent + 1;
          setEmailsSent(newCount);
          localStorage.setItem('emailsSent', newCount.toString());
          if (newCount >= 2) {
            setIsLimitReached(true);
          }
          // Reset form fields
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <h3 className="contact-title">Contact Me</h3>
      <div className="contact-pair">
        <p className="contact-text">Contact me directly by email</p>
        <NavLink className="contact-email">n14burns@gmail.com</NavLink>
      </div>
      <br />
      <p className="contact-text">or by using this form.</p>
      <form ref={form} onSubmit={sendEmail}>
        <input placeholder="Your Name" type="text" name="from_name" required />
        <input placeholder="Your Email" type="email" name="user_email" required />
        <textarea placeholder="Type your message here." name="message" required />
        <input 
          type="submit" 
          className="submit" 
          value={isLimitReached ? "Email limit reached" : "Send"} 
          disabled={isLimitReached}
        />
      </form>
      {isLimitReached && (
        <p className="limit-message">You've reached the email limit for this session. Please try again later or use the email address provided above.</p>
      )}
    </div>
  );
};

export default Contact;