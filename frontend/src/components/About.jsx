import React from 'react';
import { motion } from 'framer-motion';
import { aboutContent } from '../data/mockData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1572231086568-6984943e6629"
              alt="Bean Board Café Interior"
              className="about-img"
            />
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="heading-1 about-title">{aboutContent.title}</h2>
            
            <p className="body-large about-paragraph">
              {aboutContent.paragraphs[0]}
            </p>
            <p className="body-large about-paragraph">
              {aboutContent.paragraphs[1]}
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <span className="caption font-mono">SERVICES</span>
                <p className="body-small">Dine-in · Takeaway · Delivery</p>
              </div>
              <div className="feature-item">
                <span className="caption font-mono">ATMOSPHERE</span>
                <p className="body-small">Cozy · Modern · Premium</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
