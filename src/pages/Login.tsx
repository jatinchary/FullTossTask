import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useAppDispatch } from '../store/hooks';
import { setUser } from '../store/slices/authSlice';
import { IPL_TEAMS } from '../data/teams';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email && password) {
        const randomTeam = IPL_TEAMS[Math.floor(Math.random() * IPL_TEAMS.length)];
        dispatch(setUser({
          id: '1',
          name: email.split('@')[0],
          email,
          team: randomTeam,
        }));
        navigate('/');
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <Button
          type="submit"
          className="w-full"
          isLoading={isLoading}
        >
          Login
        </Button>
      </form>
    </div>
  );
};