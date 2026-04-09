---
title: "Arantia Art - Serverless Portfolio and CMS"
description: Multilingual portfolio with a custom CMS built on the GitHub API, designed for simple updates and near-zero operational cost.
image: /blog/cms-portfolio/cms-print.png
isPrivate: false
url: https://arantia.art/
role: "Product architecture, custom CMS, and publishing automation."
challenge: "Giving the client autonomy to update content without a complex admin panel, dedicated server, or Git knowledge."
outcome: "The artist could maintain the portfolio independently without relying on a developer or paying recurring infrastructure costs."
proofPoints:
  - "Built a private CMS that writes content directly through the GitHub REST API."
  - "Automated rebuild and deploy through GitHub Actions on every published change."
  - "Kept the public site static, fast, and available in three languages."
  - "Designed the CMS UI to abstract technical operations for everyday non-technical use."
tech:
  - Next.js
  - GitHub REST API
  - GitHub Actions
  - Internationalization (i18n)
order: 5
---

I built this system to solve a common issue in creator portfolios: keeping content up to date without depending on a developer or paying monthly fees for off-the-shelf platforms. The project combines a public static site with a private CMS tailored to the client's actual workflow.

## Context
The goal was to enable frequent updates to comics and illustrations with minimal friction. The solution needed to be inexpensive to maintain, fast for visitors, and simple enough for everyday use.

## My role
I owned the product architecture and implementation of both the CMS and the public portfolio. I also designed the automated publishing flow that connects content editing to deployment.

## Technical decisions
- **GitHub as the persistence layer:** used the GitHub API for content read/write operations instead of a traditional database.
- **Automated deployment:** configured GitHub Actions to rebuild and publish the site whenever the CMS generated a change.
- **Separate editing and presentation layers:** kept a private editing interface and a static public portfolio.
- **Non-technical UX:** treated the CMS as a real operational tool, hiding Git concepts from the final user.

## Observed outcome
The client gained autonomy to maintain the portfolio without recurring infrastructure costs. The system keeps the performance of a static site while offering a maintenance experience close to a traditional CMS.

## Visual references
You can read a more complete write-up about the architecture on my blog:

### [Building a CMS with GitHub API](/en/blog/cms-portfolio)

![CMS Interface](/blog/cms-portfolio/cms-print.png)
![Automated Commit Flow](/blog/cms-portfolio/cms-commits.png)
![Live Portfolio Showcase](/blog/cms-portfolio/portfolio-print.png)
