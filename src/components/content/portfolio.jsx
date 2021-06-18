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
console.log(reiimg);
const portfoliocontent = [
  {
    title: "REI",
    text: "some rei stuff",
    src: reiimg,
  },
  {
    title: "ZEEL",
    text: "zeel is something very cool!",
    src: zeelimg,
  },
  {
    title: "Etsy",
    text: "Alex yells at me for shopping Amazon instead of Etsy",
    src: etsyimg,
  },
  {
    title: "Relic",
    text: "Not quite sure what to say about this one.",
    src: relicimg,
  },
];

const Portfolio = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        {portfoliocontent.map((d) => (
          <ImageCard src={d.src} text={d.text} title={d.title} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
