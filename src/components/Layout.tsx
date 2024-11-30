import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User as UserIcon, LogOut } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { logout } from '../store/slices/authSlice';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const team = user?.team;

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: team?.secondaryColor }}>
      <header 
        className="sticky top-0 z-50 shadow-md" 
        style={{ backgroundColor: team?.primaryColor }}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white">
            Dream Team Store
          </Link>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/cart" className="text-white">
                  <ShoppingCart className="w-6 h-6" />
                </Link>
                <Link to="/profile" className="text-white">
                  <UserIcon className="w-6 h-6" />
                </Link>
                <button onClick={handleLogout} className="text-white">
                  <LogOut className="w-6 h-6" />
                </button>
              </>
            ) : (
              <div className="space-x-4">
                <Link to="/login" className="text-white hover:text-gray-200">
                  Login
                </Link>
                <Link to="/register" className="text-white hover:text-gray-200">
                  Register
                </Link>
              </div>
            )}
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="py-6 text-center text-white" style={{ backgroundColor: team?.primaryColor }}>
        <p>© 2024 Dream Team Store. All rights reserved.</p>
      </footer>
    </div>
  );
};