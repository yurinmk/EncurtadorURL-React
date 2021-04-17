import "./Header.css";
import React from "react";

import Logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="container-header">
      <div className="container-img">
        <img src={Logo} alt="Logomarca" />
        <h1>Encurtador de URL</h1>
      </div>
    </div>
  );
}

export default Header;
