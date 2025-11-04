import React, { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
  FaCoffee,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Our Cafe',
      details: ['123 Coffee Street', 'Brew City, BC 12345'],
      link: '#',
      linkText: 'Get Directions',
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: ['+1 (555) 123-BREW', '+1 (555) 123-CAFE'],
      link: 'tel:+15551234567',
      linkText: 'Call Now',
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: ['hello@brewhaven.com', 'reservations@brewhaven.com'],
      link: 'mailto:hello@brewhaven.com',
      linkText: 'Send Email',
    },
    {
      icon: FaClock,
      title: 'Opening Hours',
      details: [
        'Mon - Fri: 6:00 AM - 9:00 PM',
        'Sat - Sun: 7:00 AM - 10:00 PM',
      ],
      link: '#',
      linkText: 'View Full Hours',
    },
  ];

  const socialLinks = [
    {
      icon: FaFacebook,
      name: 'Facebook',
      url: '#',
      color: 'hover:bg-blue-600',
    },
    { icon: FaTwitter, name: 'Twitter', url: '#', color: 'hover:bg-blue-400' },
    {
      icon: FaInstagram,
      name: 'Instagram',
      url: '#',
      color: 'hover:bg-pink-600',
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
              <span>Get In Touch</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-serif mb-6">
              Let's Connect
              <span className="block text-amber-400">Over Coffee</span>
            </h1>
            <p className="text-lg sm:text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
              Have questions, feedback, or just want to say hello? We'd love to
              hear from you. Visit us, give us a call, or drop us a message.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <FaMapMarkerAlt className="w-4 h-4" />
                  <span>Find Us</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif mb-6">
                  Visit Our Cozy Space
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Come experience the warm atmosphere, aromatic coffee, and
                  friendly service that makes our cafe the perfect spot for your
                  daily brew or special occasions.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100 group hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif">
                        {item.title}
                      </h3>
                      <div className="space-y-1 mb-4">
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <a
                        href={item.link}
                        className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors"
                      >
                        {item.linkText}
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                  Follow Our Journey
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Stay updated with our latest brews, events, and special offers
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg ${social.color}`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-amber-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 font-serif mb-3">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Have a question or special request? We're here to help.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 flex items-center justify-center gap-3"
                >
                  <FaPaperPlane className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                <p className="text-center text-gray-500 text-sm">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif mb-4">
              Find Us Easily
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of the city with plenty of parking and public
              transport options
            </p>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl p-8 shadow-2xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center">
              <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaMapMarkerAlt className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Interactive Map
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Here you would typically embed a Google Maps or similar map
                service showing our location
              </p>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
                Open in Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our cafe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Do you take reservations?',
                answer:
                  'Yes! We recommend reservations for groups of 6 or more, especially on weekends.',
              },
              {
                question: 'Is there parking available?',
                answer:
                  'We have dedicated parking spots and plenty of street parking nearby.',
              },
              {
                question: 'Do you have vegan options?',
                answer:
                  'Absolutely! We offer plant-based milk alternatives and vegan pastries.',
              },
              {
                question: 'Can I host events at your cafe?',
                answer:
                  "Yes, we'd love to host your special events. Contact us for private booking information.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-serif">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
