import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import "../../styles/projeto.css";

function ProjetoPage() {
  const [feedbacks, setFeedbacks] = useState([
    { author: "Prof. Carlos", text: "Excelente trabalho até aqui! 👏" },
  ]);
  const [novoComentario, setNovoComentario] = useState("");

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    if (novoComentario.trim() !== "") {
      setFeedbacks([...feedbacks, { author: "Você", text: novoComentario }]);
      setNovoComentario("");
    }
  };

  return (
    <MainLayout>
      <section className="detalhes-projeto">
        <h2 id="tituloProjeto">Projeto Integrador - App Sustentável</h2>
        <p>
          <strong>Orientador:</strong> Prof. Carlos Souza
        </p>
        <p>
          <strong>Status:</strong> Em andamento
        </p>

        <div className="progresso">
          <div className="barra">
            <div className="preenchimento" style={{ width: "70%" }}></div>
          </div>
          <span>70% concluído</span>
        </div>

        <div className="descricao">
          <h3>Descrição</h3>
          <p>
            O “App Sustentável” é um aplicativo voltado para incentivar hábitos
            ecológicos no cotidiano. Ele permite que o usuário registre suas
            ações sustentáveis e acompanhe o impacto positivo gerado.
            <br />
            <br />O projeto utiliza geolocalização e notificações inteligentes
            para sugerir pontos de coleta e práticas sustentáveis próximas ao
            usuário.
          </p>
        </div>

        <div className="galeria">
          <h3>Imagens do Projeto</h3>
          <div className="imagens-container">
            <img
              src="/imagens/Gemini_Generated_Image_8cappt8cappt8cap.png"
              alt="Tela inicial do app"
            />
            <img
              src="/imagens/Gemini_Generated_Image_8cappt8cappt8cap.png"
              alt="Tela de impacto ecológico"
            />
            <img
              src="/imagens/Gemini_Generated_Image_8cappt8cappt8cap.png"
              alt="Mapa de pontos sustentáveis"
            />
          </div>
        </div>

        <div className="feedback">
          <h3>Feedback e Comentários</h3>
          <div id="listaFeedback">
            {feedbacks.map((fb, index) => (
              <p key={index}>
                <strong>{fb.author}:</strong> {fb.text}
              </p>
            ))}
          </div>

          <form id="formFeedback" onSubmit={handleFeedbackSubmit}>
            <textarea
              id="comentario"
              placeholder="Deixe seu feedback..."
              value={novoComentario}
              onChange={(e) => setNovoComentario(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="btn-enviar">
              Enviar
            </button>
          </form>
        </div>

        <button className="btn-voltar">← Voltar ao Dashboard</button>
      </section>
    </MainLayout>
  );
}

export default ProjetoPage;
