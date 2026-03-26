---
title: Dashboard de Retenção e Inteligência de Vendas
description: Dashboard SaaS B2B especializado para microempreendedores, focado em inteligência de vendas e fidelização de clientes.
image: /projects/business-analytics-dashboard/screenshot-1.png
isPrivate: true
tech:
  - Angular 20
  - TailwindCSS 4
  - Chart.js
  - Cypress
  - Magic Link Auth
order: 1
---

Desenvolvi este dashboard para consolidar dados de vendas capturados via WhatsApp, oferecendo uma visão clara do comportamento de recompra e retenção de clientes sem a necessidade de planilhas manuais.

## O Problema
Pequenos negócios costumam perder clientes por falta de acompanhamento. Este dashboard monitora esses ciclos para mostrar quem tem chances de voltar e quem parou de comprar.

## Lógica e Funcionalidades:
- **Gestão de Vendas:** Converte registros rápidos via WhatsApp em relatórios financeiros.
- **Dados de Retenção:** Identifica clientes inativos para ações de re-engajamento.
- **Autenticação:** Utiliza magic links seguros solicitados diretamente no chat.
- **Performance:** Construído com Angular 20 e TailwindCSS 4 para carregamento rápido em dispositivos móveis.

## Arquitetura do Sistema
O diagrama abaixo detalha a lógica de autenticação e roteamento que desenvolvi, utilizando guards e interceptores:

![Fluxo de Aplicação](/projects/business-analytics-dashboard/architecture-flow.svg)

*Nota: Desenvolvido para uma startup privada. O conteúdo foi anonimizado por confidencialidade.*
