/* eslint flowtype-errors/show-errors: 0 */
import React from "react";
import { Switch, Route } from "react-router";
import App from "./containers/App";
import HomePage from "./containers/HomePage";
import VsHuman from "./containers/VsHuman";

export default () => (
  <App>
    <Switch>
      <Route path="/vs-human" component={VsHuman} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
