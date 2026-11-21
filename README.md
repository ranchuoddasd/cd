# Multi-Cloud Status Dashboard

A company-neutral portfolio prototype exploring a unified view of cloud-provider service status, incidents and scheduled maintenance.

**Project status:** UI prototype with static illustrative data. It does not retrieve live service health and must not be used for operational decisions.

## Overview

The project demonstrates how a cloud operations dashboard can present status information from multiple providers in a consistent interface. It covers:

- Amazon Web Services (AWS)
- Google Cloud
- Oracle Cloud Infrastructure (OCI)
- Microsoft Azure
- Microsoft 365

## Features

- Provider-oriented status cards.
- Example incident and maintenance summaries.
- Links to official provider status pages.
- A standalone HTML demonstration.
- A separate React/TypeScript page and reusable card component.
- Explicit distinction between illustrative data and live provider health.

## Repository structure

```text
.
├── index.html
├── src/
│   ├── components/
│   │   └── CloudProviderCard.tsx
│   └── pages/
│       └── Home.tsx
└── docs/
    ├── architecture.md
    └── prototype-notes.md
```

## Run the standalone demo

No build step is required:

1. Clone the repository.
2. Open `index.html` in a modern browser.
3. Use the official status links to visit each provider's status page.

The page loads Tailwind CSS from its CDN, so an internet connection is needed for its styling.

## React prototype

The React/TypeScript files are source components, not a complete application. A consuming React project must provide React, TypeScript, Tailwind CSS (or equivalent styles), and a compatible build configuration. This repository does not currently include a package manifest, lockfile, or build scripts.

## Architecture

See [docs/architecture.md](docs/architecture.md) for the current prototype boundaries, proposed data flow, normalized model and integration safeguards.

## Data and limitations

- Statuses, incidents and maintenance entries are static examples.
- No provider API, RSS feed or status endpoint is queried.
- There is no backend, persistence, authentication, alerting or automated test suite.
- The React component is not independently buildable from this repository as-is.
- Official provider links are navigation links, not evidence that the displayed sample status is current.

## Security and reliability principles

Any future live integration should:

- Retrieve provider data through server-side adapters.
- Keep API credentials out of browser code and source control.
- Validate and normalize upstream responses.
- Apply timeouts, bounded retries, caching and rate-limit handling.
- Display source timestamps and data freshness.
- Treat missing, stale or failed data as **Unknown**, never as **Operational**.
- Render upstream text safely without injecting untrusted HTML.

## Roadmap

1. Add a typed provider-status schema and validation.
2. Implement server-side adapters for official provider status sources.
3. Normalize incidents, maintenance, affected services, regions and timestamps.
4. Add freshness indicators and provider-specific error states.
5. Add unit and integration tests for normalization and status mapping.
6. Add a reproducible React build, dependency manifest and CI workflow.

## License

No license is currently provided. Until a license is added, reuse and redistribution are not granted by default.
