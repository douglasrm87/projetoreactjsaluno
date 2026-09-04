import React, { useState } from "react";
import "./LoginSmartBus.css";
import { useNavigate } from 'react-router-dom'
export default function LoginSmartBus() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === 'admin@smartbus.com' &&
      senha === '1234'
    ) {
       alert('Login realizado com sucesso.')
      navigate('/home')
    } else {
      alert('E-mail ou senha inválidos.')
    }
    console.log({
      email,
      senha
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="logo-area">
          <div className="logo-icon">🚌</div>

          <h1>SmartBus</h1>
          <p>Mobilidade Inteligente</p>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Entrar</h2>

          <div className="input-group">
            <label htmlFor="email">E-mail</label>

            <input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha</label>

            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Entrar
          </button>

          <div className="register-area">
            <span>Não possui conta?</span>

            <a href="/cadastro">
              Cadastre-se
            </a>
          </div>
        </form>

      </div>
    </div>
  );
}