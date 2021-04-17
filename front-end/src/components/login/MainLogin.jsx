import "./MainLogin.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import ToastAnimated, { showToast } from "../../components/alerts/toast";
import Eye from "../../assets/olho.png";
import EyeInvisible from "../../assets/olho-invisivel.png";
import api from "../../utils/api";
import { login } from "../../utils/auth";

function MainLogin() {
  const history = useHistory();
  const [iconEye, setIconEye] = useState(Eye);
  const [inputTypePassword, setInputTypePassword] = useState("password");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function iconInvisible() {
    if (iconEye != Eye) {
      setIconEye(Eye);
      setInputTypePassword("password");
    } else {
      setIconEye(EyeInvisible);
      setInputTypePassword("text");
    }
  }

  function handleSignIn() {
    const userData = {
      email,
      password,
    };

    api
      .post("/login", userData)
      .then((success) => {
        login(JSON.stringify(success.data.success));
        history.push("/");
      })
      .catch((error) => {
        showToast({ type: "error", message: error.response.data.error });
      });
  }

  return (
    <div className="container-mainLogin">
      <div className="container-form-login">
        <form action="">
          <label>Email</label>
          <input
            type="email"
            placeholder="exemplo@exemplo.com"
            onChange={(text) => setEmail(text.target.value)}
          />

          <label>Senha</label>
          <input
            type={inputTypePassword}
            placeholder="*********"
            onChange={(text) => setPassword(text.target.value)}
          />
          <img src={iconEye} alt="olho" onClick={iconInvisible} />

          <button type="button" onClick={handleSignIn}>
            Entrar
          </button>
        </form>
        <ToastAnimated />
      </div>
    </div>
  );
}

export default MainLogin;
