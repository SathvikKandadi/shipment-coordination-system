import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import LazyMap from './LazyMap';

interface Location {
  lat: number;
  lng: number;
  address: string;
}

interface ShipmentFormProps {
  onShipmentCreated: () => void;
}

const ShipmentForm = ({ onShipmentCreated }: ShipmentFormProps) => {
  const auth = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    weight: '',
    category: '',
    fromLocation: { lat: 0, lng: 0, address: '' } as Location,
    toLocation: { lat: 0, lng: 0, address: '' } as Location,
    estimatedDeliveryDate: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [activeMap, setActiveMap] = useState<'from' | 'to'>('from');

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Shipment name is required');
      return false;
    }
    if (!formData.weight || parseFloat(formData.weight) <= 0) {
      setError('Please enter a valid weight');
      return false;
    }
    if (!formData.category) {
      setError('Please select a category');
      return false;
    }
    if (!formData.fromLocation.address) {
      setError('Please select a pickup location');
      return false;
    }
    if (!formData.toLocation.address) {
      setError('Please select a delivery location');
      return false;
    }
    if (!formData.estimatedDeliveryDate) {
      setError('Please select an estimated delivery date');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    if (!auth.token) {
      setError('You must be logged in to create a shipment');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/shipments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          weight: parseFloat(formData.weight),
          category: formData.category,
          fromLocation: formData.fromLocation,
          toLocation: formData.toLocation,
          estimatedDeliveryDate: formData.estimatedDeliveryDate,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create shipment');
      }

      setFormData({
        name: '',
        weight: '',
        category: '',
        fromLocation: { lat: 0, lng: 0, address: '' },
        toLocation: { lat: 0, lng: 0, address: '' },
        estimatedDeliveryDate: '',
      });
      onShipmentCreated();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLocationSelect = (location: Location) => {
    setFormData((prev) => ({
      ...prev,
      [activeMap === 'from' ? 'fromLocation' : 'toLocation']: location,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Shipment Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
            min="0.1"
            step="0.1"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Select a category</option>
            <option value="fragile">Fragile</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="clothing">Clothing</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From Location
          </label>
          <button
            type="button"
            onClick={() => setActiveMap('from')}
            className={`w-full px-4 py-2 rounded-md ${
              activeMap === 'from'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {formData.fromLocation.address || 'Select location'}
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To Location
          </label>
          <button
            type="button"
            onClick={() => setActiveMap('to')}
            className={`w-full px-4 py-2 rounded-md ${
              activeMap === 'to'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {formData.toLocation.address || 'Select location'}
          </button>
        </div>
      </div>

      <LazyMap
        fromLocation={formData.fromLocation}
        toLocation={formData.toLocation}
        onLocationSelect={handleLocationSelect}
      />

      <div>
        <label htmlFor="estimatedDeliveryDate" className="block text-sm font-medium text-gray-700">
          Estimated Delivery Date
        </label>
        <input
          type="date"
          id="estimatedDeliveryDate"
          name="estimatedDeliveryDate"
          value={formData.estimatedDeliveryDate}
          onChange={handleChange}
          required
          min={new Date().toISOString().split('T')[0]}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {loading ? 'Creating...' : 'Create Shipment'}
      </button>
    </form>
  );
};

export default ShipmentForm; 