import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-8 text-center">
          Shopping Cart
        </h1>
        <div className="text-center py-12 bg-gradient-to-r from-purple-100 via-pink-100 to-orange-100 rounded-lg shadow-lg border-4 border-purple-300">
          <p className="text-purple-700 text-xl mb-4 font-semibold">Your cart is empty</p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-lg"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const cardColors = [
    'bg-gradient-to-r from-purple-100 to-pink-100 border-purple-400',
    'bg-gradient-to-r from-pink-100 to-orange-100 border-pink-400',
    'bg-gradient-to-r from-orange-100 to-yellow-100 border-orange-400',
    'bg-gradient-to-r from-yellow-100 to-green-100 border-yellow-400',
    'bg-gradient-to-r from-green-100 to-blue-100 border-green-400',
    'bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-400',
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
          Shopping Cart
        </h1>
        <button
          onClick={clearCart}
          className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all font-semibold shadow-lg"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`${cardColors[index % cardColors.length]} border-4 rounded-lg shadow-xl p-6 flex flex-col md:flex-row gap-4`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full md:w-32 h-32 object-cover rounded-lg border-4 border-white shadow-lg"
              />
              
              <div className="flex-1">
                <Link to={`/product/${item.id}`}>
                  <h3 className="text-xl font-bold text-gray-900 hover:text-purple-700 transition-colors">
                    {item.name}
                  </h3>
                </Link>
                <p className="text-gray-700 mt-1 font-semibold">${item.price.toFixed(2)} each</p>
                
                <div className="mt-4 flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg font-bold shadow-md transition-all"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-bold text-lg bg-white px-3 py-2 rounded-lg border-2 border-purple-400">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700 px-4 py-2 rounded-lg font-bold shadow-md transition-all"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-pink-700 ml-auto font-semibold shadow-md transition-all"
                  >
                    Remove
                  </button>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 rounded-lg shadow-2xl p-6 sticky top-24 border-4 border-purple-400">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent mb-4">
              Order Summary
            </h2>
            
            <div className="space-y-3 mb-4 bg-white/70 p-4 rounded-lg border-2 border-purple-300">
              <div className="flex justify-between text-gray-700 font-semibold">
                <span>Subtotal</span>
                <span className="text-purple-700">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 font-semibold">
                <span>Shipping</span>
                <span className="text-green-600 font-bold">Free</span>
              </div>
              <div className="border-t-2 border-purple-400 pt-3 flex justify-between text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Total</span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-gradient-to-r from-green-600 to-blue-600 text-white text-center px-6 py-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all font-bold text-lg shadow-xl mb-4"
            >
              Proceed to Checkout
            </Link>
            
            <Link
              to="/"
              className="block w-full text-center mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-lg"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

