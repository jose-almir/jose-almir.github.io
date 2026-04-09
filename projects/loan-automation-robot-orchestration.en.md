---
title: "Payroll Loan Automation & Robot Orchestration"
description: Multi-tenant platform to automate back-office operations for banking correspondents, processing in hours what previously took days of manual work.
image: /projects/loan-automation-robot-orchestration/control-tab.png
isPrivate: true
role: "Platform architecture, distributed infrastructure, and simulation workflow design."
challenge: "Ensuring strict isolation between different clients (Correspondent Banks) and their robots, while maintaining stability across an ecosystem of unpredictable banking portals."
outcome: "Manual workflows became autonomous pipelines, reducing response times and eliminating data-entry errors."
confidentialityNote: "Company and sensitive data have been anonymized. The architecture reflects real high-availability system requirements."
proofPoints:
  - "Designed the orchestration layer on the Edge (Cloudflare) using Durable Objects for total isolation per client and robot."
  - "Collaborated on the implementation of the execution engine in Kotlin (Spring Boot + Coroutines) for high-performance simulations."
  - "Established real-time communication via WebSockets between the Edge and the dedicated backend for granular session control."
  - "Built resilience mechanisms with Playwright to handle the volatility of forms and states on external portals."
tech:
  - Spring Boot
  - Cloudflare Durable Objects
  - Playwright / WebSockets
  - TypeScript (React Cockpit)
  - Distributed State
order: 1
---

I developed this platform in collaboration with the technical team from "client zero" to solve a major bottleneck for CORBANs (Banking Correspondents in Brazil): the repetitive manual entry in dozens of banking simulation portals. The system doesn't just automate clicks; it coordinates a complex operation where a single payroll loan simulation can depend on multiple parallel steps and volatile web states.

## The Operational Challenge
Back-office teams used to spend days on repetitive data-entry to produce loan simulations. Beyond the slowness, the risk of errors with sensitive data was a constant concern. The solution needed to be fast and secure: each robot had to operate in an isolated environment to prevent session leaks between different companies and operators.

## Architecture and Engineering
To meet these requirements, I chose a hybrid architecture that uses Edge low-latency and reliable dedicated processing:

- **Cloudflare Workers & Durable Objects:** Act as the central control point. Durable Objects ensure that every client and robot instance has its own persistent, isolated state directly on the Edge.
- **Kotlin Backend (Engine):** Running on bare-metal infrastructure with Spring Boot and Coroutines, this engine executes Playwright efficiently. It consumes instructions from the Edge and processes concurrent simulations at scale.
- **WebSocket Communication:** Enables the control dashboard and the Edge to communicate with the robots in real-time, providing instant feedback on simulation progress.

## Business Impact
The platform created a direct boost in productivity: what previously took days of manual work is now finished in a few hours through autonomous pipelines. By automating the sensitive and repetitive part of the process, the team shifted their focus to credit analysis and business strategy, while the robots ensure simulation speed and precision.

## Visual references
Below are sanitized screenshots of the control cockpit and robot management:

![Control Cockpit](/projects/loan-automation-robot-orchestration/cockpit-tab.png)
![Robot Catalog](/projects/loan-automation-robot-orchestration/catalog-tab.png)
![Control and Audit](/projects/loan-automation-robot-orchestration/control-tab.png)
