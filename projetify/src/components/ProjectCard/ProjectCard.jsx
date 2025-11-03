import React from 'react';
import './projectCard.css';
import { Link } from 'react-router-dom';


function ProjectCard({ id, title, image, progress, children }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="project-card-image" />}
      <h4>{title}</h4>
      
      <div className="card-content">
        {children}
      </div>

      
      {progress != null && (
        <div className="progresso">
          <div className="barra">
            <div className="preenchimento" style={{ width: `${progress}%` }}></div>
          </div>
          <span>{progress}% Concluído</span>
        </div>
      )}

      
      <Link to={`/projeto/${id}`}>
        <button className="btn-details">
          Ver Detalhes
        </button>
      </Link>
    </div>
  );
}

export default ProjectCard;