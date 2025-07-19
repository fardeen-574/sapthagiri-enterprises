import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert'; // optional for colored snackbar
import './ContactForm.css';

const ContactForm = () => {
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
    <div className="contact-form-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h2>Get in Touch</h2>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required/>
        <input type="tel" name="phone" placeholder="Your Phone Number" required/>
        <textarea name="message" placeholder="Your Message" required  />

        <button type="submit">Send</button>
      </form>

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

export default ContactForm;
