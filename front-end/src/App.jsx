import React from "react";

import { BrowserRouter as Router, useHistory } from "react-router-dom";

import Routes from "./components/routes/Routes";

function App() {
  const history = useHistory();
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
