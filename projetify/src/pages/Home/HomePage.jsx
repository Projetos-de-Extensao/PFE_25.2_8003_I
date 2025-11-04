import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "../../styles/index.css";

function HomePage() {
  const [hallOfFameProjects, setHallOfFameProjects] = useState([]);
  const [isLoadingHallOfFame, setIsLoadingHallOfFame] = useState(true);

  useEffect(() => {
    console.log("useEffect executado! Carregando países...");

    const loadProject = () => {
      fetch("http://localhost:3000/projetos")
        .then((response) => response.json())
        .then((data) => {
          console.log("Projetos carregados:", data.length);
          const mapped = data.map((projeto) => ({
            id: projeto.id,
            titulo: projeto.titulo,
            responsavel: projeto.responsavel,
            prazo: projeto.prazo,
            progresso: projeto.progresso,
            status: projeto.status,
            disciplina: projeto.disciplina,
            imagem: projeto.imagem,
          }));

          console.log("Projetos mapped", mapped);
          setHallOfFameProjects(mapped);
          setIsLoadingHallOfFame(false);
        })
        .catch((error) => {
          console.error("Erro ao carregar projetos:", error);
          setIsLoadingHallOfFame(false);
        });
    };
    loadProject();
  }, []);

  return (
    <MainLayout>
      <section className="hall-fama">
        <h2>Hall da Fama de Projetos</h2>
        <div className="carrossel">
          {isLoadingHallOfFame ? (
            <p>A carregar Hall da Fama...</p>
          ) : hallOfFameProjects.length > 0 ? (
            hallOfFameProjects.slice(0, 4).map((projeto) => (
              <ProjectCard
                key={projeto.id}
                id={projeto.id}
                titulo={projeto.titulo}
                imagem={projeto.imagem}
                progresso={projeto.progresso}
              >
                <p>
                  <strong>Responsável:</strong> {projeto.responsavel}
                </p>
                <p>
                  <strong>Disciplina:</strong> {projeto.disciplina}
                </p>
                <p>
                  <strong>Prazo:</strong> {projeto.prazo}
                </p>
                <p>
                  <strong>Status:</strong> {projeto.status}
                </p>
              </ProjectCard>
            ))
          ) : (
            <p>Nenhum projeto no Hall da Fama ainda.</p>
          )}
        </div>
      </section>

      <section className="como-funciona">
        <div className="container">
          <h2>Como funciona?</h2>
          <div className="steps">
            <div className="step">
              <span>1️⃣</span>
              <p>A empresa cadastra um projeto com sua proposta.</p>
            </div>
            <div className="step">
              <span>2️⃣</span>
              <p>A coordenação analisa e aprova o projeto.</p>
            </div>
            <div className="step">
              <span>3️⃣</span>
              <p>O professor é designado para orientar o projeto.</p>
            </div>
            <div className="step">
              <span>4️⃣</span>
              <p>Os alunos executam o projeto e recebem feedback.</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default HomePage;
