import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/mainNavbar';
import Event from './components/Event/event';
import Location from './components/Locations/locations';



function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Event/>
      <Location/>
    </div>
  );
}

export default App;