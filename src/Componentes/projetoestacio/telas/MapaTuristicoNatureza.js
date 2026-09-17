import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const pontosTuristicos = [
  {
    nome: "Jardim Botânico",
    lat: -25.441,
    lng: -49.239,
    descricao: "Principal cartão postal de Curitiba."
  },
  {
    nome: "Parque Barigui",
    lat: -25.423,
    lng: -49.308,
    descricao: "Grande área verde e lazer."
  },
  {
    nome: "Parque Tingui",
    lat: -25.409,
    lng: -49.315,
    descricao: "Parque com bosques e ciclovias."
  },
  {
    nome: "Parque Tanguá",
    lat: -25.379,
    lng: -49.275,
    descricao: "Mirantes e natureza."
  },
  {
    nome: "Bosque Alemão",
    lat: -25.408,
    lng: -49.283,
    descricao: "Bosque temático."
  },

  {
    nome: "Reservatório Piraquara I",
    lat: -25.500,
    lng: -49.050,
    descricao:
      "Importante manancial de abastecimento da Região Metropolitana."
  },

  {
    nome: "Reservatório Piraquara II",
    lat: -25.525,
    lng: -49.080,
    descricao:
      "Grande reservatório localizado na área de proteção dos mananciais."
  },

  {
    nome: "Mananciais da Serra",
    lat: -25.503,
    lng: -48.994,
    descricao:
      "Área de preservação ambiental e trilhas ecológicas."
  },

  {
    nome: "Parque das Águas de Piraquara",
    lat: -25.441,
    lng: -49.064,
    descricao:
      "Destino turístico voltado à natureza e lazer."
  },

  {
    nome: "Morro do Canal",
    lat: -25.421,
    lng: -49.027,
    descricao:
      "Uma das trilhas mais procuradas da região."
  },

  {
    nome: "Represa do Passaúna",
    lat: -25.489,
    lng: -49.365,
    descricao:
      "Área de preservação com mirantes e cicloturismo."
  },

  {
    nome: "Campo Magro",
    lat: -25.367,
    lng: -49.454,
    descricao:
      "Município com cachoeiras, trilhas e ecoturismo."
  },

  {
    nome: "Rio Verde - Campo Magro",
    lat: -25.335,
    lng: -49.433,
    descricao:
      "Região de preservação ambiental."
  },

  {
    nome: "APA do Passaúna",
    lat: -25.474,
    lng: -49.390,
    descricao:
      "Área protegida muito procurada para turismo ecológico."
  }
];

export default function MapaTuristicoNatureza() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[-25.45, -49.25]}
        zoom={10}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {pontosTuristicos.map((ponto, index) => (
          <Marker
            key={index}
            position={[ponto.lat, ponto.lng]}
          >
            <Popup>
              <h3>{ponto.nome}</h3>
              <p>{ponto.descricao}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}