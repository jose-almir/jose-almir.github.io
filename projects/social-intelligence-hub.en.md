---
title: "Social Intelligence Hub"
description: Platform for influencer campaign management with multi-channel OAuth integration and serverless automations on Firebase.
image: /projects/social-hub/admin-panel.png
isPrivate: true
role: "Product frontend, operational flows, and serverless automation."
challenge: "Bringing social authentication, briefing rules, and campaign operations into a usable experience for different user profiles."
outcome: "Campaign setup became more predictable, with less manual work around data collection and daily operations."
confidentialityNote: "Private project involving campaign data and third-party integrations. Only the elements needed to explain product and engineering decisions are shown."
proofPoints:
  - "Implemented an OAuth 2.0 flow across multiple providers with centralized permission handling."
  - "Built dynamic briefing flows and flexible date validation to support real business rules."
  - "Created separate interfaces for admins and influencers to reduce operational friction."
  - "Automated critical processes with Firebase Cloud Functions, including recovery and verification flows."
tech:
  - Angular
  - Firebase
  - Cloud Functions
  - OAuth 2.0
  - Algolia
order: 2
---

I developed the technical foundation of this platform to centralize the influencer campaign lifecycle in a single system. The challenge was combining social integrations, operational rules, and different user experiences for admins and creators without turning the product into a confusing dashboard.

## Context
Before that, much of the workflow depended on manual coordination: connecting profiles, organizing briefings, reviewing timelines, and tracking scattered campaign data. The platform needed to reduce that friction and standardize the process.

## My role
I worked mainly on the product frontend and on important parts of the serverless layer. I owned operational flows, business validations, and automation logic that supported the day-to-day campaign routine.

## Technical decisions
- **Centralized social integration:** concentrated OAuth authentication and permission handling into a consistent layer.
- **Role-oriented UX:** separated the admin and influencer experiences so each profile could focus on what mattered for their workflow.
- **Dynamic frontend rules:** treated briefings and scheduling rules as product logic, not just form fields.
- **Lean backend automation:** used Cloud Functions to support recurring processes without manual operational effort.

## Observed outcome
Campaign setup and follow-up became clearer for the team. Social data collection required less manual intervention, and the system better supported the operational rhythm of launching new campaigns.

## Visual references
![Integration Architecture](/projects/social-hub/architecture.png)
![Admin Panel](/projects/social-hub/admin-panel.png)
![Influencer Panel](/projects/social-hub/influencer-panel.png)
![Operational Data Flow](/projects/social-hub/data-flow.png)
