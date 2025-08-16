import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const SocialIcons = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/shakirmalik.shakirmalik.31', delay: 0.1 },
    { icon: Facebook, href: 'https://www.facebook.com/shakirmalik.shakirmalik.31', delay: 0.2 },
    { icon: Twitter, href: 'https://www.twitter.com/yourprofile', delay: 0.3 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="flex flex-col space-y-4"
    >
      {socialLinks.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <motion.a
            key={index}
            href={social.href}
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Improves security for external links
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: social.delay + 1.5 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 bg-gray-300 hover:bg-gray-400 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <IconComponent className="w-5 h-5 text-gray-700" />
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialIcons;