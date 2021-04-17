import "./ListURL.css";
import React from "react";
import Header from "../../components/header/Header";
import MainListURL from "../../components/listURL/MainListURL";

// import { Container } from './styles';

function ListURL() {
  return (
    <div className="container-listURL">
      <header>
        <Header />
      </header>
      <main>
        <MainListURL />
      </main>
    </div>
  );
}

export default ListURL;
