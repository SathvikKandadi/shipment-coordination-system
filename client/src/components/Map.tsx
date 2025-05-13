import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

const MapEvents = ({ onLocationSelect }: { onLocationSelect: (location: Location) => void }) => {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      onLocationSelect({
        lat,
        lng,
        address: `${lat.toFixed(6)}, ${lng.toFixed(6)}`,
      });
    },
  });
  return null;
};

const Map = ({ fromLocation, toLocation, onLocationSelect }: MapProps) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapEvents onLocationSelect={onLocationSelect} />
      {fromLocation.lat !== 0 && (
        <Marker
          position={[fromLocation.lat, fromLocation.lng]}
        />
      )}
      {toLocation.lat !== 0 && (
        <Marker
          position={[toLocation.lat, toLocation.lng]}
        />
      )}
    </MapContainer>
  );
};

export default Map; 