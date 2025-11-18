import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    setIsLoading(true);

    try {
      await register(formData.name, formData.email, formData.password);
      navigate("/");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-gradient-to-br from-orange-100 via-yellow-100 to-pink-100 rounded-2xl shadow-2xl p-8 border-4 border-orange-400">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-yellow-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Create Account
            </h1>
            <p className="text-gray-700 font-semibold">Join us today!</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-100 border-4 border-red-400 rounded-lg">
              <p className="text-red-700 font-semibold text-center">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-orange-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 border-4 border-orange-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 bg-white font-semibold placeholder-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-orange-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 border-4 border-yellow-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 bg-white font-semibold placeholder-yellow-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-orange-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="At least 6 characters"
                className="w-full px-4 py-3 border-4 border-pink-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-500 bg-white font-semibold placeholder-pink-400"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-orange-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Re-enter your password"
                className="w-full px-4 py-3 border-4 border-purple-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 bg-white font-semibold placeholder-purple-400"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                required
                className="w-4 h-4 border-2 border-orange-400 rounded focus:ring-2 focus:ring-yellow-300"
              />
              <span className="ml-2 text-sm font-semibold text-orange-700">
                I agree to the{" "}
                <Link to="/terms" className="text-purple-600 hover:text-pink-600 font-bold">
                  Terms & Conditions
                </Link>
              </span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-600 via-yellow-600 to-pink-600 text-white px-6 py-4 rounded-lg hover:from-orange-700 hover:via-yellow-700 hover:to-pink-700 transition-all font-bold text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-700 font-semibold">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent hover:from-orange-700 hover:to-pink-700 transition-all"
              >
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-6 pt-6 border-t-2 border-orange-300">
            <Link
              to="/"
              className="block text-center text-orange-600 hover:text-pink-600 font-semibold transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

