import "./MainGenerateURL.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../utils/api";
import ToastAnimated, { showToast } from "../../components/alerts/toast";
import { logout, STORAGE_KEY } from "../../utils/auth";
import {
  existStorage,
  createStogareState,
  cleanStorage,
} from "../../utils/storageState";

import sair from "../../assets/sair.png";

function MainInputURL() {
  const history = useHistory();

  const [url, setUrl] = useState("");

  function handleLogout() {
    logout();
    history.push("/login");
  }

  function handleGeneratedURL() {
    const storage = localStorage.getItem(STORAGE_KEY);
    const user = JSON.parse(storage);
    if (url !== "") {
      const data = {
        id_user: user.id_user,
        original_url: url,
      };

      api
        .post("/generateShortenedURL", data)
        .then((success) => {
          let urls = {
            originalURL: success.data.success.originalURL,
            shortenedURL: success.data.success.shortenedURL,
          };

          if (existStorage("URLs")) {
            cleanStorage("URLs");
            createStogareState("URLs", JSON.stringify(urls));
          } else {
            createStogareState("URLs", JSON.stringify(urls));
          }

          history.push("/url");
        })
        .catch(() => {
          showToast({
            type: "error",
            message: "Não foi possivel gerar a URL. Tente novamente!",
          });
          setUrl("");
        });
    } else {
      showToast({
        type: "default",
        message: "O link é um campo obrigatório!",
      });
    }
  }

  function handleListURL() {
    history.push("/listURLs");
  }

  return (
    <div className="container-mainInputURL">
      <div className="container-link">
        <form action="">
          <div className="container-head">
            <img src={sair} alt="Sair" onClick={handleLogout} />
            <label>Cole a URL para ser encurtada</label>
          </div>

          <div className="container-input">
            <input
              type="text"
              placeholder="Link"
              value={url}
              onChange={(text) => setUrl(text.target.value)}
            />
            <button type="button" onClick={handleGeneratedURL}>
              Gerar
            </button>
          </div>
          <button type="button" onClick={handleListURL}>
            Listar minhas URLs
          </button>
        </form>
        <ToastAnimated />
      </div>
    </div>
  );
}

export default MainInputURL;
