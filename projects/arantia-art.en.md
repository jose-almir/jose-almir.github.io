---
title: "Arântia Art - Serverless Portfolio & CMS"
description: A dual-repo system featuring a multi-language portfolio and a custom CMS that utilizes the GitHub API as a database, achieving zero-cost infrastructure and full automation via GitHub Actions.
image: /blog/cms-portfolio/cms-print.png
isPrivate: false
url: https://arantia.art/
tech:
  - Next.js
  - GitHub REST API
  - GitHub Actions
  - Internationalization (i18n)
order: 3
---

I built this custom CMS to solve a common problem for digital portfolios: maintaining frequent updates without technical overhead or expensive monthly fees from third-party platforms.

## "GitHub as a Database" Architecture
The architecture is based on a decoupled dual-repo setup:
- **Public Portfolio (Next.js):** A static site hosted on GitHub Pages with native support for three languages (PT, EN, ES) and automatic browser-based locale detection.
- **Administrative CMS:** A private application that communicates directly with the GitHub REST API to perform read/write operations on the content files.

## Technical Contributions
- **Automation Engineering:** Configured **GitHub Actions** workflows to trigger automatic site rebuilds and deployments upon every CMS-generated commit.
- **Decoupled Backend Integration:** Implemented data persistence logic directly into JSON files via REST API, bypassing the need for conventional database layers (Postgres/NoSQL).
- **User Experience (UX):** Built an intuitive admin interface that abstracts complex Git operations, allowing the user to manage comics and illustrations seamlessly without technical knowledge.

This setup completely removes server and database costs while maintaining the speed of a static site and the flexibility of a dynamic portal.

## Process & Technical Deep-Dive
You can read a complete case study about the architecture and development of this project on my blog:

### [Building a CMS with GitHub API](/en/blog/cms-portfolio)

![CMS Interface](/blog/cms-portfolio/cms-print.png)
![Automated Commit Flow](/blog/cms-portfolio/cms-commits.png)
![Live Portfolio Showcase](/blog/cms-portfolio/portfolio-print.png)
