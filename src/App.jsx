import "./App.css";
import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Drawer,
  Button,
  TextField,
  Divider,
} from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Portfolio from "./components/portfolio";
import About from "./components/about";
import Resume from "./components/resume";
import Contact from "./components/contact";
import RouteButton from "./components/routebutton";

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: "rgb(220,220,220)",
  //   },
  //   secondary: {
  //     main: "#050709",
  //   },
  //   default: {
  //     main: "rgb(220,220,220)",
  //   },
  //   background: {
  //     paper: "#050709",
  //     default: "#050709",
  //   },
  //   text: {
  //     color: "white",
  //   },
  // },
});

const useStyles = makeStyles({
  drawerOuter: {},
  drawerInner: {
    width: "104px",
  },
  modalBackground: { backgroundColor: "red" },
});

const App = () => {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container>
          <Drawer
            anchor="left"
            variant="persistent"
            open={isOpen}
            onClose={toggleOpen}
            paperProps={{ classes: { root: classes.modalBackground } }}
            BackdropProps={{ classes: { root: classes.modalBackground } }}
            classes={{ root: classes.modalBackground }}
          >
            <div className={classes.drawerInner}>
              <Button color="primary" onClick={toggleOpen}>
                <MenuIcon />
              </Button>
              <RouteButton route="/" title="About" />
              <RouteButton route="/resume" title="Resume" />
              <RouteButton route="/portfolio" title="Portfolio" />
              <RouteButton route="/contact" title="Contact" />
            </div>
          </Drawer>
          <Grid>
            <Button color="secondary" onClick={toggleOpen}>
              <MenuIcon />
            </Button>

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
          </Grid>
        </Container>
      </ThemeProvider>
    </Router>
  );
};

export default App;
