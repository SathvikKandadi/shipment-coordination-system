import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { GoogleMap, Marker, Polyline, useLoadScript, DirectionsRenderer } from '@react-google-maps/api';

interface Location {
  lat: number | string;
  lng: number | string;
  address: string;
}

interface GoogleLatLng {
  lat: () => number;
  lng: () => number;
}

interface Shipment {
  id: number;
  trackingNumber: string;
  name: string;
  status: 'pending' | 'processing' | 'in_transit' | 'delivered';
  fromLocation: Location;
  toLocation: Location;
  estimatedDeliveryDate: string;
}

// Add this at the top of the file, outside the component
const GOOGLE_MAPS_LIBRARIES = ['places'];

const DriverDashboard = () => {
  const { token } = useAuth();
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedShipment, setSelectedShipment] = useState<Shipment | null>(null);
  const [pickupAddress, setPickupAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [directions, setDirections] = useState<any>(null);
  const [statusUpdating, setStatusUpdating] = useState<null | 'in_transit' | 'delivered'>(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: GOOGLE_MAPS_LIBRARIES as any,
  });

  const fetchShipments = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/shipments/driver', {
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
      setError('Failed to load shipments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShipments();
  }, [token]);

  useEffect(() => {
    if (isLoaded) {
      console.log('Google Maps API loaded successfully');
    }
    if (loadError) {
      console.error('Error loading Google Maps:', loadError);
    }
  }, [isLoaded, loadError]);

  const updateShipmentStatus = async (shipmentId: number, status: string) => {
    setStatusUpdating(status as 'in_transit' | 'delivered');
    try {
      const response = await fetch(`http://localhost:3000/api/shipments/${shipmentId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      const updatedShipment = await response.json();
      // Update the selected shipment and the shipments list in the UI
      setSelectedShipment((prev) => prev && prev.id === shipmentId ? { ...prev, status: updatedShipment.status } : prev);
      setShipments((prevShipments) =>
        prevShipments.map((s) => (s.id === shipmentId ? { ...s, status: updatedShipment.status } : s))
      );
      setError('');
    } catch (err) {
      setError('Failed to update shipment status');
    } finally {
      setStatusUpdating(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processing':
        return 'bg-blue-100 text-blue-800';
      case 'in_transit':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  // Fetch addresses when a shipment is selected
  useEffect(() => {
    const fetchAddress = async (lat: number, lng: number, setter: (addr: string) => void) => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
        );
        const data = await response.json();
        if (data.status === 'OK' && data.results.length > 0) {
          setter(data.results[0].formatted_address);
        } else {
          setter('Address not found');
        }
      } catch {
        setter('Error fetching address');
      }
    };

    if (selectedShipment) {
      const fromLat = Number(selectedShipment.fromLocation.lat);
      const fromLng = Number(selectedShipment.fromLocation.lng);
      const toLat = Number(selectedShipment.toLocation.lat);
      const toLng = Number(selectedShipment.toLocation.lng);
      fetchAddress(fromLat, fromLng, setPickupAddress);
      fetchAddress(toLat, toLng, setDeliveryAddress);
    } else {
      setPickupAddress('');
      setDeliveryAddress('');
    }
  }, [selectedShipment]);

  // Fetch directions only when selectedShipment changes
  useEffect(() => {
    if (!isLoaded || !selectedShipment) return;
    const fromLat = Number(selectedShipment.fromLocation.lat);
    const fromLng = Number(selectedShipment.fromLocation.lng);
    const toLat = Number(selectedShipment.toLocation.lat);
    const toLng = Number(selectedShipment.toLocation.lng);
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: { lat: fromLat, lng: fromLng },
        destination: { lat: toLat, lng: toLng },
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === 'OK') {
          setDirections(result);
        } else {
          setDirections(null);
        }
      }
    );
  }, [isLoaded, selectedShipment]);

  const renderMap = () => {
    if (!selectedShipment) return null;
    if (loadError) {
      console.error('Map load error:', loadError);
      return <div>Error loading maps: {loadError.message}</div>;
    }
    if (!isLoaded) return <div>Loading maps...</div>;

    const fromLat = Number(selectedShipment.fromLocation.lat);
    const fromLng = Number(selectedShipment.fromLocation.lng);
    const toLat = Number(selectedShipment.toLocation.lat);
    const toLng = Number(selectedShipment.toLocation.lng);

    return (
      <div style={{ position: 'relative', width: '100%', height: '400px', border: '1px solid #ccc' }}>
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={{ lat: (fromLat + toLat) / 2, lng: (fromLng + toLng) / 2 }}
          zoom={14}
        >
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </div>
    );
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
      <div className="p-4 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Shipments</h1>
      
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-md">
          {error}
        </div>
      )}
      
      {selectedShipment ? (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Shipment Details</h2>
            <button
              onClick={() => setSelectedShipment(null)}
              className="text-gray-600 hover:text-gray-800"
            >
              ← Back to List
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Shipment Information</h3>
              <div className="space-y-2">
                <p><span className="font-medium">Tracking Number:</span> {selectedShipment.trackingNumber}</p>
                <p><span className="font-medium">Name:</span> {selectedShipment.name}</p>
                <p><span className="font-medium">Status:</span> 
                  <span className={`ml-2 px-2 py-1 rounded-full text-sm ${getStatusColor(selectedShipment.status)}`}>
                    {selectedShipment.status.replace('_', ' ')}
                  </span>
                </p>
                <p><span className="font-medium">Estimated Delivery:</span> {new Date(selectedShipment.estimatedDeliveryDate).toLocaleDateString()}</p>
                <p><span className="font-medium">Pickup Address:</span> {pickupAddress}</p>
                <p><span className="font-medium">Delivery Address:</span> {deliveryAddress}</p>
              </div>
              <div className="mt-6 flex gap-4">
                {selectedShipment.status !== 'in_transit' && selectedShipment.status !== 'delivered' && (
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2 disabled:opacity-60"
                    onClick={() => updateShipmentStatus(selectedShipment.id, 'in_transit')}
                    disabled={statusUpdating !== null}
                  >
                    {statusUpdating === 'in_transit' ? (
                      <span className="loader inline-block w-4 h-4 border-2 border-white border-t-blue-400 rounded-full animate-spin"></span>
                    ) : null}
                    Set as In Transit
                  </button>
                )}
                {selectedShipment.status !== 'delivered' && (
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2 disabled:opacity-60"
                    onClick={() => updateShipmentStatus(selectedShipment.id, 'delivered')}
                    disabled={statusUpdating !== null}
                  >
                    {statusUpdating === 'delivered' ? (
                      <span className="loader inline-block w-4 h-4 border-2 border-white border-t-green-400 rounded-full animate-spin"></span>
                    ) : null}
                    Set as Delivered
                  </button>
                )}
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden">
              {renderMap()}
            </div>
          </div>
        </div>
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
                  Estimated Delivery
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {shipments.map((shipment) => (
                <tr key={shipment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {shipment.trackingNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {shipment.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(shipment.status)}`}>
                      {shipment.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(shipment.estimatedDeliveryDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      onClick={() => setSelectedShipment(shipment)}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DriverDashboard; 