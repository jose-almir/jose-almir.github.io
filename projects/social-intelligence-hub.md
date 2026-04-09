---
title: "Hub de Inteligência Social e Gestão de Influenciadores"
description: Plataforma in-house para centralizar métricas e campanhas com influenciadores, substituindo soluções SaaS de alto custo por uma arquitetura serverless no Firebase.
image: /projects/social-hub/admin-panel.png
isPrivate: true
role: "Liderança técnica, arquitetura de dados NoSQL e coordenação do time de desenvolvimento."
challenge: "Migrar a operação de diversas ferramentas pagas (ex: Squid) para um sistema próprio que precisava normalizar dados heterogêneos de Instagram, TikTok, X e YouTube em tempo real."
outcome: "A v1 permitiu a centralização completa de campanhas, com coleta automática de métricas via OAuth, eliminando custos de softwares externos e garantindo a consistência dos dados para matching de influenciadores."
confidentialityNote: "Dados de campanhas e segredos de negócio foram anonimizados. A descrição foca na liderança técnica e nas decisões de infraestrutura e produto."
proofPoints:
  - "Liderei o desenvolvimento do zero até a v1 estável, coordenando uma equipe de desenvolvedores e um designer de UX dedicado."
  - "Projetei uma arquitetura flexível usando Firebase Firestore (NoSQL) para suportar as variações de esquemas de dados entre diferentes redes sociais."
  - "Implementei o orquestrador OAuth multicanal, permitindo que um único influenciador conecte e gerencie permissões de múltiplas contas sociais simultaneamente."
  - "Desenvolvi filtros de matching manuais baseados em engajamento e alcance real, alimentados por rotinas periódicas de atualização de métricas."
tech:
  - Angular
  - Firebase Firestore
  - Cloud Functions (Node.js)
  - OAuth 2.0 (Multi-provider)
  - Algolia (Busca)
order: 2
---

Desenvolvi este projeto para resolver um custo operacional crescente do cliente: a dependência de plataformas externas de inteligência social. O objetivo foi criar uma ferramenta proprietária que centralizasse todo o ciclo de vida de uma campanha, desde o onboarding do influenciador até a análise final de métricas.

## Arquitetura e Flexibilidade de Dados
Um dos maiores desafios técnicos foi a normalização de dados. Cada rede social (Instagram, TikTok, YouTube, X) entrega métricas e formatos diferentes. Optamos pelo **Firebase Firestore** pela natureza NoSQL, permitindo que o sistema fosse dinâmico o suficiente para armazenar atributos específicos de cada canal sem engessar o banco de dados.

## Orquestração OAuth e Onboarding
O fluxo de onboarding do influenciador foi o ponto mais complexo da interface. Criamos um centralizador onde o usuário podia autenticar suas redes via OAuth em um fluxo contínuo. Essas permissões garantiam que a plataforma pudesse realizar coletas periódicas (via Cloud Functions), mantendo a base de dados de influenciadores sempre atualizada em relação a seguidores, engajamento e tipo de conteúdo.

## Liderança e Colaboração
Neste projeto, atuei como líder técnico, orientando uma equipe de desenvolvedores (majoritariamente ex-alunos meus) e trabalhando em conjunto com um UX designer dedicado. Minha atuação envolveu desde a decisão da stack tecnológica até a implementação de regras de negócio complexas nas Firebase Functions, garantindo que as campanhas seguissem briefings rigorosos e cronogramas automatizados.

## Referências visuais
Abaixo, diagramas e capturas do sistema em operação:

![Arquitetura de Integração](/projects/social-hub/architecture.png)
![Painel Administrativo](/projects/social-hub/admin-panel.png)
![Painel do Influenciador](/projects/social-hub/influencer-panel.png)
![Fluxo de Dados Operacional](/projects/social-hub/data-flow.png)
