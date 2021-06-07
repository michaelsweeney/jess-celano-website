import { useState, useEffect } from "react";
import clsx from "clsx";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";

import MenuIcon from "@material-ui/icons/MenuOutlined";
import { drawerWidth } from "../constants";
import { routes } from "../routes";

const useStyles = makeStyles((theme) => ({
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    justifyContent: "flex-end",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor: "black",
    color: "white",
    width: drawerWidth,
  },
  link: {
    textDecoration: "inherit",
    color: "inherit",
  },
  inactiveRoute: {
    border: "2px solid rgba(0,0,0,0)",
    "&:hover": {
      backgroundColor: "rgb(50,50,50)",
    },
  },
  activeRoute: {
    border: "2px solid white",
  },

  listItem: {
    marginLeft: 10,
    width: `calc(100% - 20px)`,
    transition: "background-color 0.3s",
  },
}));

export default function Sidebar(props) {
  const { open, closeCallback } = props;
  const classes = useStyles();
  const location = useLocation();

  return (
    <Drawer
      className={clsx(classes.drawer)}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton aria-label="open drawer" onClick={closeCallback}>
          <MenuIcon htmlColor="white" />
        </IconButton>
      </div>
      <List>
        {routes.map((obj, i) => (
          <Link key={i} to={obj.route} className={classes.link}>
            <ListItem
              button
              key={obj.title}
              className={
                location.pathname === obj.route
                  ? clsx(classes.activeRoute, classes.listItem)
                  : clsx(classes.inactiveRoute, classes.listItem)
              }
            >
              <ListItemText primary={obj.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}
