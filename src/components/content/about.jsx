import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
const About = (props) => {
  return (
    <>
      <Typography variant="h2">Hi, I'm Jess</Typography>
      <Typography paragraph>
        A digital product designer & UX lead. I have a fondness for finding
        simple solutions for seemingly complex issues, long walks, and breakfast
        pastries. But not in that order. Welcome to my space.
      </Typography>
    </>
  );
};

export default About;
