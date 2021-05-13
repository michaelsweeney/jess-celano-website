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

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [textContent, setTextContent] = useState("");
  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSubmit = () => {
    alert("you have submitted!");
    setTextContent("");
  };

  const handleTextFieldChange = (e) => {
    setTextContent(e.target.value);
  };

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
              Here's the Intro
            </Route>
            <Route path="/resume">
              <div>Here's My Resume!</div>
            </Route>
            <Route path="/portfolio">Here's my Portfolio Stuff</Route>
            <Route path="/contact">
              Contact Me!
              <TextField
                value={textContent}
                onChange={handleTextFieldChange}
                multiline
                rows="4"
                variant="outlined"
              ></TextField>
              <Button onClick={handleSubmit}>Contact Me!</Button>
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
