---
title: "Social Intelligence Hub"
description: Plataforma para gestão de campanhas com influenciadores, integração OAuth multicanal e automações serverless sobre Firebase.
image: /projects/social-hub/admin-panel.png
isPrivate: true
role: "Frontend de produto, fluxos operacionais e automações serverless."
challenge: "Unificar autenticação social, regras de briefing e operação de campanhas em uma experiência utilizável para perfis diferentes."
outcome: "O setup de campanhas ficou mais previsível, com menos trabalho manual na coleta de dados e na operação do dia a dia."
confidentialityNote: "Projeto privado com dados de campanhas e integrações de terceiros. Mantive apenas elementos necessários para explicar as decisões de produto e engenharia."
proofPoints:
  - "Implementei o fluxo OAuth 2.0 com múltiplos provedores e centralização de permissões."
  - "Desenvolvi briefings dinâmicos e validações flexíveis de datas para refletir regras de negócio reais."
  - "Criei interfaces distintas para administradores e influenciadores, reduzindo atrito operacional."
  - "Automatizei processos críticos com Firebase Cloud Functions, incluindo fluxos de recuperação e verificação."
tech:
  - Angular
  - Firebase
  - Cloud Functions
  - OAuth 2.0
  - Algolia
order: 2
---

Desenvolvi a base técnica desta plataforma para centralizar o ciclo de campanhas com influenciadores em um único sistema. O desafio era combinar integração com redes sociais, regras operacionais e experiências diferentes para administradores e criadores sem transformar o produto em um painel confuso.

## Contexto
Antes, boa parte do trabalho dependia de coordenação manual: autenticar perfis, organizar briefings, revisar cronogramas e acompanhar dados espalhados em mais de um lugar. A plataforma precisava reduzir esse atrito e padronizar o processo.

## Meu papel
Atuei principalmente no frontend do produto e em partes importantes da camada serverless. Fui responsável por fluxos operacionais da aplicação, validações de negócio e automações que sustentavam a rotina de campanhas.

## Decisões técnicas
- **Integração social centralizada:** concentrei a autenticação OAuth e o gerenciamento de permissões em uma camada consistente.
- **UX orientada a papel:** separei a experiência de administradores e influenciadores para que cada um enxergasse apenas o que precisava operar.
- **Regras dinâmicas no frontend:** tratei briefings e datas como parte da lógica do produto, não apenas como campos de formulário.
- **Backend enxuto com automação:** usei Cloud Functions para processar tarefas recorrentes sem depender de operação manual.

## Resultado observado
O processo de abertura e acompanhamento de campanhas ficou mais claro para o time. A coleta de dados sociais passou a exigir menos intervenção manual, e o sistema sustentou melhor o fluxo operacional de novas campanhas.

## Referências visuais
![Arquitetura de Integração](/projects/social-hub/architecture.png)
![Painel Administrativo](/projects/social-hub/admin-panel.png)
![Painel do Influenciador](/projects/social-hub/influencer-panel.png)
![Fluxo de Dados Operacional](/projects/social-hub/data-flow.png)
