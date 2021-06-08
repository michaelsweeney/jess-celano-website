import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";

import ImageCard from "./imagecard";

import reiimg from "../../img/rei.gif";
import etsyimg from "../../img/etsy.gif";
import relicimg from "../../img/relic.png";
import zeelimg from "../../img/zeel.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    // textAlign: "center",
  },
  imageContainer: {
    textAlign: "center",
  },
});

const Portfolio = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2">Portfolio</Typography>
      <Typography paragraph>Here's my portfolio</Typography>
      <div className={classes.imageContainer}>
        <ImageCard src={reiimg} width={500} title="rei"></ImageCard>
        <ImageCard src={zeelimg} width={500} title="rei"></ImageCard>
        <ImageCard src={etsyimg} width={500} title="rei"></ImageCard>
        <ImageCard src={relicimg} width={500} title="rei"></ImageCard>
      </div>
    </div>
  );
};

export default Portfolio;
