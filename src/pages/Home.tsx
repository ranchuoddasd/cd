import { CloudProviderCard } from '../components/CloudProviderCard';
import type { Incident, MaintenanceEvent } from '../components/CloudProviderCard';

interface ProviderExample {
  name: string;
  status: 'Operational' | 'Issues detected' | 'Unknown';
  incidents: Incident[];
  maintenance: MaintenanceEvent[];
  statusUrl: string;
}

const providerExamples: ProviderExample[] = [
  {
    name: 'Amazon Web Services',
    status: 'Issues detected',
    incidents: [{ title: 'Object storage latency', occurredAt: 'Illustrative example' }],
    maintenance: [],
    statusUrl: 'https://health.aws.amazon.com/health/status',
  },
  {
    name: 'Google Cloud',
    status: 'Operational',
    incidents: [],
    maintenance: [],
    statusUrl: 'https://status.cloud.google.com/',
  },
  {
    name: 'Oracle Cloud Infrastructure',
    status: 'Operational',
    incidents: [],
    maintenance: [{ title: 'Database maintenance', scheduledAt: 'Illustrative example' }],
    statusUrl: 'https://ocistatus.oraclecloud.com/',
  },
  {
    name: 'Microsoft Azure',
    status: 'Issues detected',
    incidents: [{ title: 'Storage service disruption', occurredAt: 'Illustrative example' }],
    maintenance: [],
    statusUrl: 'https://status.azure.com/en-us/status/',
  },
  {
    name: 'Microsoft 365',
    status: 'Unknown',
    incidents: [],
    maintenance: [],
    statusUrl: 'https://status.cloud.microsoft/',
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">
          Portfolio prototype · Sample data
        </p>
        <h1 className="mt-2 text-3xl font-bold">Multi-Cloud Status Dashboard</h1>
        <p className="mt-2 max-w-3xl text-slate-600">
          A unified interface concept for reviewing service health, incidents and
          maintenance across cloud providers.
        </p>
        <p className="mt-4 rounded-md border border-amber-300 bg-amber-50 p-3 text-sm text-amber-900">
          Demo notice: provider statuses and events are static illustrative data.
          This prototype does not query live provider APIs.
        </p>
      </header>
      <section
        aria-label="Cloud provider status examples"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5"
      >
        {providerExamples.map((provider) => (
          <CloudProviderCard key={provider.name} {...provider} />
        ))}
      </section>
    </main>
  );
}
