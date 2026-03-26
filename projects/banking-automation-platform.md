---
title: "Plataforma de Automação Bancária e Controle de Robôs"
description: Sistema distribuído para automação de operações bancárias complexas, integrando orquestração no edge e execução via robôs Playwright.
image: /projects/banking-automation-platform/control-tab.png
isPrivate: true
tech:
  - TypeScript
  - Playwright
  - Cloudflare Workers
  - Durable Objects
  - Credential Security
order: 1
---

Construí esta plataforma para orquestrar robôs de automação bancária em larga escala, focando em operações críticas de crédito e processamento de dados financeiros. O sistema resolve o desafio de manter centenas de execuções simultâneas com segurança e integridade de dados.

## Arquitetura e Engenharia
A solução é dividida em duas camadas principais coordenadas por uma infraestrutura de orquestração:
- **Camada de Controle:** Desenvolvida em Cloudflare Workers, gerencia filas de tarefas, estado de execuções e o ciclo de vida de recursos sensíveis.
- **Motor de Execução:** Implementado em Kotlin com Playwright, focado na fidelidade e performance das interações robóticas com sistemas externos.

## Minhas Contribuições Técnicas
- **Estratégia de Robôs:** Arquitetura e implementação de um padrão de fábrica funcional em Kotlin para gerenciar diferentes estratégias de automação (robots), garantindo modularidade e facilidade de manutenção.
- **Gestão de Ciclo de Vida:** Desenvolvimento do sistema de gerenciamento de credenciais, incluindo lógica de bloqueio e liberação segura para evitar conflitos de simultaneidade durante execuções em massa.
- **Tratamento de Erros e Resiliência:** Implementação de interceptores e resolutores para lidar com a natureza imprevisível de sistemas web externos, garantindo que o estado da automação permaneça consistente.

## Interface e Operação
Abaixo, algumas capturas de tela da plataforma (devidamente anonimizadas) que demonstram o cockpit de controle e a gestão de robôs:

![Painel de Controle (Cockpit)](/projects/banking-automation-platform/cockpit-tab.png)
![Catálogo de Robôs](/projects/banking-automation-platform/catalog-tab.png)
![Controle e Auditoria](/projects/banking-automation-platform/control-tab.png)

*Nota: Projeto proprietário focado em conformidade e automação financeira. Conteúdo protegido por confidencialidade.*
