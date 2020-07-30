import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/home/Home";

import { Provider } from "react-redux";
import store from "./store";

import "./styles/styles.css";
import "./bulma-0.9.0/css/bulma.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Home />
          <Switch>
            <Route exact path="Home" component={Home} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
