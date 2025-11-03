import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "../../styles/index.css";

function HomePage() {
  const [hallOfFameProjects, setHallOfFameProjects] = useState([]);
  const [isLoadingHallOfFame, setIsLoadingHallOfFame] = useState(true);

  useEffect(() => {
    console.log("A buscar projetos do Hall da Fama...");
    setIsLoadingHallOfFame(true);
    setTimeout(() => {
      const dadosExemplo = [
        {
          id: "x",
          title: "Projeto X",
          description:
            "Implementação de sistema de IA para análise preditiva de vendas.",
          image: "/imagens/Gemini_Generated_Image_8cappt8cappt8cap.png",
        },
        {
          id: "y",
          title: "Projeto Y",
          description:
            "Desenvolvimento de aplicativo mobile multiplataforma para gestão de tarefas.",
          image: "/imagens/Gemini_Generated_Image_8cappt8cappt8cap.png",
        },
        {
          id: "z",
          title: "Projeto Z",
          description:
            "Criação de plataforma web acessível para ONG de inclusão social.",
          image: "/imagens/Gemini_Generated_Image_8cappt8cappt8cap.png",
        },
        {
          id: "a",
          title: "Projeto A",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          image: "/imagens/Gemini_Generated_Image_8cappt8cappt8cap.png",
        },
      ];

      
      setHallOfFameProjects(dadosExemplo);
      setIsLoadingHallOfFame(false);
      console.log("Projetos do Hall da Fama carregados.");
    }, 800);
  }, []);

  const handleCardClick = (id) => {
    console.log("Clicou no card do projeto do Hall da Fama:", id);
  };

  return (
    <MainLayout>
      <section className="hall-fama">
        <h2>Hall da Fama de Projetos</h2>
        <div className="carrossel">
          {isLoadingHallOfFame ? (
            <p>A carregar Hall da Fama...</p>
          ) : hallOfFameProjects.length > 0 ? (
            hallOfFameProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                image={project.image}
                
                onDetailsClick={() => handleCardClick(project.id)}
                detailsButtonText="Saber Mais"
              >
                <p>{project.description}</p>
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
