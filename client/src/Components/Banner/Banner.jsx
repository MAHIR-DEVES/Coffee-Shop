import React from 'react';
import {
  FaCoffee,
  FaArrowRight,
  FaStar,
  FaHeart,
  FaClock,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
  const coffeeImages = [
    {
      id: 1,
      name: 'Espresso Macchiato',
      desc: 'Bold & Creamy',
      price: '$4.50',
      image:
        'https://img.freepik.com/free-photo/perfect-morning-breakfast-fresh-croissants-oranges-blueberries-plate_181624-54752.jpg?semt=ais_hybrid&w=740&q=80',
    },
    {
      id: 2,
      name: 'Caramel Latte',
      desc: 'Sweet & Smooth',
      price: '$5.20',
      image:
        'https://media.istockphoto.com/id/2168005130/photo/heart-shaped-latte-art-in-a-white-cup-with-coffee-beans-isolated-on-wooden-table-side-view-of.jpg?s=612x612&w=0&k=20&c=hQmWzRmUpVsrEVD97Dwy7jxk6FmRJhKbA2VNh_D5V9s=',
    },
    {
      id: 3,
      name: 'Cappuccino Classic',
      desc: 'Rich & Foamy',
      price: '$4.80',
      image:
        'https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg',
    },
    {
      id: 4,
      name: 'Mocha Magic',
      desc: 'Chocolate & Coffee',
      price: '$5.20',
      image:
        'https://www.seriouseats.com/thmb/Mykce8jNBk43y7fKyIjaPm2BB58=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2017__06__20170526-no-bake-cheesecake-vicky-wasik-18-89991c64ba544e19bc05c774c499438c.jpg',
    },
    {
      id: 5,
      name: 'Caramel Macchiato',
      desc: 'Sweet & Strong',
      price: '$5.00',
      image:
        'https://www.thecaffeinebaar.com/cdn/shop/articles/Recipe-_0003_cold_brew_1024x1024.jpg?v=1636717199',
    },
    {
      id: 6,
      name: 'Vanilla Latte',
      desc: 'Fragrant & Smooth',
      price: '$4.70',
      image:
        'https://chopnotch.com/wp-content/uploads/2020/11/Panna-Cotta-1.jpg',
    },
    {
      id: 7,
      name: 'Iced Coffee',
      desc: 'Chilled & Refreshing',
      price: '$3.80',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HN8AiGNBnRRMXEzB8ONaK4QJoAW0zhJ49A&s',
    },
    {
      id: 8,
      name: 'Flat White',
      desc: 'Creamy & Balanced',
      price: '$4.60',
      image:
        'https://www.tasteofhome.com/wp-content/uploads/2025/07/30-Summer-Desserts-That-Are-No-Bake-and-Oh-So-Easy_TOHcom23_27515_P2_MD_03_22_6b.jpg',
    },
  ];

  return (
    <div className="relative h-[550px] sm:h-[600px] lg:h-[700px]  bg-gray-900 overflow-hidden pt-4 md:pt-0">
      {/* Background Image with Enhanced Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2061&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/70 lg:via-gray-900/70"></div>
      </div>

      {/* Floating Coffee Beans */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-1/4 w-3 h-1.5 sm:w-4 sm:h-2 bg-amber-700 rounded-full animate-float"></div>
        <div
          className="absolute top-20 sm:top-40 right-1/4 sm:right-1/3 w-2 h-1 sm:w-3 sm:h-1.5 bg-amber-600 rounded-full animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute bottom-20 sm:bottom-1/3 left-1/4 sm:left-1/3 w-3 h-1.5 sm:w-5 sm:h-2.5 bg-amber-800 rounded-full animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[500px] sm:h-[600px] lg:h-[700px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center w-full py-8 sm:py-12 lg:py-16">
            {/* Left Content - Responsive */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-white text-center lg:text-left">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-amber-600/20 backdrop-blur-lg border border-amber-500/40 text-amber-300 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                <FaStar className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 animate-pulse" />
                <span>Since 2010 • Premium Artisanal Roasters</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  Crafted
                  <span className="block text-amber-400 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                    Coffee Experience
                  </span>
                  Perfection in Every Cup
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Discover the finest single-origin beans, carefully roasted to
                  unlock their full potential. Each cup tells a story of passion
                  and craftsmanship.
                </p>
              </div>
            </div>

            {/* Right Side - Responsive Slider */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                {/* Main Slider */}
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    bulletClass:
                      'swiper-pagination-bullet !bg-amber-400 !opacity-50 !w-2 !h-2 sm:!w-3 sm:!h-3',
                    bulletActiveClass:
                      'swiper-pagination-bullet-active !bg-amber-500 !opacity-100',
                  }}
                  loop={true}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
                >
                  {coffeeImages.map(coffee => (
                    <SwiperSlide key={coffee.id}>
                      <div className="relative group">
                        <img
                          src={coffee.image}
                          alt={coffee.name}
                          className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        {/* Content Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
                            <div>
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                                {coffee.name}
                              </h3>
                              <p className="text-amber-300 text-sm sm:text-base lg:text-lg">
                                {coffee.desc}
                              </p>
                            </div>
                            <div className="text-left sm:text-right">
                              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-amber-400">
                                {coffee.price}
                              </div>
                              <div className="flex gap-1 sm:justify-end mt-1 sm:mt-2">
                                {[1, 2, 3, 4, 5].map(star => (
                                  <FaStar
                                    key={star}
                                    className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Decorative Elements - Hidden on mobile */}
                <div className="hidden sm:block absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-amber-400/10 rounded-full blur-xl sm:blur-2xl"></div>
                <div className="hidden sm:block absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-24 h-24 sm:w-40 sm:h-40 bg-amber-600/10 rounded-full blur-xl sm:blur-2xl"></div>

                {/* Floating Coffee Bean - Hidden on mobile */}
                <div className="hidden sm:block absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-12 h-6 sm:w-20 sm:h-10 bg-amber-800 rounded-full rotate-45 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        /* Swiper pagination responsive fixes */
        @media (max-width: 640px) {
          .swiper-pagination {
            bottom: 8px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
