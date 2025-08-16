import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wrench, Smartphone, Monitor, Headphones, ShoppingCart, FileText } from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: Wrench,
      title: 'Computer Repairs',
      description: 'Expert hardware and software repair services for all types of computers and laptops.',
      color: 'bg-blue-500',
      delay: 0.1
    },
    {
      icon: Smartphone,
      title: 'Mobile Phone Services',
      description: 'Comprehensive mobile repair, unlocking, and maintenance services for all brands.',
      color: 'bg-green-500',
      delay: 0.2
    },
    {
      icon: Monitor,
      title: 'Electronics Sales',
      description: 'Wide range of electronic devices, accessories, and components at competitive prices.',
      color: 'bg-purple-500',
      delay: 0.3
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: '24/7 technical support and consultation for all your technology needs.',
      color: 'bg-orange-500',
      delay: 0.4
    },
    {
      icon: ShoppingCart,
      title: 'Online Store',
      description: 'Browse and purchase electronics online with secure payment and fast delivery.',
      color: 'bg-red-500',
      delay: 0.5
    },
    {
      icon: FileText,
      title: 'Customer Service',
      description: 'Online forms, warranty claims, and customer support portal for easy service.',
      color: 'bg-indigo-500',
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            OUR SERVICES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions for individuals and businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: service.delay }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 hover:bg-white rounded-2xl p-8 transition-all duration-300 shadow-md hover:shadow-xl border border-gray-100 hover:border-gray-200"
              >
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-6 text-orange-500 hover:text-orange-600 font-semibold text-sm flex items-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;