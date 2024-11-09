import React from 'react';
import { Globe, Users, Calendar, MessageCircle, Menu, UserPen } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <Globe className="h-8 w-8 text-indigo-600" />
          <span className="ms-2 text-xl font-weight-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            CultureConnect
          </span>
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar items for large screens */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <NavLink icon={<Users className="h-4 w-4" />} text="Community" />
            <NavLink icon={<Calendar className="h-4 w-4" />} text="Events" />
            <NavLink icon={<MessageCircle className="h-4 w-4" />} text="Chat" />
            <NavLink icon={<UserPen className="h-4 w-4" />} text="Join Now" />
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="d-block d-lg-none">
          <Menu className="h-6 w-6 text-gray-600" />
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="nav-item">
      <a href="#" className="nav-link d-flex align-items-center text-gray-600 hover:text-indigo-600">
        {icon}
        <span className="ms-1">{text}</span>
      </a>
    </li>
  );
}
