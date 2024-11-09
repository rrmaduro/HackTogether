import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/mainNavbar';
import MainPage from '@components/MainPage/MainPage';
import About from '@components/About/about'


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <About/>
    </div>
  );
}

export default App;