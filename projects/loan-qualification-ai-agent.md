---
title: "Agente de IA para Qualificação e Vendas no WhatsApp"
description: Automação completa de vendas via WhatsApp, integrando filtragem de leads, consulta assíncrona a bancos e sincronização com CRM DataCrazy.
image: /projects/loan-qualification-ai-agent/real-chat.png
isPrivate: true
role: "Arquitetura do agente, integração com APIs bancárias e automação de CRM."
challenge: "Escalar o atendimento humano de uma CORBAN para lidar com centenas de leads novos diariamente, mantendo a precisão na qualificação de crédito."
outcome: "A IA assumiu o primeiro contato e a triagem, atingindo picos de +400 atendimentos simultâneos em um único dia, permitindo que os vendedores humanos foquem apenas em leads já qualificados."
confidentialityNote: "Projeto desenvolvido para cliente único. IDs e dados de leads foram anonimizados, preservando a lógica de negócio e os fluxos técnicos."
proofPoints:
  - "Construí um agente capaz de filtrar condições de elegibilidade (como tempo de CLT > 3 meses) antes de avançar na negociação."
  - "Integrei a IA ao CRM DataCrazy para registro automático de leads e acompanhamento do funil de vendas em tempo real."
  - "Implementei o consumo de webhooks assíncronos de bancos parceiros para validar o status do cliente (elegibilidade e motivos de recusa)."
  - "Desenvolvi a lógica de troca de contexto para coleta segura de dados sensíveis após o aceite da proposta pelo lead."
tech:
  - Cloudflare Workers
  - CRM DataCrazy (API)
  - Webhooks / Async Integration
  - Durable Objects (Session State)
  - LLM Prompting
order: 3
---

Desenvolvi este agente para resolver o limite físico de atendimento de uma CORBAN especializada em empréstimos. A operação recebia uma carga de leads superior à capacidade humana de resposta via WhatsApp. O objetivo foi criar uma IA que não apenas conversasse, mas que operasse como um assistente de vendas técnico, filtrando condições e realizando consultas externas de forma autônoma.

## Qualificação e Filtragem
O agente opera em modo "vendas" logo no primeiro contato. Ele foi instruído a validar critérios específicos do lead, como a estabilidade profissional (CLT acima de 3 meses). Chamadas de API mais complexas e o tempo da equipe humana só são acionados se o lead atender aos pré-requisitos fundamentais para o empréstimo.

## Engenharia de Integração
Para produzir simulações reais, integrei a IA diretamente ao sistema do banco parceiro. O fluxo é assíncrono: a IA submete o pedido e aguarda o retorno via **webhooks**. Assim que o banco responde se o cliente é elegível (ou o motivo da recusa), a IA retoma o contato com o lead no WhatsApp para avançar à fase de negociação ou explicar os próximos passos.

- **Negociação Ativa:** Após a aprovação bancária, a IA confirma o valor liberado, as parcelas e solicita o aceite formal do lead.
- **Sincronização com DataCrazy:** Toda a jornada, desde o primeiro "olá" até o envio dos documentos, é registrada automaticamente no CRM DataCrazy, mantendo a base de dados comercial sempre atualizada sem esforço manual.

## Impacto na Operação
O sistema quebrou a barreira do "impossível": em dias de pico, a IA chegou a atender **+400 pessoas simultaneamente**, um volume que exigiria um time de dezenas de operadores humanos dedicados apenas à digitação e triagem básica. Além da escala, a plataforma eliminou erros comuns de preenchimento manual em formulários bancários, aumentando a taxa de aprovação das propostas.

## Fluxo de Qualificação e Integração
O diagrama abaixo ilustra como a IA orquestra a conversa, as validações e as consultas externas:

![Fluxo de Qualificação e Integração](/projects/loan-qualification-ai-agent/diagram.png)

## Referências visuais
Abaixo, capturas anonimizadas que demonstram a interação real com o agente:

![Monitoramento de Conversas](/projects/loan-qualification-ai-agent/real-chat.png)
