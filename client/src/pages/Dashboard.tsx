import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import ShipmentForm from '../components/ShipmentForm';

interface Shipment {
  id: number;
  trackingNumber: string;
  name: string;
  status: string;
  fromLocation: { address: string };
  toLocation: { address: string };
  estimatedDeliveryDate: string;
  weight: number;
  category: string;
}

const Dashboard = () => {
  const { token } = useAuth();
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'create' | 'track'>('create');

  const fetchShipments = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://localhost:3000/api/shipments', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) throw new Error('Failed to fetch shipments');
      const data = await response.json();
      setShipments(data);
    } catch (err) {
      setError('Failed to load shipments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShipments();
    // eslint-disable-next-line
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Customer Dashboard</h1>

        {/* Tabs Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8 justify-center">
            <button
              onClick={() => setActiveTab('create')}
              className={`$ {
                activeTab === 'create'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Create Shipment
            </button>
            <button
              onClick={() => setActiveTab('track')}
              className={`$ {
                activeTab === 'track'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Track Shipments
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'create' ? (
          <div className="bg-white rounded-xl shadow-md p-8 mb-10">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">Create New Shipment</h2>
            <ShipmentForm onShipmentCreated={fetchShipments} />
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">My Shipments</h2>
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              </div>
            ) : error ? (
              <div className="text-red-600 text-center py-4">{error}</div>
            ) : shipments.length === 0 ? (
              <div className="text-gray-500 text-center py-4">No shipments found.</div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {shipments.map((shipment) => (
                  <div key={shipment.id} className="bg-indigo-50 rounded-lg p-5 shadow hover:shadow-lg transition">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-indigo-700">{shipment.trackingNumber}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        shipment.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : shipment.status === 'processing'
                          ? 'bg-blue-100 text-blue-800'
                          : shipment.status === 'in_transit'
                          ? 'bg-purple-100 text-purple-800'
                          : shipment.status === 'delivered'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {shipment.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="mb-1 text-lg font-semibold text-gray-800">{shipment.name}</div>
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">From:</span> {shipment.fromLocation?.address || '-'}<br />
                      <span className="font-medium">To:</span> {shipment.toLocation?.address || '-'}
                    </div>
                    <div className="text-sm text-gray-500 mb-1">
                      <span className="font-medium">Delivery Date:</span> {new Date(shipment.estimatedDeliveryDate).toLocaleDateString()}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="bg-gray-200 text-gray-700 rounded px-2 py-0.5 text-xs">{shipment.category}</span>
                      <span className="bg-gray-200 text-gray-700 rounded px-2 py-0.5 text-xs">{shipment.weight} kg</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 