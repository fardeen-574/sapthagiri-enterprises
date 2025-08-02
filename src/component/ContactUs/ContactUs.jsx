import React from 'react';
import './ContactUs.css';
import { InstagramIcon } from 'lucide-react';
import ContactForm from '../ContactUs/ContactForm/ContactForm';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <motion.div
      className='contact-us-container'
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className='contact-us-left'>
        <div className='contact-us-title'>Contact us</div>
        <div className='contact-us-heading'>
          We are always ready <br />
          to help you and answer <br />
          your questions
        </div>
        <div className='contact-us-grid-details'>
          <div className='contact-us-grid-item'>
            <h2>India</h2>
            <p>
              Plot No. 116, Navodaya Nagar, IDA Cherlapally, Phase-V, Hyderabad - 500051.
            </p>
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
      </div>
      <div className='contact-us-right'>
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default ContactUs;
