
import React from 'react'
import "./Header.css"
import { logo } from "../../assets/index"
import { Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Header = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.header
      ref={ref}
      className='header-container'
      initial={{ opacity: 0, y: -40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className='header-left-section'>
        <img src={logo} alt="Sapthagiri Enterprises Logo" id='header-logo' />
        <div className='header-text-info'>
          <div id='header-title'>
            <span className='heading'>Sapthagiri</span> Enterprises
          </div>
          <div id="header-sub-title">
            <span>ISO 9001:2015</span>
          </div>
          <a href='https://maps.app.goo.gl/6gdAwbS5eQEBHSH49?g_st=iw' target="_blank" rel="noreferrer" id="header-address">
            Plot No. 116, Navodaya Nagar, IDA Cherlapally, Phase-V, Hyderabad - 500 051.
          </a>
        </div>
      </div>

      <div className='header-right-section'>
        <a href="mailto:sapthagirienterprises23@gmail.com" className='header-icons'>
          <Mail className='icons' />
          <p>sapthagirienterprises23@gmail.com</p>
        </a>
        <a href="tel:8790845999" className='header-icons'>
          <Phone className='icons' />
          <p>+91 8790845999</p>
        </a>
      </div>
    </motion.header>
  )
}

export default Header
