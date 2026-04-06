---
title: "Social Intelligence & Influencer Management Hub"
description: An in-house platform to centralize influencer metrics and campaigns, replacing high-cost SaaS solutions with a serverless architecture on Firebase.
image: /projects/social-hub/admin-panel.png
isPrivate: true
role: "Technical Lead, NoSQL data architecture, and developer team coordination."
challenge: "Migrating operations from multiple paid platforms (e.g., Squid) to a proprietary system that required normalizing heterogeneous data from Instagram, TikTok, X, and YouTube in real-time."
outcome: "The v1 delivery centralized campaign lifecycles with automatic metric harvesting via OAuth, eliminating third-party software costs and ensuring data accuracy for influencer filtering."
confidentialityNote: "Campaign data and business secrets have been anonymized. The description focuses on technical leadership and infrastructure/product decisions."
proofPoints:
  - "Led development from inception to a stable v1, coordinating a team of developers and a dedicated UX designer."
  - "Architected a flexible data layer using Firebase Firestore (NoSQL) to handle schema variations across different social networks."
  - "Implemented a multi-channel OAuth orchestrator, allowing influencers to connect and manage permissions for multiple social accounts simultaneously."
  - "Built manual matching filters based on engagement and real reach, powered by periodic metric update routines."
tech:
  - Angular
  - Firebase Firestore
  - Cloud Functions (Node.js)
  - OAuth 2.0 (Multi-provider)
  - Algolia (Search)
order: 2
---

I developed this project to solve a growing operational cost for the client: reliance on external social intelligence platforms. The goal was to build a proprietary tool that centralized the entire campaign lifecycle—from influencer onboarding to final metric analysis.

## Architecture and Data Flexibility
One of the biggest technical challenges was data normalization. Every social network (Instagram, TikTok, YouTube, X) delivers metrics and formats differently. We chose **Firebase Firestore** for its NoSQL nature, allowing the system to be dynamic enough to store channel-specific attributes without rigid database constraints.

## OAuth Orchestration and Onboarding
The influencer onboarding flow was the most complex part of the interface. We built a centralized hub where users could authenticate their socials via OAuth in a continuous flow. These permissions ensured the platform could perform periodic data harvests (via Cloud Functions), keeping the influencer database updated with followers, engagement rates, and content categories.

## Leadership and Collaboration
In this project, I acted as the technical lead, mentoring a team of developers (mostly former students) and working alongside a dedicated UX designer. My role covered everything from tech stack decisions to implementing complex business logic in Firebase Functions, ensuring campaigns followed strict briefings and automated schedules.

## Visual References
Below are diagrams and screenshots showing the system in operation:

![Integration Architecture](/projects/social-hub/architecture.png)
![Admin Panel](/projects/social-hub/admin-panel.png)
![Influencer Panel](/projects/social-hub/influencer-panel.png)
![Operational Data Flow](/projects/social-hub/data-flow.png)
