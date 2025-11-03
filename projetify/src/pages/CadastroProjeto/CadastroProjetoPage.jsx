import React, { useState, useContext } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { DataContext } from "../../context/DataContext";
import "../../styles/cadastro_projeto.css";

function CadastroProjetoPage() {
  const { addProject } = useContext(DataContext);

  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    disciplina: "",
    prioridade: "",
    data_inicio: "",
    data_termino: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.data_termino < formData.data_inicio) {
      alert("A data de término não pode ser anterior à data de início!");
      return;
    }

    addProject(formData);

    alert("Projeto cadastrado com sucesso!");

    setFormData({
      titulo: "",
      descricao: "",
      disciplina: "",
      prioridade: "",
      data_inicio: "",
      data_termino: "",
    });
  };

  return (
    <MainLayout centerContent={true}>
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
            value={formData.titulo}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            placeholder="Descreva o objetivo e escopo do projeto"
            required
            value={formData.descricao}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="categoria">Disciplina</label>
            <select
              id="categoria"
              name="categoria"
              required
              value={formData.categoria}
              onChange={handleInputChange}
            >
              <option value="">Selecione...</option>
              <option value="tecnologia">Front-End</option>
              <option value="pesquisa">Back-End</option>
              <option value="desenvolvimento">Cloud</option>
              <option value="inovacao">BI</option>
              <option value="social">Redes</option>
              <option value="social">Machine Learning</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="prioridade">Prioridade</label>
            <select
              id="prioridade"
              name="prioridade"
              required
              value={formData.prioridade}
              onChange={handleInputChange}
            >
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
            <input
              type="date"
              id="data_inicio"
              name="data_inicio"
              required
              value={formData.data_inicio}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="data_termino">Data de Término</label>
            <input
              type="date"
              id="data_termino"
              name="data_termino"
              required
              value={formData.data_termino}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button type="submit">Cadastrar Projeto</button>
      </form>
    </MainLayout>
  );
}

export default CadastroProjetoPage;