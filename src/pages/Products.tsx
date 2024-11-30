import React from 'react';
import { Navigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../components/Button';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/slices/cartSlice';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Team Jersey',
    description: 'Official team jersey for the 2024 season',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1562751362-404243c2eea3?auto=format&fit=crop&q=80&w=300',
    category: 'jerseys',
  },
  {
    id: '2',
    name: 'Team Cap',
    description: 'Official team cap with embroidered logo',
    price: 599,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=300',
    category: 'accessories',
  },
  {
    id: '3',
    name: 'Team Backpack',
    description: 'Stylish backpack with team colors',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=300',
    category: 'accessories',
  },
];

export const Products: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">
        {user.team.name} Official Merchandise
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-1">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">₹{product.price}</span>
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center space-x-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};