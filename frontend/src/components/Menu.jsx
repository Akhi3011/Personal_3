import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { menuCategories } from '../data/mockData';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const activeMenu = menuCategories.find(cat => cat.id === activeCategory) || menuCategories[0];

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <motion.div 
          className="menu-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-1">Our Menu</h2>
          <p className="body-large menu-subtitle">
            Handcrafted with care, served with love
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="menu-tabs">
          <div className="tabs-scroll">
            <button onClick={() => setActiveCategory('coffee')} className={`tab-button ${activeCategory === 'coffee' ? 'active' : ''}`}>
              <span className="tab-name">Coffee Menu</span>
            </button>
            <button onClick={() => setActiveCategory('frappe')} className={`tab-button ${activeCategory === 'frappe' ? 'active' : ''}`}>
              <span className="tab-name">Cream Frappe</span>
            </button>
            <button onClick={() => setActiveCategory('cozy')} className={`tab-button ${activeCategory === 'cozy' ? 'active' : ''}`}>
              <span className="tab-name">Cozy Sips</span>
            </button>
            <button onClick={() => setActiveCategory('icedtea')} className={`tab-button ${activeCategory === 'icedtea' ? 'active' : ''}`}>
              <span className="tab-name">Iced Teas</span>
            </button>
            <button onClick={() => setActiveCategory('hottea')} className={`tab-button ${activeCategory === 'hottea' ? 'active' : ''}`}>
              <span className="tab-name">Hot Teas</span>
            </button>
            <button onClick={() => setActiveCategory('sandwiches')} className={`tab-button ${activeCategory === 'sandwiches' ? 'active' : ''}`}>
              <span className="tab-name">Sandwiches</span>
            </button>
            <button onClick={() => setActiveCategory('rolls')} className={`tab-button ${activeCategory === 'rolls' ? 'active' : ''}`}>
              <span className="tab-name">Rolls & Fries</span>
            </button>
            <button onClick={() => setActiveCategory('pizza')} className={`tab-button ${activeCategory === 'pizza' ? 'active' : ''}`}>
              <span className="tab-name">Pizza & Burger</span>
            </button>
            <button onClick={() => setActiveCategory('pastries')} className={`tab-button ${activeCategory === 'pastries' ? 'active' : ''}`}>
              <span className="tab-name">Pastries & Cakes</span>
            </button>
            <button onClick={() => setActiveCategory('milkshakes')} className={`tab-button ${activeCategory === 'milkshakes' ? 'active' : ''}`}>
              <span className="tab-name">Shakes & Desserts</span>
            </button>
          </div>
        </div>

        {/* Menu Content */}
        <motion.div
          key={activeCategory}
          className="menu-content-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="menu-category-header">
            <h3 className="heading-2">{activeMenu.name}</h3>
            <p className="body-medium">{activeMenu.description}</p>
          </div>

          <div className="menu-items-compact">
            {activeMenu.items && activeMenu.items.slice(0, 20).map((item, index) => (
              <div key={index} className="menu-item-compact">
                <div className="item-info">
                  <h4 className="item-name-compact">{item.name}</h4>
                  {item.description && (
                    <p className="item-desc-compact">{item.description}</p>
                  )}
                </div>
                <div className="item-pricing">
                  {item.priceSmall && item.priceLarge ? (
                    <>
                      <span className="price-tag small">S {item.priceSmall}</span>
                      <span className="price-tag large">L {item.priceLarge}</span>
                    </>
                  ) : (
                    <span className="price-tag">{item.price}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="menu-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a 
            href="https://www.swiggy.com/dineout" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reserve a Table
          </motion.a>
          <motion.a 
            href="tel:+918977531113" 
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call to Order
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
