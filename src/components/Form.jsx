import React from "react";

const Form = () => {
  return (
    <form className="flex-col">
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <textarea rows={5} placeholder="Message" />
      <button className="btn-link submit-btn" type="submit">Message me</button>
    </form>
  );
};

export default Form;
