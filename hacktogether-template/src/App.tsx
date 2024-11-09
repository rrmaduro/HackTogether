import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/mainNavbar';
import Locations from './components/Locations/locations'


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Locations/>
    </div>
  );
}

export default App;