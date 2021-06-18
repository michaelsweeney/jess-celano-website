import { makeStyles } from "@material-ui/core/styles";

const imagePct = 40;

const useStyles = makeStyles({
  root: {
    display: "block",
    border: "1px solid black",
    margin: 20,
    textAlign: "right",
    boxSizing: "border-box",
  },
  textContainer: {
    padding: 20,
    display: "inline-block",
    width: `${100 - imagePct}%`,
    textAlign: "left",
    verticalAlign: "top",
    boxSizing: "border-box",
  },
  imageContainer: {
    verticalAlign: "middle",
    display: "inline-block",
    width: `${imagePct}%`,
    textAlign: "right",
    boxSizing: "border-box",
  },
  image: {
    verticalAlign: "middle",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 10,
  },
});

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
