---
id: dt
title: Design Thinking
---

## **Design Thinking**

### **1. Capa**

- Título do Projeto: Projetify
- Nome da Equipe: Equipe X

---

### **2. Introdução**

- **Contexto do Projeto**:

  O IBMEC busca fortalecer a integração entre o meio acadêmico e o mercado. Surge então a oportunidade de criar um aplicativo web que centralize o cadastro, a gestão e o acompanhamento de projetos, promovendo maior visibilidade e organização.

- **Objetivo**:

  O objetivo do projeto é desenvolver um aplicativo web que facilite a interação entre empresas, professores, coordenação e alunos, possibilitando que projetos sejam cadastrados, aprovados, orientados e executados de maneira prática.

- **Público-Alvo**:  
   Empresas externas: que desejam propor desafios e projetos.

  Coordenação: responsável por validar e organizar as propostas.

  Professores: que atuarão como orientadores dos
  projetos.

  Alunos do IBMEC: que poderão participar ativamente dos projetos.

- **Escopo**:

  Empresa: Cadastro da empresa e submissão de propostas de projeto com descrição, requisitos e objetivos.

  Professor/Coordenação: Dashboard para visualizar, aprovar ou recusar projetos, além de atribuir orientadores e acompanhar o andamento.

  Aluno: Visualização de projetos disponíveis e acompanhamento do status da aplicação.

---

### **3. Fases do Design Thinking**

#### **3.1. Empatia**

- **Pesquisa**:
  Site 1: Plataforma A

  ![Image](https://github.com/user-attachments/assets/6c1d7301-cc2d-4f3f-b3eb-d6a717e507db)

  Funcionalidades:

  1. Unifica a gestão de projetos acadêmicos, de extensão, TCCs e estágios em um único sistema.

  2. O professor consegue acompanhar e enviar feedbacks sobre projetos em andamento.

  3. A plataforma permite que a Instituição consiga projetos de empresas e comunidades para aproximar o aluno de desafios reais.

  Site 2: Zoho Projects

  ![Image](https://github.com/user-attachments/assets/35ed07a6-8715-45f2-a545-f3ef3527a672)

  Funcionalidades:

  1. Papéis e permissões customizáveis (Clientes, Gerente de Projeto, Administrador e Membro), algo similar ao que nosso projeto necessita.

  2. Os projetos podem ser divididos em fases, listas de tarefas e subtarefas.

  3. Relatórios que geram insights como: quem resolveu a maioria dos problemas e divisão de horas de trabalho entre os membros da sua equipe.

  Site 3: Asana

  ![Image](https://github.com/user-attachments/assets/2debb26f-bbde-4a3b-bb35-e18bbaa0114a)

  Funcionalidades:

  1. Permite criar projetos, dividir em tarefas e subtarefas, atribuir responsáveis e prazos.

  2. Papéis definidos: administradores, responsáveis, colaboradores e convidados.

  3. Relatórios de progresso e dashboards visuais que mostram status das tarefas.

  Site 4: Artia

  ![Image](https://github.com/user-attachments/assets/db3ba676-c528-4a27-aa7c-ab41b41c27ca)

  Funcionalidades:

  1. Quadro Kanban.

  2. Apontamento de horas.

  3. Gantt avançado.

  4. EAP.

  5. Relatórios financeiros.

  6. Dashboards em português.

- **Personas**:

  - **Empresas externas:** cadastrar projetos, acompanhar status, avaliar resultados.
  - **Coordenação:** aprovar projetos, gerenciar usuários, gerar relatórios.
  - **Professores:** orientar projetos, avaliar entregas, interagir com alunos.
  - **Alunos:** inscrever-se em projetos, submeter entregas, acompanhar feedback.

#### **3.2. Definição**

- **Problema Central**:

  Como podemos criar uma plataforma centralizada que conecte empresas externas, coordenação, professores e alunos do IBMEC, facilitando o cadastro, a validação e o acompanhamento de projetos acadêmicos em parceria com o mercado?

- **Pontos de Vista (POV)**:

  Empresas externas precisam de um meio rápido e estruturado para cadastrar projetos e acompanhar seus resultados.

  Alunos precisam de um espaço único e transparente onde possam visualizar oportunidades de projetos e acompanhar seu progresso.

  Professores precisam de uma ferramenta que permita orientar alunos de forma organizada e acompanhar a evolução dos projetos.

  Coordenação precisa de um sistema confiável para validar projetos, monitorar o andamento e garantir o alinhamento com os objetivos pedagógicos da instituição.

#### **3.3. Ideação**

- **Brainstorming**:

#### 1. Usuários do Sistema

- **Empresas externas:** cadastrar projetos, acompanhar status, avaliar resultados.
- **Coordenação:** aprovar projetos, gerenciar usuários, gerar relatórios.
- **Professores:** orientar projetos, avaliar entregas, interagir com alunos.
- **Alunos:** ser alocado em projetos, submeter entregas, acompanhar feedback.

#### 2. Estrutura/Funcionalidades

### Home (página que pode ser visualizada sem login)

- Hall da Fama com projetos anteriores
- Seção "Como Funciona":
    1. Empresa cadastra projeto
    2. Coordenação aprova
    3. Professor gerencia
    4. Aluno executa
- Botões para realizar Cadastro e Login de usuários

### Autenticação

- Tela de Cadastro:
    1. Selecionar o tipo de perfil (Empresa, Coordenação, Professor ou Aluno)
    2. Formulário para preencher e-mail/matrícula, nome e senha

  ***

- Tela de Login:
    1. Preencher formulário com e-mail/matrícula e senha.

### Empresa Externa

- Dashboard com:
    1. Área para cadastrar novo projeto
    2. Caso já houver cadastrado um projeto, ele será exibido com seu status (pendente, aprovado,...)
    3. Poderá acessar seus projetos para acompanhar o andamento

### Coordenação

- Dashboard com:
    1. Lista de projetos cadastrados para análise, com opções de aprovar, recusar ou solicitar ajustes com comentários
    2. Após aprovar, deve selecionar o professor responsável
    3. Lista com projetos já em andamento

### Professor

- Dashboard com:
    1. Lista com os projetos a qual foi designado
    2. Dentro dos projetos, ele poderá selecionar os alunos que vão participar, acompanhar as atividades e dar feedback

### Aluno
- Dashboard com:
    1. Projetos a qual foi designado pelo professor
    2. Onde dentro da página do projeto, ele poderá realizar as entregas e acompanhar o feedback

#### **3.4. Prototipagem**

- **Descrição do Protótipo**: Como a ideia foi transformada em um protótipo (esboço, modelo físico, digital, etc.).
- **Materiais Utilizados**: Recursos necessários para criar o protótipo.
- **Testes Realizados**: Como o protótipo foi testado.

---

### **4. Conclusão**

- **Resultados Obtidos**: O que foi alcançado com o projeto.
- **Próximos Passos**: O que ainda precisa ser feito ou implementado.
- **Aprendizados**: Lições aprendidas durante o processo.

---

### **5. Anexos**

- **Mapa Mental 1:**
  ![Mapa Mental](../assets/mapamental.png)

---

## **Dicas para Criar o Documento**

- Use uma linguagem clara e objetiva.
- Inclua visualizações, como mapas de empatia, jornadas do usuário ou esboços de ideias.
- Adapte o documento conforme o estágio do projeto (ex.: um documento inicial pode focar mais na pesquisa, enquanto um final pode detalhar a solução).

Esse modelo é flexível e pode ser ajustado conforme as necessidades do seu projeto ou da sua equipe. O importante é que o documento reflita o processo colaborativo e iterativo do Design Thinking.
