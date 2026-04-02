---
title: "SOL-e - Automated Reference Extractor"
description: Patented tool for extracting BibTeX references in bulk from SBC Open Lib, reducing manual work in academic research.
image: /projects/sol-e/app-screenshot.jpg
isPrivate: false
url: https://github.com/jose-almir/sol-e
role: "End-to-end product ownership, from scraping to interface and final output."
challenge: "Automating metadata collection from a source not designed for batch processing while preserving consistency and speed."
outcome: "Researchers could generate references in bulk within seconds, with less manual error and less operational effort."
proofPoints:
  - "The solution processes batches of more than 200 papers in a few seconds."
  - "Designed the interface for upload and extraction progress tracking."
  - "Implemented scraping tailored to the dynamic structure of SBC Open Lib."
  - "Normalized extracted data directly into BibTeX, ready for LaTeX workflows."
tech:
  - Angular
  - Express.js
  - Web Scraping
  - BibTeX Automation
order: 4
---

I created SOL-e to solve a very specific academic research pain point: turning manual reference collection into a fast, repeatable workflow with fewer errors. The system was later recognized with a patent for addressing a real productivity bottleneck in the university context.

## Context
Before the tool, researchers had to manually copy information from SBC Open Lib to assemble BibTeX files. That process was slow, exhausting, and error-prone, especially for larger reading lists.

## My role
I built the product end to end, including the interface, API, scraping logic, and final reference formatting. The work involved UX decisions as well as automation and data-processing engineering.

## Technical decisions
- **Simple academic UX:** prioritized a direct flow for list upload and processing feedback.
- **Resilient scraping:** adapted extraction to the dynamic library structure to keep the output reliable.
- **Transformation pipeline:** converted extracted data straight into BibTeX to reduce user rework.
- **Batch processing:** designed the solution to handle large article sets efficiently.

## Observed outcome
The time spent on bibliographic referencing dropped sharply in heavy-use scenarios. Instead of copying items one by one, users could generate ready-to-use files in seconds and spend more time on reading and scientific writing.
