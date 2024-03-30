import React, { useState } from "react";

import "./style.scss";

import heroesImg from "../../assets/investment.svg";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

    const usernameKey = "admin";
    const passwordKey = "admin";

    if (username === usernameKey && password === passwordKey) {
      alert("Login efetuado com sucesso!");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <h1>Bem-vindo a Fintech </h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              placeholder="Usuário"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </div>


          <button className="button" type="submit">
            Entrar
          </button>

        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </div>
  );
}