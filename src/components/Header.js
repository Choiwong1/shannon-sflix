import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      onSearch(searchTerm); // Call the `onSearch` function from props
    }
  };

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#121212', // Dark background for a cinematic feel
        color: '#fff',
        borderBottom: '2px solid #333',
      }}
    >
      {/* Logo and App Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src="/Sflix.webp" // Correct path for an image in the public folder
          alt="Movie App Logo"
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'contain',
          }}
        />
        <h1
          style={{
            fontSize: '1.5rem',
            margin: 0,
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          SFLIX
        </h1>
      </div>

      {/* Navigation Links */}
      <nav
        style={{
          display: 'flex',
          gap: '15px',
        }}
      >
        <a
          href="/"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Home
        </a>
        <a
          href="/movies"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Movies
        </a>
        <a
          href="/about"
          style={{
            color: '#fff',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          About
        </a>
      </nav>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: '#1e1e1e',
          padding: '5px 10px',
          borderRadius: '5px',
        }}
      >
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            border: 'none',
            backgroundColor: 'transparent',
            color: '#fff',
            outline: 'none',
            fontSize: '1rem',
            width: '200px',
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          <i className="fa fa-search" style={{ fontSize: '1.2rem' }}></i>
        </button>
      </form>
    </header>
  );
};

export default Header;
