import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogged } from "../../utils/auth";

function PublicRoutes(props) {
  return isLogged() ? <Redirect to="/" /> : <Route {...props} />;
}

export default PublicRoutes;
