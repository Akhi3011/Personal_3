import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReserve = () => {
    // Redirect to Swiggy Dineout for table reservation
    window.open('https://www.swiggy.com/dineout', '_blank');
  };

  return (
    <section className="hero-section">
      <div className="hero-content container">
        <motion.div 
          className="hero-announcement"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="caption font-mono">Rated 4.3 ⭐ • 1,123 Reviews</span>
        </motion.div>
        
        <motion.h1 
          className="heading-hero hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Where Every Cup<br />Tells a Story
        </motion.h1>
        
        <motion.p 
          className="body-large hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Experience the perfect blend of quality coffee, cozy ambience, 
          and warm hospitality at Visakhapatnam's favorite food destination
        </motion.p>

        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <motion.button 
            onClick={handleReserve} 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve a Table
          </motion.button>
          <motion.button 
            onClick={scrollToMenu} 
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Menu <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
          </motion.button>
        </motion.div>

        <motion.div 
          className="hero-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="info-item">
            <span className="caption font-mono">HOURS</span>
            <p className="body-small">Open Daily · Closes 11 PM</p>
          </div>
          <div className="info-divider"></div>
          <div className="info-item">
            <span className="caption font-mono">PRICE RANGE</span>
            <p className="body-small">₹200 - ₹400 per person</p>
          </div>
          <div className="info-divider"></div>
          <div className="info-item">
            <span className="caption font-mono">LOCATION</span>
            <p className="body-small">Vishalakshi Nagar, Vizag</p>
          </div>
        </motion.div>
      </div>
      
      <div className="hero-image-overlay"></div>
    </section>
  );
};

export default Hero;
