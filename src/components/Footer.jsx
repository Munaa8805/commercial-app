import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-300">E-Commerce Store</h3>
            <p className="text-white">
              Your one-stop shop for all your needs. Quality products at great prices.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2 text-white">
              <li><Link to="/" className="hover:text-yellow-300 transition-colors">Home</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-300">Contact</h3>
            <ul className="space-y-2 text-white">
              <li>Email: support@ecommerce.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Commerce St, City, State 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/30 mt-8 pt-8 text-center text-white">
          <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

