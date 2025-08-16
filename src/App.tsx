import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Repairs from './components/Repairs';
import CustomerService from './components/CustomerService';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ShaderGradientBackground from './components/ShaderGradientBackground'; // Import the new component

function App() {
  return (
    // The main div no longer needs a background color, as the gradient will handle it.
    <div className="min-h-screen">
      <ShaderGradientBackground />
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <Repairs />
      <CustomerService />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;