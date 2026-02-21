import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "munaa@test.com",
    password: "1234",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(formData.email, formData.password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-2xl shadow-2xl p-8 border-4 border-purple-400">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-2">
              Welcome Back!
            </h1>
            <p className="text-gray-700 font-semibold">Sign in to your account</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-100 border-4 border-red-400 rounded-lg">
              <p className="text-red-700 font-semibold text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-purple-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 border-4 border-purple-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 bg-white font-semibold placeholder-purple-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-purple-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 border-4 border-pink-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 bg-white font-semibold placeholder-pink-400"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-2 border-purple-400 rounded focus:ring-2 focus:ring-pink-300"
                />
                <span className="ml-2 text-sm font-semibold text-purple-700">
                  Remember me
                </span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm font-bold text-purple-600 hover:text-pink-600 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-4 rounded-lg hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all font-bold text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-700 font-semibold">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t-2 border-purple-300">
            <Link
              to="/"
              className="block text-center text-purple-600 hover:text-pink-600 font-semibold transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

