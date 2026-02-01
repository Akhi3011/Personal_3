import React from 'react';
import { cafeInfo } from '../data/mockData';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="heading-1">Gallery</h2>
          <p className="body-large">
            A glimpse into the Bean Board experience
          </p>
        </div>

        <div className="gallery-grid">
          {cafeInfo.images.gallery.map((image, index) => (
            <div key={index} className={`gallery-item item-${index + 1}`}>
              <img src={image} alt={`Bean Board Gallery ${index + 1}`} />
              <div className="gallery-overlay">
                <span className="caption font-mono">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
