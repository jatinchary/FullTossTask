import React from 'react';
import { Navigate } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { removeFromCart, updateQuantity } from '../store/slices/cartSlice';
import { Button } from '../components/Button';

export const Cart: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Your Cart</h1>

      {cart.items.length === 0 ? (
        <div className="bg-white p-8 rounded-lg text-center">
          <p className="text-gray-600">Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-2 flex items-center gap-4">
                  <span className="text-lg font-bold">₹{item.price}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="p-1 rounded hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="p-1 rounded hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="p-1 rounded text-red-500 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-2xl font-bold">₹{cart.total}</span>
            </div>
            <Button
              onClick={() => alert('Checkout functionality coming soon!')}
              className="w-full"
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};