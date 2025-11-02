import React, { useState, useContext } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import { DataContext } from "../../context/DataContext";
import "../../styles/cadastro_usuario.css";

function CadastroPage() {
  const { addUser } = useContext(DataContext);

  const [perfil, setPerfil] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addUser({ perfil, email, nome, senha });

    alert("Usuário cadastrado com sucesso!");
    setPerfil("");
    setEmail("");
    setNome("");
    setSenha("");
  };

  return (
    <MainLayout centerContent={true}>
      <form onSubmit={handleSubmit}>
        <div className="form-header">
          <img
            src="/imagens/logo+titulo-semfundo.png"
            alt="Projetify"
            className="logo-semfundo"
          />
          <h2>Boas-Vindas!</h2>
          <h3>Crie sua conta e junte-se à plataforma!</h3>
        </div>

        <label htmlFor="perfil">Tipo de Perfil</label>
        <select id="perfil" name="perfil" required>
          <option value="">Selecione...</option>
          <option value="empresa">Empresa</option>
          <option value="coordenacao">Coordenação</option>
          <option value="professor">Professor</option>
          <option value="aluno">Aluno</option>
        </select>

        <label htmlFor="email_matricula">E-mail/Matrícula</label>
        <input
          type="text"
          id="email_matricula"
          name="email_matricula"
          placeholder="Digite seu e-mail ou matrícula"
          required
        />

        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome completo"
          required
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          name="senha"
          placeholder="Crie uma senha"
          required
        />

        <button type="submit">Cadastrar</button>
      </form>
    </MainLayout>
  );
}

export default CadastroPage;