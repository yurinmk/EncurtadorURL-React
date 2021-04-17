import "./GenerateURL.css";
import React from "react";
import Header from "../../components/header/Header";
import MainGenerateURL from "../../components/generateURL/MainGenerateURL";

function GenerateURL() {
  return (
    <div className="container-generateURL">
      <header>
        <Header />
      </header>
      <main>
        <MainGenerateURL />
      </main>
    </div>
  );
}

export default GenerateURL;
