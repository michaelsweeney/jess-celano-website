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
  const imageWidth = "40%";
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <ImageCard
          src={reiimg}
          text={"some rei stuff"}
          width={imageWidth}
          title="rei"
        ></ImageCard>
        <ImageCard src={zeelimg} width={imageWidth} title="zeel"></ImageCard>
        <ImageCard src={etsyimg} width={imageWidth} title="etsy"></ImageCard>
        <ImageCard src={relicimg} width={imageWidth} title="relic"></ImageCard>
      </div>
    </div>
  );
};

export default Portfolio;
