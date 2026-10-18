import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="fade-in"
      style={{
        backgroundImage: 'url("/footer.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '2rem 0',
        marginTop: '2rem',
      }}
    >
      <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
        © 2024 Movie Search AI. All Rights Reserved.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
