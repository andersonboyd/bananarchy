import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Merch from "./pages/Merch";
import Catering from "./pages/Catering";
import Cart from "./pages/Cart";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

library.add(fab, faMapMarkerAlt);

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/merch" component={Merch} />
          <Route exact path="/catering" component={Catering} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
