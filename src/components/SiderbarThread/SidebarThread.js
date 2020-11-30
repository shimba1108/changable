import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarThread.css";
import { useDispatch } from "react-redux";
import { setThread } from "../../features/threadSlice";
import db from "../../firebase";
import * as timeago from "timeago.js";

function SidebarThread({ id, threadName }) {
  const dispatch = useDispatch();
  const [threadInfo, setThreadInfo] = useState([]);

  useEffect(() => {
    db.collection("threads")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setThreadInfo(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div
      onClick={() =>
        dispatch(
          setThread({
            threadId: id,
            threadName: threadName,
          })
        )
      }
      className="sidebarThread"
    >
      <Avatar src={threadInfo[0]?.photo} />
      <div className="sidebarThread_details">
        <h3>{threadName}</h3>
        <div className="space"></div>
        <p>{threadInfo[0]?.message}</p>

        <small>
          {timeago.format(
            new Date(threadInfo[0]?.timestamp?.toDate()).toLocaleString()
          )}
        </small>
      </div>
    </div>
  );
}

export default SidebarThread;
