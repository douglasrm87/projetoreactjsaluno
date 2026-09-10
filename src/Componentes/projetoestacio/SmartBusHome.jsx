import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SmartBusHome.css'

function SmartBusHome() {
  const navigate = useNavigate()

  const menuItems = [
    { icon: '🚌', texto: 'LINHAS', rota: '/linhas' },
    { icon: '📍', texto: 'MAPA', rota: '/mapa-turistico' },
    { icon: '⭐', texto: 'FAVORITOS', rota: '/favoritos' },
    { icon: '⚠️', texto: 'OCORRÊNCIAS', rota: '/ocorrencias' },
    { icon: '🤝', texto: 'ASSISTÊNCIA SOCIAL', rota: '/assistencia-social' },
    { icon: '🚪', texto: 'SAIR', rota: '/' }
  ]

  return (
    <div className="home-container">

      <div className="header-card">
        <h1>🚌 SmartBus</h1>
        <h2>Mobilidade Inteligente</h2>
      </div>

      <div className="menu-card">

        {menuItems.map((item, index) => (
          <button
            key={index}
            className="menu-button"
            onClick={() => navigate(item.rota)}
          >
            <span>{item.icon}</span>
            {item.texto}
          </button>
        ))}

        <div className="versao">
          Versão 1.0
        </div>

      </div>

    </div>
  )
}

export default SmartBusHome