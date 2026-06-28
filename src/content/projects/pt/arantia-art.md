---
title: "Arântia Art - Portfólio e CMS Serverless"
description: Portfólio multilíngue com CMS customizado sobre GitHub API, pensado para atualização simples e custo operacional praticamente zero.
thumbnail: /blog/cms-portfolio/cms-print.png
order: 1
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
