import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { Button, ButtonGroup, AppBar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import useWindowSize from "./usewindowsize";
import { breakpoint } from "../constants";
import { routes } from "../routes";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
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
    display: "inline-block",
  },
});

export default function Header(props) {
  const classes = useStyles();
  const location = useLocation();
  const size = useWindowSize();
  return (
    <AppBar
      className={clsx(
        classes.appBar,
        size.width < breakpoint ? classes.hide : ""
      )}
    >
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
