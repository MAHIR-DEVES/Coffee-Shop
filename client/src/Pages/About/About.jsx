import React from 'react';
import {
  FaCoffee,
  FaStar,
  FaAward,
  FaHeart,
  FaUsers,
  FaLeaf,
  FaClock,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaUsers, number: '50K+', label: 'Happy Customers' },
    { icon: FaCoffee, number: '15+', label: 'Years Experience' },
    { icon: FaAward, number: '25+', label: 'Awards Won' },
    { icon: FaLeaf, number: '100%', label: 'Organic Beans' },
  ];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Head Barista & Founder',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: '15+ years in specialty coffee, trained in Italy',
      specialties: ['Espresso Art', 'Bean Roasting'],
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Master Roaster',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Passionate about bringing out unique flavor profiles',
      specialties: ['Single Origin', 'Dark Roasts'],
    },
    {
      name: 'Emily Thompson',
      role: 'Pastry Chef',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Creates delightful pairings for our coffee selections',
      specialties: ['French Pastries', 'Seasonal Specials'],
    },
  ];

  const values = [
    {
      icon: FaHeart,
      title: 'Passion in Every Cup',
      description:
        'We believe coffee is an art form, and we pour our heart into every beverage we create.',
    },
    {
      icon: FaLeaf,
      title: 'Sustainable Sourcing',
      description:
        'We work directly with farmers who practice ethical and sustainable farming methods.',
    },
    {
      icon: FaStar,
      title: 'Quality Excellence',
      description:
        'From bean selection to brewing, we never compromise on quality and consistency.',
    },
    {
      icon: FaUsers,
      title: 'Community Focus',
      description:
        'We are more than a coffee shop - we are a gathering place for our community.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-amber-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-amber-200 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <FaCoffee className="w-4 h-4" />
              <span>Our Story Since 2008</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif mb-6">
              Crafting Coffee
              <span className="block text-amber-400">Experiences</span>
            </h1>
            <p className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been dedicated to serving exceptional
              coffee, creating meaningful connections, and building a community
              around the art of brewing.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Story Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                <FaClock className="w-4 h-4" />
                <span>Our Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-serif">
                From Humble Beginnings to Community Hub
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  What started as a small corner shop with a single espresso
                  machine has grown into a beloved community gathering place.
                  Founded in 2008 by Sarah Chen, our mission has always been
                  simple: serve exceptional coffee while building meaningful
                  connections.
                </p>
                <p>
                  We travel the world to source the finest single-origin beans,
                  working directly with farmers who share our commitment to
                  quality and sustainability. Every bean tells a story, and
                  we're honored to bring those stories to your cup.
                </p>
                <p>
                  Today, we continue to innovate while staying true to our roots
                  - creating warm, welcoming spaces where everyone feels at
                  home.
                </p>
              </div>
            </div>

            {/* Story Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Our coffee shop interior"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-600/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 font-serif">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-serif mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do, from bean selection to
              customer service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <IconComponent className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-serif mb-6">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate experts dedicated to crafting your perfect coffee
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group text-center bg-amber-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-br from-amber-200 to-amber-300 rounded-full p-1 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
                  {member.name}
                </h3>
                <div className="text-amber-600 font-semibold mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-6">
              Visit Us Today
            </h2>
            <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Experience the warmth of our community and the passion in every
              cup
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl">
                <FaMapMarkerAlt className="w-5 h-5 text-amber-300" />
                <div className="text-left">
                  <div className="font-semibold">123 Coffee Street</div>
                  <div className="text-amber-200 text-sm">
                    Brew City, BC 12345
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl">
                <FaClock className="w-5 h-5 text-amber-300" />
                <div className="text-left">
                  <div className="font-semibold">Open Daily</div>
                  <div className="text-amber-200 text-sm">
                    6:00 AM - 9:00 PM
                  </div>
                </div>
              </div>
            </div>
            <button className="mt-8 bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
