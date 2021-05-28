import "./App.css";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Portfolio from "./components/portfolio";
import About from "./components/about";
import Resume from "./components/resume";
import Contact from "./components/contact";
import RouteButton from "./components/routebutton";

/* 

FLEXBOX EXAMPLE:

https://codepen.io/evankarageorgos/pen/jrzLEm?__cf_chl_captcha_tk__=7738ae1375c2effc50c7dcdf92f6af5c14469be2-1622161359-0-Ae1QDRiT7AoozZUfIf9zDAVznio9hLSpL2eApNED1L5_WhNKPoEkMUiMNTC1kvEg80pQcegRYTbq6QmGfnDLV4v_cAiguULH79tcwbBv88rH0sMRtT8iXiUy-OWzyt4Bi6npt0iCrPCng9cZxTJrhEpBd3UedsQMfbyWKJa20YqmcIe5wdiPK13pkoIIuDPOcVX1d89cymwiT1QYxV4MOjDyfLA-bkqXN8nmazcSTRKvKD8OD4BDeG1LqzGOQIwe-BUTpkQKC-HiufSCy1fFeYyUzY5qNzH3pxA8fp3DZHmTXA-J_QR0YJCXih0ks7tK7TM0yhObOE_gfrwDERQYdmIaeBXP9gsKj01EXzkv__FoEX_xZM6wVqThiyFEnwICKZxc9hM8AubEQ2u-gbRBcy58a5LestsQu5716cY354jNsVFwn-NeBJsq4-BlHFtZ4k9S4_hWYBHgYlneLN3YcyZWsblluT6ewKqh4Q0dLNVGSN_JW6Ug6E8VLAxmqtq2WB3tV_CU_-EX7DYXc5ceDCIu6uKTJcghJhdc7FcmM6pM5QNeScSEOOq6ymloAx16ECGQbLGVjwAKTg6MkhaovGZ8vppWvYx6db0Og8IZlROQKmrFKxBGegDsd8XgE06H4_T-I5EcOvWmtJQaIN1C6xUfAJP0UWvKPJ42rzTxbJgEdiyXiUR1aI41mMvn7Wcorb95Mr1C0_-rdfshlpz7jKA

*/

const Sidebar = (props) => {
  const { open, callback } = props;
  return (
    <div className={open ? "sidebar sidebar-open" : "sidebar sidebar-closed"}>
      <div className={"button menu-icon-button"} onClick={() => callback()}>
        menu icon
      </div>
      <RouteButton route="/" title="About" />
      <RouteButton route="/resume" title="Resume" />
      <RouteButton route="/portfolio" title="Portfolio" />
      <RouteButton route="/contact" title="Contact" />
    </div>
  );
};

const ContentContainer = (props) => {
  const { open, callback } = props;
  return (
    <div
      className={
        open
          ? "content-container content-container-closed"
          : "content-container content-container-open"
      }
    >
      <div className="button menu-icon-button" onClick={() => callback()}>
        menu icon
      </div>
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
  );
};

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div className="main-container">
        <Sidebar open={isOpen} callback={toggleOpen} />
        <ContentContainer open={isOpen} callback={toggleOpen} />
      </div>
    </Router>
  );
};

export default App;
