## Bergaz

# Descrição
 
A Bergaz é uma livraria virtual desenvolvida para apresentar e facilitar o acesso a diferentes livros. O site permite que os usuários naveguem pelas páginas, visualizem informações dos livros disponíveis e encontrem formas de entrar em contato com a livraria
 
# Objetivo
 
O objetivo do projeto é oferecer e apresentar livros por meio de uma interface simples, organizada e fácil de utilizar, permitindo que os usuários consultem informações como título, autor, imagem e preço dos livros
 
# Escopo
 
O projeto contempla o desenvolvimento de um site para uma livraria, com páginas destinadas à apresentação dos livros e ao contato com a livraria
 
# Requisitos Funcionais
Exibir os livros disponíveis
Permitir a navegação entre as páginas
Mostrar informações dos livros, como imagem, título, autor e preço
Disponibilizar uma página de contato para que o usuário possa entrar em contato com a livraria
 
# Requisitos Não Funcionais
Possuir uma interface simples e fácil de utilizar
Manter o site organizado e visualmente agradável
Apresentar carregamento rápido das páginas
Possuir um menu de navegação presente em todas as páginas
 
# EAP — Estrutura Analítica do Projeto Bergaz
 
O projeto Bergaz foi dividido em três áreas principais de desenvolvimento: **Documentação, Front-end e Banco de Dados**.
 
| Área                  | Atividades                               |
| --------------------- | ---------------------------------------- |
| **1. Documentação**   | Criar README.md                          |
|                       | Definir requisitos do sistema            |
|                       | Elaborar cronograma do projeto           |
|                       | Organizar quadro Kanban                  |
|__________________________________________________________________|
| **2. Front-end**      | Criar tela inicial                       |
|                       | Criar tela de login                      |
|                       | Desenvolver catálogo de livros           |
|                       | Criar carrinho de compras                |
|__________________________________________________________________|
| **3. Banco de Dados** | Criar tabela de usuários                 |
|                       | Criar tabela de livros                   |
|                       | Criar tabela de pedidos                  |
|                       | Definir relacionamentos entre as tabelas |
 
### Estrutura da EAP
 
**Bergaz — Livraria Virtual**
 
* **Documentação**
 
  * README.md
  * Requisitos do sistema
  * Cronograma
  * Quadro Kanban
* **Front-end**
 
  * Tela inicial
  * Tela de login
  * Catálogo de livros
  * Carrinho de compras
* **Banco de Dados**
 
  * Tabela de usuários
  * Tabela de livros
  * Tabela de pedidos
  * Relacionamento entre tabelas
 
# Cronograma do Projeto Bergaz
 
O cronograma foi organizado de acordo com as atividades apresentadas no quadro Kanban do projeto, considerando as etapas de **Backlog, A Fazer, Em Andamento, Review e Done**.
 
| Etapa                  | Atividade                      | Status       |
| ---------------------- | ------------------------------ | ------------ |
| **1. Planejamento**    | Definir requisitos do sistema  | A Fazer      |
| **2. Documentação**    | Criar README.md                | A Fazer      |
| **3. Documentação**    | Elaborar cronograma            | A Fazer      |
| **4. Documentação**    | Organizar quadro Kanban        | Em Andamento |
| **5. Front-end**       | Criar tela inicial             | Em Andamento |
| **6. Front-end**       | Criar tela de login            | Review       |
| **7. Front-end**       | Desenvolver catálogo de livros | Review       |
| **8. Front-end**       | Criar tela do carrinho         | Backlog      |
| **9. Banco de Dados**  | Criar banco de dados           | Em Andamento |
| **10. Banco de Dados** | Criar cadastro de usuários     | Em Andamento |
| **11. Banco de Dados** | Criar tabela de livros         | A Fazer      |
| **12. Banco de Dados** | Criar tabela de pedidos        | Backlog      |
| **13. Versionamento**  | Criar repositório              | Concluído    |
| **14. Versionamento**  | Configurar Git                 | Concluído    |
 
### Fluxo de desenvolvimento
 
**Backlog → A Fazer → Em Andamento → Review → Done**
 
As atividades serão movimentadas entre as etapas conforme forem desenvolvidas, revisadas e concluídas pela equipe
 
# Wireframes
 
### Página Home
[Ver Wireframe da Home](docs/wireframes/home.png)
 
### Página de Contato
[Ver Wireframe de Contato](docs/wireframes/contato.png)
 
### Página de Conteúdo
[Ver Wireframe de Conteúdo](docs/wireframes/conteúdo.png)
 
 
# Estrutura do Projeto
```text
Livraria/
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── icons/
│   │   ├── busca.png
│   │   ├── carrinho.png
│   │   ├── home.png
│   │   └── menu.png
│   │
│   ├── images/
│   │   └── logo.png
│   │
│   └── js/
│
├── docs/
│   └── wireframes/
│       ├── contato.png
│       ├── conteúdo.png
│       └── home.png
│
├── pages/
│   ├── contato.html
│   └── produtos.html
│
├── Guia_de_Estilo_Inicial.md
├── index.html
└── README.md
```
 
 