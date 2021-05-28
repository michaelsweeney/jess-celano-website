import { Link, useLocation } from "react-router-dom";

const RouteButton = (props) => {
  const { route, title } = props;
  const location = useLocation();

  const isActive = location.pathname === route;
  return (
    <Link to={route}>
      <div
        onClick={(d) => console.log(d)}
        className={
          isActive
            ? "button route-button-active"
            : "button route-button-inactive"
        }
      >
        {title}
      </div>
    </Link>
  );
};

export default RouteButton;
