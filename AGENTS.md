# XCMG Port Equipment — AGENTS.md

## Project

This repository contains a commercial Russian-language website for XCMG port equipment.

The website represents industrial equipment sold by AO Gofer.

The primary goals of the project are:

1. Generate qualified commercial leads.
2. Achieve strong organic visibility in Yandex.
3. Maintain technically correct and factually accurate product information.
4. Serve as the foundation for an AI-powered SEO automation system.
5. Keep the architecture simple enough to evolve incrementally.

---

## Development Philosophy

This is an AI-native project.

AI agents should perform as much implementation work as reasonably possible, but must follow repository rules, tests, factual constraints, and approval boundaries.

Do not introduce technologies simply because they are popular.

Add infrastructure only when it solves an actual project problem.

Prefer:

- simple solutions;
- explicit code;
- typed data;
- deterministic behavior;
- maintainability;
- testability;
- good SEO;
- measurable improvements.

Avoid unnecessary abstractions and premature infrastructure.

---

## Technology

Primary stack:

- Next.js
- TypeScript
- React
- Tailwind CSS

The application must use strict TypeScript.

Do not introduce another frontend framework without an explicit architectural decision.

Do not introduce a CMS, ORM, database, vector database, agent framework, or state-management framework unless the task explicitly requires it.

---

## Language

The public website is primarily Russian.

Code identifiers, comments, commit messages, documentation structure, and technical instructions should preferably be English.

Product and SEO copy intended for website visitors should be Russian.

---

## Product Facts

Never invent product specifications.

Technical parameters must originate from an approved source.

Approved sources may include:

- official XCMG documentation;
- official XCMG product pages;
- manufacturer brochures;
- documents supplied by AO Gofer;
- internal verified product data.

If a specification cannot be confirmed, mark it as unknown instead of guessing.

Never convert an assumption into a product fact.

---

## Company Claims

Do not invent:

- dealer status;
- exclusive distributor status;
- warranties;
- delivery terms;
- stock availability;
- prices;
- service locations;
- certifications;
- customer numbers;
- years in business.

Company claims must be backed by approved business information.

---

## SEO Principles

Every public page must have a clear search intent.

Do not create pages merely to target keyword variants.

Avoid:

- keyword stuffing;
- doorway pages;
- duplicate pages;
- automatically generated low-value content;
- fake reviews;
- fabricated expertise;
- copied competitor content.

Optimize first for solving the user's task.

For important indexable pages consider:

- title;
- meta description;
- canonical URL;
- H1;
- logical heading hierarchy;
- breadcrumbs;
- internal links;
- useful structured content;
- schema.org where appropriate;
- image alt text;
- crawlability;
- performance;
- mobile usability.

SEO changes should eventually be measurable through Yandex Webmaster and Yandex Metrica.

---

## Product Pages

Each product page should be capable of containing:

- product name;
- category;
- introductory value proposition;
- applications;
- technical specifications;
- equipment features;
- benefits;
- images;
- delivery information;
- warranty information when verified;
- service information when verified;
- CTA;
- FAQ;
- related equipment;
- structured data;
- breadcrumbs.

Do not force sections that have no meaningful information.

---

## Architecture

Prefer reusable components over duplicated markup.

Product data should initially be separated from page presentation.

Use structured TypeScript objects for product information.

Example conceptual structure:

Product
- id
- slug
- brand
- model
- category
- title
- description
- specifications
- features
- applications
- images
- seo
- sources

Product pages should be generated from structured product data where reasonable.

---

## Source Tracking

Important technical facts should eventually support provenance.

Where practical, product records should retain information about the source used to verify specifications.

Future AI systems will rely on this provenance for fact checking and RAG.

---

## AI Generated Content

AI-generated content is allowed.

AI-generated factual claims without evidence are not allowed.

Before publication, generated content should eventually pass:

- factual validation;
- SEO checks;
- duplication checks;
- code tests;
- structured-data validation.

---

## Agent Behavior

Before making a substantial change:

1. inspect existing code;
2. inspect relevant documentation;
3. understand the current architecture;
4. identify the smallest sensible implementation;
5. preserve existing working behavior.

Do not rewrite unrelated areas of the project.

When requirements are incomplete, use the safest reasonable assumption and document it.

---

## Subagents

When subagents are available, delegate work by responsibility rather than arbitrarily.

Suitable responsibilities include:

- product research;
- frontend implementation;
- technical SEO;
- testing;
- factual verification;
- code review.

The primary agent remains responsible for integrating the final result.

---

## Testing

Changes should not be considered complete when code merely compiles.

Where relevant run:

- TypeScript checks;
- lint;
- unit tests;
- build;
- SEO validation;
- structured-data validation.

Do not silently disable tests to make a task pass.

---

## Git

Do not force-push shared branches.

Do not commit secrets.

Do not automatically deploy production unless explicitly authorized.

Future autonomous SEO agents should modify the repository through branches and pull requests rather than directly changing production.

---

## Security

Never expose:

- API keys;
- authentication tokens;
- private customer data;
- infrastructure credentials.

Use environment variables for secrets.

Agents should follow least-privilege access.

---

## Future Architecture

The repository is expected to evolve toward an AI SEO platform containing:

- external SEO tools;
- Function Calling;
- MCP servers;
- RAG;
- embeddings;
- vector search;
- specialized agents;
- subagents;
- agent orchestration;
- memory;
- evals;
- tracing;
- observability;
- automated pull requests;
- human approval;
- SEO experimentation.

Do not implement these components before they become useful.

The project should evolve incrementally rather than starting as a complex multi-agent system.