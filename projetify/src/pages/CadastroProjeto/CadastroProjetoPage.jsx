import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import "../../styles/cadastro_projeto.css";

function CadastroProjetoPage() {
  // Simulação de submit para o formulário
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataInicio = new Date(document.getElementById("data_inicio").value);
    const dataTermino = new Date(document.getElementById("data_termino").value);

    if (dataTermino < dataInicio) {
      alert("A data de término não pode ser anterior à data de início!");
      return;
    }

    alert("Projeto cadastrado com sucesso!");
    event.target.reset();
  };

  return (
    <MainLayout centerContent={true} isDashboardPage={true}>
      <form id="formCadastroProjeto" onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Cadastrar Novo Projeto</h2>
          <p>Preencha os dados do projeto abaixo</p>
        </div>

        <div className="form-group">
          <label htmlFor="titulo">Título do Projeto</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            placeholder="Digite o título do projeto"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            placeholder="Descreva o objetivo e escopo do projeto"
            required
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="categoria">Categoria</label>
            <select id="categoria" name="categoria" required>
              <option value="">Selecione...</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="pesquisa">Pesquisa</option>
              <option value="desenvolvimento">Desenvolvimento</option>
              <option value="inovacao">Inovação</option>
              <option value="social">Social</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="prioridade">Prioridade</label>
            <select id="prioridade" name="prioridade" required>
              <option value="">Selecione...</option>
              <option value="baixa">Baixa</option>
              <option value="media">Média</option>
              <option value="alta">Alta</option>
              <option value="urgente">Urgente</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="data_inicio">Data de Início</label>
            <input type="date" id="data_inicio" name="data_inicio" required />
          </div>
          <div className="form-group">
            <label htmlFor="data_termino">Data de Término</label>
            <input type="date" id="data_termino" name="data_termino" required />
          </div>
        </div>

        <button type="submit">Cadastrar Projeto</button>
      </form>
    </MainLayout>
  );
}

export default CadastroProjetoPage;
