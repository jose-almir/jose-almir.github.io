---
title: "Arântia Art - Portfólio e CMS Serverless"
description: Portfólio multilíngue com CMS customizado sobre GitHub API, pensado para atualização simples e custo operacional praticamente zero.
image: /blog/cms-portfolio/cms-print.png
isPrivate: false
url: https://arantia.art/
role: "Arquitetura do produto, CMS customizado e automação de publicação."
challenge: "Dar autonomia de atualização ao cliente sem exigir painel complexo, servidor dedicado ou conhecimento técnico de Git."
outcome: "A artista passou a manter o portfólio sem dependência de desenvolvedor e sem custo recorrente de infraestrutura."
proofPoints:
  - "Estruturei um CMS privado que grava conteúdo diretamente via GitHub REST API."
  - "Automatizei rebuild e deploy com GitHub Actions a cada alteração publicada."
  - "Mantive o site público estático, rápido e com suporte a três idiomas."
  - "A interface do CMS abstrai operações técnicas para uso cotidiano não técnico."
tech:
  - Next.js
  - GitHub REST API
  - GitHub Actions
  - Internationalization (i18n)
order: 5
---

Desenvolvi este sistema para resolver um problema comum em portfólios autorais: manter o conteúdo atualizado sem depender de um desenvolvedor ou de mensalidades de plataformas prontas. O projeto combina um site público estático com um CMS privado feito sob medida para a rotina da cliente.

## Contexto
O objetivo era permitir atualização frequente de HQs e ilustrações com o menor atrito possível. A solução precisava ser barata de manter, rápida para navegar e simples o suficiente para uso cotidiano.

## Meu papel
Fui responsável pela arquitetura do produto e pela implementação do CMS e do portfólio público. Também desenhei o fluxo de publicação automática que conecta edição de conteúdo e deploy.

## Decisões técnicas
- **GitHub como camada de persistência:** usei a API do GitHub para leitura e escrita de conteúdo sem depender de banco tradicional.
- **Deploy automatizado:** configurei GitHub Actions para reconstruir e publicar o site sempre que o CMS gerasse uma alteração.
- **Separação entre edição e exibição:** mantive um painel privado para gestão e um site estático para consumo público.
- **UX sem jargão técnico:** tratei o CMS como ferramenta de uso real, escondendo operações de Git do usuário final.

## Resultado observado
A cliente passou a atualizar o próprio portfólio com autonomia e sem custo contínuo de infraestrutura. O sistema preserva a performance de um site estático, mas entrega uma experiência de manutenção próxima à de um CMS tradicional.

## Referências visuais
Você pode ler um artigo mais completo sobre a arquitetura no blog:

### [Explorando o CMS com GitHub API](/pt/blog/cms-portfolio)

![Interface do CMS](/blog/cms-portfolio/cms-print.png)
![Fluxo de Commits Automatizados](/blog/cms-portfolio/cms-commits.png)
![Portfólio em Operação](/blog/cms-portfolio/portfolio-print.png)
