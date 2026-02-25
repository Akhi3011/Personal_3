import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const galleryImages = [
  "https://images.unsplash.com/photo-1598959652545-c0230cdbb01f",
  "https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg",
  "https://images.pexels.com/photos/17607975/pexels-photo-17607975.jpeg",
  "https://images.unsplash.com/photo-1744135459107-ec1f89781cf3",
  "https://images.unsplash.com/photo-1757918391899-1341f7b285fb",
  "https://images.unsplash.com/photo-1545418314-7ce0b9b53901"
];

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-1">Gallery</h2>
          <p className="body-large">
            A glimpse into the Bean Board experience
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div 
              key={index}
              className={`gallery-item item-${index + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={image} alt={`ITHI HA ASA Foods Gallery ${index + 1}`} loading="lazy" />
              <div className="gallery-overlay">
                <span className="caption font-mono">View</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
