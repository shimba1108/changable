import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Thread from "../Thread/Thread.js";
import "./Chats.css";
import { FiAlignJustify } from "react-icons/fi";
import { useSelector } from "react-redux";
import { selectThreadId } from "../../features/threadSlice";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import NoThread from "../NoThread/NoThread";

const useStyles = makeStyles((theme) => ({
  drawer: {
    display: "block",
    width: "1px",

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  sidebar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  icon: {
    color: "lightGray",
    fontSize: "30px",
    marginTop: "9px",
    marginLeft: 0,
    padding: 0,
    left: -5,
  },
}));

function Chats() {
  const classes = useStyles();
  const threadId = useSelector(selectThreadId);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const isThread = () => {
    if (threadId) {
      return true;
    }
    return false;
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="chats">
      <div className={classes.drawer}>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <div className={classes.icon}>
                <FiAlignJustify />
              </div>
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              <Sidebar />
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      {(() => {
        if (threadId) return <Thread />;
        else return <NoThread />;
      })()}
    </div>
  );
}

export default Chats;
