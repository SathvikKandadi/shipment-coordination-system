import { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { loadGoogleMapsScript } from '../utils/mapsLoader';

interface Location {
  lat: number;
  lng: number;
  address: string;
}

interface MapProps {
  fromLocation: Location;
  toLocation: Location;
  onLocationSelect: (location: Location) => void;
}

const Map = ({ fromLocation, toLocation, onLocationSelect }: MapProps) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const loadScript = async () => {
      try {
        await loadGoogleMapsScript();
        setIsScriptLoaded(true);
      } catch (error) {
        console.error('Failed to load Google Maps:', error);
        setIsScriptLoaded(true);
      }
    };
    loadScript();
  }, []);

  if (!isScriptLoaded) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: fromLocation.lat !== 0 && toLocation.lat !== 0
      ? (fromLocation.lat + toLocation.lat) / 2
      : fromLocation.lat !== 0
      ? fromLocation.lat
      : toLocation.lat !== 0
      ? toLocation.lat
      : 0,
    lng: fromLocation.lng !== 0 && toLocation.lng !== 0
      ? (fromLocation.lng + toLocation.lng) / 2
      : fromLocation.lng !== 0
      ? fromLocation.lng
      : toLocation.lng !== 0
      ? toLocation.lng
      : 0,
  };

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;

    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    try {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode(
        { location: { lat, lng } },
        (results, status) => {
          if (status === 'OK' && results?.[0]) {
            onLocationSelect({
              lat,
              lng,
              address: results[0].formatted_address,
            });
          } else {
            onLocationSelect({
              lat,
              lng,
              address: `${lat.toFixed(6)}, ${lng.toFixed(6)}`,
            });
          }
        }
      );
    } catch (error) {
      onLocationSelect({
        lat,
        lng,
        address: `${lat.toFixed(6)}, ${lng.toFixed(6)}`,
      });
    }
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={center.lat === 0 && center.lng === 0 ? 2 : 10}
      onClick={handleMapClick}
      options={{
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      {fromLocation.lat !== 0 && fromLocation.lng !== 0 && (
        <Marker
          position={{ lat: fromLocation.lat, lng: fromLocation.lng }}
          label={{
            text: "P",
            color: "white",
            fontWeight: "bold"
          }}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#4F46E5",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          }}
        />
      )}
      {toLocation.lat !== 0 && toLocation.lng !== 0 && (
        <Marker
          position={{ lat: toLocation.lat, lng: toLocation.lng }}
          label={{
            text: "D",
            color: "white",
            fontWeight: "bold"
          }}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: "#10B981",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          }}
        />
      )}
    </GoogleMap>
  );
};

export default Map; 