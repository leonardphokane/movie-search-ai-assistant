import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@pages/HomePage';
import MovieDetails from '@pages/MovieDetails';
import SearchResultsPage from '@pages/SearchResultsPage';
import FavoritesPage from '@pages/FavoritesPage';
import NavBar from '@components/NavBar';
import Header from '@components/Header';
import Footer from '@components/Footer';
import './global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route
          path="/about"
          element={
            <div style={{ padding: "1rem" }}>
              <h2>About</h2>
              <p>This app uses the OMDb API to search and display movie details.</p>
            </div>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
