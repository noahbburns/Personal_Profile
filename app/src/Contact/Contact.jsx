import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import sendIcon from "../assets/send.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <h3 className="contact-title">Contact Me</h3>
      <div className="contact-pair">
      <p className="contact-text">Contact me directly by email</p>
        <NavLink className="contact-email">n14burns@gmail.com</NavLink>
      </div>
      <br />
      <p className="contact-text">or by using this form.</p>
      <form ref={form} onSubmit={sendEmail}>
        <input placeholder ="Your Name" type="text" name="from_name" />
        <input placeholder ="Your Email" type="email" name="user_email" />
        <textarea placeholder="Type your message here." name="message" />
        <input type="submit" className="submit" value="Send"></input>
      </form>
      </div>
  );
};

export default Contact;