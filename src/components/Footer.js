import React from 'react';

const Footer = () => (
  <footer
    style={{
      padding: '20px',
      backgroundColor: '#121212',
      color: '#fff',
      textAlign: 'center',
      borderTop: '1px solid #333',
    }}
  >
    {/* App Branding */}
    <p style={{ fontSize: '1.2rem', margin: '10px 0', fontWeight: 'bold' }}>© 2024 Movie App</p>
    
    {/* Social Media Links */}
    <div style={{ margin: '10px 0' }}>
      <a
        href="https://www.facebook.com/https://www.facebook.com/profile.php?id=100008807101109"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#4267B2',
          textDecoration: 'none',
          margin: '0 10px',
          fontSize: '1.5rem',
        }}
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        href="https://twitter.com/https://x.com/sflixhqto"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#1DA1F2',
          textDecoration: 'none',
          margin: '0 10px',
          fontSize: '1.5rem',
        }}
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="https://www.instagram.com/YOUR_INSTAGRAM_URL"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#E1306C',
          textDecoration: 'none',
          margin: '0 10px',
          fontSize: '1.5rem',
        }}
      >
        <i className="fab fa-instagram"></i>
      </a>
    </div>

    {/* Terms and Privacy */}
    <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>
      <a
        href="/terms"
        style={{
          color: '#aaa',
          textDecoration: 'none',
          margin: '0 10px',
        }}
      >
        Terms of Service
      </a>
      |
      <a
        href="/privacy"
        style={{
          color: '#aaa',
          textDecoration: 'none',
          margin: '0 10px',
        }}
      >
        Privacy Policy
      </a>
    </p>
  </footer>
);

export default Footer;
