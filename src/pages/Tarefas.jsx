import React from 'react';
import { Link } from 'react-router-dom';
import './Estilos.css';

function Tarefas() {
  return (
    <div className="tarefas-container">
      <h2>Tarefas</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="navigation-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/tarefa" className="nav-link">Tarefas</Link>
      </div>
    </div>
  );
}

export default Tarefas;
