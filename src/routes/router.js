import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "../components/company/About";
import History from "../components/company/History";
import Organization from "../components/company/Organization";
import Certificate from "../components/company/Certificate";
import AllServices from "../components/service/AllServices";
import Borabit from "../components/service/Borabit";
import Game from "../components/service/Game";
import Education from "../components/service/Education";
import RestServices from "../components/service/RestServices";
import Articles from "../components/pr/Articles";
import Promotion from "../components/pr/Promotion";

const Router = () => {
  return(
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact={true} component={Home} />

        <Route path="/company/about" component={About} />
        <Route path="/company/history" component={History} />
        <Route path="/company/organization" component={Organization} />
        <Route path="/company/certificate" component={Certificate} />

        <Route path="/service" exact={true} component={AllServices} />
        <Route path="/service/borabit" component={Borabit} />
        <Route path="/service/game" component={Game} />
        <Route path="/service/edu" component={Education} />
        <Route path="/service/etc" component={RestServices} />

        <Route path="/pr/article" component={Articles} />
        <Route path="/pr/promotion" component={Promotion} />

        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
