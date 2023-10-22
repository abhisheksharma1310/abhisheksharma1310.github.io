import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { eData } from "../data/emailjs";

const Form = ({ setNotify }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = eData.serviceId;
    const templateId = eData.templateId;
    const publicKey = eData.publicKey;

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        setNotify(true);
      },
      (error) => {
        // console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <form className="flex-col" ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        title="Enter your name"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        title="Enter your email"
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        title="Enter your subject"
      />
      <textarea
        rows={5}
        name="message"
        placeholder="Message"
        required
        title="Enter your message"
      />
      <button className="btn-link submit-btn" type="submit">
        Message me
      </button>
    </form>
  );
};

export default Form;
