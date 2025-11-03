import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaCoffee,
} from 'react-icons/fa';
import {
  HiHome,
  HiMenu,
  HiInformationCircle,
  HiPhone,
  HiGift,
} from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', icon: HiHome, href: '/' },
    { name: 'Menu', icon: HiMenu, href: '/menu' },
    { name: 'About', icon: HiInformationCircle, href: '/about' },
    { name: 'Contact', icon: HiPhone, href: '#' },
    { name: 'Offers', icon: HiGift, href: '#' },
  ];

  const socialIcons = [
    { icon: FaFacebook, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaInstagram, href: '#' },
  ];

  return (
    <nav className="bg-amber-50 shadow-lg sticky top-0 z-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4  md:px-0">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            {/* Coffee Bean Logo */}
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center shadow-lg">
                <FaCoffee className="text-amber-100 text-xl" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-amber-900 font-serif">
                BrewHaven
              </span>
              <span className="text-xs text-amber-600 -mt-1">
                Coffee Roasters
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map(link => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center px-3 py-2 text-sm font-medium text-amber-800 hover:text-amber-600 transition-all duration-300 group relative"
                  >
                    <IconComponent className="w-4 h-4 mr-2 group-hover:text-amber-600 transition-colors duration-300" />
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Media Icons & CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-amber-700 hover:text-amber-500 transition-colors duration-200 p-2 hover:bg-amber-100 rounded-full"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full text-sm font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-amber-200">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Order Online Button - Mobile */}
            <button className="px-4 py-2 bg-amber-600 text-white rounded-full text-xs font-semibold hover:bg-amber-700 transition-colors duration-200">
              login
            </button>

            {/* Social Media Icons - Mobile */}
            <div className="flex items-center space-x-2 mr-4">
              {socialIcons.slice(0, 2).map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-amber-700 hover:text-amber-500 transition-colors duration-200 p-1"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-800 hover:text-amber-600 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 transition-colors duration-200"
            >
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-96 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-amber-50 border-t border-amber-200">
            {navLinks.map(link => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-3 py-4 text-base font-medium text-amber-800 hover:text-amber-600 hover:bg-amber-100 rounded-lg transition-all duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className="w-5 h-5 mr-3 group-hover:text-amber-600" />
                  {link.name}
                </a>
              );
            })}
            {/* Social Media Icons - Mobile Full Menu */}
            <div className="flex justify-center space-x-6 pt-4 pb-2 border-t border-amber-200 mt-2">
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-amber-700 hover:text-amber-500 transition-colors duration-200 p-2 hover:bg-amber-100 rounded-full"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
