import { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { BrowserRouter as Router } from "react-router-dom";

import Content from "./components/content";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MenuButton from "./components/menubutton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function App() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <Header />
        <Sidebar open={open} closeCallback={handleDrawerClose} />
        <MenuButton openCallback={handleDrawerOpen} />
        <Content open={open} />
      </div>
    </Router>
  );
}
