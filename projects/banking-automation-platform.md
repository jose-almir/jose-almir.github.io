---
title: "Plataforma de Automação Bancária e Controle de Robôs"
description: Sistema distribuído para automatizar operações bancárias críticas com orquestração no edge e execução paralela via robôs Playwright.
image: /projects/banking-automation-platform/control-tab.png
isPrivate: true
role: "Arquitetura da plataforma, backend distribuído e desenho dos fluxos de automação."
challenge: "Manter centenas de execuções simultâneas com isolamento de credenciais, consistência de estado e tolerância a falhas."
outcome: "Fluxos manuais foram convertidos em pipelines autônomos, reduzindo gargalo operacional e aumentando a confiabilidade da operação."
confidentialityNote: "O produto é proprietário e envolve contexto financeiro sensível. As telas e descrições foram anonimizadas, mas a arquitetura e os trade-offs refletem o trabalho real."
proofPoints:
  - "Modelei a camada de controle em Cloudflare Workers para coordenar filas, estado das execuções e recursos sensíveis."
  - "Estruturei o motor de execução com estratégias de robôs reutilizáveis, facilitando expansão para novos fluxos."
  - "Implementei bloqueio e liberação de credenciais para evitar colisões entre execuções paralelas."
  - "Criei mecanismos de resiliência para lidar com páginas externas imprevisíveis sem corromper o estado da automação."
tech:
  - TypeScript
  - Playwright
  - Cloudflare Workers
  - Durable Objects
  - Credential Security
order: 1
---

Construí esta plataforma para um cenário em que automações bancárias precisavam operar com alta simultaneidade, baixo erro e rastreabilidade. O desafio não era só automatizar cliques, mas manter uma operação crítica estável mesmo quando os sistemas externos eram lentos, inconsistentes ou imprevisíveis.

## Contexto
O time dependia de fluxos operacionais demorados para executar checagens e processamentos ligados a crédito. A solução precisava garantir segurança no uso de credenciais, auditar cada execução e evitar que falhas pontuais contaminassem o restante da operação.

## Meu papel
Atuei no desenho da arquitetura e na implementação da plataforma que coordena os robôs e o estado global das execuções. Também defini a forma como as credenciais eram controladas e como o sistema reagia a erros vindos de interfaces externas.

## Decisões técnicas
- **Orquestração no edge:** usei Cloudflare Workers para controlar filas, estados e eventos operacionais com baixa latência.
- **Separação entre controle e execução:** mantive a inteligência de orquestração desacoplada do motor dos robôs, facilitando manutenção e evolução.
- **Controle de concorrência:** tratei credenciais e sessões como recursos críticos, com regras explícitas de bloqueio, liberação e recuperação.
- **Resiliência por estado:** padronizei interceptores e resolutores para manter consistência mesmo quando sites externos mudavam comportamento.

## Resultado observado
A operação deixou de depender de checagens manuais e passou a contar com pipelines autônomos e auditáveis. Isso liberou o time para focar em decisões de negócio enquanto a plataforma absorvia a parte repetitiva e sensível do processo com muito mais previsibilidade.

## Interface e operação
Abaixo, algumas capturas anonimizadas do cockpit de controle e da gestão dos robôs:

![Painel de Controle (Cockpit)](/projects/banking-automation-platform/cockpit-tab.png)
![Catálogo de Robôs](/projects/banking-automation-platform/catalog-tab.png)
![Controle e Auditoria](/projects/banking-automation-platform/control-tab.png)
