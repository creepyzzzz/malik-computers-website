import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUp, Instagram, Facebook, Twitter } from 'lucide-react';
import SplineAnimation from './SplineAnimation';
import FloatingComputer from './FloatingComputer';

// --- Sub-component 1: GrowthStats ---
const GrowthStats = () => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 pointer-events-auto"
    >
        <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="w-6 h-6 text-green-500" />
            <ArrowUp className="w-5 h-5 text-green-500" />
            <span className="text-3xl font-black text-gray-900">132%</span>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">GROWTH</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          Our clients see measurable brand growth through strategic visuals and digital thinking.
        </p>
    </motion.div>
);

// --- Sub-component 2: SocialIcons ---
const SocialIcons = () => {
    const socialLinks = [
        { icon: Instagram, href: 'https://www.instagram.com/shakirmalik.shakirmalik.31' },
        { icon: Facebook, href: 'https://www.facebook.com/shakirmalik.shakirmalik.31' },
        { icon: Twitter, href: 'https://www.twitter.com/yourprofile' },
    ];
    return (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center space-y-4 pointer-events-auto"
        >
            {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-gray-300 hover:bg-gray-400 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    <social.icon className="w-5 h-5 text-gray-700" />
                </motion.a>
            ))}
        </motion.div>
    );
};

// --- Main Hero Component ---
const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      
      {/* Animated Mat as a full-screen background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <SplineAnimation />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-8 pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm text-white font-medium tracking-wide"
              style={{ textShadow: '0px 1px 3px rgba(0,0,0,0.5)' }}
            >
              [1/8]
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1
                className="text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-tight"
                style={{ textShadow: '0px 2px 5px rgba(0,0,0,0.5)' }}
              >
                BUILDING<br />
                <span className="text-gray-200">DIGITAL</span><br />
                <span className="text-gray-300">EXPERIENCES</span><br />
                <span className="text-gray-400">THAT STICK</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-200 max-w-md leading-relaxed"
              style={{ textShadow: '0px 1px 3px rgba(0,0,0,0.5)' }}
            >
              We craft brand identities, campaigns, and websites that drive engagement, conversions, and long-term growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                Contact Us
              </motion.button>
            </motion.div>
          </div>

          {/* Center Animation Content */}
          <div className="lg:col-span-4 flex justify-center items-center relative h-full pointer-events-none">
            <FloatingComputer />
          </div>

          {/* Right Side - Stats and Social */}
          <div className="lg:col-span-3 flex flex-col items-center space-y-8">
            <GrowthStats />
            <SocialIcons />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;