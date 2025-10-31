import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import FormInput from "../../components/FormElements/FormInput";
import "../../styles/login.css";

function LoginPage() {
  const [emailMatricula, setEmailMatricula] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login com:", emailMatricula, senha);

    alert("Tentativa de login (ver console)");
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
        </div>

        <FormInput
          label="E-mail/Matrícula"
          id="email_matricula"
          type="text"
          value={emailMatricula}
          onChange={(e) => setEmailMatricula(e.target.value)}
          placeholder="Digite seu e-mail ou matrícula"
          required={true}
        />

        <FormInput
          label="Senha"
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          required={true}
        />

        <button type="submit">Entrar</button>
      </form>
    </MainLayout>
  );
}

export default LoginPage;
