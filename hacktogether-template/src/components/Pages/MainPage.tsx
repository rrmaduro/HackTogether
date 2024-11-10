import React from 'react';
import { Link } from 'react-router-dom';

// MainPage.tsx
interface MainPageProps {
    isDrawerOpen: boolean; // Receive the drawer state from Navbar
  }
  
  export default function MainPage({ isDrawerOpen }: MainPageProps) {
    return (
      <nav
        className="container-fluid min-vh-100"
        style={{
          width: isDrawerOpen ? 'calc(100% - 250px)' : '100%', // Compress the main page width when the menu is open
          marginRight: '0',
          marginTop: '80px',
          marginBottom: '0',
          transition: 'width 0.3s ease-in-out', // Smooth transition for width change
        }}
      >
        <div className="text-center">
          <h1>Connect Across</h1>
          <h1>Cultures &</h1>
          <h1>Continents</h1>
          <p>Join a vibrant community where cultures converge. Share traditions, learn languages, and make meaningful connections with people worldwide.</p>
          {/* Wrap the button with Link to navigate to '/events' */}
          <Link to="/events">
            <button type="submit" className="btn btn-primary">Start Exploring</button>
          </Link>
        </div>
      </nav>
    );
  }
  