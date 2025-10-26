import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "../../styles/dashboard_aluno.css";

function DashboardAlunoPage() {
  const [alunoNome, setAlunoNome] = useState("Aluno");
  const [projetos, setProjetos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const nomeSalvo = localStorage.getItem("alunoNome");
    if (nomeSalvo) {
      setAlunoNome(nomeSalvo);
    }

    console.log("A buscar projetos do aluno...");
    setIsLoading(true);
    setTimeout(() => {
      const dadosExemplo = [
        {
          id: 1,
          titulo: "Projeto Integrador - App Sustentável",
          orientador: "Prof. Carlos Souza",
          progresso: 70,
        },
        {
          id: 2,
          titulo: "Sistema de Agendamento Escolar",
          orientador: "Prof. Ana Pereira",
          progresso: 45,
        },
        {
          id: 3,
          titulo: "Plataforma de Doações Online",
          orientador: "Prof. João Lima",
          progresso: 90,
        },
      ];
      setProjetos(dadosExemplo);
      setIsLoading(false);
      console.log("Projetos do aluno carregados.");
    }, 1000);
  }, []);

  const handleVerDetalhes = (id) => {
    console.log("Ver detalhes do projeto:", id);
  };

  return (
    <MainLayout isDashboardPage={true}>
      <div className="dashboard-aluno-container">
        <section className="boas-vindas">
          <h2>
            Bem-vindo(a), <span id="nomeAluno">{alunoNome}</span> 👋
          </h2>
          <p>Aqui estão seus projetos e seu progresso dentro da plataforma.</p>
        </section>

        <section className="projetos">
          <h3>Seus Projetos</h3>
          <div className="cards-container">
            {isLoading ? (
              <p>A carregar projetos...</p>
            ) : projetos.length > 0 ? (
              projetos.map((projeto) => (
                <ProjectCard
                  key={projeto.id}
                  title={projeto.titulo}
                  responsible={projeto.orientador}
                  progress={projeto.progresso}
                  onDetailsClick={() => handleVerDetalhes(projeto.id)}
                />
              ))
            ) : (
              <p>Ainda não está alocado a nenhum projeto.</p>
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default DashboardAlunoPage;
