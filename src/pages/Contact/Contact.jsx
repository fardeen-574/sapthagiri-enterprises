import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, MailCheck } from "lucide-react";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import styles from './Contact.module.css';

const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(true); // for green or red snackbar

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1292moc', 'template_z0mxrhp', form.current, '7gC6mJhSnd8zvk5c0')
      .then(
        () => {
          setMessage('Message sent successfully!');
          setSuccess(true);
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          setMessage('Failed to send message. Please try again.');
          setSuccess(false);
          setOpen(true);
          console.error('Failed to send message:', error);
        }
      );
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <div className={styles.ContactSection}>
      {/* Header */}
      <section className={styles.ContactHeader}>
        <h1>Contact Us</h1>
        <p>
          We're here to help with all your sheet metal and fabrication needs. Whether it's a custom requirement or general inquiry, feel free to reach out to us — our team is always ready to assist you.
        </p>
      </section>

      {/* Info + Form */}
      <section className={styles.InfoFormSection}>
        {/* Contact Info */}
        <div className={styles.InfoSection}>
          <h1>Get In Touch</h1>
          <p>
            Sapthagiri Enterprises is located in Hyderabad, Telangana, offering high-quality CNC laser cutting, bending, and fabrication services. Contact us for project consultations, pricing, or technical support — we’re just a message away.
          </p>
          <div className={styles.contactDetails}>
            <div className={styles.infoItem}>
              <MapPin className={styles.icon} />
              <div>
                <strong>Address</strong>
                <p>Plot No. 116, Navodaya Nagar, IDA Cherlapally, Phase-V, Hyderabad -500 051.</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <Phone className={styles.icon} />
              <div>
                <strong>Phone Number</strong>
                <p>+91 8790845999</p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <MailCheck className={styles.icon} />
              <div>
                <strong>E-Mail</strong>
                <p>mailto@sapthagirienterprises23@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <h1>Send a Message</h1>
          <input type="text" name="name" placeholder="Your Name" required className={styles.input} />
          <input type="email" name="email" placeholder="Your Email" required className={styles.input} />
          <input type="tel" name="phone" placeholder="Your Phone Number" required className={styles.input} />
          <textarea name="message" placeholder="Your Message" required className={styles.textarea}></textarea>
          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      </section>

      {/* Google Map */}
      <section className={styles.map}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.060587245352!2d78.6001332!3d17.456813999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9df0ff493d29%3A0x917b94f9ed466f9b!2sSAPTAGIRI%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1750217910710!5m2!1sen!2sin"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen={true}
          aria-hidden="false"
          tabIndex={0}
        />
      </section>

      {/* Snackbar Alert */}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity={success ? 'success' : 'error'} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
