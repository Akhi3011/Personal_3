import React from 'react';
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
        <div className="gallery-header">
          <h2 className="heading-1">Gallery</h2>
          <p className="body-large">
            A glimpse into the Bean Board experience
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item item-1">
            <img src={galleryImages[0]} alt="Bean Board Gallery 1" />
            <div className="gallery-overlay">
              <span className="caption font-mono">View</span>
            </div>
          </div>
          <div className="gallery-item item-2">
            <img src={galleryImages[1]} alt="Bean Board Gallery 2" />
            <div className="gallery-overlay">
              <span className="caption font-mono">View</span>
            </div>
          </div>
          <div className="gallery-item item-3">
            <img src={galleryImages[2]} alt="Bean Board Gallery 3" />
            <div className="gallery-overlay">
              <span className="caption font-mono">View</span>
            </div>
          </div>
          <div className="gallery-item item-4">
            <img src={galleryImages[3]} alt="Bean Board Gallery 4" />
            <div className="gallery-overlay">
              <span className="caption font-mono">View</span>
            </div>
          </div>
          <div className="gallery-item item-5">
            <img src={galleryImages[4]} alt="Bean Board Gallery 5" />
            <div className="gallery-overlay">
              <span className="caption font-mono">View</span>
            </div>
          </div>
          <div className="gallery-item item-6">
            <img src={galleryImages[5]} alt="Bean Board Gallery 6" />
            <div className="gallery-overlay">
              <span className="caption font-mono">View</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
