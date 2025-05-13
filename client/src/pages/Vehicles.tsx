import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

interface Vehicle {
  id: number;
  plateNumber: string;
  model: string;
  capacity: number;
  status: string;
  currentLocation?: string;
}

const Vehicles = () => {
  const { token } = useAuth();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newVehicle, setNewVehicle] = useState({
    plateNumber: '',
    model: '',
    capacity: '',
  });

  useEffect(() => {
    fetchVehicles();
  }, [token]);

  const fetchVehicles = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/vehicles', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch vehicles');
      }

      const data = await response.json();
      setVehicles(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateVehicle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/vehicles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...newVehicle,
          capacity: parseFloat(newVehicle.capacity),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create vehicle');
      }

      await fetchVehicles();
      setShowCreateModal(false);
      setNewVehicle({
        plateNumber: '',
        model: '',
        capacity: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleUpdateStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/vehicles/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update vehicle');
      }

      await fetchVehicles();
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
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Vehicles</h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Add Vehicle
          </button>
        </div>

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
                  Plate Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Capacity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {vehicles.map((vehicle) => (
                <tr key={vehicle.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {vehicle.plateNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vehicle.model}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vehicle.capacity} tons
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        vehicle.status === 'available'
                          ? 'bg-green-100 text-green-800'
                          : vehicle.status === 'in-use'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {vehicle.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {vehicle.currentLocation || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <select
                      value={vehicle.status}
                      onChange={(e) => handleUpdateStatus(vehicle.id, e.target.value)}
                      className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      <option value="available">Available</option>
                      <option value="in-use">In Use</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Vehicle Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Add New Vehicle</h2>
            <form onSubmit={handleCreateVehicle} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Plate Number
                </label>
                <input
                  type="text"
                  value={newVehicle.plateNumber}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, plateNumber: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Model
                </label>
                <input
                  type="text"
                  value={newVehicle.model}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, model: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Capacity (tons)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={newVehicle.capacity}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, capacity: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Add Vehicle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vehicles; 