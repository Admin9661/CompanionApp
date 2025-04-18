import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">© 2025 Campus Companion. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.poornima.org/" className="footer-link" target="_blank" rel="noopener noreferrer">Poornima Group of Colleges</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
