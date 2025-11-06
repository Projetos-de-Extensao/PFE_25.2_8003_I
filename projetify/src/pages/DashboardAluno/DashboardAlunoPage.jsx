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
          setProjetos(mapped);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Erro ao carregar projetos:", error);
          setIsLoading(false);
        });
    };
    loadProject();
  }, []);

  return (
    <MainLayout isDashboardPage={true}>
      <div className="dashboard-aluno-container">
        <section className="boas-vindas-aluno">
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
              projetos.slice(5, 8).map((projeto) => (
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
              <p>Ainda não está alocado a nenhum projeto.</p>
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default DashboardAlunoPage;
