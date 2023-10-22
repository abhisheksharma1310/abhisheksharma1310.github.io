import React, { memo } from "react";

const Notification = () => {
  return (
    <div className="notify flex-col flex-center">
      <p>Message Sent. </p>
      <p>I will get in touch soon.</p>
      <p>Thank you!</p>
    </div>
  );
};

export default memo(Notification);
