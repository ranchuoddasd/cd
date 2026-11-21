# Prototype Notes

## Purpose
This repository explores a unified interface for viewing cloud-provider service status, incidents and scheduled maintenance.

## Current implementations
- `index.html`: standalone static HTML/Tailwind demonstration.
- `src/pages/Home.tsx`: React/TypeScript page using illustrative provider data.
- `src/components/CloudProviderCard.tsx`: reusable typed provider card.

The standalone page and React implementation are separate presentation prototypes. They are not duplicate files and are retained as distinct examples.

## Current behavior and limitations
- All statuses, incidents and maintenance events are illustrative and hard-coded.
- No live provider status endpoint or API is queried.
- There is no backend, persistence, authentication, alerting or automated test suite.
- The React source requires a host React/TypeScript build environment; this repository does not yet provide package metadata or build scripts.

## Next implementation steps
1. Define and validate a normalized provider-status schema.
2. Implement server-side adapters for official provider status sources.
3. Handle provider-specific payloads, errors, timeouts and rate limits.
4. Include source URLs, source timestamps and retrieval freshness.
5. Represent stale or unavailable data as Unknown.
6. Add tests for normalization, incident filtering and status mapping.
7. Safely render provider-supplied text.

## Portfolio hygiene
The original prototypes are retained in Git history. Standardized replacements are now organized under descriptive filenames and directories. No original implementation was deleted as part of this documentation update.
