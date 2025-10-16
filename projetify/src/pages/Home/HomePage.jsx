import React from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import "../../styles/index_style.css";

function HomePage() {
  return (
    <MainLayout>
      <section className="hall-fama">
        <h2>Hall da Fama de Projetos</h2>
        <div className="carrossel">
          <div className="card">
            <img
              src="/imagens/Gemini_Generated_Image_8cappt8cappt8cap.png"
              alt="Projeto 1"
            />
            <h3>Projeto X</h3>
            <p>Lorem Ipsum.</p>
          </div>

          <div className="card">
            <img
              src="/imagens/Gemini_Generated_Image_8cappt8cappt8cap.png"
              alt="Projeto 2"
            />
            <h3>Projeto Y</h3>
            <p>Lorem Ipsum.</p>
          </div>

          <div className="card">
            <img
              src="/imagens/Gemini_Generated_Image_8cappt8cappt8cap.png"
              alt="Projeto 3"
            />
            <h3>Projeto Z</h3>
            <p>Lorem Ipsum.</p>
          </div>
        </div>
      </section>

      <section className="como-funciona">
        <h2>Como funciona?</h2>
        <div className="steps">
          <div className="step">
            <span>1️⃣</span>
            <p>A empresa cadastra um projeto com sua proposta.</p>
          </div>
          <div className="step">
            <span>2️⃣</span>
            <p>A coordenação analisa e aprova o projeto.</p>
          </div>
          <div className="step">
            <span>3️⃣</span>
            <p>O professor é designado para orientar o projeto.</p>
          </div>
          <div className="step">
            <span>4️⃣</span>
            <p>Os alunos executam o projeto e recebem feedback.</p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default HomePage;
