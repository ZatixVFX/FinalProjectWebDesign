import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Location from "./components/location/Location";
import OurStory from "./components/ourstory/OurStory";
import Login from "./components/register_login/Login";
import Register from "./components/register_login/Register";
import Account from "./components/account/Account";
import Cart from "./components/cart/Cart";

import PrivateRoute from "./components/routing/PrivateRoute";

import setAuthToken from "./utils/setAuthToken";

import { Provider } from "react-redux";
import store from "./store";

import "./styles/styles.css";
import "./bulma-0.9.0/css/bulma.css";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <PrivateRoute exact path="/account" component={Account} />
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/location" component={Location} />
            <Route exact path="/ourstory" component={OurStory} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/cart" component={Cart} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
