import { Link, useLocation } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  borderActive: { textAlign: "center" },
  borderInactive: { textAlign: "center" },

  buttonActive: {
    width: "90%",
    padding: 0,
    margin: 0,
    // boxSizing: "border-box",
    marginLeft: "5px",
    textAlign: "center",
    marginTop: "15px",
    marginBottm: "15px",
    fontStyle: "bold",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: "1px",
    borderRadius: 0,
  },
  buttonInactive: {
    width: "90%",
    padding: 0,
    margin: 0,
    // boxSizing: "border-box",
    marginLeft: "5px",
    textAlign: "center",
    marginTop: "15px",
    marginBottm: "15px",
    fontStyle: "bold",
    borderStyle: "none",
    borderColor: "white",
    borderWidth: "1px",
    borderRadius: 0,
  },
});

const RouteButton = (props) => {
  const classes = useStyles();
  const { route, title } = props;
  const location = useLocation();

  const isActive = location.pathname === route;
  return (
    <Link
      to={route}
      className={isActive ? classes.borderActive : classes.borderInactive}
    >
      <Button
        className={isActive ? classes.buttonActive : classes.buttonInactive}
      >
        <Typography color="primary">{title}</Typography>
      </Button>
    </Link>
  );
};

export default RouteButton;
