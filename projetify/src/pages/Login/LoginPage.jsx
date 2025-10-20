import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import "../../styles/login.css";

function LoginPage() {
  return (
    <MainLayout centerContent={true}>
      <div className="page-centered-container">
        <form>
          <label htmlFor="email_matricula">E-mail/Matrícula</label>
          <input
            type="text"
            id="email_matricula"
            name="email_matricula"
            placeholder="Digite seu e-mail ou matrícula"
            required
          />

          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            required
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </MainLayout>
  );
}

export default LoginPage;
