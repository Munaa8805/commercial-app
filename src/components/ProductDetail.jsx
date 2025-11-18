import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-8 border-4 border-red-400">
          <h2 className="text-3xl font-bold mb-4 text-red-700">Product not found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 flex items-center gap-2 font-semibold shadow-md transition-all"
      >
        ← Back
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg overflow-hidden shadow-2xl border-4 border-purple-400">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover"
          />
        </div>
        
        <div className="space-y-6 bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-lg border-4 border-orange-300 shadow-xl">
          <div>
            <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full font-semibold mb-2">
              {product.category}
            </span>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
              {product.name}
            </h1>
            <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mt-4">
              ${product.price.toFixed(2)}
            </p>
          </div>
          
          <div className="bg-white/70 p-4 rounded-lg border-2 border-purple-300">
            <h2 className="text-xl font-semibold mb-2 text-purple-700">Description</h2>
            <p className="text-gray-800 leading-relaxed">{product.description}</p>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate('/cart')}
              className="flex-1 bg-gradient-to-r from-pink-600 to-orange-600 text-white px-6 py-3 rounded-lg hover:from-pink-700 hover:to-orange-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

