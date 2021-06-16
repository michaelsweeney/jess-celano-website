import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "block",
    padding: 20,
  },
  image: { width: "50%" },
  text: {
    width: "50%",
  },
});

export default function ImageCard(props) {
  const classes = useStyles();
  const { src, title, width, text } = props;

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <h2>{title}</h2>
        <div>{text}</div>
      </div>
      <img src={src} alt={title} width={width}></img>
    </div>
  );
}
