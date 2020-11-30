import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Sidebar.css";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import { IconButton, Avatar } from "@material-ui/core";
import SidebarThread from "../SiderbarThread/SidebarThread";
import db, { auth } from "../../firebase";
import {
  QuestionAnswerOutlined,
  PhoneOutlined,
  Settings,
} from "@material-ui/icons";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { BiLogOut, BiUser } from "react-icons/bi";

function Sidebar() {
  const user = useSelector(selectUser);
  const [threads, setThreads] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    db.collection("threads").onSnapshot((snapshot) =>
      setThreads(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const addThread = () => {
    const threadName = prompt("目標を設定");
    if (threadName) {
      db.collection("threads").add({
        threadName: threadName,
      });
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_search">
          <SearchIcon className="sidebar_searchIcon" />
          <input type="text" className="sidebar_input" placeholder="Search" />
        </div>
        <IconButton
          variant="outlined"
          className="sidebar_button"
          onClick={addThread}
        >
          <BorderColorOutlinedIcon />
        </IconButton>
      </div>

      <div className="sidebar_threads">
        {threads.map(({ id, data: { threadName } }) => (
          <SidebarThread key={id} id={id} threadName={threadName} />
        ))}
      </div>
      <div className="sidebar_bottom">
        <Avatar
          className="sidebar_bottom_avatar"
          src={user.photo}
          onClick={() => auth.signOut()}
        />

        <IconButton>
          <QuestionAnswerOutlined />
        </IconButton>
        <IconButton
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Settings />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <BiUser />
            Profile
          </MenuItem>
          <MenuItem onClick={() => auth.signOut()}>
            <BiLogOut />
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Sidebar;
