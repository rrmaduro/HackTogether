import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/mainNavbar';
import MainPage from '@components/Pages/MainPage';
import LocationsPage from './components/Pages/locationsPage';
import EventPage from './components/Pages/eventsPage';


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <EventPage/>
    </div>
  );
}

export default App;