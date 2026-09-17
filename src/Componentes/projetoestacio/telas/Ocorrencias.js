import React, { useState } from "react";
import "./Ocorrencias.css";

export default function Ocorrencias() {

  const [filtro, setFiltro] = useState("");

  const obras = [
    {
      id: 1,
      titulo: "Novo Inter 2",
      local: "Diversos bairros",
      impacto: "Mudanças temporárias em itinerários e estações.",
      status: "Em andamento"
    },
    {
      id: 2,
      titulo: "Arthur Bernardes",
      local: "Santa Quitéria",
      impacto: "Desvios nas linhas Inter 2, Caiuá/Cachoeira e alimentadores.",
      status: "Em andamento"
    },
    {
      id: 3,
      titulo: "BRT Leste/Oeste",
      local: "Rodoferroviária",
      impacto: "Mudanças em estações tubo e circulação dos ônibus.",
      status: "Em andamento"
    },
    {
      id: 4,
      titulo: "Terminal Capão da Imbuia",
      local: "Capão da Imbuia",
      impacto: "Alterações temporárias em pontos e itinerários.",
      status: "Em andamento"
    },
    {
      id: 5,
      titulo: "Affonso Camargo",
      local: "Cristo Rei",
      impacto: "Intervenções viárias e desvios próximos à Rodoviária.",
      status: "Em andamento"
    }
  ];

  const listaFiltrada = obras.filter(
    (obra) =>
      obra.titulo.toLowerCase().includes(filtro.toLowerCase()) ||
      obra.local.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="ocorrencias-container">

      <div className="header">
        <h1>⚠️ Ocorrências Urbanas</h1>
        <p>
          Obras e intervenções que afetam o transporte coletivo.
        </p>
      </div>

      <div className="pesquisa">
        <input
          type="text"
          placeholder="Pesquisar bairro ou obra..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>

      <div className="lista-obras">

        {listaFiltrada.map((obra) => (
          <div className="card-obra" key={obra.id}>
            <h3>{obra.titulo}</h3>

            <p>
              <strong>📍 Local:</strong> {obra.local}
            </p>

            <p>
              <strong>🚌 Impacto:</strong> {obra.impacto}
            </p>

            <span className="status">
              {obra.status}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}