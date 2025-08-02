import React from 'react';
import styles from './FeatureComponent.module.css';
import { motion } from 'framer-motion';

const FeatureComponent = ({ heading, features }) => {
  return (
    <motion.section 
      className={styles.featureSection}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.h2 
        className={styles.Featureheading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {heading}
      </motion.h2>

      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <motion.div
            className={styles.featureCard}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <feature.icon size={60} className={styles.featureIcon} />
            </motion.div>
            <h3>{feature.title}</h3>
            <ul>
              {feature.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default FeatureComponent;
