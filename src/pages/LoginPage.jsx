import React from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = (event) => {
   
    console.log("Função handleLogin chamada");
    navigate("/home"); 
  };
  return (
    <div className="login-container">
      <div className="login-image">
        <img
          src="image2.png" 
          alt="Supermercado"
        />
      </div>
      <div className="login-form">
        <h1>Seja Bem-Vindo</h1>
        <p>Fazer Login</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="ex: admin@gmail.com"
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="ex: 4321"
          />
          <button  type="submit">Criar Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
