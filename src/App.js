import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Content from './components/Content';

// Base URL and API Key for OMDB API
const API_URL = "https://www.omdbapi.com/";
const API_KEY = "dc26e616"; // Replace with your API key

const App = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('Action'); // Default category (valid search keyword)
  const [error, setError] = useState(null);

  // Updated categories to reflect genres
  const categories = ['Action', 'Comedy', 'Horror', 'Documentary'];

  // Reusable function to search movies
  const API_SEARCH = async (searchTerm) => {
    try {
      setError(null); // Reset error state
      const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${searchTerm}&type=movie`);
      const data = await response.json();

      if (data.Response === 'True') {
        const formattedMovies = data.Search.map((movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          poster:
            movie.Poster && movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/200x300', // Fallback image
        }));
        setMovies(formattedMovies);
      } else {
        console.error('OMDB API Error:', data.Error);
        setError(data.Error);
        setMovies([]);
      }
    } catch (err) {
      console.error('Network Error:', err.message);
      setError('Failed to fetch movies. Please try again later.');
    }
  };

  useEffect(() => {
    // Fetch movies for the selected category
    API_SEARCH(category);
  }, [category]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f4f4f4', minHeight: '100vh' }}>
      <Header />
      <Nav categories={categories} onSelectCategory={setCategory} />
      {error ? (
        <div style={{ padding: '20px', color: 'red' }}>{error}</div>
      ) : (
        <Content movies={movies} />
      )}
      <Footer />
    </div>
  );
};

export default App;
