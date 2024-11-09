import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/mainNavbar';
import MainPage from './components/MainPage/MainPage'


function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <MainPage/>
    </div>
  );
}

export default App;