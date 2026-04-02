---
title: "Conversational Sales Intelligence"
description: WhatsApp sales agent with LLM orchestration, context management, and CRM integration for continuous customer handling.
image: /projects/conversational-sales-ai/mock-chat.png
isPrivate: true
role: "Conversational architecture, edge backend, and negotiation flow design."
challenge: "Turning sales conversations into an automated flow without losing context, predictability, or integration capability."
outcome: "The operation gained continuous customer handling and faster responses, with WhatsApp working as a real conversion channel."
confidentialityNote: "Private contract work. The description stays at the level needed to show responsibilities, technical decisions, and operational impact."
proofPoints:
  - "Modeled conversational flows around sales stages instead of isolated replies."
  - "Used Durable Objects to preserve conversation context and interaction history."
  - "Refined prompts and operational variables to improve response consistency."
  - "Integrated the agent with CRM and financial workflows to reduce manual handoffs."
tech:
  - Cloudflare Workers
  - TypeScript
  - LLM Prompt Orchestration
  - CRM Integration
  - Durable Objects
order: 3
---

I built this agent to automate sales support and negotiation through WhatsApp in a context where response speed had a direct impact on the commercial operation. The goal was not just to answer messages, but to guide each lead through the right stage without losing conversational context.

## Context
The team needed more consistent lead coverage, including outside business hours, and fewer manual handoffs between support, qualification, and closing. That required an agent with memory, decision criteria, and integration with the surrounding business systems.

## My role
I was responsible for the technical design of the conversational solution, the edge infrastructure, and the flows used to handle proposals, objections, and closing. I also worked on prompt refinement and the rules that shaped agent behavior.

## Technical decisions
- **Stage-based flow:** structured the conversation as a sales journey with explicit validations and branches.
- **Persistent state:** used Durable Objects to keep history and message consistency.
- **Operational integration:** connected the agent to CRM and business routines to reduce gaps between conversation and execution.
- **Prompt tuning as product work:** treated prompt engineering as part of the product, adjusting context and variables according to the conversation stage.

## Observed outcome
WhatsApp stopped being just an initial contact channel and started supporting continuous customer handling. The operation gained faster first responses and less dependence on manual intervention for repetitive interactions.
