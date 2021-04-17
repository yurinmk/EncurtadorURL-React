import React from "react";

import { Switch, Route } from "react-router-dom";

import Login from "../../views/pages/Login";
import GenerateURL from "../../views/pages/GenerateURL";
import URL from "../../views/pages/Url";
import ListURLs from "../../views/pages/ListURL";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

function Routes() {
  return (
    <Switch>
      <PublicRoutes exact path="/login" component={Login} />
      <PrivateRoutes exact path="/" component={GenerateURL} />
      <PrivateRoutes exact path="/url" component={URL} />
      <PrivateRoutes exact path="/listURLs" component={ListURLs} />
    </Switch>
  );
}

export default Routes;
