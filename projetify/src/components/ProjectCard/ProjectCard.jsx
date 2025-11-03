import React from "react";
import "./projectCard.css";
import { Link } from 'react-router-dom';

function ProjectCard({
  title,
  responsible,
  progress,
  onDetailsClick,
  image,
  children,
}) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="project-card-image" />}

      <h4>{title}</h4>
      {responsible && (
        <p>
          <strong>Orientador/Empresa:</strong> {responsible}
        </p>
      )}

      {progress !== undefined && (
        <div className="progresso">
          <div className="barra">
            <div
              className="preenchimento"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span>{progress}% Concluído</span>
        </div>
      )}

      {children}

      {onDetailsClick && (
        <button className="btn-detalhes" onClick={onDetailsClick}>
          Ver Detalhes
        </button>
      )}
    </div>
  );
}

export default ProjectCard;
