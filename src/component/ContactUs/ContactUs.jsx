import React from 'react';
import './ContactUs.css';
import { InstagramIcon } from 'lucide-react';
import ContactForm from '../ContactUs/ContactForm/ContactForm';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <motion.div 
      className='contact-us-container'
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className='contact-us-left'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className='contact-us-title'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Contact us
        </motion.div>
        <motion.div 
          className='contact-us-heading'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          We are always ready <br />
          to help you and answer <br />
          your questions
        </motion.div>

        <div className='contact-us-grid-details'>
          <div className='contact-us-grid-item'>
            <h2>India</h2>
            <p>Plot No. 116,Navodaya Nagar, IDA Cherlapally, Phase-V, Hyderabad -500 051.</p>
          </div>
          <div className='contact-us-grid-item'>
            <h2>Phone</h2>
            <p>8790845999</p>
          </div>
          <div className='contact-us-grid-item'>
            <h2>Follow us</h2>
            <div><InstagramIcon /></div>
          </div>
          <div className='contact-us-grid-item'>
            <h2>Email</h2>
            <p>sapthagirienterprises23@gmail.com</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className='contact-us-right'
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <ContactForm />
      </motion.div>
    </motion.div>
  );
};

export default ContactUs;
