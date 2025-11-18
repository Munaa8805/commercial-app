import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { getTotalItems } = useCart();
  const { user, logout, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 shadow-lg sticky top-0 z-50 animate-slide-in-down">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-xl sm:text-2xl font-bold text-white hover:text-yellow-300 transition-colors animate-scale-in"
          >
            🛍️ E-Commerce Store
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition-colors font-semibold text-sm lg:text-base"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-300 transition-colors font-semibold text-sm lg:text-base"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="relative text-white hover:text-yellow-300 transition-colors font-semibold text-sm lg:text-base"
            >
              Cart
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-purple-900 text-xs rounded-full h-5 w-5 lg:h-6 lg:w-6 flex items-center justify-center font-bold shadow-lg">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="text-white font-semibold text-sm lg:text-base hidden lg:inline hover:text-yellow-300 transition-colors"
                >
                  👤 {user?.name || user?.email}
                </Link>
                <button
                  onClick={logout}
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg hover:from-red-600 hover:to-pink-600 transition-all font-semibold shadow-md text-sm lg:text-base"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white hover:text-yellow-300 transition-colors font-semibold text-sm lg:text-base"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg hover:from-yellow-500 hover:to-orange-500 transition-all font-semibold shadow-md text-sm lg:text-base"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <Link
              to="/cart"
              className="relative text-white hover:text-yellow-300 transition-colors font-semibold"
            >
              <span className="text-2xl">🛒</span>
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-purple-900 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-300 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/30 pt-4 animate-slide-in-down">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-yellow-300 transition-colors font-semibold py-2"
              >
                Home
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-yellow-300 transition-colors font-semibold py-2"
              >
                Contact
              </Link>
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white font-semibold py-2 border-t border-white/30 pt-4 block hover:text-yellow-300 transition-colors"
                  >
                    👤 {user?.name || user?.email}
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-pink-600 transition-all font-semibold shadow-md text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white hover:text-yellow-300 transition-colors font-semibold py-2"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-4 py-2 rounded-lg hover:from-yellow-500 hover:to-orange-500 transition-all font-semibold shadow-md text-center"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
