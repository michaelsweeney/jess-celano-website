import { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useTheme, Container } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

import Content from "./components/content";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import MenuButton from "./components/menubutton";
import useWindowSize from "./components/usewindowsize";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  outer: {},
}));

export default function App() {
  const classes = useStyles();
  const windowSize = useWindowSize();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const breakpoint = theme.breakpoints.values.md;
  const windowWidth = windowSize.width;
  useEffect(() => {
    if (windowWidth > breakpoint) {
      setOpen(false);
    }
  }, [breakpoint, windowWidth]);

  return (
    <Router>
      <Container maxWidth="lg" className={classes.root}>
        <Header closeCallback={handleDrawerClose} />
        <Sidebar open={open} closeCallback={handleDrawerClose} />
        <MenuButton openCallback={handleDrawerOpen} />
        <Content open={open} closeCallback={handleDrawerClose} />
      </Container>
    </Router>
  );
}
