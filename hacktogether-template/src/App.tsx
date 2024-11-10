import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/mainNavbar';
import MainPage from '@components/Pages/MainPage';
import LocationsPage from './components/Pages/locationsPage';
import EventPage from './components/Pages/eventsPage';
import AboutPage from './components/Pages/aboutPage';
import SettingsPage from './components/Pages/settingsPage';
import SignUp from './components/Signup/signup';
import LogIn from './components/Login/login';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation

function App() {
  return (
    <Router> {/* Wrap your app with BrowserRouter */}
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // Get current location

  // Check if the current route is either /log-in or /sign-up
  const isAuthPage = location.pathname === '/sign-up' || location.pathname === '/log-in';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Conditionally render Navbar only if not on auth pages */}
      {!isAuthPage && <Navbar />} 

      {/* Content with margin-top to avoid overlap with the navbar */}
      <div style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<MainPage isDrawerOpen={false} />} /> {/* MainPage at root route */}
          <Route path="/locations" element={<LocationsPage />} /> {/* LocationsPage */}
          <Route path="/events" element={<EventPage />} /> {/* EventPage */}
          <Route path="/about" element={<AboutPage />} /> {/* AboutPage */}
          <Route path="/settings" element={<SettingsPage />} /> {/* SettingsPage */}
          <Route path="/sign-up" element={<SignUp />} /> {/* SignUp */}
          <Route path="/log-in" element={<LogIn />} /> {/* LogIn */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
