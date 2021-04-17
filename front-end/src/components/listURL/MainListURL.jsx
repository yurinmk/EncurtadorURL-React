import "./MainListURL.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

import copy from "../../assets/copy.png";
import sair from "../../assets/sair.png";
import home from "../../assets/home.png";
import api from "../../utils/api";
import { STORAGE_KEY } from "../../utils/auth";
import { logout } from "../../utils/auth";

import ToastAnimated, { showToast } from "../../components/alerts/toast";

function MainListURL() {
  const history = useHistory();
  const [informations, setInformations] = useState([]);

  useEffect(() => {
    getListURLs();
  }, []);

  function handleHome() {
    history.push("/");
  }

  function handleLogout() {
    logout();
    history.push("/login");
  }

  function handleCopy() {
    showToast({ type: "success", message: "URL Copiada!" });
  }

  function getListURLs() {
    const user = JSON.parse(localStorage.getItem(STORAGE_KEY));
    api
      .post(`/listGeneratedURL/${user.id_user}`)
      .then((success) => {
        setInformations(success.data.success);
      })
      .catch(() => {});
  }

  function showListURLs() {
    return informations.map((info) => {
      let creationDate = new Date(info.createdAt);
      let formattedDate = `${creationDate.getDate()}/0${
        creationDate.getMonth() + 1
      }/${creationDate.getFullYear()}`;

      return (
        <div className="container-info" key={info.id_url}>
          <div className="container-date">
            <p>Data:</p>
            <input type="text" defaultValue={formattedDate} />
          </div>
          <div className="container-inputs">
            <p>URL Original:</p>
            <input type="text" defaultValue={info.original_url} />
            <CopyToClipboard text={info.original_url}>
              <img src={copy} alt="Copiar" onClick={handleCopy} />
            </CopyToClipboard>
          </div>
          <div className="container-inputs">
            <p>URL Encurtada:</p>
            <input type="text" defaultValue={info.shortened_url} />
            <CopyToClipboard text={info.shortened_url}>
              <img src={copy} alt="Copiar" onClick={handleCopy} />
            </CopyToClipboard>
          </div>
        </div>
      );
    });
  }

  return (
    <div
      className={
        informations.length > 3
          ? "container-mainListURL-overflow"
          : "container-mainListURL"
      }
    >
      <div className="container-geral">
        <img src={home} alt="Inicio" onClick={handleHome} />
        <img src={sair} alt="Sair" onClick={handleLogout} />
        <div className="container-list">{showListURLs()}</div>
        <ToastAnimated />
      </div>
    </div>
  );
}

export default MainListURL;
