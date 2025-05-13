import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import DriverDashboard from './pages/DriverDashboard';
import Shipments from './pages/Shipments';
import Drivers from './pages/Drivers';
import Vehicles from './pages/Vehicles';
import Navbar from './components/Navbar';
import { AuthProvider, useAuth } from './context/AuthContext';

// Protected Route component for role-based access
const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode; allowedRoles: string[] }) => {
  const { user, token } = useAuth();

  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/driver/dashboard"
              element={
                <ProtectedRoute allowedRoles={['driver']}>
                  <DriverDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/shipments"
              element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <Shipments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/drivers"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Drivers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/vehicles"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Vehicles />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
