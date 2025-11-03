import React from 'react';
import {
  FaStar,
  FaCoffee,
  FaFire,
  FaLeaf,
  FaSnowflake,
  FaMugHot,
} from 'react-icons/fa';

const CoffeeSection = () => {
  const cafeProducts = [
    {
      id: 1,
      name: 'Espresso Macchiato',
      description: 'Rich espresso crowned with velvety steamed milk foam',
      price: 4.5,
      category: 'Hot Coffee',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      isPopular: true,
      icon: FaMugHot,
      features: ['Single Origin', 'Velvety Foam', 'Strong'],
    },
    {
      id: 2,
      name: 'Caramel Latte',
      description:
        'Smooth espresso blended with creamy milk and caramel drizzle',
      price: 5.2,
      category: 'Hot Coffee',
      rating: 4.6,
      image:
        'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      isNew: true,
      icon: FaCoffee,
      features: ['Caramel Drizzle', 'Creamy', 'Sweet'],
    },
    {
      id: 3,
      name: 'Iced Americano',
      description: 'Bold espresso shots chilled over crystal clear ice',
      price: 4.0,
      category: 'Iced Coffee',
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: FaSnowflake,
      features: ['Refreshing', 'Strong', 'Clear Ice'],
    },
    {
      id: 4,
      name: 'Cappuccino Art',
      description:
        'Perfect harmony of espresso, steamed milk and artistic foam',
      price: 4.8,
      category: 'Hot Coffee',
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      isPopular: true,
      icon: FaMugHot,
      features: ['Latte Art', 'Creamy', 'Balanced'],
    },
    {
      id: 5,
      name: 'Mocha Dream',
      description: 'Decadent blend of rich chocolate and premium espresso',
      price: 5.5,
      category: 'Specialty',
      rating: 4.5,
      image:
        'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      icon: FaLeaf,
      features: ['Chocolate', 'Rich', 'Indulgent'],
    },
    {
      id: 6,
      name: 'Cold Brew',
      description: 'Smooth 18-hour steeped coffee with subtle chocolate notes',
      price: 4.75,
      category: 'Iced Coffee',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      isNew: true,
      icon: FaSnowflake,
      features: ['18-Hour Brew', 'Smooth', 'Chocolate Notes'],
    },
  ];

  const getCategoryColor = category => {
    switch (category) {
      case 'Hot Coffee':
        return 'from-red-500 to-orange-500';
      case 'Iced Coffee':
        return 'from-blue-500 to-cyan-500';
      case 'Specialty':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-amber-500 to-orange-500';
    }
  };

  const getCategoryIcon = category => {
    switch (category) {
      case 'Hot Coffee':
        return FaMugHot;
      case 'Iced Coffee':
        return FaSnowflake;
      case 'Specialty':
        return FaLeaf;
      default:
        return FaCoffee;
    }
  };

  return (
    <section className="pt-16 pb-10 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 text-amber-600 mb-6">
            <div className="w-16 h-0.5 bg-amber-300"></div>
            <FaCoffee className="w-6 h-6" />
            <div className="w-16 h-0.5 bg-amber-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Our Signature
            <span className="block text-amber-600">Creations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Each drink is a masterpiece, crafted with precision and passion by
            our expert baristas
          </p>
        </div>

        {/* ✅ Products Grid – 2 cards on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
          {cafeProducts.map(product => {
            const CategoryIcon = getCategoryIcon(product.category);
            return (
              <div
                key={product.id}
                className="group relative bg-gradient-to-br from-white to-amber-50 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-amber-100"
              >
                {/* Header with Category */}
                <div
                  className={`p-4 sm:p-6 bg-gradient-to-r ${getCategoryColor(
                    product.category
                  )} text-white`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CategoryIcon className="w-5 h-5" />
                      <span className="font-semibold text-xs sm:text-sm uppercase tracking-wide">
                        {product.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {product.isPopular && (
                        <FaFire className="w-4 h-4 text-white animate-pulse" />
                      )}
                      {product.isNew && (
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Product Image */}
                <div className="relative h-36 sm:h-48 md:h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Rating Badge */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-2 sm:px-3 py-1 sm:py-2 shadow-lg">
                    <div className="flex items-center gap-1">
                      <FaStar className="w-3 sm:w-4 h-3 sm:h-4 text-amber-400 fill-current" />
                      <span className="text-xs sm:text-sm font-bold text-gray-900">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/80 backdrop-blur-sm rounded-2xl px-3 sm:px-4 py-1 sm:py-2">
                    <span className="text-sm sm:text-xl font-bold text-white font-serif">
                      ${product.price}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 font-serif group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 md:mb-4">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-amber-100 text-amber-800 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-amber-200 my-3 sm:my-4 hidden md:flex"></div>

                  {/* Additional Info */}
                  <div className="flex flex-wrap justify-between text-[10px] sm:text-xs text-gray-500 gap-1 sm:gap-2 hidden md:flex">
                    <span>Handcrafted Daily</span>
                    <span>Fresh Ingredients</span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-300 rounded-lg transition-all duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoffeeSection;
