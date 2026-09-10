import React from "react";
import "./PlanejadorCopelSantaQuiteria.css";

export default function PlanejadorCopelSantaQuiteria() {
  const linhasHospitalCajuru = [
    {
      codigo: "385",
      nome: "Cristo Rei",
      observacao: "Atende a região do Cristo Rei."
    },
    {
      codigo: "302",
      nome: "Centenário / Rui Barbosa",
      observacao: "Integra facilmente com a Praça Rui Barbosa."
    },
    {
      codigo: "216",
      nome: "Cabral / Portão",
      observacao: "Opção para acesso ao Terminal Portão."
    }
  ];

  return (
    <div className="planejador-container">

      <div className="titulo-card">
        <h1>🚌 Rota para Copel Santa Quitéria</h1>
        <p>
          Sugestão de deslocamento saindo do bairro Cristo Rei
        </p>
      </div>

      <div className="linhas-card">
        <h2>Linhas próximas ao Hospital Cajuru</h2>

        <div className="linhas-grid">
          {linhasHospitalCajuru.map((linha) => (
            <div className="linha-item" key={linha.codigo}>
              <h3>{linha.codigo}</h3>
              <p>{linha.nome}</p>
              <small>{linha.observacao}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="roteiro-card">
        <h2>📍 Passo a Passo</h2>

        <ol>
          <li>
            Dirija-se ao ponto localizado próximo ao Hospital Cajuru.
          </li>

          <li>
            Utilize uma linha com conexão para a Praça Rui Barbosa.
          </li>

          <li>
            Na Praça Rui Barbosa faça a integração para uma linha
            com destino ao Terminal Portão.
          </li>

          <li>
            Desembarque no Terminal Portão.
          </li>

          <li>
            Embarque na linha Interbairros II.
          </li>

          <li>
            Desça na região de Santa Quitéria.
          </li>

          <li>
            Caminhe até a unidade da Copel Santa Quitéria.
          </li>
        </ol>
      </div>

      <div className="observacoes-card">
        <h2>ℹ️ Observações</h2>

        <ul>
          <li>Verifique os horários atualizados antes da viagem.</li>
          <li>Confirme os itinerários junto aos canais oficiais da URBS.</li>
          <li>Em horários de pico podem existir alternativas mais rápidas.</li>
        </ul>
      </div>

    </div>
  );
}