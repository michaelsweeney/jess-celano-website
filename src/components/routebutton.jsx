import { Link, useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";

const RouteButton = (props) => {
  const { route, title } = props;
  const location = useLocation();
  const color = location.pathname === route ? "primary" : "default";

  return (
    <Link to={route}>
      <Button color={color}>{title}</Button>
    </Link>
  );
};

export default RouteButton;
