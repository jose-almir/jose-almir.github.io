---
title: "Retention and Sales Intelligence Dashboard"
description: B2B SaaS dashboard that turns WhatsApp sales records into retention, repeat purchase, and commercial follow-up indicators.
image: /projects/business-analytics-dashboard/screenshot-1.png
isPrivate: true
role: "Product frontend, experience architecture, and authentication flows."
challenge: "Turning informal sales data into a simple operational view for small businesses without relying on spreadsheets."
outcome: "The product gave users operational visibility into retention and repeat purchase behavior, helping them act on inactive customers."
confidentialityNote: "Private startup project. The narrative stays focused on the problem, the solution, and the observed use of the system."
proofPoints:
  - "Structured the dashboard for quick reading on mobile devices."
  - "Implemented magic-link authentication aligned with a chat-based usage context."
  - "Created guards and flow controls to keep navigation and permissions consistent."
  - "Covered critical UI paths with Cypress to reduce regressions."
tech:
  - Angular 20
  - TailwindCSS 4
  - Chart.js
  - Cypress
  - Magic Link Auth
order: 6
---

I built this dashboard to turn sales records captured through WhatsApp into a clear view of retention and repeat purchase behavior. The goal was to move small businesses away from spreadsheet dependency and give them practical signals for follow-up and customer recovery.

## Context
Many small businesses can sell, but struggle to track repeat customers, inactive accounts, or re-engagement opportunities. The product needed to translate messy operational data into a simple interface that still worked well on mobile.

## My role
I worked mainly on the product frontend, navigation structure, and authentication flows. I also contributed to decisions affecting readability, access security, and experience stability.

## Technical decisions
- **Action-oriented information design:** organized the interface to highlight retention, repeat purchase, and at-risk customers.
- **Channel-friendly authentication:** used magic links because the usage context already started in WhatsApp.
- **Protected route architecture:** introduced guards and interceptors to preserve session and navigation consistency.
- **Critical path coverage:** used Cypress to protect sensitive navigation and interaction flows.

## Observed outcome
The dashboard made retention signals more accessible to end users. Instead of manually interpreting scattered messages and records, the business could see inactive customers and follow-up opportunities in a single place.

## System architecture
![Application Flow](/projects/business-analytics-dashboard/architecture-flow.svg)
