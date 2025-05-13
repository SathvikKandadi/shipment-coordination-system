import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              ShipCo
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span>{user.username}</span>
                <button
                  onClick={handleLogout}
                  className="bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-800"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-white text-indigo-600 px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 