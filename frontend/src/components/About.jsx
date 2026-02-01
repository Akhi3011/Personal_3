import React from 'react';
import { aboutContent } from '../data/mockData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1572231086568-6984943e6629"
              alt="Bean Board Café Interior"
              className="about-img"
            />
          </div>
          
          <div className="about-text">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
