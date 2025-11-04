import React, { useState } from 'react';
import {
  FaStar,
  FaCoffee,
  FaIceCream,
  FaCookie,
  FaSearch,
  FaFilter,
  FaFire,
  FaLeaf,
  FaMugHot,
  FaSnowflake,
} from 'react-icons/fa';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const menuCategories = [
    {
      id: 'all',
      name: 'All Menu',
      icon: FaCoffee,
      count: 18,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'espresso',
      name: 'Espresso',
      icon: FaMugHot,
      count: 6,
      color: 'from-amber-600 to-orange-500',
    },
    {
      id: 'specialty',
      name: 'Specialty',
      icon: FaFire,
      count: 4,
      color: 'from-red-500 to-pink-500',
    },
    {
      id: 'iced',
      name: 'Iced Coffee',
      icon: FaSnowflake,
      count: 4,
      color: 'from-blue-500 to-cyan-500',
    },

    {
      id: 'desserts',
      name: 'Desserts',
      icon: FaCookie,
      count: 7,
      color: 'from-pink-500 to-purple-500',
    },
  ];

  const menuItems = [
    // Espresso Drinks
    {
      id: 1,
      name: 'Espresso Macchiato',
      description: 'Rich espresso crowned with velvety steamed milk foam',
      price: 4.5,
      category: 'espresso',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true,
      features: ['Single Origin', 'Velvety Foam'],
      preparation: '3-4 mins',
    },
    {
      id: 2,
      name: 'Caramel Cloud',
      description: 'Espresso with cloud-like foam and caramel drizzle',
      price: 5.8,
      category: 'espresso',
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true,
      features: ['Cloud Foam', 'Caramel Drizzle'],
      preparation: '4-5 mins',
    },
    {
      id: 3,
      name: 'Cappuccino Art',
      description:
        'Perfect harmony of espresso, steamed milk and artistic foam',
      price: 4.8,
      category: 'espresso',
      rating: 4.7,
      image:
        'https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s=',
      features: ['Latte Art', 'Creamy'],
      preparation: '4-5 mins',
    },

    // Specialty Drinks
    {
      id: 4,
      name: 'Honey Lavender Latte',
      description: 'Espresso with lavender syrup, honey, and steamed milk',
      price: 6.2,
      category: 'specialty',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true,
      features: ['Lavender', 'Local Honey'],
      preparation: '5-6 mins',
    },
    {
      id: 5,
      name: 'Mocha Dream',
      description: 'Decadent blend of rich chocolate and premium espresso',
      price: 5.9,
      category: 'specialty',
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Dark Chocolate', 'Rich'],
      preparation: '4-5 mins',
    },

    // Iced Coffee
    {
      id: 6,
      name: 'Iced Vanilla Cloud',
      description: 'Cold brew with vanilla sweet cream cold foam',
      price: 5.5,
      category: 'iced',
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true,
      features: ['Cold Foam', 'Vanilla'],
      preparation: '3-4 mins',
    },
    {
      id: 7,
      name: 'Nitro Cold Brew',
      description: 'Cascading nitro cold brew with creamy texture',
      price: 5.2,
      category: 'iced',
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Nitrogen Infused', 'Cascading'],
      preparation: '2-3 mins',
    },

    // Desserts
    {
      id: 8,
      name: 'Tiramisu Classic',
      description: 'Layers of coffee-soaked ladyfingers and mascarpone cream',
      price: 6.8,
      category: 'desserts',
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true,
      features: ['Coffee-infused', 'Italian'],
      preparation: 'Ready',
    },
    {
      id: 9,
      name: 'Lava Cake',
      description:
        'Warm chocolate cake with molten center and vanilla ice cream',
      price: 7.5,
      category: 'desserts',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      features: ['Warm', 'Molten Center'],
      preparation: '8-10 mins',
    },
    {
      id: 10,
      name: 'Macaron Box',
      description: 'Assortment of French macarons in seasonal flavors',
      price: 9.5,
      category: 'desserts',
      rating: 4.7,
      image:
        'https://www.bellepastry.com/cdn/shop/products/IMG_0954_1_large.jpg?v=1744841950',
      features: ['French', 'Seasonal'],
      preparation: 'Ready',
    },
    {
      id: 11,
      name: 'Croissant Ensemble',
      description: 'Freshly baked buttery croissants with chocolate filling',
      price: 4.8,
      category: 'desserts',
      rating: 4.6,
      image:
        'https://img.freepik.com/free-photo/perfect-morning-breakfast-fresh-croissants-oranges-blueberries-plate_181624-54752.jpg?semt=ais_hybrid&w=740&q=80',
      features: ['Buttery', 'Fresh Baked'],
      preparation: 'Ready',
    },
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-amber-50">
      {/* Modern Header */}
      <div className="relative bg-gradient-to-r from-gray-900 to-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-0">
          <div className="text-center py-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-amber-200 px-6 py-3 rounded-full text-sm font-medium md:mb-6 mb-1">
              <FaCoffee className="w-4 h-4" />
              <span>Artisanal Coffee & Desserts</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif mb-1 md:mb-6">
              Crafted
              <span className="block text-amber-400">Menu</span>
            </h1>
            <p className="text-lg sm:text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
              Discover our carefully curated selection of specialty coffees and
              handcrafted desserts
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 -mt-8 relative z-10">
        {/* ✅ Modern Filter Section – Icons Only on Mobile */}
        <div className="bg-white/80 backdrop-blur-lg rounded-md  shadow-lg sm:shadow-2xl border border-white/20 p-3 sm:p-4 lg:p-6 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-center justify-between">
            {/* Search Box */}
            <div className="relative w-full sm:flex-1 sm:max-w-md">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
              <input
                type="text"
                placeholder="Search drinks, desserts..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-9 sm:pl-10 lg:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 lg:py-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-500 text-gray-700 text-sm sm:text-base"
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center gap-2 mt-2 sm:mt-0 hidden md:flex">
              <span className="text-xs sm:text-sm lg:text-base text-gray-600 bg-white/50 px-2 sm:px-3 py-1 sm:py-2 rounded-lg sm:rounded-xl">
                {filteredItems.length} items
              </span>
            </div>
          </div>

          {/* Category Chips - Icons Only on Mobile */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4 lg:mt-6 justify-center sm:justify-start">
            {menuCategories.map(category => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group flex items-center gap-1 sm:gap-2 lg:gap-3 px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-lg sm:rounded-xl lg:rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-md sm:shadow-lg`
                      : 'bg-white/60 text-gray-700 hover:bg-white/80 hover:shadow-sm sm:hover:shadow-lg'
                  }`}
                >
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 flex-shrink-0" />

                  {/* Text hidden on mobile, shown on sm+ */}
                  <span className="hidden sm:inline text-sm lg:text-base whitespace-nowrap">
                    {category.name}
                  </span>

                  <span
                    className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-[10px] sm:text-xs min-w-[20px] text-center ${
                      isActive ? 'bg-white/20' : 'bg-gray-200/60'
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ✅ Modern Menu Grid – 2 cards on mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 md:gap-8">
          {filteredItems.map(item => {
            const category = menuCategories.find(
              cat => cat.id === item.category
            );
            return (
              <div
                key={item.id}
                className="group relative bg-white/80 backdrop-blur-sm rounded-md shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:border-amber-200/30"
              >
                {/* Item Image with Overlay */}
                <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Popular Badge */}
                  {item.popular && (
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1 sm:gap-2 shadow-lg">
                      <FaFire className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Popular</span>
                    </div>
                  )}

                  {/* Preparation Time */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/60 backdrop-blur-sm text-white px-2 sm:px-3 py-1 sm:py-2 rounded-xl text-xs sm:text-sm font-medium">
                    ⏱ {item.preparation}
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                    <span className="text-lg sm:text-3xl font-bold text-white font-serif bg-black/40 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-2xl">
                      ${item.price}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-2 sm:px-3 py-1 sm:py-2 shadow-lg">
                    <div className="flex items-center gap-1">
                      <FaStar className="w-3 sm:w-4 h-3 sm:h-4 text-amber-400 fill-current" />
                      <span className="text-xs sm:text-sm font-bold text-gray-900">
                        {item.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Item Info */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base sm:text-xl font-bold text-gray-900 font-serif group-hover:text-amber-600 transition-colors flex-1 pr-2 sm:pr-4">
                      {item.name}
                    </h3>
                    <div
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${category?.color} text-white`}
                    >
                      {item.category}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {item.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium border border-amber-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-300/50 rounded-md transition-all duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-md p-12 max-w-md mx-auto">
              <FaSearch className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">
                No items found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or explore different categories
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Show All Items
              </button>
            </div>
          </div>
        )}

        {/* Modern CTA Section */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-amber-900 rounded-md p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-16 h-16 border-2 border-amber-400 rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-24 h-24 border-2 border-amber-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 w-12 h-12 border-2 border-amber-400 rounded-full"></div>
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold mb-4 font-serif relative z-10">
              Ready to Experience Perfection?
            </h3>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed">
              Visit our cafe today and let our expert baristas craft your
              perfect cup paired with our exquisite desserts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Location & Hours
              </button>
              <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 px-8 py-4 rounded-2xl font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
