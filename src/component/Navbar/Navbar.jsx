import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { ChevronDown, MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState('Home');

  const navRef = useRef();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleItemClick = () => {
    setOpenDropdown(null); // close dropdown when item clicked
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null); // Close dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-container">

        <div className={`menu ${mobileOpen ? 'active' : ''}`}>

          <Link
            className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`}
            onClick={() => {
              handleItemClick();
              setActiveLink('Home');
            }}
            to='/'
          >
            Home
          </Link>
          <Link  className={`nav-item ${activeLink === 'About' ? 'active' : ''}`}
            onClick={() => {
              handleItemClick();
              setActiveLink('About');
              }}
              to='/about'
            >About</Link>

          <div className="dropdown">
            <button className={`dropdown-toggle ${openDropdown === 'services' ? 'open' : ''}`} onClick={() => toggleDropdown('services')}>
              <Link className={`nav-item ${activeLink === 'service' ? 'active' : ''}`}
            onClick={() => {
              handleItemClick();
              setActiveLink('service');
            }} style={{ fontWeight: 790 }}>Services <ChevronDown /></Link>
            </button>
            {openDropdown === 'services' && (
              <div className="dropdown-menu">
                <Link to='/machine-design' onClick={handleItemClick}>Machine Designing</Link>
                <Link to='/cnc-laser-cutting' onClick={handleItemClick}> CNC Laser Cutting</Link>
                <Link to='/cnc-bending' onClick={handleItemClick}> CNC Bending</Link>
                <Link to='/cnc-milling' onClick={handleItemClick}> CNC Milling</Link>
                <Link to='/cnc-turning' onClick={handleItemClick}> CNC Turning</Link>
              </div>
            )}
          </div>

          <Link className={`nav-item ${activeLink === 'Projects' ? 'active' : ''}`}
            onClick={() => {
              handleItemClick();
              setActiveLink('Projects');
              }}
              to='/projects'>Projects</Link>
          <Link className={`nav-item ${activeLink === 'contactUs' ? 'active' : ''}`}
            onClick={() => {
              handleItemClick();
              setActiveLink('contactUs');
              }}
              to='/contact'>
                Contact Us</Link>
        </div>

        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          <MenuIcon color='orange' />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
