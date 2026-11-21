# Prototype Notes

## Purpose
This repository contains a multi-cloud service-status dashboard UI concept.

## Existing files
- `html`: standalone dashboard mockup with provider cards and static sample data.
- `home.js`: React/TypeScript state-management prototype that creates provider mock data.
- `CloudProviderCard.js`: reusable React/TypeScript card that renders status, incidents, maintenance, and provider links.

## Current behavior
The HTML file uses hard-coded sample incidents and maintenance. The React prototype similarly initializes and creates mock data. Neither implementation queries live status endpoints. Refreshing or filtering static data must not be described as live monitoring.

## Next implementation steps
1. Define a normalized provider-status model.
2. Implement a server-side adapter for official status sources.
3. Handle provider-specific schemas, errors, and rate limits.
4. Include source URL, last updated time, and data freshness.
5. Add tests for incident filtering and status mapping.
6. Restrict status links and safely render provider-supplied text.

## Portfolio hygiene
The source files are preserved. This documentation adds clarity without deleting or rewriting experimental code.
