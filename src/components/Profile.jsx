import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Profile = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const { items, getTotalPrice } = useCart();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
        city: user.city || "",
        zipCode: user.zipCode || "",
        country: user.country || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (updateUser) {
      updateUser(formData);
    }

    setIsSaving(false);
    setIsEditing(false);
    setSuccessMessage("Profile updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto text-center bg-gradient-to-r from-red-100 to-pink-100 rounded-lg p-8 border-4 border-red-400">
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Please log in to view your profile
          </h2>
          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-lg"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 animate-slide-in-down">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4">
            👤 My Profile
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {successMessage && (
          <div className="mb-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 border-4 border-green-400 rounded-lg animate-slide-in-down">
            <p className="text-green-700 font-semibold text-center">
              ✅ {successMessage}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Info Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-2xl shadow-2xl p-6 sm:p-8 border-4 border-purple-400 animate-scale-in">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Personal Information
                </h2>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold shadow-md"
                  >
                    ✏️ Edit
                  </button>
                )}
              </div>

              {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-purple-700 mb-2">
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
                      <label className="block text-sm font-bold text-purple-700 mb-2">
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
                      <label className="block text-sm font-bold text-purple-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-4 border-orange-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 bg-white font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-purple-700 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-4 border-yellow-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 bg-white font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-purple-700 mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-4 border-green-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 bg-white font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-purple-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-4 border-blue-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 bg-white font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-purple-700 mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-4 border-indigo-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-purple-500 bg-white font-semibold"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all font-bold shadow-lg disabled:opacity-50"
                    >
                      {isSaving ? "Saving..." : "💾 Save Changes"}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setFormData({
                          name: user.name || "",
                          email: user.email || "",
                          phone: user.phone || "",
                          address: user.address || "",
                          city: user.city || "",
                          zipCode: user.zipCode || "",
                          country: user.country || "",
                        });
                      }}
                      className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all font-bold shadow-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="bg-white/70 p-4 rounded-lg border-2 border-purple-300">
                    <p className="text-sm font-bold text-purple-700 mb-1">Name</p>
                    <p className="text-gray-900 font-semibold">{formData.name || "Not set"}</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg border-2 border-pink-300">
                    <p className="text-sm font-bold text-purple-700 mb-1">Email</p>
                    <p className="text-gray-900 font-semibold">{formData.email}</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg border-2 border-orange-300">
                    <p className="text-sm font-bold text-purple-700 mb-1">Phone</p>
                    <p className="text-gray-900 font-semibold">{formData.phone || "Not set"}</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-lg border-2 border-yellow-300">
                    <p className="text-sm font-bold text-purple-700 mb-1">Address</p>
                    <p className="text-gray-900 font-semibold">
                      {formData.address || "Not set"}
                      {formData.city && `, ${formData.city}`}
                      {formData.zipCode && ` ${formData.zipCode}`}
                      {formData.country && `, ${formData.country}`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Summary */}
            <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl shadow-2xl p-6 border-4 border-blue-400 animate-scale-in animation-delay-200">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Account Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Member Since</span>
                  <span className="text-purple-700 font-bold">2024</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Total Orders</span>
                  <span className="text-purple-700 font-bold">{items.length > 0 ? items.length : 0}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-semibold">Cart Items</span>
                  <span className="text-purple-700 font-bold">{items.length}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100 rounded-2xl shadow-2xl p-6 border-4 border-green-400 animate-scale-in animation-delay-300">
              <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => navigate("/cart")}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-md text-left"
                >
                  🛒 View Cart ({items.length})
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="w-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-4 py-3 rounded-lg hover:from-orange-700 hover:to-yellow-700 transition-all font-semibold shadow-md text-left"
                >
                  🛍️ Continue Shopping
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold shadow-md text-left"
                >
                  📧 Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

