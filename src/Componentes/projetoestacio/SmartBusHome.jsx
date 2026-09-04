import React from 'react'
import './SmartBusHome.css'

function SmartBusHome() {
  const menuItems = [
    { icon: '🚌', texto: 'LINHAS' },
    { icon: '📍', texto: 'MAPA' },
    { icon: '⭐', texto: 'FAVORITOS' },
    { icon: '⚠️', texto: 'OCORRÊNCIAS' },
    { icon: '🤝', texto: 'ASSISTÊNCIA SOCIAL' },
    { icon: '🚪', texto: 'SAIR' }
  ]

  return (
    <div className="home-container">

      <div className="header-card">
        <h1>🚌 SmartBus</h1>
        <h2>Mobilidade Inteligente</h2>
      </div>

      <div className="menu-card">

        {menuItems.map((item, index) => (
          <button key={index} className="menu-button">
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