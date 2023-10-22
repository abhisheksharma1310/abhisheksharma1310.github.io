import React, { memo } from "react";
import SocialIcons from "./SocialIcons";
import Form from "./Form";

const Contact = ({setNotify}) => {
  return (
    <section id="contact" className="flex-col">
      <div className="s-head heading-w">
        <h2>Contact</h2>
      </div>
      <div className="flex-col flex-center">
        <p>Have a question? Want to hire? Just want to chat?</p>
        <p>Reach out to me on</p>
      </div>
      <div className="flex-col flex-center">
        <SocialIcons />
      </div>
      <div className="flex-col flex-center">
        <p>Send me a message</p>
      </div>
      <div className="flex-col flex-center">
        <Form setNotify={setNotify}/>
      </div>
    </section>
  );
};

export default memo(Contact);
