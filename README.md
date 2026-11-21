# Multi-Cloud Status Dashboard

A lightweight dashboard prototype for presenting cloud-provider service status, recent incidents, and scheduled maintenance in one view.

**Status:** UI and mock-data experiment. The current data is static sample content and is not connected to provider status APIs.

## Overview
The dashboard explores a common multi-cloud operations workflow: quickly reviewing service health across providers without opening multiple status pages.

## Providers represented
- Amazon Web Services (AWS)
- Google Cloud (GCP)
- Oracle Cloud Infrastructure (OCI)
- Microsoft Azure
- Microsoft 365

## Features
- Provider cards with status, incident, and maintenance sections.
- Links to official provider status pages.
- Five-minute refresh concept in the HTML prototype.
- Separate React/TypeScript component and page-state experiment.

## Repository files
| File | Description |
|---|---|
| `html` | Standalone HTML dashboard with Tailwind CDN styling and static mock data. |
| `home.js` | React/TypeScript page-state prototype with mock incident and maintenance data. |
| `CloudProviderCard.js` | Reusable cloud-provider status card component. |

## Usage
The standalone `html` file can be opened in a browser for a UI demonstration. The React/TypeScript files are component prototypes and require a compatible React build environment; project dependencies and build scripts are not currently supplied.

## Data and limitations
- Data is illustrative and hard-coded; it must not be interpreted as current cloud service health.
- The five-minute refresh behavior does not fetch live provider data.
- Incident dates in the mock data are historical and are not maintained.
- No backend, API integrations, persistence, authentication, or automated tests are included.

## Security
- No credentials or tokens are required for the current mock dashboard.
- Any future provider API integrations should be implemented server-side with protected credentials.
- Keep secrets, account identifiers, and private operational details out of the repository.

## Roadmap
- Add a provider-adapter layer for official status feeds or documented APIs.
- Normalize incidents, maintenance, region, service, severity, and timestamps.
- Add data freshness indicators and per-provider error states.
- Add tests for data normalization and status calculation.
- Provide a dependency manifest and build instructions for the React version.

## License
No license is currently provided. Until one is added, reuse and redistribution are not granted by default.
