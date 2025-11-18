import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const colorClasses = [
    'border-4 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50',
    'border-4 border-pink-500 bg-gradient-to-br from-pink-50 to-orange-50',
    'border-4 border-orange-500 bg-gradient-to-br from-orange-50 to-yellow-50',
    'border-4 border-yellow-500 bg-gradient-to-br from-yellow-50 to-green-50',
    'border-4 border-green-500 bg-gradient-to-br from-green-50 to-blue-50',
    'border-4 border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50',
    'border-4 border-indigo-500 bg-gradient-to-br from-indigo-50 to-purple-50',
    'border-4 border-red-500 bg-gradient-to-br from-red-50 to-pink-50',
  ];
  
  const buttonColors = [
    'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
    'bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700',
    'bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700',
    'bg-gradient-to-r from-yellow-600 to-green-600 hover:from-yellow-700 hover:to-green-700',
    'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700',
    'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
    'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700',
    'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700',
  ];

  const cardColor = colorClasses[(product.id - 1) % colorClasses.length];
  const buttonColor = buttonColors[(product.id - 1) % buttonColors.length];
  const stock = product.stock || 0;
  const isInStock = stock > 0;
  const isLowStock = stock > 0 && stock <= 5;

  const getStockBadge = () => {
    if (!isInStock) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-red-500 to-pink-500 text-white">
          Out of Stock
        </span>
      );
    }
    if (isLowStock) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
          Low Stock ({stock} left)
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        In Stock ({stock} available)
      </span>
    );
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className={`${cardColor} rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in ${!isInStock ? 'opacity-75' : ''}`}>
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200 relative">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          {!isInStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Out of Stock</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-900 flex-1">
              {product.name}
            </h3>
            {getStockBadge()}
          </div>
          <p className="text-gray-700 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              disabled={!isInStock}
              className={`${buttonColor} text-white px-4 py-2 rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg ${
                !isInStock ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isInStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

