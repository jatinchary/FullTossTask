import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useAppSelector } from '../store/hooks';

export const Home: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const team = user?.team;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      {team ? (
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-white">
            Welcome to the {team.name} Fan Store!
          </h1>
          <img 
            src={team.logo} 
            alt={team.name} 
            className="w-32 h-32 mx-auto rounded-full shadow-lg"
          />
          <p className="text-xl text-white">
            Shop exclusive {team.shortName} merchandise and show your team spirit!
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 rounded-lg text-white space-x-2"
            style={{ backgroundColor: team.primaryColor }}
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Start Shopping</span>
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to IPL Store
          </h1>
          <p className="text-xl text-gray-600">
            Register now to get your team assignment and start shopping!
          </p>
          <div className="space-x-4">
            <Link
              to="/register"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Register Now
            </Link>
            <Link
              to="/login"
              className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};