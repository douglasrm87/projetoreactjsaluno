import React, { useState, useEffect } from "react";
import "./Favoritos.css";

export default function Favoritos() {

  const [novoFavorito, setNovoFavorito] = useState("");
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const dados = localStorage.getItem("favoritosSmartBus");

    if (dados) {
      setFavoritos(JSON.parse(dados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "favoritosSmartBus",
      JSON.stringify(favoritos)
    );
  }, [favoritos]);

  const adicionarFavorito = () => {
    if (novoFavorito.trim() === "") return;

    setFavoritos([
      ...favoritos,
      {
        id: Date.now(),
        nome: novoFavorito
      }
    ]);

    setNovoFavorito("");
  };

  const removerFavorito = (id) => {
    setFavoritos(
      favoritos.filter(item => item.id !== id)
    );
  };

  return (
    <div className="favoritos-container">

      <div className="card-header">
        <h1>⭐ Meus Favoritos</h1>
        <p>
          Salve linhas, destinos e locais utilizados
          com frequência.
        </p>
      </div>

      <div className="card-form">
        <input
          type="text"
          placeholder="Digite uma linha ou local..."
          value={novoFavorito}
          onChange={(e) =>
            setNovoFavorito(e.target.value)
          }
        />

        <button onClick={adicionarFavorito}>
          Adicionar
        </button>
      </div>

      <div className="card-lista">

        {favoritos.length === 0 ? (
          <p>Nenhum favorito cadastrado.</p>
        ) : (
          favoritos.map((item) => (
            <div
              className="favorito-item"
              key={item.id}
            >
              <span>⭐ {item.nome}</span>

              <button
                className="btn-excluir"
                onClick={() =>
                  removerFavorito(item.id)
                }
              >
                Excluir
              </button>
            </div>
          ))
        )}

      </div>

    </div>
  );
}