import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
  },
});

const About = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">Hi, I'm Jess.</Typography>
      <Typography>
        A digital product designer & UX lead. I have a fondness for finding
        simple solutions for seemingly complex issues, long walks, and breakfast
        pastries. But not in that order. Welcome to my space.{" "}
      </Typography>
    </div>
  );
};

export default About;
