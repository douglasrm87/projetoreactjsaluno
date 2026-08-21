import React, { useState } from 'react';
import './MeuHome.css';
import {
  jogosDoDia,
  jogosDaSemana,
  corridasDoDia,
  corridasDaSemana,
} from './EsporteDados';

const canalClassName = {
  'TV Globo': 'globo',
  SBT: 'sbt',
  Band: 'band',
  ESPN: 'espn',
  Premiere: 'premiere',
  'F1 TV': 'f1',
  DAZN: 'dazn',
};

function getInicialCanal(nome) {
  return nome
    .split(' ')
    .map((parte) => parte[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function ListaCanais({ canais = {} }) {
  const abertas = canais.aberta || [];
  const fechadas = canais.fechada || [];

  return (
    <div className="transmissao-container">
      <div className="transmissao-grupo">
        <span className="transmissao-label">TV aberta</span>
        <div className="channel-list">
          {abertas.map((canal) => (
            <span key={canal} className={`channel-badge ${canalClassName[canal] || 'default'}`}>
              <span className="channel-icon">{getInicialCanal(canal)}</span>
              {canal}
            </span>
          ))}
        </div>
      </div>

      <div className="transmissao-grupo">
        <span className="transmissao-label">TV fechada</span>
        <div className="channel-list">
          {fechadas.map((canal) => (
            <span key={canal} className={`channel-badge ${canalClassName[canal] || 'default'}`}>
              <span className="channel-icon">{getInicialCanal(canal)}</span>
              {canal}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ListaEsportes({ titulo, itens, tipo }) {
  return (
    <div className="home-panel">
      <h2>{titulo}</h2>
      <div className="lista-itens">
        {itens.map((item, index) => (
          <div key={`${tipo}-${index}`} className="item-card">
            {tipo === 'futebol' ? (
              <>
                <div className="item-times">
                  <span>{item.timeA}</span>
                  <strong>X</strong>
                  <span>{item.timeB}</span>
                </div>
                <p>{item.horario}</p>
                <small>{item.local}</small>
                <ListaCanais canais={item.canais} />
              </>
            ) : (
              <>
                <div className="item-times item-times--formula">
                  <span>{item.nome}</span>
                </div>
                <p>{item.horario}</p>
                <small>{item.circuito}</small>
                <ListaCanais canais={item.canais} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function MeuHome({ usuario = 'aluno' }) {
  const [categoria, setCategoria] = useState('futebol');

  const itensDia = categoria === 'futebol' ? jogosDoDia : corridasDoDia;
  const itensSemana = categoria === 'futebol' ? jogosDaSemana : corridasDaSemana;

  return (
    <div className="home-page">
      <div className="home-shell">
        <header className="home-header">
          <div>
            <p className="home-bemvindo">Olá, {usuario}</p>
            <h1>Sport Center</h1>
          </div>
          <button
            type="button"
            className="logout-button"
            onClick={() => window.location.reload()}
          >
            Sair
          </button>
        </header>

        <nav className="home-tabs" aria-label="Categorias esportivas">
          <button
            type="button"
            className={categoria === 'futebol' ? 'tab active' : 'tab'}
            onClick={() => setCategoria('futebol')}
          >
            Futebol
          </button>
          <button
            type="button"
            className={categoria === 'formula1' ? 'tab active' : 'tab'}
            onClick={() => setCategoria('formula1')}
          >
            Fórmula 1
          </button>
        </nav>

        <section className="home-summary">
          <div className="summary-card">
            <span>Hoje</span>
            <strong>{categoria === 'futebol' ? '3 jogos' : '3 corridas'}</strong>
          </div>
          <div className="summary-card">
            <span>Semana</span>
            <strong>{categoria === 'futebol' ? '6 partidas' : '6 eventos'}</strong>
          </div>
          <div className="summary-card highlight">
            <span>Destaque</span>
            <strong>{categoria === 'futebol' ? 'Clássico nacional' : 'Qualifying decisivo'}</strong>
          </div>
        </section>

        <section className="home-grid">
          <ListaEsportes
            titulo={categoria === 'futebol' ? 'Jogos do dia' : 'Corridas do dia'}
            itens={itensDia}
            tipo={categoria}
          />

          <ListaEsportes
            titulo={categoria === 'futebol' ? 'Jogos da semana' : 'Corridas da semana'}
            itens={itensSemana}
            tipo={categoria}
          />
        </section>
      </div>
    </div>
  );
}

export default MeuHome;
