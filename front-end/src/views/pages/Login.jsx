import "./Login.css";
import React from "react";

import Header from "../../components/header/Header";
import MainLogin from "../../components/login/MainLogin";

function Login() {
  return (
    <div className="container-login">
      <header>
        <Header />
      </header>
      <main>
        <MainLogin />
      </main>
    </div>
  );
}

export default Login;
