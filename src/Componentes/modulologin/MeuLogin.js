import React, { useState } from 'react';
import './MeuLogin.css';
import MeuHome from './MeuHome';

const USUARIO_VALIDO = 'aluno';
const SENHA_VALIDA = '1234';

function MeuLogin() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [logado, setLogado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (usuario.trim() === USUARIO_VALIDO && senha === SENHA_VALIDA) {
      setErro('');
      window.alert('Login realizado com sucesso! Bem-vindo ao painel esportivo.');
      setLogado(true);
      return;
    }

    setErro('Usuário ou senha inválidos. Tente: aluno / 1234');
  };

  if (logado) {
    return <MeuHome usuario={usuario.trim() || 'aluno'} />;
  }

  return (
    <div className="meu-login-page">
      <div className="meu-login-card">
        <div className="meu-login-badge">SPORT ACADEMY</div>
        <h1>Login</h1>
        <p className="meu-login-subtitle">Acesse o painel de futebol e Fórmula 1.</p>

        <form onSubmit={handleSubmit} className="meu-login-form">
          <label className="meu-login-field">
            <span>Usuário</span>
            <input
              type="text"
              value={usuario}
              onChange={(event) => setUsuario(event.target.value)}
              placeholder="Digite o usuário"
            />
          </label>

          <label className="meu-login-field">
            <span>Senha</span>
            <input
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              placeholder="Digite a senha"
            />
          </label>

          {erro && <div className="meu-login-erro">{erro}</div>}

          <button type="submit" className="meu-login-button">
            Entrar
          </button>
        </form>

        <p className="meu-login-dica">
          Dica: usuário <strong>aluno</strong> e senha <strong>1234</strong>
        </p>
      </div>
    </div>
  );
}

export default MeuLogin;
