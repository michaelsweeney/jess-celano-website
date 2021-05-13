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
import RouteButton from "./components/routebutton";

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
          <RouteButton route="/" title="About" />
          <RouteButton route="/resume" title="Resume" />
          <RouteButton route="/portfolio" title="Portfolio" />
          <RouteButton route="/contact" title="Contact" />
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

export default App;
