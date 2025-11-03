import React from 'react';
import {
  FaStar,
  FaHeart,
  FaCookie,
  FaIceCream,
  FaBirthdayCake,
  FaLeaf,
} from 'react-icons/fa';

const DessertSection = () => {
  const desserts = [
    {
      id: 1,
      name: 'Tiramisu Classic',
      description: 'Layers of coffee-soaked ladyfingers and mascarpone cream',
      price: 6.5,
      category: 'Cakes',
      rating: 4.9,
      image:
        'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      isPopular: true,
      features: ['Coffee-infused', 'Creamy', 'Italian'],
    },
    {
      id: 2,
      name: 'Chocolate Lava Cake',
      description:
        'Warm chocolate cake with molten center, served with vanilla ice cream',
      price: 7.2,
      category: 'Cakes',
      rating: 4.8,
      image:
        'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      isNew: true,
      features: ['Warm', 'Chocolate', 'Vanilla Ice Cream'],
    },
    {
      id: 3,
      name: 'New York Cheesecake',
      description:
        'Creamy cheesecake with berry compote and graham cracker crust',
      price: 5.8,
      category: 'Cheesecakes',
      rating: 4.7,
      image:
        'https://drivemehungry.com/wp-content/uploads/2022/07/strawberry-cheesecake-11.jpg',
      features: ['Creamy', 'Berry Compote', 'Classic'],
    },
    {
      id: 4,
      name: 'Macaron Assortment',
      description:
        'Colorful French macarons in various flavors - pistachio, raspberry, vanilla',
      price: 8.5,
      category: 'Pastries',
      rating: 4.6,
      image:
        'https://img.freepik.com/free-photo/side-view-mix-cookies-with-walnut-chocolate-chips-cottage-cheese-puff-pastry-vanilla-sugar-powder_141793-5018.jpg?semt=ais_hybrid&w=740&q=80',
      isPopular: true,
      features: ['French', 'Colorful', 'Assorted Flavors'],
    },
    {
      id: 5,
      name: 'Croissant & Pain au Chocolat',
      description:
        'Freshly baked buttery croissants and chocolate-filled pastries',
      price: 4.5,
      category: 'Pastries',
      rating: 4.8,
      image:
        'https://images.stockcake.com/public/5/5/d/55d62e09-238c-4603-b776-b2725ebab62d_large/delicious-pastry-assortment-stockcake.jpg',
      features: ['Buttery', 'Fresh Baked', 'Flaky'],
    },
    {
      id: 6,
      name: 'Vegan Chocolate Mousse',
      description:
        'Rich dairy-free chocolate mousse with coconut cream and berries',
      price: 6.0,
      category: 'Special Diet',
      rating: 4.5,
      image:
        'https://www.internationalculinarystudio.com/wp-content/uploads/2019/10/special-diet.jpg',
      isNew: true,
      features: ['Vegan', 'Dairy-free', 'Berry Topping'],
    },
  ];

  const categories = [
    { name: 'All', icon: FaCookie, count: desserts.length },
    {
      name: 'Cakes',
      icon: FaBirthdayCake,
      count: desserts.filter(d => d.category === 'Cakes').length,
    },
    {
      name: 'Cheesecakes',
      icon: FaHeart,
      count: desserts.filter(d => d.category === 'Cheesecakes').length,
    },
    {
      name: 'Pastries',
      icon: FaCookie,
      count: desserts.filter(d => d.category === 'Pastries').length,
    },
    {
      name: 'Special Diet',
      icon: FaLeaf,
      count: desserts.filter(d => d.category === 'Special Diet').length,
    },
  ];

  const getCategoryColor = category => {
    switch (category) {
      case 'Cakes':
        return 'from-pink-500 to-red-500';
      case 'Cheesecakes':
        return 'from-yellow-500 to-orange-500';
      case 'Pastries':
        return 'from-amber-500 to-brown-500';
      case 'Special Diet':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-purple-500 to-pink-500';
    }
  };

  const getCategoryIcon = category => {
    switch (category) {
      case 'Cakes':
        return FaBirthdayCake;
      case 'Cheesecakes':
        return FaHeart;
      case 'Pastries':
        return FaCookie;
      case 'Special Diet':
        return FaLeaf;
      default:
        return FaCookie;
    }
  };

  return (
    <section className="pt-5 pb-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-6 py-3 rounded-full text-lg font-semibold mb-6">
            <FaIceCream className="w-5 h-5 text-amber-600" />
            <span>Sweet Indulgences</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Decadent Desserts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Perfect companions to your coffee. Handcrafted desserts made with
            the finest ingredients.
          </p>
        </div>

        {/* Category Filters - Responsive */}
        <div className="flex justify-center pb-4 mb-8 sm:mb-12 gap-3 sm:gap-4 scrollbar-hide hidden md:flex">
          {categories.map(category => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                className="flex-shrink-0 group flex items-center gap-2 sm:gap-3 bg-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-amber-100 min-w-max"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-amber-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-amber-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-xs sm:text-sm lg:text-base">
                    {category.name}
                  </div>
                  <div className="text-gray-500 text-xs sm:text-sm">
                    {category.count} items
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ✅ Desserts Grid – 2 cards on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8">
          {desserts.map(dessert => {
            const CategoryIcon = getCategoryIcon(dessert.category);
            return (
              <div
                key={dessert.id}
                className="group relative bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-amber-100"
              >
                {/* Header with Category */}
                <div
                  className={`p-4 sm:p-5 bg-gradient-to-r ${getCategoryColor(
                    dessert.category
                  )} text-white`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <CategoryIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-semibold text-xs sm:text-sm uppercase tracking-wide">
                        {dessert.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {dessert.isPopular && (
                        <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                          <FaStar className="w-3 h-3 text-yellow-300" />
                          <span className="text-[10px] sm:text-xs font-semibold">
                            Popular
                          </span>
                        </div>
                      )}
                      {dessert.isNew && (
                        <span className="bg-white/20 px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                          New
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Dessert Image */}
                <div className="relative h-36 sm:h-48 md:h-56 overflow-hidden">
                  <img
                    src={dessert.image}
                    alt={dessert.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Rating Badge */}
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm rounded-2xl px-2 sm:px-3 py-1 sm:py-2 shadow-lg">
                    <div className="flex items-center gap-1">
                      <FaStar className="w-3 sm:w-4 h-3 sm:h-4 text-amber-400 fill-current" />
                      <span className="text-xs sm:text-sm font-bold text-gray-900">
                        {dessert.rating}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/80 backdrop-blur-sm rounded-2xl px-3 sm:px-4 py-1 sm:py-2">
                    <span className="text-sm sm:text-xl font-bold text-white font-serif">
                      ${dessert.price}
                    </span>
                  </div>
                </div>

                {/* Dessert Info */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 font-serif group-hover:text-amber-600 transition-colors">
                    {dessert.name}
                  </h3>

                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">
                    {dessert.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {dessert.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-amber-100 text-amber-800 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-300 rounded-lg transition-all duration-500 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xs p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-6 h-6 border-2 border-white rounded-full"></div>
            </div>

            <h3 className="text-3xl font-bold mb-4 font-serif relative z-10">
              Sweeten Your Day
            </h3>
            <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Pair your favorite coffee with our exquisite desserts for the
              perfect treat
            </p>
            <button className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg relative z-10">
              View Full Dessert Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DessertSection;
