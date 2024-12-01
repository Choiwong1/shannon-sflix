import React from 'react';

const Nav = ({ categories, onSelectCategory }) => (
  <nav
    style={{
      padding: '15px 20px',
      backgroundColor: '#121212', // Dark background for consistency with the cinematic theme
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      borderBottom: '1px solid #333',
    }}
  >
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onSelectCategory(category)}
        style={{
          padding: '10px 20px',
          color: '#fff',
          background: '#444', // Slightly lighter for button contrast
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.background = '#666')} // Hover effect
        onMouseLeave={(e) => (e.target.style.background = '#444')} // Reset on hover out
      >
        {category}
      </button>
    ))}
  </nav>
);

export default Nav;
