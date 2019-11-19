import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../containers/HomePage";
import PastTrials from "../containers/PastTrials/Loadable";
import LoginPage from "../containers/LoginPage/Loadable";
import HowItWorksPage from "../containers/HowItWorksPage/Loadable";
import NotFoundPage from "../containers/NotFoundPage/Loadable";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/past-trials" component={PastTrials} />
    <Route path="/login" component={LoginPage} />
    <Route path="/how-it-works" component={HowItWorksPage} />
    <Route path="" component={NotFoundPage} />
  </Switch>
);

export default Routes;
