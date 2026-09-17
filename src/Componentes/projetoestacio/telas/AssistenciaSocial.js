import React from "react";
import "./AssistenciaSocial.css";

export default function AssistenciaSocial() {
  const pontosAjuda = [
    {
      icone: "🍽️",
      titulo: "Alimentação",
      descricao:
        "Restaurantes populares e locais com refeições acessíveis.",
      cor: "#4CAF50"
    },
    {
      icone: "🏥",
      titulo: "Saúde",
      descricao:
        "UPAs, UBSs e hospitais próximos.",
      cor: "#2196F3"
    },
    {
      icone: "🏠",
      titulo: "Abrigo",
      descricao:
        "Locais de acolhimento e casas de passagem.",
      cor: "#FF9800"
    },
    {
      icone: "🚿",
      titulo: "Higiene",
      descricao:
        "Pontos com acesso a banho e higiene pessoal.",
      cor: "#9C27B0"
    },
    {
      icone: "👨‍👩‍👧",
      titulo: "CRAS",
      descricao:
        "Centros de Referência da Assistência Social.",
      cor: "#E91E63"
    },
    {
      icone: "🧥",
      titulo: "Campanhas Solidárias",
      descricao:
        "Doações de roupas e agasalhos.",
      cor: "#795548"
    }
  ];

  return (
    <div className="assistencia-container">

      <div className="header-card">
        <h1>🤝 Guia Solidário SmartBus</h1>

        <p>
          Se precisar de ajuda, estamos com você.
          Descubra pontos de apoio em Curitiba.
        </p>
      </div>

      <div className="historia-card">

        <h2>🚌 Caminho da Solidariedade</h2>

        <p>
          Imagine que você está viajando pela cidade.
          Em cada parada existe uma oportunidade de ajuda.
          Escolha um destino abaixo para encontrar apoio.
        </p>

      </div>

      <div className="grid-cards">

        {pontosAjuda.map((item, index) => (
          <div
            key={index}
            className="ajuda-card"
            style={{
              borderTop: `6px solid ${item.cor}`
            }}
          >
            <h2>{item.icone}</h2>

            <h3>{item.titulo}</h3>

            <p>{item.descricao}</p>

            <button>
              Ver Pontos Próximos
            </button>

          </div>
        ))}

      </div>

      <div className="mensagem-card">

        <h2>💙 Você não está sozinho</h2>

        <p>
          Curitiba possui uma rede de apoio formada por
          serviços públicos, instituições sociais,
          unidades de saúde e centros de acolhimento.
        </p>

        <p>
          O SmartBus ajuda você a localizar esses
          serviços utilizando o transporte público.
        </p>

      </div>

    </div>
  );
}