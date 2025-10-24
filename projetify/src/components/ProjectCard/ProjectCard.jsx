import React from "react";
import "./projectCard.css";

// Componente BÁSICO para exibir informações do projeto
// Adicionada a prop 'image'
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
      {/* Adicionado o elemento de imagem */}
      {image && <img src={image} alt={title} className="project-card-image" />}

      <h4>{title}</h4>
      {responsible && (
        <p>
          <strong>Orientador/Empresa:</strong> {responsible}
        </p>
      )}

      {/* Barra de progresso (opcional, só aparece se 'progress' for fornecido) */}
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

      {/* Renderiza quaisquer outros elementos passados como children (como a descrição) */}
      {children}

      {/* Botão de detalhes (opcional, só aparece se 'onDetailsClick' for fornecido) */}
      {onDetailsClick && (
        <button className="btn-detalhes" onClick={onDetailsClick}>
          Ver Detalhes
        </button>
      )}
    </div>
  );
}

export default ProjectCard;
