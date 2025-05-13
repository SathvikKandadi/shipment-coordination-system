import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Streamline Your Shipment Coordination
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Efficiently manage your shipments, drivers, and vehicles in one place
            </p>
            <div className="space-x-4">
              <Link
                to="/register"
                className="bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="bg-transparent border-2 border-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
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
              <h3 className="text-xl font-semibold mb-2">Shipment Tracking</h3>
              <p className="text-gray-600">
                Real-time tracking and updates for all your shipments with detailed
                status information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Driver Management</h3>
              <p className="text-gray-600">
                Efficiently manage your drivers, assign shipments, and track their
                performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Vehicle Fleet</h3>
              <p className="text-gray-600">
                Manage your vehicle fleet, track availability, and optimize
                resource allocation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to streamline your operations?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of businesses already using our platform
          </p>
          <Link
            to="/register"
            className="bg-white text-indigo-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 