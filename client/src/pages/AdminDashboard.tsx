import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface Driver {
  id: number;
  username: string;
  email: string;
  status: string;
}

interface Vehicle {
  id: number;
  plateNumber: string;
  model: string;
  status: string;
  currentLocation?: string;
}

const AdminDashboard = () => {
  const { token, user } = useAuth();
  const navigate = useNavigate();
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'drivers' | 'vehicles'>('drivers');
  const [showAddVehicle, setShowAddVehicle] = useState(false);
  const [newVehicle, setNewVehicle] = useState({
    plateNumber: '',
    model: '',
    capacity: '',
  });

  useEffect(() => {
    if (user?.role !== 'admin') {
      navigate('/');
      return;
    }
    fetchData();
  }, [user, navigate]);

  const fetchData = async () => {
    try {
      const [driversRes, vehiclesRes] = await Promise.all([
        fetch('http://localhost:3000/api/drivers', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch('http://localhost:3000/api/vehicles', {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      if (!driversRes.ok || !vehiclesRes.ok) {
        throw new Error('Failed to fetch data');
      }

      const [driversData, vehiclesData] = await Promise.all([
        driversRes.json(),
        vehiclesRes.json(),
      ]);

      setDrivers(driversData);
      setVehicles(vehiclesData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleAddVehicle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/vehicles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newVehicle),
      });

      if (!response.ok) {
        throw new Error('Failed to add vehicle');
      }

      setShowAddVehicle(false);
      setNewVehicle({ plateNumber: '', model: '', capacity: '' });
      fetchData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  const handleUpdateVehicleStatus = async (vehicleId: number, status: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/vehicles/${vehicleId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update vehicle status');
      }

      fetchData();
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
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">Manage drivers and vehicles</p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('drivers')}
            className={`${
              activeTab === 'drivers'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Drivers
          </button>
          <button
            onClick={() => setActiveTab('vehicles')}
            className={`${
              activeTab === 'vehicles'
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
          >
            Vehicles
          </button>
        </nav>
      </div>

      {activeTab === 'drivers' ? (
        <div>
          <h2 className="text-2xl font-bold mb-6">Drivers</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            {drivers.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No drivers available
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
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
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            driver.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {driver.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Vehicles</h2>
            <button
              onClick={() => setShowAddVehicle(true)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Add Vehicle
            </button>
          </div>

          {showAddVehicle && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h3 className="text-lg font-bold mb-4">Add New Vehicle</h3>
                <form onSubmit={handleAddVehicle} className="space-y-4">
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
                      Capacity (kg)
                    </label>
                    <input
                      type="number"
                      value={newVehicle.capacity}
                      onChange={(e) =>
                        setNewVehicle({ ...newVehicle, capacity: e.target.value })
                      }
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowAddVehicle(false)}
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

          <div className="bg-white rounded-lg shadow overflow-hidden">
            {vehicles.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                No vehicles available
              </div>
            ) : (
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
                      Status
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
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            vehicle.status === 'available'
                              ? 'bg-green-100 text-green-800'
                              : vehicle.status === 'in_use'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {vehicle.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <select
                          value={vehicle.status}
                          onChange={(e) =>
                            handleUpdateVehicleStatus(vehicle.id, e.target.value)
                          }
                          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        >
                          <option value="available">Available</option>
                          <option value="in_use">In Use</option>
                          <option value="maintenance">Maintenance</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard; 