import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Thread.css";
import { SendRounded } from "@material-ui/icons";
import "./Thread.css";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { selectThreadId, selectThreadName } from "../../features/threadSlice";
import firebase from "firebase";
import db from "../../firebase";
import Message from "../Message/Message.js";
import { makeStyles } from "@material-ui/core/styles";
import useTimer from "../Timer/useTimer";
import { formatTime } from "../Format.js";
import { CgPlayButton, CgPlayPause } from "react-icons/cg";
import TimeMessage from "../Timer/TimeMessage";
import UpdateIcon from "@material-ui/icons/Update";
import CheckIcon from "@material-ui/icons/Check";
import ImageArea from "../ImageArea/ImageArea";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 350,
    backgroundColor: "#EEEEEE",
    border: "none",
    textDecoration: "none",
    height: 400,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  icon: {
    padding: 0,
    paddingRight: "10px",

    marginTop: "5px",
    marginRight: "20px",
    marginBottom: "5px",
    marginLeft: "5px",
  },
  Group: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function Thread() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const threadName = useSelector(selectThreadName);
  const threadId = useSelector(selectThreadId);
  const user = useSelector(selectUser);
  const classes = useStyles();
  const [images, setImages] = useState([]);

  const {
    timer,
    isActive,
    isPaused,
    handleStart,
    handlePause,
    handleResume,
    handleReset,
  } = useTimer(0);

  useEffect(() => {
    if (threadId) {
      db.collection("threads")
        .doc(threadId)
        .collection("messages")

        .orderBy("timestamp", "asc")
        .onSnapshot((snapthot) =>
          setMessages(
            snapthot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, [threadId]);

  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("threads").doc(threadId).collection("messages").add({
      timestamp: firebase.firestore.Timestamp.now(),
      message: input,
      category: threadName,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
      timer: "false",
    });

    setInput("");
  };

  const sendImage = (event) => {
    event.preventDefault();

    db.collection("threads").doc(threadId).collection("messages").add({
      timestamp: firebase.firestore.Timestamp.now(),
      message: input,
      imageURL: images[0].path,
      category: threadName,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
      timer: "false",
    });

    setImages("");
  };

  const sendTimeMessage = (event) => {
    event.preventDefault();

    db.collection("threads")
      .doc(threadId)
      .collection("messages")
      .add({
        // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        timestamp: firebase.firestore.Timestamp.now(),
        message: formatTime(timer),
        category: threadName,
        uid: user.uid,
        photo: user.photo,
        email: user.email,
        displayName: user.displayName,
        timer: "true",
      });

    handleReset();
  };

  // const addLike = () => {
  //   const likeRef = db
  //     .collection("threads")
  //     .doc(threadId)
  //     .collection("messages")
  //     .doc("lCSTULowb5A7Jo3eCXK0");

  //   const likes = likeRef.data().like;

  //   const increment = firebase.firestore.FieldValue.increment(1);

  //   if (likes < 10) {
  //     likeRef.set({ like: increment }, { merge: true });
  //   }
  // };

  // const addLike = () => {
  //   setLike(like + 1);

  //   db.collection("threads")
  //     .doc(threadId)
  //     .collection("messages")
  //     .doc("lCSTULowb5A7Jo3eCXK0")
  //     .update({
  //       like: like,
  //     });
  // };

  return (
    <div className="thread">
      <div className="thread_header">
        <div className="thread_header_contents">
          <Avatar src={user.photo} className={classes.Group} />

          <div className="thread_header_contents_info">
            <h4>{threadName}</h4>
          </div>
        </div>

        {/* <button onClick={addLike}>ライク</button> */}
        <div className="timer">
          <div className="stopwatch">
            <p>{formatTime(timer)}</p>
          </div>
          {!isActive && !isPaused ? (
            <CgPlayButton
              className="start-button"
              fontSize="large"
              onClick={handleStart}
            />
          ) : isPaused ? (
            <CgPlayPause className="start-button" onClick={handlePause} />
          ) : (
            <CgPlayButton
              className="start-button"
              fontSize="large"
              onClick={handleResume}
            />
          )}
          <div className="buttons">
            <IconButton
              className={classes.icon}
              onClick={handleReset}
              disabled={!isActive}
            >
              <UpdateIcon className="reset-button" />
            </IconButton>
            <IconButton
              className={classes.icon}
              disabled={!isActive}
              onClick={sendTimeMessage}
            >
              <CheckIcon className="send-button" />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="thread_messages" id={"scroll-area"}>
        {/* <FlipMove> */}
        {messages.map(({ id, data }) => {
          if (data.timer == "true")
            return <TimeMessage key={id} contents={data} />;
          return <Message key={id} contents={data} />;
        })}
        {/* </FlipMove> */}
      </div>

      <div className="thread_input">
        <form>
          <input
            placeholder="message..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {!input ? (
            <button onClick={sendImage} disabled={!images}>
              <SendRounded />
            </button>
          ) : (
            <button
              onClick={sendMessage}
              disabled={!input}
              // disabled={!(input && images)}
            >
              <SendRounded />
            </button>
          )}

          <ImageArea
            images={images}
            setImages={setImages}
            sendImage={sendImage}
          />
        </form>
      </div>
    </div>
  );
}

export default Thread;
