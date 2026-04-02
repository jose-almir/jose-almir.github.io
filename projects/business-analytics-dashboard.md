---
title: "Dashboard de Retenção e Inteligência de Vendas"
description: Dashboard SaaS B2B para transformar registros de WhatsApp em indicadores de retenção, recompra e acompanhamento comercial.
image: /projects/business-analytics-dashboard/screenshot-1.png
isPrivate: true
role: "Frontend do produto, arquitetura da experiência e fluxos de autenticação."
challenge: "Transformar dados informais de vendas em uma leitura simples para microempreendedores, sem depender de planilhas."
outcome: "O produto deu visibilidade operacional sobre retenção e recompra, ajudando o usuário a agir sobre clientes inativos."
confidentialityNote: "Projeto privado desenvolvido para startup. Mantive a narrativa focada no problema, na solução e no uso observado do sistema."
proofPoints:
  - "Estruturei um dashboard voltado a leitura rápida em dispositivos móveis."
  - "Implementei autenticação por magic link compatível com o contexto de uso via chat."
  - "Criei fluxos e guards para manter navegação e permissões consistentes."
  - "Cobri partes críticas da interface com Cypress para reduzir regressões."
tech:
  - Angular 20
  - TailwindCSS 4
  - Chart.js
  - Cypress
  - Magic Link Auth
order: 6
---

Desenvolvi este dashboard para transformar registros de venda recebidos por WhatsApp em uma visão clara de retenção e recompra. A ideia era tirar o pequeno negócio da dependência de planilhas e dar sinais de acompanhamento comercial em um formato simples de usar.

## Contexto
Muitos microempreendedores conseguem vender, mas não acompanham recorrência, clientes inativos ou oportunidades de reengajamento. O produto precisava traduzir um volume de dados informal em um painel objetivo, útil e acessível em mobile.

## Meu papel
Atuei principalmente no frontend do produto, na estrutura da navegação e nos fluxos de autenticação. Também trabalhei em decisões que influenciavam clareza de leitura, segurança de acesso e estabilidade da experiência.

## Decisões técnicas
- **Leitura orientada a ação:** organizei a interface para destacar retenção, recompra e clientes em risco.
- **Autenticação compatível com o canal:** usei magic link porque o contexto de uso já nascia no WhatsApp.
- **Arquitetura de rotas protegidas:** trabalhei guards e interceptores para preservar fluxo e sessão.
- **Cobertura de interface crítica:** usei Cypress para proteger partes sensíveis da navegação.

## Resultado observado
O dashboard tornou os sinais de retenção mais acessíveis para o usuário final. Em vez de depender de interpretação manual de mensagens e registros dispersos, o negócio passou a enxergar clientes inativos e oportunidades de acompanhamento em uma única interface.

## Arquitetura do sistema
![Fluxo de Aplicação](/projects/business-analytics-dashboard/architecture-flow.svg)
