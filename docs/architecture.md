# Architecture

## Current prototype

The repository contains two independent presentation approaches:

1. **Standalone demo** — `index.html` renders a static HTML/Tailwind example without a build step.
2. **React/TypeScript UI** — `src/pages/Home.tsx` renders a sample provider list using the reusable `CloudProviderCard` component.

Both approaches use illustrative data. Neither connects to live provider status services, and neither should be used for operational decisions.

## Target architecture

A production-oriented implementation should separate presentation from data acquisition:

```text
Provider status sources
        |
        v
Server-side provider adapters
        |
        v
Normalization and validation
        |
        v
Status / incident / maintenance service
        |
        v
Dashboard API
        |
        v
React user interface
```

## Normalized data model

A provider record should include:

- Provider and service identifiers
- Overall status and severity
- Incident title, description, affected regions and timestamps
- Maintenance window and lifecycle state
- Source URL and source publication timestamp
- Retrieval timestamp and freshness indicator

## Integration requirements

- Prefer official provider status feeds and documented APIs.
- Keep credentials and private configuration on the server.
- Apply timeouts, bounded retries, rate-limit handling and caching.
- Validate and normalize upstream payloads before returning them to the UI.
- Represent unavailable or stale data as **Unknown**, not **Operational**.
- Preserve source timestamps and display data freshness.
- Render provider-supplied text as text; do not inject untrusted HTML.

## Operational safeguards

The dashboard must distinguish a successful retrieval from a healthy provider. An API error, missing feed or stale response must never be interpreted as an operational status.
