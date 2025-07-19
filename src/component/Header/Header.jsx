import React from 'react'
import "./Header.css"
import {logo} from "../../assets/index"
import { Mail ,Phone  } from 'lucide-react'
const Header = () => {
  return (
    <header className='header-container'>
        <div className='header-left-section'>
            <img src={logo} alt="" />
            <div className='header-text-info'>
                <div id='header-title'><span className='heading'>Sapthagiri</span> Enterprises</div>

                <div id="header-sub-title">
                  <span style={{
                    background:"#eee",
                    color:"#333",
                    padding:"5px 6px",
                    borderRadius:"4px",
                    fontSize:"12px"
                  }}>
                    ISO 9001:2015
                  </span>
                </div>
                <a href='https://maps.app.goo.gl/6gdAwbS5eQEBHSH49?g_st=iw' target="_blank" id="header-address">
                     Plot No. 116,Navodaya Nagar, IDA Cherlapally, Phase-V, Hyderbad -500 051.
                </a>
            </div>
        </div>
        <div className='header-right-section'>
                <a href="mailto:sapthagirienterprises23@gmail.com"  className='header-icons'> 
                <Mail/> sapthagirienterprises23@gmail.com
                </a>
                <a href="tel:8790845999"  className='header-icons'>
                   <Phone/> +91 8790845999
                </a>
                <br />
                
        </div>
    </header>
  )
}

export default Header