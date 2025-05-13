import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface Shipment {
  id: number;
  trackingNumber: string;
  name: string;
  status: string;
  fromLocation: {
    address: string;
    lat: number;
    lng: number;
  };
  toLocation: {
    address: string;
    lat: number;
    lng: number;
  };
  estimatedDeliveryDate: string;
}

const DriverDashboard = () => {
  const { token, user } = useAuth();
  const navigate = useNavigate();
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user?.role !== 'driver') {
      navigate('/');
      return;
    }
    fetchShipments();
  }, [user, navigate]);

  const fetchShipments = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/shipments/driver', {
        headers: { Authorization: `Bearer ${token}` },
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

  const handleUpdateStatus = async (shipmentId: number, newStatus: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/shipments/${shipmentId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update shipment status');
      }

      fetchShipments();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

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
        <h1 className="text-3xl font-bold text-gray-900">Driver Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage your assigned shipments</p>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {shipments.length === 0 ? (
          <div className="p-8 text-center">
            <div className="mx-auto w-24 h-24 text-gray-400 mb-4">
              <svg
                className="w-full h-full"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Shipments Assigned</h3>
            <p className="text-gray-500">
              You don't have any shipments assigned to you at the moment.
            </p>
          </div>
        ) : (
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
                  From
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  To
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
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
                    {shipment.fromLocation.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {shipment.toLocation.address}
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
                          : shipment.status === 'cancelled'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {shipment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <select
                      value={shipment.status}
                      onChange={(e) =>
                        handleUpdateStatus(shipment.id, e.target.value)
                      }
                      className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option value="pending">Pending</option>
                      <option value="processing">Processing</option>
                      <option value="in_transit">In Transit</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DriverDashboard; 