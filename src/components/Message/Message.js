import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import "./Message.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { format } from "date-fns";

const Message = forwardRef(
  (
    {
      id,
      contents: {
        timestamp,
        category,
        displayName,
        email,
        message,
        imageURL,
        photo,
        uid,
        mid,
      },
    },
    ref
  ) => {
    const user = useSelector(selectUser);

    return (
      <div
        ref={ref}
        className={`message ${user.email === email && "message_sender"}`}
      >
        <Avatar src={photo} className="message_photo" />

        {imageURL ? <img alt="" src={imageURL} /> : <p>{message}</p>}
        <small>{format(timestamp.toDate(), "MM/dd H:mm")}</small>
      </div>
    );
  }
);
export default Message;
