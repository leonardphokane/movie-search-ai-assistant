import React from 'react';

const Header: React.FC = () => {
  return (
    <header
      className="fade-in"
      style={{
        backgroundImage: 'url("/header.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '3rem 0',
      }}
    >
      <h1
        className="fade-in"
        style={{
          fontSize: '2.5rem',
          marginBottom: '0.5rem',
          animationDelay: '0.3s',
        }}
      >
        🎬 Movie Search AI
      </h1>
      <p
        className="fade-in"
        style={{
          fontSize: '1.2rem',
          animationDelay: '0.6s',
        }}
      >
        Search. Discover. Favorite. Enjoy the Show!
      </p>
    </header>
  );
};

export default Header;
