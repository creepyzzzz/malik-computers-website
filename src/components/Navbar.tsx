import React, { useState } from 'react';
import { Menu, X, Globe, User, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/src/assets/logo.jpg" // Adjust the path based on where you place the image
              alt="Logo"
              className="w-10 h-10 rounded-lg mr-3"
            />
            <span className="text-2xl font-bold text-gray-900">Malik Computers</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-900 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <div className="relative">
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors flex items-center space-x-1"
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {servicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  >
                    <a href="#repairs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Repairs</a>
                    <a href="#support" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tech Support</a>
                    <a href="#products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Products</a>
                  </motion.div>
                )}
              </div>
              <a href="#pricing" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                Pricing
              </a>
              <a href="#solution" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
                Solution
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
              <Globe className="w-4 h-4" />
              <span className="text-sm">English</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Login/Register
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-900 block px-3 py-2 text-base font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Services</a>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Pricing</a>
            <a href="#solution" className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium">Solution</a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;