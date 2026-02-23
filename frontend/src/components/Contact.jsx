import React from 'react';
import { MapPin, Phone, Clock, Navigation, Mail } from 'lucide-react';
import { cafeInfo } from '../data/mockData';
import './Contact.css';

const Contact = () => {
  const handleReserve = () => {
    // Redirect to Swiggy Dineout for table reservation
    window.open('https://www.swiggy.com/dineout', '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-header">
          <h2 className="heading-1">Contact Information</h2>
          <p className="body-large">
            We're here to serve you the perfect experience
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <h4 className="heading-3">Location</h4>
                <p className="body-medium">{cafeInfo.address.line1}</p>
                <p className="body-medium">{cafeInfo.address.line2}</p>
                <p className="body-medium">{cafeInfo.address.line3}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Clock size={24} />
              </div>
              <div className="info-text">
                <h4 className="heading-3">Hours</h4>
                <p className="body-medium">{cafeInfo.hours}</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Phone size={24} />
              </div>
              <div className="info-text">
                <h4 className="heading-3">Phone</h4>
                <a href={`tel:${cafeInfo.phone}`} className="body-medium contact-link">
                  {cafeInfo.phone}
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div className="info-text">
                <h4 className="heading-3">Email</h4>
                <a href={`mailto:${cafeInfo.email}`} className="body-medium contact-link">
                  {cafeInfo.email}
                </a>
              </div>
            </div>

            <div className="contact-actions">
              <button onClick={handleReserve} className="btn-primary">
                Reserve a Table
              </button>
              <a 
                href={cafeInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Navigation size={16} style={{ marginRight: '0.5rem' }} />
                Get Directions
              </a>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.3!2d83.3145!3d17.7397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ0JzIzLjAiTiA4M8KwMTgnNTIuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ITHI HA ASA Foods Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
