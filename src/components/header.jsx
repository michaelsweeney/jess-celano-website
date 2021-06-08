import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { Button, ButtonGroup, AppBar, useTheme } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import useWindowSize from "./usewindowsize";

import { breakpoint } from "../constants";
import { routes } from "../routes";
import Logo from "./logo";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "inline-block",
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  appBarActiveRoute: {
    border: "2px solid black",
    borderRadius: 0,
  },
  appBarInactiveRoute: {
    border: "2px solid white",
  },
  appBarButton: {
    display: "inline-block",
  },
  hide: {
    display: "none",
  },
  buttonGroup: {
    marginRight: 50,
    marginTop: 50,
    marginBottom: 25,
    display: "inline-block",
    float: "right",
  },
  logoContainer: {
    marginLeft: 50,
    marginTop: 50,
    marginBottom: 25,
    display: "inline-block",
  },
}));

export default function Header(props) {
  const { closeCallback } = props;
  const classes = useStyles();
  const theme = useTheme();
  const location = useLocation();
  const size = useWindowSize();

  useEffect(() => {
    // if (size.width > theme.breakpoints.values["sm"]) {
    //   closeCallback();
    // }
  }, [size, theme, closeCallback]);

  return (
    <AppBar className={clsx(classes.appBar)}>
      <div className={classes.logoContainer}>
        <Logo />
      </div>
      <div className={classes.buttonGroup}>
        {routes.map((obj, i) => (
          <Link key={i} to={obj.route}>
            <Button
              className={clsx(
                classes.appBarButton,
                location.pathname == obj.route
                  ? clsx(classes.appBarActiveRoute, classes.listItem)
                  : clsx(classes.appBarInactiveRoute, classes.listItem)
              )}
              key={obj.title}
            >
              {obj.title}
            </Button>
          </Link>
        ))}
      </div>
    </AppBar>
  );
}
