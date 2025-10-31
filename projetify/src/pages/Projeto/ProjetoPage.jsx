import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import "../../styles/projeto.css";

const mockEntregas = [
  { id: 1, nome: "Documentacao_Requisitos_v1.pdf", data: "25/10/2025" },
  { id: 2, nome: "Prototipo_Baixa_Fidelidade.fig", data: "28/10/2025" },
];

function ProjetoPage() {
  const [feedbacks, setFeedbacks] = useState([
    { author: "Prof. Carlos", text: "Excelente trabalho até aqui! 👏" },
  ]);
  const [novoComentario, setNovoComentario] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const [entregasAnteriores, setEntregasAnteriores] = useState(mockEntregas);

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    if (novoComentario.trim() !== "") {
      setFeedbacks([...feedbacks, { author: "Você", text: novoComentario }]);
      setNovoComentario("");
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      const novaEntrega = {
        id: entregasAnteriores.length + 1,
        nome: selectedFile.name,
        data: new Date().toLocaleDateString("pt-BR"),
      };
      setEntregasAnteriores([...entregasAnteriores, novaEntrega]);

      alert(`Ficheiro "${selectedFile.name}" enviado com sucesso!`);
      setSelectedFile(null);
      event.target.reset();
    } else {
      alert("Por favor, selecione um ficheiro primeiro.");
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
            ecológicos no cotidiano...
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

        <div className="entregas">
          <h3>Entregas</h3>

          <div className="lista-entregas-anteriores">
            <h4>Histórico de Entregas:</h4>
            {entregasAnteriores.length > 0 ? (
              <ul>
                {entregasAnteriores.map((entrega) => (
                  <li key={entrega.id}>
                    <span className="nome-ficheiro">{entrega.nome}</span>
                    <span className="data-entrega">{entrega.data}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhuma entrega anterior.</p>
            )}
          </div>

          <form className="upload-form" onSubmit={handleFileSubmit}>
            <label htmlFor="file-upload">Fazer nova entrega:</label>
            <input type="file" id="file-upload" onChange={handleFileChange} />
            {selectedFile && <p>Ficheiro selecionado: {selectedFile.name}</p>}
            <button type="submit" className="btn-enviar">
              Enviar Entrega
            </button>
          </form>
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
