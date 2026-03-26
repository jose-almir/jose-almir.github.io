---
title: "Arântia Art - Portfólio & CMS Serverless"
description: Um sistema duplo composto por um portfólio multilíngue e um CMS customizado que utiliza a API do GitHub como banco de dados, garantindo custo zero e automação total via GitHub Actions.
image: /blog/cms-portfolio/cms-print.png
isPrivate: false
url: https://arantia.art/
tech:
  - Next.js
  - GitHub REST API
  - GitHub Actions
  - Internationalization (i18n)
order: 6
---

Desenvolvi este sistema para resolver um problema recorrente em portfólios artísticos: a dificuldade de manter conteúdo atualizado sem depender de um desenvolvedor ou de mensalidades caras em plataformas de CMS tradicionais.

## Arquitetura "GitHub as a Database"
A base do projeto é uma estrutura desacoplada:
- **Portfólio Público (Next.js):** Um site estático hospedado no GitHub Pages com suporte a três idiomas (PT, EN, ES) e detecção automática de preferência do usuário.
- **Painel Administrativo (CMS):** Um aplicativo privado que se comunica diretamente com a API do GitHub para realizar operações de leitura e escrita.

## Minhas Contribuições Técnicas
- **Engenharia de Automação:** Configurei fluxos no **GitHub Actions** para que cada alteração no CMS disparasse um commit automático, resultando no rebuild e deploy instantâneo do site público.
- **Integração de Backend Decoupled:** Implementei a lógica de persistência de dados diretamente em arquivos JSON via API REST, eliminando a necessidade de uma camada de banco de dados convencional (Postgres/NoSQL).
- **Experiência do Usuário (UX):** Desenvolvi uma interface de administração intuitiva que abstrai toda a complexidade técnica de comandos Git, permitindo que o usuário final gerencie HQs e ilustrações com um clique.

A arquitetura elimina gastos com servidores e bancos de dados, mantendo a performance de um site estático e a conveniência de um portal dinâmico.

## Processo e Detalhes Técnicos
Você pode ler um artigo detalhado sobre a arquitetura e o desenvolvimento deste projeto no meu blog:

### [Explorando o CMS com GitHub API](/pt/blog/cms-portfolio)

![Interface do CMS](/blog/cms-portfolio/cms-print.png)
![Fluxo de Commits Automatizados](/blog/cms-portfolio/cms-commits.png)
![Portfólio em Operação](/blog/cms-portfolio/portfolio-print.png)
