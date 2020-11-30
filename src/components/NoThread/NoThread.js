import React from "react";
import { FaUsers } from "react-icons/fa";
import "./NoThread.css";

const NoThread = () => {
  return (
    <div className="no-thread">
      <div className="title">
        <FaUsers style={{ marginTop: "5px", fontSize: "30px" }} />
        <h1>Changable</h1>
      </div>

      <h3>スレッドを選択してください</h3>
    </div>
  );
};

export default NoThread;
