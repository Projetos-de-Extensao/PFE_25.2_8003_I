import React, { useState, useEffect } from "react"; // Import useState e useEffect
import MainLayout from "../../layouts/MainLayout/MainLayout";
import ProjectCard from "../../components/ProjectCard/ProjectCard"; // Importe o novo componente
import "../../styles/dashboard_aluno.css";

function DashboardAlunoPage() {
  const [alunoNome, setAlunoNome] = useState("Aluno");
  const [projetos, setProjetos] = useState([]); // Estado para guardar a lista de projetos, começa vazio
  const [isLoading, setIsLoading] = useState(true); // Opcional: Estado para indicar carregamento

  useEffect(() => {
    // Busca nome do aluno (como antes)
    const nomeSalvo = localStorage.getItem("alunoNome");
    if (nomeSalvo) {
      setAlunoNome(nomeSalvo);
    }

    // Simula a busca de dados dos projetos
    // (No futuro, isto seria uma chamada fetch para uma API)
    console.log("A buscar projetos do aluno...");
    setIsLoading(true); // Começa a carregar
    // Simula um atraso de rede
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
      setProjetos(dadosExemplo); // Atualiza o estado com os dados recebidos
      setIsLoading(false); // Termina de carregar
      console.log("Projetos do aluno carregados.");
    }, 1000); // Atraso de 1 segundo para simular rede
  }, []); // [] significa que este efeito corre apenas uma vez quando o componente monta

  const handleVerDetalhes = (id) => {
    console.log("Ver detalhes do projeto:", id);
    // Adicionar lógica de navegação aqui (ex: redirecionar para /projeto/{id})
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
            {/* Mostra mensagem de carregamento ou a lista */}
            {isLoading ? (
              <p>A carregar projetos...</p> // Mensagem simples de carregamento
            ) : projetos.length > 0 ? (
              projetos.map(
                (
                  projeto // Mapeia a lista do ESTADO 'projetos'
                ) => (
                  <ProjectCard
                    key={projeto.id}
                    title={projeto.titulo}
                    responsible={projeto.orientador} // Use a prop 'responsible'
                    progress={projeto.progresso}
                    onDetailsClick={() => handleVerDetalhes(projeto.id)}
                  />
                )
              )
            ) : (
              <p>Ainda não está alocado a nenhum projeto.</p> // Mensagem se não houver projetos
            )}
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default DashboardAlunoPage;
