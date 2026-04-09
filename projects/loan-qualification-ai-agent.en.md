---
title: "AI Agent for WhatsApp Lead Qualification & Sales"
description: Complete sales automation for WhatsApp, integrating lead filtering, asynchronous bank API calls, and DataCrazy CRM synchronization.
image: /projects/loan-qualification-ai-agent/real-chat.png
isPrivate: true
role: "Agent architecture, banking API integration, and CRM automation."
challenge: "Scaling a manual loan operation to handle hundreds of new leads daily while maintaining high qualification precision."
outcome: "The AI took over first contact and screening, reaching peaks of 400+ simultaneous conversations in a single day—a volume impossible for a human team to sustain."
confidentialityNote: "Built for a specific client. Lead IDs and sensitive data were anonymized, preserving the core business logic and technical flows."
proofPoints:
  - "Built an agent capable of filtering eligibility (e.g., employment duration > 3 months) before proceeding with the sale."
  - "Integrated the AI with DataCrazy CRM for automatic lead registration and real-time sales funnel tracking."
  - "Implemented asynchronous bank API integration via webhooks to validate customer eligibility and loan status."
  - "Designed specialized context-switching logic to securely collect sensitive data once a proposal was accepted."
tech:
  - Cloudflare Workers
  - DataCrazy CRM (API)
  - Webhooks / Async Integration
  - Durable Objects (Session State)
  - LLM Prompting
order: 3
---

I developed this agent to overcome the physical limits of a loan correspondent’s sales team. The operation received a lead volume far beyond the human capacity to respond via WhatsApp. The goal was to build an AI that doesn't just chat, but operates as a technical sales assistant, filtering conditions and performing external lookups autonomously.

## Qualification and Filtering
The agent operates in "sales mode" from the very first interaction. It was instructed to validate specific lead criteria, such as job stability (CLT > 3 months). Complex API calls and human team time are only triggered if the lead meets the fundamental loan requirements.

## Integration Engineering
To provide real-world simulations, I integrated the AI directly with the partner bank’s system. The flow is asynchronous: the AI submits the request and waits for a response via **webhooks**. Once the bank confirms whether the client is eligible (or the reason for refusal), the AI resumes the conversation on WhatsApp to proceed with the negotiation or explain the next steps.

- **Active Negotiation:** After bank approval, the AI confirms the available amount and installments and requests the lead's formal acceptance.
- **DataCrazy CRM Sync:** The entire journey—from the initial greeting to final document collection—is automatically logged in DataCrazy CRM, keeping the commercial database updated without manual effort.

## Operational Impact
The system broke the barrier of the "impossible": on peak days, the AI handled **400+ people simultaneously**, a volume that would require a massive team of operators just for basic data entry. Beyond pure scale, the platform eliminated human errors in banking forms, leading to higher proposal approval rates.

## Qualification & Integration Flow
The diagram below illustrates how the AI orchestrates the conversation, validations, and external lookups:

![Flow Qualification & Integration](/projects/loan-qualification-ai-agent/diagram.png)


## Visual references
Below are sanitized screenshots showing the real interaction with the agent:

![Conversation Monitoring](/projects/loan-qualification-ai-agent/real-chat.png)
