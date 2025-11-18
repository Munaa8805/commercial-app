import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setOrderPlaced(true);
    clearCart();
    setIsSubmitting(false);

    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100 rounded-lg shadow-2xl p-12 border-4 border-green-400">
          <div className="text-8xl mb-4">🎉</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-gray-800 mb-6 font-semibold text-lg">
            Thank you for your purchase. You will receive a confirmation email shortly.
          </p>
          <p className="text-sm text-purple-700 font-semibold">Redirecting to home page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-8 text-center">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-lg shadow-2xl p-6 space-y-6 border-4 border-purple-400">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Shipping Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-purple-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-4 border-purple-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 bg-white font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-purple-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-4 border-pink-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 bg-white font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-purple-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-4 border-orange-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 bg-white font-semibold"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-purple-700 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-4 border-yellow-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 bg-white font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-purple-700 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-4 border-green-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-white font-semibold"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Payment Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-purple-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 border-4 border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 bg-white font-semibold"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-purple-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      required
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 border-4 border-indigo-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-500 bg-white font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-purple-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      placeholder="123"
                      className="w-full px-4 py-3 border-4 border-purple-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 bg-white font-semibold"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white px-6 py-4 rounded-lg hover:from-green-700 hover:via-blue-700 hover:to-purple-700 transition-all font-bold text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Processing...' : 'Place Order 🎉'}
            </button>
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-yellow-200 via-orange-200 to-pink-200 rounded-lg shadow-2xl p-6 sticky top-24 border-4 border-orange-400">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Order Summary
            </h2>
            
            <div className="space-y-3 mb-4 bg-white/80 p-4 rounded-lg border-2 border-orange-300">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm font-semibold">
                  <span className="text-gray-700">
                    {item.name} x{item.quantity}
                  </span>
                  <span className="text-purple-700 font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-orange-400 pt-4 space-y-2 bg-white/80 p-4 rounded-lg">
              <div className="flex justify-between text-gray-700 font-semibold">
                <span>Subtotal</span>
                <span className="text-purple-700">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700 font-semibold">
                <span>Shipping</span>
                <span className="text-green-600 font-bold">Free</span>
              </div>
              <div className="flex justify-between text-2xl font-bold pt-2 border-t-2 border-purple-400">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Total</span>
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ${getTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

