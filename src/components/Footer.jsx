import React from 'react';
import { Coffee, Instagram, Facebook, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Coffee size={32} />
              <div>
                <h3 className="heading-3">ITHI HA ASA Foods</h3>
              </div>
            </div>
            <p className="body-small footer-tagline">
              Where every cup tells a story
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4 className="caption font-mono footer-title">QUICK LINKS</h4>
              <ul className="footer-list">
                <li><a href="#menu" className="body-small">Menu</a></li>
                <li><a href="#about" className="body-small">About Us</a></li>
                <li><a href="#gallery" className="body-small">Gallery</a></li>
                <li><a href="#contact" className="body-small">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="caption font-mono footer-title">SERVICES</h4>
              <ul className="footer-list">
                <li><span className="body-small">Dine-in</span></li>
                <li><span className="body-small">Takeaway</span></li>
                <li><span className="body-small">Delivery</span></li>
                <li><span className="body-small">Reservations</span></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="caption font-mono footer-title">CONNECT</h4>
              <div className="footer-social">
                <a href="#" aria-label="Instagram" className="social-link">
                  <Instagram size={20} />
                </a>
                <a href="#" aria-label="Facebook" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="mailto:hello@beanboard.com" aria-label="Email" className="social-link">
                  <Mail size={20} />
                </a>
              </div>
              <p className="body-small">
                <a href="tel:+918977531113" className="footer-phone">+91 89775 31113</a>
              </p>
              <p className="body-small">
                <a href="mailto:info.itihasafoods@gmail.com" className="footer-phone">info.itihasafoods@gmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="caption">
            © 2024 Bean Board. All rights reserved.
          </p>
          <p className="caption">
            Vishalakshi Nagar, Visakhapatnam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
