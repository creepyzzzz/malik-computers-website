import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUp } from 'lucide-react';

const GrowthStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200"
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="mt-6 pt-4 border-t border-gray-100"
      >
        <p className="text-xs text-gray-500 leading-relaxed">
          From the first spark of an idea to worldwide recognition — we partner with brands
        </p>
      </motion.div>

      {/* Animated Progress Bar */}
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '132%' }}
            transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
            className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full relative overflow-hidden"
            style={{ maxWidth: '100%' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GrowthStats;