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
    { name: 'Contact', icon: HiPhone, href: '/contact' },
    { name: 'Offers', icon: HiGift, href: '/offer' },
  ];

  const socialIcons = [
    { icon: FaFacebook, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaInstagram, href: '#' },
  ];

  return (
    <nav className="bg-amber-50 shadow-lg sticky top-0 z-50 border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 sm:space-x-3">
            {/* Coffee Bean Logo */}
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-700 to-amber-900 rounded-full flex items-center justify-center shadow-lg">
                <FaCoffee className="text-amber-100 text-lg sm:text-xl" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-amber-500 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-amber-900 font-serif">
                BrewHaven
              </span>
              <span className="text-[10px] sm:text-xs text-amber-600 -mt-1">
                Coffee Roasters
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-8 lg:ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {navLinks.map(link => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center px-2 lg:px-3 py-2 text-sm font-medium text-amber-800 hover:text-amber-600 transition-all duration-300 group relative"
                  >
                    <IconComponent className="w-4 h-4 mr-1 lg:mr-2 group-hover:text-amber-600 transition-colors duration-300" />
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Media Icons & CTA - Desktop */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="text-amber-700 hover:text-amber-500 transition-colors duration-200 p-1 lg:p-2 hover:bg-amber-100 rounded-full"
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
            <button className="ml-2 lg:ml-4 px-4 lg:px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full text-sm font-semibold hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-amber-200">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Social Media Icons - Mobile */}
            <div className="hidden xs:flex items-center space-x-1 mr-2">
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

            {/* Login Button - Mobile */}
            <button className="px-3 py-1.5 bg-amber-600 text-white rounded-full text-xs font-semibold hover:bg-amber-700 transition-colors duration-200 whitespace-nowrap">
              Login
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-amber-800 hover:text-amber-600 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 transition-colors duration-200"
            >
              {isOpen ? (
                <FaTimes className="block h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <FaBars className="block h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu (Fixed Overlay) */}
        <div
          className={`md:hidden fixed top-16 left-0 w-full bg-amber-50 border-t border-amber-200 shadow-lg transition-all duration-300 ease-in-out z-40 ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map(link => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center px-3 py-3 text-base font-medium text-amber-800 hover:text-amber-600 hover:bg-amber-100 rounded-lg transition-all duration-200 group"
                  onClick={() => setIsOpen(false)}
                >
                  <IconComponent className="w-5 h-5 mr-3 group-hover:text-amber-600" />
                  {link.name}
                </a>
              );
            })}

            {/* Social Media Icons - Mobile Menu */}
            <div className="flex justify-center space-x-4 pt-4 border-t border-amber-200 mt-2">
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
