import { Switch, Route } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Portfolio from "./content/portfolio";
import About from "./content/about";
import Resume from "./content/resume";
import Contact from "./content/contact";

import { drawerWidth } from "../constants";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: 35,
    flexGrow: 1,
    marginTop: 54,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const Content = (props) => {
  const { open, closeCallback } = props;
  const classes = useStyles();

  return (
    <div
      onClick={closeCallback}
      className={clsx(classes.content, {
        [classes.contentShift]: open,
      })}
    >
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
};

export default Content;
