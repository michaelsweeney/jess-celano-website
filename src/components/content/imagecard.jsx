import { makeStyles } from "@material-ui/core/styles";

const imagePct = 40;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-block",
    border: "1px solid black",
    margin: 20,
    textAlign: "right",
    boxSizing: "border-box",
    width: "100%",
  },
  textContainer: {
    padding: 20,
    display: "block",
    [theme.breakpoints.up("sm")]: {
      width: `${100 - imagePct}%`,
      display: "inline-block",
    },
    textAlign: "left",
    verticalAlign: "top",
    boxSizing: "border-box",
  },
  imageContainer: {
    verticalAlign: "middle",
    display: "inline-block",
    [theme.breakpoints.up("sm")]: {
      width: `${imagePct}%`,
    },
    textAlign: "right",
    boxSizing: "border-box",
    height: "100%",
  },
  image: {
    verticalAlign: "middle",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 10,
  },
}));

export default function ImageCard(props) {
  const classes = useStyles();
  const { src, title, text } = props;

  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <div className={classes.title}>{title}</div>
        <div>{text}</div>
      </div>
      <div className={classes.imageContainer}>
        <img
          className={classes.image}
          src={src}
          alt={title}
          width={"100%"}
        ></img>
      </div>
    </div>
  );
}
