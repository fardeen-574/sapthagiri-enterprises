import React from 'react'
import { Mail ,Phone ,MapPin  } from 'lucide-react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer-contianer'>
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.060587245352!2d78.6001332!3d17.456813999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9df0ff493d29%3A0x917b94f9ed466f9b!2sSAPTAGIRI%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1750217910710!5m2!1sen!2sin"
       referrerPolicy="no-referrer-when-downgrade"
         allowFullScreen={true}
        aria-hidden="false"
        tabIndex={0}
      />

      <div className="footer-full-container">
        <div className="footer-detail-container">
        <div className='f-header'>Get in touch</div>
        <a href='https://maps.app.goo.gl/6gdAwbS5eQEBHSH49?g_st=iw' target='_blank'> <MapPin color='#fc8500'/>Plot No. 116,<br />Navodaya Nagar,<br /> IDA Cherlapally, <br /> Phase-V,  -500 051 <br /> Hyderbad, India</a>
        <a href="tel:8790845999"> <Phone color='#fc8500' target='_blank'/> +91 8790845999</a>
        <a href="mailto:sapthagirienterprises23@gmail.com" target='_blank'>  <Mail color='#fc8500'/> sapthagirienterprises23@gmail.com</a>
      </div>
      <div className="footer-services-container">
        <div className='f-header'>Services</div>
        <ul>
          <li><Link to='/machine-design'>Machine Designing</Link></li>
          <li><Link to='/cnc-laser-cutting'>CNC Laser Cutting</Link></li>
          <li><Link to='/cnc-bending'>CNC Bending</Link></li>
          <li><Link to='/cnc-milling'>CNC Milling</Link></li>
          <li><Link to='/cnc-turning'>CNC Turning</Link></li>
        </ul>
      </div>
      </div>
      

      
    </div>
  )
}

export default Footer