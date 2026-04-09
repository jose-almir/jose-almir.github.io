---
title: "Dashboard de Gestão para Microempreendedores"
description: Painel de visualização de dados para microempreendedores (MEI) que consolida registros capturados via chatbot no WhatsApp.
image: /projects/mei-financial-dashboard/screenshot-1.png
isPrivate: true
role: "Frontend do produto, fluxos de acesso temporário e visualização de dados."
challenge: "Expor dados de receitas e despesas mapeados por IA de forma legível em dispositivos móveis, sem exigir login convencional."
outcome: "O dashboard possibilitou que usuários do chatbot consultassem métricas financeiras detalhadas em uma interface de leitura limpa."
confidentialityNote: "Projeto privado desenvolvido para startup. A descrição foca no desenvolvimento da interface e nos mecanismos de acesso."
proofPoints:
  - "Desenvolvi a interface do dashboard otimizada para consulta rápida em mobile."
  - "Implementei o fluxo de acesso via 'Magic Link' (link único e temporário) gerado pelo bot."
  - "Integrei a visualização de faturamento e clientes alimentada por IA via WhatsApp."
  - "Estruturei guards de rota para manter o acesso ativo apenas enquanto o token do link for válido."
tech:
  - Angular
  - TailwindCSS
  - Chart.js
  - Cypress
  - Magic Link Auth
order: 6
---

Este dashboard é o componente visual de um ecossistema de gestão para microempreendedores (MEI). Enquanto a interação principal ocorre via chatbot no WhatsApp, onde uma IA processa mensagens para registrar receitas, despesas e clientes, o painel serve como a central de consulta detalhada desses dados.

## Contexto e Funcionamento
O projeto resolve a dificuldade do MEI em visualizar o histórico financeiro sem a complexidade de um ERP tradicional. 
1. O usuário solicita o detalhamento financeiro no WhatsApp.
2. O sistema gera um link de acesso temporário (Magic Link) que dá entrada direta ao dashboard sem necessidade de senha.
3. O link é de uso único para ativação: após o primeiro clique, ele expira, protegendo o acesso. A sessão permanece ativa no dashboard enquanto o token associado for válido.

## Meu papel
Desenvolvi o frontend do dashboard, focando na arquitetura de acesso e na apresentação gráfica dos dados. Como o controle de informações ocorre exclusivamente no chat, o painel foi construído para ser uma interface de leitura objetiva e rápida.

## Decisões técnicas
- **Acesso Stateless e Seguro:** Implementei a lógica de validação de tokens via URL para garantir que o usuário acesse seus dados de forma instantânea e segura a partir do chat.
- **Interface Mobile-First:** Usei TailwindCSS para garantir que o microempreendedor consiga ler seus gráficos de faturamento na rua, diretamente do celular.
- **Consistência de Dados IA:** Mapeei os pontos de integração para exibir corretamente as informações extraídas pela IA no backend a partir das conversas informais do WhatsApp.
- **Estabilidade:** Apliquei testes E2E com Cypress para validar o fluxo crítico de entrada via Magic Link e expiração de sessão.

## Referências visuais
![Screenshot 1](/projects/mei-financial-dashboard/screenshot-1.png)
![Fluxo de Aplicação](/projects/mei-financial-dashboard/architecture-flow.svg)

