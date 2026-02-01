import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuCategories } from '../data/mockData';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const activeMenu = menuCategories.find(cat => cat.id === activeCategory);

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

        <motion.div 
          className="menu-categories"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            onClick={() => setActiveCategory('coffee')}
            className={`category-btn ${activeCategory === 'coffee' ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Coffee
          </motion.button>
          <motion.button
            onClick={() => setActiveCategory('snacks')}
            className={`category-btn ${activeCategory === 'snacks' ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Snacks
          </motion.button>
          <motion.button
            onClick={() => setActiveCategory('desserts')}
            className={`category-btn ${activeCategory === 'desserts' ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Desserts
          </motion.button>
          <motion.button
            onClick={() => setActiveCategory('combos')}
            className={`category-btn ${activeCategory === 'combos' ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Combos
          </motion.button>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="menu-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="menu-featured">
              <img 
                src={activeMenu.image} 
                alt={activeMenu.name}
                className="featured-image"
              />
              <div className="featured-overlay">
                <h3 className="heading-2">{activeMenu.name}</h3>
                <p className="body-medium">{activeMenu.description}</p>
              </div>
            </div>

            <div className="menu-items">
              {activeMenu.items && activeMenu.items.length > 0 && (
                <>
                  {activeMenu.items.slice(0, 6).map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="menu-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="item-header">
                        <h4 className="heading-3">{item.name}</h4>
                        <span className="item-price font-mono">{item.price}</span>
                      </div>
                      <p className="body-small item-description">{item.description}</p>
                    </motion.div>
                  ))}
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="menu-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a 
            href="https://www.swiggy.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order on Swiggy
          </motion.a>
          <motion.a 
            href="tel:07382638620" 
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
