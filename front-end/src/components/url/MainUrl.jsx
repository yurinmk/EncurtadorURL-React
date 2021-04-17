import "./MainUrl.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ToastAnimated, { showToast } from "../alerts/toast";

import copy from "../../assets/copy.png";

function MainUrl() {
  const history = useHistory();
  const [URLShortened, setURLShortened] = useState("");
  const [URLOriginal, setURLOriginal] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let urls = JSON.parse(localStorage.getItem("URLs"));
    let originalURL = urls.originalURL;
    let shortenedURL = urls.shortenedURL;

    setURLOriginal(originalURL);
    setURLShortened(shortenedURL);
  }, []);

  function handleCopy() {
    showToast({ type: "success", message: "URL Copiada!" });
  }

  function generateOtherURL() {
    history.push("/");
  }

  function handleListURL() {
    history.push("/listURLs");
  }

  return (
    <div className="container-mainUrl">
      <div className="container-inputs">
        <form>
          <div className="container-input">
            <label>URL Encurtada</label>
            <input type="text" value={URLShortened} />
            <CopyToClipboard text={URLShortened}>
              <img src={copy} alt="Copiar URL" onClick={handleCopy} />
            </CopyToClipboard>
          </div>
          <div className="container-input">
            <label>URL Original</label>
            <input type="text" value={URLOriginal} />
            <CopyToClipboard text={URLOriginal}>
              <img src={copy} alt="Copiar URL" onClick={handleCopy} />
            </CopyToClipboard>
          </div>

          <div className="containet-btn">
            <button type="button" onClick={generateOtherURL}>
              Gerar outra URL
            </button>
            <button type="submit" onClick={handleListURL}>
              Listar minhas URLs
            </button>
          </div>
        </form>
        <ToastAnimated />
      </div>
    </div>
  );
}

export default MainUrl;
