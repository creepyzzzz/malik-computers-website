import React from 'react';
import { motion } from 'framer-motion';

const FloatingComputer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateX: -45 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative z-10"
    >
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotateY: [0, 5, 0, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative"
        style={{ 
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Main Computer Body */}
        <div className="relative w-80 h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl shadow-2xl transform rotate-12">
          {/* Screen */}
          <div className="absolute top-6 left-6 right-6 bottom-20 bg-gray-900 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 p-4">
              {/* Fake Content Lines */}
              <div className="space-y-2">
                <div className="w-3/4 h-2 bg-orange-300 rounded opacity-60"></div>
                <div className="w-1/2 h-2 bg-gray-400 rounded opacity-40"></div>
                <div className="w-5/6 h-2 bg-gray-500 rounded opacity-30"></div>
                <div className="w-2/3 h-2 bg-orange-200 rounded opacity-50"></div>
              </div>
            </div>
            {/* Screen Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent"></div>
          </div>
          
          {/* Keyboard */}
          <div className="absolute bottom-4 left-6 right-6 h-12 bg-gradient-to-b from-orange-300 to-orange-500 rounded-lg">
            {/* Keyboard Keys Pattern */}
            <div className="grid grid-cols-12 gap-1 p-2 h-full">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="bg-orange-200 rounded-sm opacity-80"></div>
              ))}
            </div>
          </div>

          {/* Side Details */}
          <div className="absolute -right-2 top-8 w-4 h-32 bg-gradient-to-b from-orange-600 to-orange-800 rounded-r-lg"></div>
          <div className="absolute -left-2 top-12 w-3 h-6 bg-orange-600 rounded-l-lg"></div>
          
          {/* Bottom Stand */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-gray-300 to-gray-500 rounded-b-xl"></div>
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>

          {/* Highlight Effects */}
          <div className="absolute top-2 left-2 w-8 h-8 bg-white/30 rounded-full blur-md"></div>
          <div className="absolute top-4 right-4 w-4 h-4 bg-orange-200/50 rounded-full"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingComputer;