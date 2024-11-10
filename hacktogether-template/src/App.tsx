import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/mainNavbar';
import MainPage from '@components/Pages/MainPage';
import LocationsPage from './components/Pages/locationsPage';
import EventPage from './components/Pages/eventsPage';
import MyEventsPage from './components/Pages/myEventsPage';
import AboutPage from './components/Pages/aboutPage';
import SettingsPage from './components/Pages/settingsPage';
import SignUp from './components/Signup/signup';
import LogIn from './components/Login/login';
import SingleEventPage1 from './components/Pages/singleEventPage1';
import SingleEventPage2 from './components/Pages/singleEventPage2';
import SingleEventPage3 from './components/Pages/singleEventPage3';
import SingleLocationPage1 from './components/Pages/singleLocationPage1';
import SingleLocationPage2 from './components/Pages/singleLocationPage2';
import SingleLocationPage3 from './components/Pages/singleLocationPage3';
import UserProfile from './components/Pages/profilePage';
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
          <Route path="/my-events" element={<MyEventsPage />} /> {/* EventPage */}
          <Route path="/about" element={<AboutPage />} /> {/* AboutPage */}
          <Route path="/settings" element={<SettingsPage />} /> {/* SettingsPage */}
          <Route path="/sign-up" element={<SignUp />} /> {/* SignUp */}
          <Route path="/log-in" element={<LogIn />} /> {/* LogIn */}
          <Route path="/event/1" element={<SingleEventPage1 />} /> {/* SingleEventPage */}
          <Route path="/event/2" element={<SingleEventPage2 />} /> {/* SingleEventPage */}
          <Route path="/event/3" element={<SingleEventPage3 />} /> {/* SingleEventPage */}
          <Route path="/location/lisbon" element={<SingleLocationPage1 />} /> {/* SingleLocationPage */}
          <Route path="/location/paris" element={<SingleLocationPage2 />} /> {/* SingleLocationPage */}
          <Route path="/location/madrid" element={<SingleLocationPage3 />} /> {/* SingleLocationPage */}
          <Route path="/profile" element={<UserProfile />} /> {/* UserProfile page */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
