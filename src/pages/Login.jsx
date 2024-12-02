import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="Container">
      <div className="ContainerImg">
        <img src="image2.png" alt="Login" />
      </div>
      <div className="Right">
        <div className="Conteudo">
          <h1>Seja Bem Vindo</h1>
          <h2>Fazer Login</h2>
          <input type="email" placeholder="Email:" />
          <input type="password" placeholder="Senha:" />
          <button>Entre</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
