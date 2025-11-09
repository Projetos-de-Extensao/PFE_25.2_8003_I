## Análise de Tarefa

A análise hierárquica de tarefas (AHT) é uma técnica utilizada para decompor e entender as atividades que um usuário realiza ao interagir com uma aplicação ou sistema. Sua principal função é detalhar, de forma estruturada, as metas, tarefas e ações envolvidas no uso do produto, permitindo identificar pontos críticos, oportunidades de melhoria e necessidades específicas das personas.

## **1. Objetivo da Análise de Tarefas**

Compreender o fluxo de trabalho dos usuários, desde as metas gerais até as ações mais específicas.
Identificar possíveis dificuldades, redundâncias ou etapas desnecessárias no processo.
Apoiar o design de interfaces mais intuitivas e eficientes, alinhadas às necessidades reais dos usuários.
Facilitar a comunicação entre equipes de desenvolvimento, design e stakeholders, tornando claro o que precisa ser atendido pela aplicação.

## **2. Público-Alvo (Personas)**

- Nome da Persona: Mariana
- Descrição: Gestora de Empresa Externa, busca constantemente soluções para sua organização.
- Necessidades: Canal centralizado para propor projetos e transparência no acompanhamento das entregas.
- Objetivos: Cadastrar projetos de forma simples e obter soluções aplicáveis para a empresa.

---

- Nome da Persona: Thiago
- Descrição: Coordenador de curso no IBMEC, responsável por validar projetos e manter o alinhamento pedagógico da instituição.
- Necessidades: Sistema confiável para aprovar ou reprovar projetos e uma visão geral de todos os projetos ativos.
- Objetivos: Facilitar a comunicação entre empresas, professores e alunos, e garantir a qualidade e a relevância dos projetos.

---

- Nome da Persona: Jonh
- Descrição: Professor das disciplinas de Front-End e Back-End no IBMEC, orientador de alunos em atividades práticas.
- Necessidades: Plataforma organizada para acompanhar diversos projetos e ferramentas para dar feedback.
- Objetivos: Orientar alunos de forma mais eficiente e garantir que os projetos atendam as expectativas.

---

- Nome da Persona: Matheus
- Descrição: Estudante de Ciência de Dados no IBMEC, interessado em desenvolver experiências práticas que complementem sua formação acadêmica.
- Necessidades: Clareza sobre requisitos e prazos, e feedback contínuo para evoluir suas habilidades.
- Objetivos: Adquirir experiência prática e enriquecer o currículo, e conectar-se com empresas para possíveis estágios ou empregos.

### 2. Metas da Aplicação

- Meta 1: Facilitar a conexão entre empresas externas e o IBMEC.
- Meta 2: Oferecer um sistema centralizado para cadastro, aprovação e acompanhamento de projetos.
- Meta 3: Proporcionar aos alunos experiências práticas que complementem sua formação acadêmica.

### 3. Tarefas Principais

| Tarefa                         | Descrição                                                                        | Persona Responsável          |
| ------------------------------ | -------------------------------------------------------------------------------- | ---------------------------- |
| **Cadastro de Projetos**       | Empresas inserem informações sobre novos projetos para avaliação da coordenação. | Mariana (Gestora de Empresa) |
| **Validação de Projetos**      | Coordenação analisa os projetos cadastrados, aprovando ou solicitando ajustes.   | Thiago (Coordenador)         |
| **Acompanhamento de Projetos** | Professores orientam e monitoram o progresso dos alunos em cada projeto.         | Jonh (Professor)             |
| **Participação em Projetos**   | Alunos executam atividades e entregam resultados                                 | Matheus (Aluno)              |

### 4. Ações Detalhadas

Para cada tarefa, descreva as ações necessárias:

## 1. Cadastro de Usuário (Todas as Personas)

1. Acessar a página inicial do sistema.
2. Selecionar a opção de Cadastro.
3. Escolher o tipo de perfil:
   - Empresa
   - Coordenação
   - Professor
   - Aluno
4. Preencher formulário com e-mail/matrícula, nome e senha.
5. Submeter cadastro.
6. Realizar login com as credenciais cadastradas.

## 2. Cadastro de Projetos (Empresa Externa)

1. Realizar cadastro e login como empresa.
2. Navegar até o dashboard da empresa.
3. Selecionar a opção "Cadastrar novo projeto".
4. Preencher formulário com:
   - Título
   - Descrição
   - Requisitos
   - Demais informações do projeto
5. Submeter o projeto para avaliação da coordenação.

## 3. Validação de Projetos (Coordenação)

1. Realizar cadastro e login como coordenação.
2. Acessar o dashboard da coordenação.
3. Visualizar lista de projetos cadastrados pendentes de análise.
4. Selecionar um projeto para avaliação.
5. Analisar se o projeto atende aos critérios pedagógicos.
6. Escolher entre:
   - Aprovar
   - Solicitar ajustes (com comentários)
   - Recusar
7. Caso aprovado, selecionar o professor responsável pelo projeto.

## 4. Acompanhamento de Projetos (Professor)

1. Realizar cadastro e login como professor.
2. Acessar o dashboard do professor.
3. Visualizar lista de projetos designados.
4. Selecionar um projeto para gerenciar.
5. Selecionar alunos que irão participar do projeto.
6. Acompanhar atividades e entregas dos alunos.
7. Dar feedback sobre as entregas e etapas concluídas.
8. Registrar avaliações e comentários no sistema.

## 5. Participação em Projetos (Aluno)

1. Realizar cadastro e login como aluno.
2. Acessar o dashboard do aluno.
3. Visualizar lista de projetos nos quais foi designado.
4. Visualizar atividades e requisitos do projeto.
5. Executar as atividades atribuídas.
6. Submeter entregas pelo sistema.
7. Acompanhar feedback e avaliações do professor.
