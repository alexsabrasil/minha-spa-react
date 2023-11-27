import React from 'react';
import { Link } from 'react-router-dom';
import './Estilos.css';

function Sobre() {
  return (
    <div className="sobre-container">
      <h2>Sobre</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <div className="navigation-links"> 
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/sobre" className="nav-link">Sobre</Link>
      </div>
    </div>
  );
}

export default Sobre;
