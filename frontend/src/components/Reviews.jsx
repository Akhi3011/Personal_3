import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/mockData';
import './Reviews.css';

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-header">
          <div className="rating-badge">
            <div className="rating-score">
              <span className="score-number">4.3</span>
              <div className="stars">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
                <Star size={16} fill="none" strokeOpacity={0.3} />
              </div>
            </div>
            <p className="body-small">Based on 1,123 reviews</p>
          </div>
          
          <div className="reviews-title">
            <h2 className="heading-1">What Our Customers Say</h2>
            <p className="body-large">Real experiences from real coffee lovers</p>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <h4 className="heading-3">{testimonial.name}</h4>
                  <div className="testimonial-meta">
                    <div className="testimonial-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="caption">{testimonial.date}</span>
                  </div>
                </div>
              </div>
              <p className="body-medium testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Bean+Board+Seetammadhara"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Read More Reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
