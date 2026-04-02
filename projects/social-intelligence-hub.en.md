---
title: "Social Intelligence Hub"
description: Influencer campaign management system with multi-channel OAuth integration and Firebase data sync.
image: /projects/social-hub/admin-panel.png
isPrivate: true
url: #
tech:
  - Angular
  - Firebase
  - Cloud Functions
  - OAuth 2.0
  - Algolia
order: 2
---

I developed the technical foundation for this platform to centralize the influencer campaign lifecycle and social metrics collection.

## OAuth Integration Architecture
The project required a custom infrastructure for **OAuth 2.0** integration across multiple social networks. This layer enabled:
- Secure synchronization of profile and performance data.
- Unified authentication flows across different providers.
- Centralized management of tokens and API permissions.

![Integration Architecture](/projects/social-hub/architecture.png)

## System Interface
The platform provides distinct interfaces for administrators and influencers, optimizing the workflow for each profile:

![Admin Panel](/projects/social-hub/admin-panel.png)

![Influencer Panel](/projects/social-hub/influencer-panel.png)



## Technical Contributions
- **Frontend Engineering:** Implemented dynamic briefing systems and flexible date validation logic, ensuring campaign operations followed strict yet adaptable business rules.
- **Management Interface (UX):** Developed campaign initialization modals and influencer resource listings, improving talent visualization for media curators.
- **Serverless Backend:** Built **Firebase Cloud Functions** for critical process automation, including bulk email verification and access recovery flows.

## Technical Impact
The Angular and Firebase architecture resulted in a scalable application. Automating OAuth data collection and briefing validation simplified the setup for new campaigns.

## Implementation Details
The following diagram illustrates the simplified data flow between the admin interface and the social intelligence core:

![Operational Data Flow](/projects/social-hub/data-flow.png)
