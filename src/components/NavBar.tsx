import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Apply theme to body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="neon-nav">
      <div className="nav-header">
        <h1>🎬 Movie Search</h1>
        <button onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/search?query=">Search</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
        <button onClick={toggleTheme} className="theme-toggle">
          Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
