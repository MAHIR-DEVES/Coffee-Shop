import React, { useState } from 'react';
import {
  FaStar,
  FaClock,
  FaFire,
  FaGift,
  FaPercent,
  FaCoffee,
  FaCookie,
  FaSnowflake,
  FaMugHot,
  FaLeaf,
} from 'react-icons/fa';

const Offer = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const offerFilters = [
    { id: 'all', name: 'All Offers', icon: FaGift, count: 8 },
    { id: 'coffee', name: 'Coffee Deals', icon: FaCoffee, count: 4 },
    { id: 'desserts', name: 'Dessert Specials', icon: FaCookie, count: 2 },
    { id: 'combo', name: 'Combo Offers', icon: FaMugHot, count: 2 },
  ];

  const currentOffers = [
    {
      id: 1,
      title: 'Morning Bliss Combo',
      description: 'Start your day right with any coffee and a fresh croissant',
      originalPrice: 8.5,
      discountPrice: 6.5,
      discount: '25% OFF',
      category: 'combo',
      image:
        'https://images.unsplash.com/photo-1555507038-44d54ac4b01e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true,
      validUntil: '2024-12-31',
      features: ['Any Coffee', 'Fresh Croissant', 'Perfect Start'],
      color: 'from-amber-500 to-orange-500',
    },
    {
      id: 2,
      title: 'Happy Hour Special',
      description: '50% off all iced coffees from 2 PM to 4 PM daily',
      originalPrice: null,
      discountPrice: null,
      discount: '50% OFF',
      category: 'coffee',
      image:
        'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true,
      validUntil: 'Ongoing',
      features: ['2 PM - 4 PM', 'Daily Special'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      name: 'Buy 1 Get 1 Free',
      description: 'Purchase any specialty latte and get another one free',
      originalPrice: null,
      discountPrice: null,
      discount: 'BOGO',
      category: 'coffee',
      image:
        'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      validUntil: '2024-12-25',
      features: ['Specialty Lattes', 'Free Drink', 'Share with Friends'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      title: "Dessert Lover's Deal",
      description: 'Any coffee with a slice of our signature tiramisu',
      originalPrice: 11.0,
      discountPrice: 8.5,
      discount: '30% OFF',
      category: 'desserts',
      image:
        'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      popular: true,
      validUntil: '2024-12-20',
      features: ['Coffee + Dessert', 'Signature Tiramisu', 'Perfect Pairing'],
      color: 'from-pink-500 to-red-500',
    },
    {
      id: 5,
      title: 'Cold Brew Club',
      description: 'Unlimited cold brew refills for just $15/month',
      originalPrice: 25.0,
      discountPrice: 15.0,
      discount: '40% OFF',
      category: 'coffee',
      image:
        'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      validUntil: '2024-12-31',
      features: ['Unlimited Refills', 'Monthly Membership', 'Always Chilled'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 6,
      title: 'Weekend Brunch Bundle',
      description: 'Two coffees + two pastries for the perfect weekend',
      originalPrice: 18.0,
      discountPrice: 12.0,
      discount: '33% OFF',
      category: 'combo',
      image:
        'https://images.unsplash.com/photo-1555507038-44d54ac4b01e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      validUntil: '2024-12-31',
      features: ['Weekends Only', 'Two Coffees', 'Two Pastries'],
      color: 'from-yellow-500 to-amber-500',
    },
    {
      id: 7,
      title: 'Student Discount',
      description: '20% off all menu items with valid student ID',
      originalPrice: null,
      discountPrice: null,
      discount: '20% OFF',
      category: 'coffee',
      image:
        'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      validUntil: 'Ongoing',
      features: ['With ID Card', 'Dine-in Only'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 8,
      title: 'Macaron Madness',
      description: 'Box of 6 macarons with any purchase over $10',
      originalPrice: 12.0,
      discountPrice: 5.0,
      discount: '60% OFF',
      category: 'desserts',
      image:
        'https://images.unsplash.com/photo-1558326560-76b7c9c3c9f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      validUntil: '2024-12-15',
      features: ['6 Macarons', '$10 Minimum', 'Colorful Selection'],
      color: 'from-pink-500 to-purple-500',
    },
  ];

  const filteredOffers =
    activeFilter === 'all'
      ? currentOffers
      : currentOffers.filter(offer => offer.category === activeFilter);

  const getDaysRemaining = validUntil => {
    if (validUntil === 'Ongoing') return 'Ongoing';
    const today = new Date();
    const validDate = new Date(validUntil);
    const diffTime = validDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} days left` : 'Expired';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-600 to-amber-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-amber-100 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <FaGift className="w-4 h-4" />
              <span>Exclusive Deals & Specials</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif mb-6">
              Special Offers
              <span className="block text-amber-200">Just For You</span>
            </h1>
            <p className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Discover amazing deals, seasonal specials, and exclusive
              promotions crafted to make your coffee experience even more
              delightful.
            </p>
          </div>
        </div>
      </section>

      {/* Offers Filter - Ultra Compact */}
      <section className="py-6 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col  gap-4 sm:gap-6 lg:gap-8 items-start lg:items-center justify-between">
            {/* Filter Title */}
            <div className="w-full text-center ">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 font-serif">
                Current Promotions
              </h2>
              <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-base">
                {filteredOffers.length} amazing offers
              </p>
            </div>

            {/* Filter Buttons - Ultra Compact */}
            <div className="flex flex-wrap gap-1 sm:gap-3 w-full lg:w-auto">
              {offerFilters.map(filter => {
                const IconComponent = filter.icon;
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`group flex items-center gap-1 sm:gap-2 lg:gap-3 px-2 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-md sm:rounded-xl lg:rounded-2xl font-medium sm:font-semibold transition-all duration-300 text-xs sm:text-sm lg:text-base flex-1 sm:flex-none min-w-0 justify-center ${
                      isActive
                        ? 'bg-amber-600 text-white shadow-sm sm:shadow-lg'
                        : 'bg-amber-100 text-amber-800 hover:bg-amber-200 hover:shadow-xs sm:hover:shadow-md'
                    }`}
                  >
                    <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="hidden xs:inline sm:inline whitespace-nowrap truncate">
                      {filter.name}
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] sm:text-xs min-w-[18px] text-center ${
                        isActive ? 'bg-white/20' : 'bg-amber-200/60'
                      }`}
                    >
                      {filter.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Offers Grid */}
      <section className="py-8 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-8">
            {filteredOffers.map(offer => {
              const daysRemaining = getDaysRemaining(offer.validUntil);
              const isExpired = daysRemaining === 'Expired';

              return (
                <div
                  key={offer.id}
                  className={`group relative bg-white rounded-md sm:rounded-md shadow-lg sm:shadow-xl hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 overflow-hidden border border-amber-100 ${
                    isExpired
                      ? 'opacity-60'
                      : 'hover:-translate-y-1 sm:hover:-translate-y-2'
                  }`}
                >
                  {/* Expired Overlay */}
                  {isExpired && (
                    <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm z-10 flex items-center justify-center">
                      <div className="bg-white/90 rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-center">
                        <div className="text-sm sm:text-lg font-bold text-gray-900 mb-1">
                          Offer Expired
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          Check current offers
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Offer Header */}
                  <div
                    className={`p-4 sm:p-6 bg-gradient-to-r ${offer.color} text-white relative overflow-hidden`}
                  >
                    <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
                      {offer.popular && (
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                          <FaFire className="w-2 h-2 sm:w-3 sm:h-3" />
                          <span className="hidden xs:inline">Popular</span>
                        </div>
                      )}
                    </div>

                    <div className="relative z-10">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-1 sm:mb-2">
                        {offer.discount}
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold font-serif mb-1 sm:mb-2 line-clamp-2">
                        {offer.title}
                      </h3>
                      <p className="text-amber-100 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {offer.description}
                      </p>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-4 h-4 sm:w-8 sm:h-8 border border-white rounded-full"></div>
                      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-12 sm:h-12 border border-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Offer Image */}
                  <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Price Display */}
                    {offer.originalPrice && (
                      <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-2 py-1 sm:px-4 sm:py-2">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <span className="text-sm sm:text-lg font-bold text-white font-serif">
                            ${offer.discountPrice}
                          </span>
                          <span className="text-amber-300 line-through text-xs sm:text-sm">
                            ${offer.originalPrice}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Timer */}
                    <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl px-2 py-1 sm:px-3 sm:py-2">
                      <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-gray-900">
                        <FaClock className="w-2 h-2 sm:w-3 sm:h-3 text-amber-500" />
                        <span className="text-xs sm:text-sm">
                          {daysRemaining}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Offer Details */}
                  <div className="p-3 sm:p-4 lg:p-6">
                    {/* Features Section */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {offer.features.map((feature, index) => (
                        <span
                          key={index}
                          className={`bg-amber-100 text-amber-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium 
        ${index > 1 ? 'hidden sm:inline-flex' : 'inline-flex'}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-2 px-4 sm:py-3 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                        isExpired
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-amber-600 hover:bg-amber-700 text-white hover:shadow-lg transform hover:scale-105'
                      }`}
                      disabled={isExpired}
                    >
                      {isExpired ? 'Offer Expired' : 'Redeem Offer'}
                    </button>

                    {/* Terms */}
                    <p className="text-center text-gray-500 text-[10px] xs:text-xs mt-2 sm:mt-3 hidden md:block">
                      Present at counter • No combinations
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-amber-300 rounded-md sm:rounded-md transition-all duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredOffers.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-md mx-auto">
                <FaGift className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 font-serif">
                  No Offers Found
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  No current offers match your filter. Check back soon for new
                  promotions!
                </p>
                <button
                  onClick={() => setActiveFilter('all')}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-colors duration-300 text-sm sm:text-base"
                >
                  Show All Offers
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <FaGift className="w-12 h-12 text-amber-200 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
              Never Miss a Deal!
            </h2>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new
              offers, seasonal specials, and exclusive member-only deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-amber-300 focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
              />
              <button className="bg-white text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe Now
              </button>
            </div>
            <p className="text-amber-200 text-sm mt-4">
              Unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
