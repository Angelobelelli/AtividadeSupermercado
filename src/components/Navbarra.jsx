import React from 'react'

const Navbarra = () => {
  return (
    <div>
      <header className="header">
        <div className="header-logo"> 
          <img src="logo.png" alt="Logo Supermercado" />
        </div>
        <nav className="header-nav">
          <input type="text" placeholder="Pesquisar..." className="search-input" />
          <button className="user-icon">👤</button>
      
        </nav>
      </header>
    </div>
  )
}

export default Navbarra
