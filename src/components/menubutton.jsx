import clsx from "clsx";

import { IconButton } from "@material-ui/core";
import useWindowSize from "./usewindowsize";
import MenuIcon from "@material-ui/icons/MenuOutlined";

import { breakpoint } from "../constants";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  iconButtonWrapper: {
    position: "absolute",
    left: 5,
    top: 5,
  },
});

export default function MenuButton(props) {
  const { openCallback } = props;
  const classes = useStyles();
  const size = useWindowSize();
  return (
    <div className={classes.iconButtonWrapper}>
      <IconButton
        aria-label="open drawer"
        onClick={openCallback}
        className={clsx(size.width > breakpoint ? classes.hide : "")}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
}
