import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import "./TimeMessage.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { format } from "date-fns";

const Message = forwardRef(
  (
    {
      id,
      contents: {
        timestamp,
        displayName,
        email,
        message,
        category,
        photo,
        uid,
        mid,
        like,
      },
    },
    ref
  ) => {
    const user = useSelector(selectUser);

    return (
      <div
        ref={ref}
        className={`time-message ${
          user.email === email && "time-message_sender"
        }`}
      >
        <Avatar src={photo} className="time-message_photo" />

        <div className="time-message-content">
          <h3>{message}</h3>
          <div className="space"></div>
          <p className="category">🔥{category}🔥</p>
          <div className="space"></div>
          <p className>{format(timestamp.toDate(), "MM/dd H:mm")}</p>
        </div>
      </div>
    );
  }
);
export default Message;
