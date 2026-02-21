import React, { useState } from "react";
import ProductCard from "./ProductCard";
// import { products } from "../data/products";
import { useProduct } from "../context/ProductContext";

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { products } = useProduct();
  // console.log(products);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category.name)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className="animate-fade-in">
      {/* Banner Section */}
      <div className="relative w-full h-64 sm:h-80 md:h-96 mb-8 sm:mb-12 overflow-hidden rounded-b-2xl sm:rounded-b-3xl shadow-2xl animate-slide-in-down">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 opacity-90 z-10 animate-gradient"></div>

        {/* Background Product Images */}
        <div className="absolute inset-0 z-5 flex items-center justify-center gap-4 sm:gap-8 opacity-30">
          {featuredProducts.slice(0, 3).map((product, index) => (
            <div
              key={product.id}
              className={`hidden sm:block transform animate-float ${
                index === 0
                  ? "rotate-12 scale-75 animation-delay-100"
                  : index === 1
                    ? "scale-90 animation-delay-300"
                    : "-rotate-12 scale-75 animation-delay-500"
              } transition-all duration-300 hover:scale-110`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl border-4 border-white/50 shadow-2xl object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mobile Product Images */}
        <div className="absolute inset-0 z-5 flex items-center justify-center sm:hidden">
          <div className="flex gap-2 opacity-40">
            {featuredProducts.slice(0, 2).map((product) => (
              <img
                key={product.id}
                src={product.image}
                alt={product.name}
                className="w-20 h-20 rounded-xl border-2 border-white/50 shadow-lg object-cover"
              />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 sm:mb-4 drop-shadow-2xl animate-slide-in-down animation-delay-100">
            🛍️ Welcome to Our Store
          </h1>
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-yellow-200 font-semibold drop-shadow-lg mb-4 sm:mb-6 animate-slide-in-up animation-delay-200">
            Discover Amazing Products
          </p>

          {/* Featured Products Preview */}
          <div className="hidden md:flex gap-3 mb-4 sm:mb-6">
            {featuredProducts.slice(0, 3).map((product, index) => (
              <div
                key={product.id}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-2 border-2 border-white/50 transform hover:scale-110 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto animate-slide-in-up animation-delay-400">
            <a
              href="#products"
              className="bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-6 py-2 sm:px-8 sm:py-3 md:py-4 rounded-lg hover:from-yellow-500 hover:to-orange-500 transition-all font-bold text-sm sm:text-base md:text-lg shadow-xl transform hover:scale-105 text-center animate-bounce-slow"
            >
              Shop Now
            </a>
            <a
              href="#products"
              className="bg-white/20 backdrop-blur-sm text-white border-2 sm:border-4 border-white px-6 py-2 sm:px-8 sm:py-3 md:py-4 rounded-lg hover:bg-white/30 transition-all font-bold text-sm sm:text-base md:text-lg shadow-xl transform hover:scale-105 text-center"
            >
              Explore
            </a>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto px-4 py-8 sm:py-12 mb-8 sm:mb-12 animate-fade-in">
        <div className="text-center mb-6 sm:mb-8 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-2">
            ⭐ Featured Products
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold mb-4">
            Handpicked favorites just for you
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto rounded-full animate-scale-in animation-delay-300"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products
            .filter((product) => product.featured)
            .map((product, index) => (
              <div
                key={product.id}
                className="transform hover:scale-105 transition-transform duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>

      <div
        id="products"
        className="container mx-auto px-4 py-6 sm:py-8 animate-fade-in"
      >
        <div className="text-center mb-6 sm:mb-8 animate-slide-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-2">
            All Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto rounded-full animate-scale-in animation-delay-200"></div>
        </div>

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-3 border-4 border-purple-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 bg-gradient-to-r from-purple-50 to-pink-50 text-gray-900 font-semibold placeholder-purple-400"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border-4 border-orange-400 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 bg-gradient-to-r from-orange-50 to-yellow-50 text-gray-900 font-semibold"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border-4 border-purple-300">
            <p className="text-purple-700 text-lg font-semibold">
              No products found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product._id}
                className="animate-slide-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
