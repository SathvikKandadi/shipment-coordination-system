import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

interface Driver {
  id: number;
  username: string;
  email: string;
}

interface Shipment {
  id: number;
  trackingNumber: string;
  status: string;
}

const Drivers = () => {
  const { token } = useAuth();
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDriver, setSelectedDriver] = useState<number | null>(null);
  const [selectedShipment, setSelectedShipment] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
  }, [token]);

  const fetchData = async () => {
    try {
      const [driversRes, shipmentsRes] = await Promise.all([
        fetch('http://localhost:3000/api/drivers', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        fetch('http://localhost:3000/api/shipments', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      if (!driversRes.ok || !shipmentsRes.ok) {
        throw new Error('Failed to fetch data');
      }

      const [driversData, shipmentsData] = await Promise.all([
        driversRes.json(),
        shipmentsRes.json(),
      ]);

      setDrivers(driversData);
      setShipments(shipmentsData.filter((s: Shipment) => s.status === 'pending'));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleAssignDriver = async () => {
    if (!selectedDriver || !selectedShipment) return;

    try {
      const response = await fetch(
        `http://localhost:3000/api/drivers/${selectedDriver}/assign`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ shipmentId: selectedShipment }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to assign driver');
      }

      await fetchData();
      setSelectedDriver(null);
      setSelectedShipment(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Drivers</h1>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {drivers.map((driver) => (
                <tr key={driver.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {driver.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {driver.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => setSelectedDriver(driver.id)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Assign Shipment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Assign Driver Modal */}
        {selectedDriver && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Assign Shipment</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Select Shipment
                  </label>
                  <select
                    value={selectedShipment || ''}
                    onChange={(e) => setSelectedShipment(Number(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Select a shipment</option>
                    {shipments.map((shipment) => (
                      <option key={shipment.id} value={shipment.id}>
                        {shipment.trackingNumber}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => {
                      setSelectedDriver(null);
                      setSelectedShipment(null);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAssignDriver}
                    disabled={!selectedShipment}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
                  >
                    Assign
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drivers; 