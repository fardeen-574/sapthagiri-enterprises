
import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import { ChevronDown, MenuIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeLink, setActiveLink] = useState('Home');
  const navRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleItemClick = () => {
    setOpenDropdown(null);
    setMenuOpen(false);
  };

  return (
    <motion.nav
      className="navbar"
      ref={navRef}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-container">

        {/* Menu Items */}
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <Link
            className={`nav-item ${activeLink === 'Home' ? 'active' : ''}`}
            to="/"
            onClick={() => {
              setActiveLink('Home');
              handleItemClick();
            }}
          >
            Home
          </Link>

          <Link
            className={`nav-item ${activeLink === 'About' ? 'active' : ''}`}
            to="/about"
            onClick={() => {
              setActiveLink('About');
              handleItemClick();
            }}
          >
            About
          </Link>

          {/* Dropdown */}
          <div className="dropdown">
            <button
              className={`dropdown-toggle ${openDropdown === 'services' ? 'open' : ''}`}
              onClick={() => toggleDropdown('services')}
            >
              <span
                className={`nav-item ${activeLink === 'service' ? 'active' : ''}`}
                style={{ fontWeight: 790 }}
              >
                Services <ChevronDown size={16} />
              </span>
            </button>

            <AnimatePresence>
              {openDropdown === 'services' && (
                <motion.div
                  className="dropdown-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to="/machine-design" onClick={() => { handleItemClick(); setActiveLink('service'); }} className={activeLink === 'machine-design' ? 'activeDropDown' : ''}>
                    Machine Designing
                  </Link>
                  <Link to="/cnc-laser-cutting" onClick={() => { handleItemClick(); setActiveLink('service'); }} className={activeLink === 'cnc-laser-cutting' ? 'activeDropDown' : ''}>
                    CNC Laser Cutting
                  </Link>
                  <Link to="/cnc-bending" onClick={() => { handleItemClick(); setActiveLink('service'); }} className={activeLink === 'cnc-bending' ? 'activeDropDown' : ''}>
                    CNC Bending
                  </Link>
                  <Link to="/cnc-milling" onClick={() => { handleItemClick(); setActiveLink('service'); }} className={activeLink === 'cnc-milling' ? 'activeDropDown' : ''}>
                    CNC Milling
                  </Link>
                  <Link to="/cnc-turning" onClick={() => { handleItemClick(); setActiveLink('service'); }} className={activeLink === 'cnc-turning' ? 'activeDropDown' : ''}>
                    CNC Turning
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            className={`nav-item ${activeLink === 'Projects' ? 'active' : ''}`}
            to="/projects"
            onClick={() => {
              setActiveLink('Projects');
              handleItemClick();
            }}
          >
            Projects
          </Link>

          <Link
            className={`nav-item ${activeLink === 'contactUs' ? 'active' : ''}`}
            to="/contact"
            onClick={() => {
              setActiveLink('contactUs');
              handleItemClick();
            }}
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Icon (Right Aligned) */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon className='hamburger-icon' />
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
