import React from 'react';
import './projectCard.css';
import { Link } from 'react-router-dom';


function ProjectCard({ id, titulo, imagem, progresso, children }) {
  return (
    <div className="card">
      {imagem && <img src={imagem} alt={titulo} className="project-card-image" />}
      <h4>{titulo}</h4>
      
      <div className="card-content">
        {children}
      </div>

      
      {progresso != null && (
        <div className="progresso">
          <div className="barra">
            <div className="preenchimento" style={{ width: `${progresso}%` }}></div>
          </div>
          <span>{progresso}% Concluído</span>
        </div>
      )}

      
      <Link to={"/projeto/:id"}>
        <button className="btn-details">
          Ver Detalhes
        </button>
      </Link>
    </div>
  );
}

export default ProjectCard;