import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-gray-700 font-semibold">
          We'd love to hear from you! Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded-2xl shadow-2xl p-8 border-4 border-purple-400">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Send us a Message
          </h2>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-6xl mb-4">✅</div>
              <p className="text-2xl font-bold text-green-600 mb-2">
                Message Sent Successfully!
              </p>
              <p className="text-gray-700">
                We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-purple-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border-4 border-purple-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-pink-300 focus:border-pink-500 bg-white font-semibold placeholder-purple-400"
                />
              </div>

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
                  className="w-full px-4 py-3 border-4 border-pink-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-orange-300 focus:border-orange-500 bg-white font-semibold placeholder-pink-400"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-purple-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 border-4 border-orange-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-yellow-500 bg-white font-semibold placeholder-orange-400"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-purple-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us more..."
                  className="w-full px-4 py-3 border-4 border-yellow-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-300 focus:border-green-500 bg-white font-semibold placeholder-yellow-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-4 rounded-lg hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all font-bold text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl shadow-2xl p-8 border-4 border-blue-400">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-lg shadow-lg">
                  <span className="text-3xl">📧</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:support@ecommerce.com"
                    className="text-purple-600 hover:text-pink-600 font-semibold transition-colors"
                  >
                    support@ecommerce.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-pink-600 to-orange-600 p-4 rounded-lg shadow-lg">
                  <span className="text-3xl">📞</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <a
                    href="tel:+15551234567"
                    className="text-purple-600 hover:text-pink-600 font-semibold transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-orange-600 to-yellow-600 p-4 rounded-lg shadow-lg">
                  <span className="text-3xl">📍</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-700 font-semibold">
                    123 Commerce Street
                    <br />
                    City, State 12345
                    <br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-yellow-600 to-green-600 p-4 rounded-lg shadow-lg">
                  <span className="text-3xl">🕒</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-700 font-semibold">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-gradient-to-br from-green-100 via-yellow-100 to-pink-100 rounded-2xl shadow-2xl p-8 border-4 border-green-400">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Follow Us
            </h2>
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg transform hover:scale-110 text-2xl"
                aria-label="Facebook"
              >
                📘
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-pink-600 to-red-600 text-white p-4 rounded-lg hover:from-pink-700 hover:to-red-700 transition-all shadow-lg transform hover:scale-110 text-2xl"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-4 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all shadow-lg transform hover:scale-110 text-2xl"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg transform hover:scale-110 text-2xl"
                aria-label="LinkedIn"
              >
                💼
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

