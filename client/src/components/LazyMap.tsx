import { Suspense, lazy } from 'react';

// Lazy load the Map component
const Map = lazy(() => import('./Map'));

interface Location {
  lat: number;
  lng: number;
  address: string;
}

interface LazyMapProps {
  fromLocation: Location;
  toLocation: Location;
  onLocationSelect: (location: Location) => void;
}

const LazyMap = (props: LazyMapProps) => {
  return (
    <div className="h-[400px] rounded-lg overflow-hidden border border-gray-300 relative">
      <Suspense
        fallback={
          <div className="h-full flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading map...</p>
            </div>
          </div>
        }
      >
        <Map {...props} />
      </Suspense>
    </div>
  );
};

export default LazyMap; 