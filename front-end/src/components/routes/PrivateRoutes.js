import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogged } from "../../utils/auth";

console.log(isLogged);

function PrivateRoutes(props) {
  return isLogged() ? <Route {...props} /> : <Redirect to="/login" />;
}

export default PrivateRoutes;
