import "./App.css";
import { useState, useEffect } from "react";
import { Container, Grid, Drawer, Button, TextField } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Portfolio from "./components/portfolio";
import About from "./components/about";
import Resume from "./components/resume";
import Contact from "./components/contact";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Container>
        <Drawer
          anchor="left"
          variant="persistent"
          open={isOpen}
          onClose={toggleOpen}
        >
          <SidebarButton route="/" title="About" />
          <SidebarButton route="/resume" title="Resume" />
          <SidebarButton route="/portfolio" title="Portfolio" />
          <SidebarButton route="/contact" title="Contact" />
        </Drawer>

        <Button variant="outlined" color="primary" onClick={toggleOpen}>
          click to open
        </Button>
        <div>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
};

const SidebarButton = (props) => {
  const { route, title } = props;

  const location = useLocation();
  const color = location.pathname === route ? "primary" : "default";

  return (
    <Link to={route}>
      <Button color={color}>{title}</Button>
    </Link>
  );
};

export default App;
