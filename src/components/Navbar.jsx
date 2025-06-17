// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo" data-aos="zoom-in" data-aos-duration="1000">
          <span>Alia</span>
        </div>
        
        <div className="links">
          <div className="link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <Link to="/">Home</Link>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <Link to="/about">About</Link>
          </div>
          <div className="link" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="link contact-btn" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <Link to="/contact">Contact Me</Link>
          </div>
        </div>
        
        <i 
          className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} hamburg`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      
      {/* Dropdown Menu */}
      <div className={`dropdown ${isMenuOpen ? 'open' : ''}`}>
        <div className="links">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Me</Link>
          <i 
            className="fa-solid fa-xmark cancel" 
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
}