#  Sprint Planning


### **Sprint 1: Estrutura Básica, Cadastro e Submissão de Projetos**

**Objetivo:** Construir a fundação do sistema, permitindo que todos os tipos de usuários se cadastrem e que as empresas possam submeter suas propostas de projeto.

**Backlog da Sprint 1:**

* Home e Autenticação
    * Criar a página Home pública, contendo a seção "Como Funciona", o "Hall da Fama" de projetos anteriores e os botões de "Cadastro" e "Login".
    * Desenvolver a tela de Cadastro, permitindo ao usuário selecionar seu perfil (Empresa, Coordenação, Professor, Aluno) e preencher os dados necessários.
    * Implementar a tela de Login para todos os perfis de usuário.

* Funcionalidades da Empresa
    * Construir o Dashboard da Empresa Externa.
    * Criar o formulário de "Cadastrar Novo Projeto" com os campos de título, descrição e requisitos.
    * Implementar a funcionalidade para a empresa visualizar a lista de seus projetos cadastrados e o status de cada um (pendente, aprovado, etc.).

---

### **Sprint 2: Validação e Gerenciamento de Projetos (Coordenação e Professor)**

**Objetivo:** Implementar o fluxo de validação de projetos pela coordenação e as ferramentas iniciais para que os professores possam gerenciar os projetos e as equipes de alunos.

**Backlog da Sprint 2:**

* Funcionalidades da Coordenação
    * Desenvolver o Dashboard da Coordenação.
    * Criar a tela de análise de projetos, com as opções de "Aprovar", "Recusar" e "Solicitar Ajustes" (com campo para comentários).
    * Implementar a funcionalidade para a coordenação designar um professor responsável a um projeto aprovado.
    * Criar a visualização da lista de projetos que já estão em andamento.

* Funcionalidades do Professor
    * Construir o Dashboard do Professor para listar os projetos aos quais foi designado.
    * Implementar a funcionalidade que permite ao professor selecionar e alocar alunos em um projeto.

---

### **Sprint 3: Execução pelo Aluno, Feedback e Notificações**

**Objetivo:** Finalizar o ciclo do projeto, permitindo que os alunos participem, realizem entregas e recebam feedback, além de implementar o sistema de notificações para todos os usuários.

**Backlog da Sprint 3:**

* Funcionalidades do Aluno
    * Desenvolver o Dashboard do Aluno, exibindo os projetos em que ele está alocado.
    * Criar a página interna do projeto, onde o aluno pode visualizar as atividades, requisitos e prazos.
    * Implementar a funcionalidade para o aluno submeter entregas (ex: upload de arquivos).

* Interação e Finalização
    * Desenvolver a ferramenta para o professor registrar feedbacks e avaliações nas entregas dos alunos.
    * Implementar o sistema de notificações para eventos importantes:
        * Aprovação de projeto
        * Professor designado
        * Aluno alocado
        * Feedback recebido
    * Realizar ajustes gerais