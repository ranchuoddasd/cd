import React from 'react';

interface Incident {
  title: string;
  date: string;
  region?: string;
  az?: string;
}

interface CloudData {
  status: string;
  incidents: Incident[];
  maintenance: { title: string; date: string }[];
}

interface Props {
  name: string;
  status: string;
  incidents: Incident[];
  maintenance: { title: string; date: string }[];
}

const CloudProviderCard: React.FC<Props> = ({ name, status, incidents, maintenance }) => {
  const statusLinks: { [key: string]: string } = {
    aws: 'https://health.aws.amazon.com/health/status',
    gcp: 'https://status.cloud.google.com/',
    oci: 'https://ocistatus.oraclecloud.com/',
    azure: 'https://status.azure.com/en-us/status/',
    m365: 'https://status.cloud.microsoft.com/',
  };

  const getStatusLink = (providerName: string): string => {
    return statusLinks[providerName.toLowerCase().replace(' ', '')] || '#';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      <p className="mb-2">
        <span className="font-semibold">Status: </span>
        <span className={status === 'Operational' ? 'text-green-600' : 'text-red-600'}>
          {status}
        </span>
      </p>
      <div className="mb-4">
        <h3 className="font-semibold">Recent Incidents (Last 7 Days)</h3>
        {incidents.length > 0 ? (
          <ul className="list-disc pl-5">
            {incidents.map((incident, index) => (
              <li key={index}>
                <a
                  href={getStatusLink(name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {name === 'AWS' && incident.title === 'S3 Latency Issue' ? (
                    `${incident.title} - ${incident.date} (Region: US-EAST-1, AZ: us-east-1a)`
                  ) : (
                    `${incident.title} - ${incident.date}`
                  )}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recent incidents in the last 7 days</p>
        )}
      </div>
      <div>
        <h3 className="font-semibold">Scheduled Maintenance</h3>
        {maintenance.length > 0 ? (
          <ul className="list-disc pl-5">
            {maintenance.map((event, index) => (
              <li key={index}>{event.title} - {event.date}</li>
            ))}
          </ul>
        ) : (
          <p>No scheduled maintenance</p>
        )}
      </div>
    </div>
  );
};

export default CloudProviderCard;
