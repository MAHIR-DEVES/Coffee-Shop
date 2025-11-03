import React from 'react';
import { FaCoffee, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <FaCoffee className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-xl font-bold">BrewHaven</h3>
                <p className="text-gray-400 text-sm">Coffee Roasters</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm max-w-md">
              Crafting exceptional coffee experiences since 2010.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-12 h-12 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-400 transition-all duration-300 hover:scale-105"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2024 BrewHaven Coffee. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
