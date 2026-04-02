---
title: "Inteligência de Vendas Conversacional"
description: Agente de vendas via WhatsApp com orquestração de LLMs, gestão de contexto e integração com CRM para atendimento contínuo.
image: /projects/conversational-sales-ai/mock-chat.png
isPrivate: true
role: "Arquitetura conversacional, backend no edge e desenho dos fluxos de negociação."
challenge: "Transformar conversas de vendas em um fluxo automatizado sem perder contexto, previsibilidade e capacidade de integração."
outcome: "A operação ganhou atendimento contínuo e respostas mais rápidas, com o WhatsApp funcionando como canal real de conversão."
confidentialityNote: "Projeto privado desenvolvido sob contrato. Mantive a descrição no nível necessário para demonstrar responsabilidades, decisões e impacto operacional."
proofPoints:
  - "Modelei fluxos conversacionais orientados a etapa de venda em vez de respostas isoladas."
  - "Usei Durable Objects para preservar contexto e histórico das interações."
  - "Refinei prompts e variáveis operacionais para melhorar a consistência do atendimento."
  - "Integrei o agente a sistemas de CRM e fluxos financeiros para reduzir repasse manual."
tech:
  - Cloudflare Workers
  - TypeScript
  - LLM Prompt Orchestration
  - CRM Integration
  - Durable Objects
order: 3
---

Desenvolvi este agente para automatizar atendimento e negociação via WhatsApp em um contexto em que velocidade de resposta fazia diferença direta na operação comercial. O objetivo não era apenas responder mensagens, mas conduzir o lead pelas etapas corretas sem perder o contexto da conversa.

## Contexto
O time precisava atender leads com mais constância, inclusive fora do horário comercial, e reduzir o volume de repasses manuais entre atendimento, qualificação e fechamento. Isso exigia um agente com memória de conversa, critérios de decisão e integração com os sistemas existentes.

## Meu papel
Fui responsável pelo desenho técnico da solução conversacional, pela infraestrutura no edge e pelos fluxos usados para conduzir propostas, dúvidas e fechamento. Também atuei no refinamento dos prompts e das regras que sustentavam o comportamento do agente.

## Decisões técnicas
- **Fluxo guiado por etapas:** estruturei a conversa como jornada de venda, com validações e ramificações explícitas.
- **Estado persistente:** usei Durable Objects para manter histórico e consistência entre mensagens.
- **Integração operacional:** conectei o agente a CRM e rotinas de negócio para reduzir lacunas entre conversa e execução.
- **Ajuste fino de prompts:** tratei prompt engineering como parte do produto, ajustando variáveis e contexto conforme o estágio da conversa.

## Resultado observado
O canal deixou de ser apenas um ponto de contato inicial e passou a sustentar atendimento contínuo. A operação ganhou mais velocidade no primeiro retorno ao lead e menos dependência de intervenção humana em interações repetitivas.
