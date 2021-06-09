import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "block",
    padding: 20,
  },
});

export default function ImageCard(props) {
  const classes = useStyles();
  const { src, title, width } = props;

  return (
    <div className={classes.root}>
      <img src={src} alt={title} width={width}></img>
    </div>
  );
}
