---
title: "Automação de Crédito Consignado e Orquestração de Robôs"
description: Plataforma multi-tenant para automatizar o back-office de Correspondentes Bancários, processando em horas o que levaria dias de trabalho manual.
image: /projects/loan-automation-robot-orchestration/control-tab.png
isPrivate: true
role: "Arquitetura da plataforma, infraestrutura distribuída e desenho dos fluxos de simulação."
challenge: "Garantir o isolamento rígido entre diferentes clientes (CORBANs) e seus robôs, mantendo a estabilidade em um ecossistema de interfaces bancárias imprevisíveis."
outcome: "Transformação de processos operacionais manuais em pipelines autônomos, reduzindo o tempo de resposta e eliminando erros de digitação."
confidentialityNote: "Empresa e dados sensíveis foram anonimizados. A arquitetura reflete os requisitos reais de um sistema financeiro de alta disponibilidade."
proofPoints:
  - "Projetei a camada de orquestração no Edge (Cloudflare) usando Durable Objects para garantir isolamento total por cliente e robô."
  - "Colaborei na implementação do motor de execução em Kotlin (Spring Boot + Coroutines) para simulações de alta performance."
  - "Estabeleci comunicação em tempo real via WebSockets entre o Edge e o backend dedicado para controle granular das sessões."
  - "Criei mecanismos de resiliência com Playwright para lidar com a volatilidade de formulários e estados de sites bancários externos."
tech:
  - Spring Boot
  - Cloudflare Durable Objects
  - Playwright / WebSockets
  - TypeScript (React Cockpit)
  - Distributed State
order: 1
---

Desenvolvi esta plataforma em colaboração com o time técnico do "cliente zero" para resolver o principal gargalo de uma CORBAN (Correspondente Bancário): o preenchimento manual e repetitivo de formulários de simulação em dezenas de portais bancários. O sistema não apenas automatiza cliques, mas coordena uma operação complexa onde a simulação de um único contrato de crédito consignado pode depender de múltiplas etapas paralelas e estados voláteis.

## O Desafio Operacional
O time de back-office gastava dias em processos repetitivos de entrada de dados para produzir simulações de crédito. Além da lentidão, o risco de erros em dados sensíveis era constante. A solução precisava ser rápida e segura: cada robô precisava operar em um ambiente isolado para evitar vazamento de sessões entre diferentes empresas e operadores.

## Arquitetura e Engenharia
Para atender a esses requisitos, escolhi uma arquitetura híbrida que utiliza a baixa latência do Edge e a estabilidade do processamento dedicado:

- **Cloudflare Workers & Durable Objects:** Atuam como o ponto de controle central. Os Durable Objects garantem que cada cliente e cada instância de robô tenham seu próprio estado persistente e isolado diretamente no Edge.
- **Backend Kotlin (Engine):** Rodando em infraestrutura bare metal com Spring Boot e Coroutines, este motor executa o Playwright de forma eficiente. Ele consome as instruções do Edge e processa as simulações simultâneas com alta concorrência.
- **Comunicação WebSockets:** Permite que o painel de controle e o Edge troquem informações com os robôs em tempo real, fornecendo feedbacks instantâneos sobre o progresso das simulações.

## Impacto nos Negócios
A plataforma gerou um ganho direto de produtividade: o que antes levava dias de trabalho manual agora é concluído em poucas horas por pipelines autônomos. Ao automatizar a parte sensível e repetitiva do processo, a equipe pôde focar na análise de crédito e na estratégia de negócio, enquanto os robôs garantem a velocidade das simulações bancárias.

## Interface e Operação
Abaixo, algumas capturas anonimizadas do cockpit de controle e da gestão dos robôs:

![Painel de Controle (Cockpit)](/projects/loan-automation-robot-orchestration/cockpit-tab.png)
![Catálogo de Robôs](/projects/loan-automation-robot-orchestration/catalog-tab.png)
![Controle e Auditoria](/projects/loan-automation-robot-orchestration/control-tab.png)
