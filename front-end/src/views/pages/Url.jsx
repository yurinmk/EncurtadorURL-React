import "./Url.css";
import React from "react";

import Header from "../../components/header/Header";
import MainUrl from "../../components/url/MainUrl";

// import { Container } from './styles';

function Url() {
  return (
    <div className="container-url">
      <header>
        <Header />
      </header>
      <main>
        <MainUrl />
      </main>
    </div>
  );
}

export default Url;
