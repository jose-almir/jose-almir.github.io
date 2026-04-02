---
title: "Social Intelligence Hub"
description: Sistema para gestão de campanhas de influenciadores com integração OAuth multicanal e sincronização de dados via Firebase.
image: /projects/social-hub/admin-panel.png
isPrivate: true
url: #
tech:
  - Angular
  - Firebase
  - Cloud Functions
  - OAuth 2.0
  - Algolia
order: 2
---

Desenvolvi a base técnica desta plataforma para centralizar o ciclo de vida de campanhas com influenciadores, organizando a coleta de métricas sociais.

## Arquitetura de Integração OAuth
O projeto exigiu uma infraestrutura para integração via **OAuth 2.0** com múltiplas redes sociais. Esta camada permitiu:
- Sincronização segura de dados de perfil e performance.
- Fluxo de autenticação unificado para diferentes provedores.
- Gestão centralizada de tokens e permissões de API.

![Arquitetura de Integração](/projects/social-hub/architecture.png)

## Interface do Sistema
A plataforma oferece interfaces distintas para administradores e influenciadores, otimizando o fluxo de trabalho de cada perfil:

![Painel Administrativo](/projects/social-hub/admin-panel.png)

![Painel do Influenciador](/projects/social-hub/influencer-panel.png)



## Minhas Contribuições Técnicas
- **Engenharia de Frontend:** Implementei o sistema de briefings dinâmicos e validação flexível de datas, garantindo que o fluxo operacional das campanhas seguisse regras de negócio rigorosas porém adaptáveis.
- **Interface de Gestão (UX):** Desenvolvi o modal de inicialização de campanhas e a listagem de recursos de influenciadores, otimizando a visualização de talentos para curadores de mídia.
- **Backend Serverless:** Desenvolvi funções no **Firebase Cloud Functions** para automação de processos críticos, como verificação de e-mails em massa e fluxos de recuperação de acesso.

## Impacto Técnico
A arquitetura baseada em Angular e Firebase resultou em uma aplicação escalável. A automação da coleta de dados via OAuth e a validação de briefings simplificou o setup de novas campanhas.

## Detalhes de Implementação
Abaixo, represento o fluxo simplificado de dados entre a interface administrativa e o núcleo de inteligência social:

![Fluxo de Dados Operacional](/projects/social-hub/data-flow.png)
