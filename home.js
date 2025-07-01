import React, { useState, useEffect } from 'react';
import CloudProviderCard from './CloudProviderCard';

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

interface CloudState {
  aws: CloudData;
  gcp: CloudData;
  oci: CloudData;
  azure: CloudData;
  m365: CloudData;
}

const Home: React.FC = () => {
  const [cloudData, setCloudData] = useState<CloudState>({
    aws: { status: 'Loading', incidents: [], maintenance: [] },
    gcp: { status: 'Loading', incidents: [], maintenance: [] },
    oci: { status: 'Loading', incidents: [], maintenance: [] },
    azure: { status: 'Loading', incidents: [], maintenance: [] },
    m365: { status: 'Loading', incidents: [], maintenance: [] },
  });

  const fetchData = async () => {
    console.log('Fetching data at:', new Date().toLocaleString());
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7); // June 24, 2025
    const newCloudData: CloudState = {
      aws: { status: 'Error', incidents: [], maintenance: [] },
      gcp: { status: 'Error', incidents: [], maintenance: [] },
      oci: { status: 'Error', incidents: [], maintenance: [] },
      azure: { status: 'Error', incidents: [], maintenance: [] },
      m365: { status: 'Error', incidents: [], maintenance: [] },
    };

    try {
      // AWS: Mock data
      const awsIncidents: Incident[] = [
        { title: 'S3 Latency Issue', date: '2025-06-28', region: 'US-EAST-1', az: 'us-east-1a' },
      ].filter(incident => new Date(incident.date) >= sevenDaysAgo);
      newCloudData.aws = {
        status: awsIncidents.length ? 'Issues Detected' : 'Operational',
        incidents: awsIncidents,
        maintenance: [{ title: 'EC2 Scheduled Maintenance', date: '2025-07-10' }],
      };
    } catch (error) {
      console.error('AWS fetch error:', error);
    }

    try {
      // GCP: Mock data
      const gcpIncidents: Incident[] = [
        { title: 'Compute Engine Outage', date: '2025-06-25' },
      ].filter(incident => new Date(incident.date) >= sevenDaysAgo);
      newCloudData.gcp = {
        status: gcpIncidents.length ? 'Issues Detected' : 'Operational',
        incidents: gcpIncidents,
        maintenance: [],
      };
    } catch (error) {
      console.error('GCP fetch error:', error);
    }

    try {
      // OCI: Mock data
      const ociIncidents: Incident[] = [].filter(incident => new Date(incident.date) >= sevenDaysAgo);
      newCloudData.oci = {
        status: ociIncidents.length ? 'Issues Detected' : 'Operational',
        incidents: ociIncidents,
        maintenance: [{ title: 'Database Maintenance', date: '2025-07-12' }],
      };
    } catch (error) {
      console.error('OCI fetch error:', error);
    }

    try {
      // Azure: Mock data
      const azureIncidents: Incident[] = [
        { title: 'Storage Service Disruption', date: '2025-06-27' },
      ].filter(incident => new Date(incident.date) >= sevenDaysAgo);
      newCloudData.azure = {
        status: azureIncidents.length ? 'Issues Detected' : 'Operational',
        incidents: azureIncidents,
        maintenance: [],
      };
    } catch (error) {
      console.error('Azure fetch error:', error);
    }

    try {
      // Microsoft 365: Mock data with recent outage
      const m365Incidents: Incident[] = [
        { title: 'Microsoft Teams and Exchange Online Outage (MO1096211)', date: '2025-06-17' },
      ].filter(incident => new Date(incident.date) >= sevenDaysAgo);
      newCloudData.m365 = {
        status: m365Incidents.length ? 'Issues Detected' : 'Operational',
        incidents: m365Incidents,
        maintenance: [],
      };
    } catch (error) {
      console.error('M365 fetch error:', error);
    }

    setCloudData(newCloudData);
    console.log('Data fetch complete:', newCloudData);
  };

  useEffect(() => {
    fetchData(); // Initial fetch
    const interval = setInterval(() => {
      console.log('Scheduled refresh triggered at:', new Date().toLocaleString());
      fetchData();
    }, 300000); // Refresh every 5 minutes (300,000 ms)
    return () => {
      console.log('Cleaning up interval');
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Cloud Status Dashboard</h1>
      {/* Advertisement Banner */}
      <div className="mb-8 text-center">
        <a
          href="https://example.com/ad"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-100 p-4 rounded-lg shadow-md hover:bg-blue-200 transition"
        >
          <img
            src="https://via.placeholder.com/728x90?text=Advertisement"
            alt="Advertisement"
            className="mx-auto max-w-full h-auto"
          />
          <p className="mt-2 text-blue-600">Support our dashboard! Click here to learn more.</p>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <CloudProviderCard name="AWS" {...cloudData.aws} />
        <CloudProviderCard name="Google Cloud" {...cloudData.gcp} />
        <CloudProviderCard name="Oracle Cloud" {...cloudData.oci} />
        <CloudProviderCard name="Microsoft Azure" {...cloudData.azure} />
        <CloudProviderCard name="Microsoft 365" {...cloudData.m365} />
      </div>
    </div>
  );
};

export default Home;
