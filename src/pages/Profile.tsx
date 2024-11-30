import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

export const Profile: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center space-x-6">
        <img
          src={user.team.logo}
          alt={user.team.name}
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Team Information</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="font-medium">Team: {user.team.name}</p>
          <div 
            className="w-full h-4 mt-2 rounded"
            style={{ backgroundColor: user.team.primaryColor }}
          />
          <div 
            className="w-full h-4 mt-1 rounded"
            style={{ backgroundColor: user.team.secondaryColor }}
          />
        </div>
      </div>
    </div>
  );
};