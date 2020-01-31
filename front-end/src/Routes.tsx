import React from 'react';
import { history } from './utils/history';
import { Router, Route, Redirect, Switch } from "react-router-dom";
import HomePage from './components/Pages/HomePage';
import BrowsePage from './components/Pages/BrowsePage';
import Profile from './components/Pages/Profile';
import ForgotPassword from './components/Authentication/ForgotPassword';
import AddPackage from './components/Pages/Package/AddPackage';
import { PrivateRoute } from './components/PrivateComponents/PrivateRoute'; 
import ViewStore from './components/Pages/Package/ViewStore';


history.listen(function (location) {
  const path = (/#(\/.*)$/.exec(location.hash) || [])[1];
  if (path) history.replace(path);
});

const createRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route path="/home" exact component={HomePage} />
      <Route path="/browse" exact component={BrowsePage} />
      <Route path="/view-package" exact component={ViewStore}/>
      <Route path="/forgot-password" exact component={ForgotPassword} />
      <Route path="/item" exact component={HomePage} />
      <Route path="/profile" component={Profile} />
      <Route path="/add-package" exact component={AddPackage} />
      <Redirect from="/*" to="/home" />
    </Switch>
  </Router>
);

export default createRoutes;