import type { ReactNode } from 'react';

export interface Incident {
  title: string;
  occurredAt: string;
  region?: string;
}

export interface MaintenanceEvent {
  title: string;
  scheduledAt: string;
}

interface CloudProviderCardProps {
  name: string;
  status: 'Operational' | 'Issues detected' | 'Unknown';
  incidents: Incident[];
  maintenance: MaintenanceEvent[];
  statusUrl: string;
  note?: ReactNode;
}

export function CloudProviderCard({
  name,
  status,
  incidents,
  maintenance,
  statusUrl,
  note,
}: CloudProviderCardProps) {
  const statusClass =
    status === 'Operational'
      ? 'text-emerald-700'
      : status === 'Issues detected'
        ? 'text-rose-700'
        : 'text-slate-600';

  return (
    <article className="rounded-xl bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="mt-3 text-sm">
        <span className="font-medium">Example status: </span>
        <span className={statusClass}>{status}</span>
      </p>
      {note && <div className="mt-2 text-sm text-slate-600">{note}</div>}
      <section className="mt-4">
        <h3 className="font-medium">Sample incidents</h3>
        {incidents.length ? (
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-600">
            {incidents.map((incident) => (
              <li key={`${incident.title}-${incident.occurredAt}`}>
                {incident.title} — {incident.occurredAt}
                {incident.region ? ` · ${incident.region}` : ''}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-1 text-sm text-slate-600">No sample incidents listed.</p>
        )}
      </section>
      <section className="mt-4">
        <h3 className="font-medium">Sample maintenance</h3>
        {maintenance.length ? (
          <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-600">
            {maintenance.map((event) => (
              <li key={`${event.title}-${event.scheduledAt}`}>
                {event.title} — {event.scheduledAt}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-1 text-sm text-slate-600">No sample maintenance listed.</p>
        )}
      </section>
      <a
        className="mt-5 inline-block text-sm text-blue-700 underline"
        href={statusUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open official status page
      </a>
    </article>
  );
}
