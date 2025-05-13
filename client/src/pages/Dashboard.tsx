import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import ShipmentForm from '../components/ShipmentForm';

interface Shipment {
  id: string;
  trackingNumber: string;
  name: string;
  status: string;
  fromLocation: {
    address: string;
  };
  toLocation: {
    address: string;
  };
  estimatedDeliveryDate: string;
}

const Dashboard = () => {
  const { token } = useAuth();
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'create' | 'track'>('create');

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/shipments', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch shipments');
        }

        const data = await response.json();
        setShipments(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchShipments();
  }, [token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Customer Dashboard</h1>
        <p className="mt-2 text-gray-600">Create and track your shipments</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('create')}
            className={`${
              activeTab === 'create'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Create Shipment
          </button>
          <button
            onClick={() => setActiveTab('track')}
            className={`${
              activeTab === 'track'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Track Shipments
          </button>
        </nav>
      </div>

      {activeTab === 'create' ? (
        <div>
          <h2 className="text-2xl font-bold mb-6">Create New Shipment</h2>
          <ShipmentForm onShipmentCreated={() => {
            // Refresh the shipments list after a new shipment is created
            window.location.reload();
          }} />
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-6">Your Shipments</h2>
          {shipments.length === 0 ? (
            <p className="text-gray-500">No shipments found.</p>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tracking Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      From
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      To
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ETA
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {shipments.map((shipment) => (
                    <tr key={shipment.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {shipment.trackingNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {shipment.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            shipment.status === 'delivered'
                              ? 'bg-green-100 text-green-800'
                              : shipment.status === 'in_transit'
                              ? 'bg-blue-100 text-blue-800'
                              : shipment.status === 'processing'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {shipment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {shipment.fromLocation.address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {shipment.toLocation.address}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(shipment.estimatedDeliveryDate).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard; 