import React from 'react';
import { UserPen, Globe, Menu } from 'lucide-react';

const navbarStyles = {
  backgroundColor: '#3F51B5',
};

const navButtonStyles = {
  backgroundColor: 'white',
  color: '#3F51B5',
  borderColor: '#3F51B5',
  borderRadius: '20px',
  padding: '8px 16px',
};

const navItemStyle = {
  marginRight: '20px',
};

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={navbarStyles}>
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        {/* Left Column: Always-visible Menu Icon (increased size) */}
        <div>
          <Menu className="h-8 w-8 text-white" /> {/* Changed to h-8 w-8 for larger icon */}
        </div>

        {/* Center Column: Culture Connect Brand */}
        <div className="d-flex align-items-center mx-auto">
          <a className="navbar-brand d-flex align-items-center text-white" href="#">
            <Globe className="h-4 w-4 text-[#3F51B5]" />
            <span className="ms-2 text-xl font-weight-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              CultureConnect
            </span>
          </a>
        </div>

        {/* Right Column: Join Now Button (icon-only on small screens) */}
        <div className="d-flex align-items-center">
          <ul className="navbar-nav">
            <NavItem
              icon={<UserPen className="h-4 w-4 text-[#3F51B5]" />}
              text="Join Now"
              isButton={true}
              buttonStyles={navButtonStyles}
            />
          </ul>
        </div>

      </div>
    </nav>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isButton?: boolean;
  buttonStyles?: React.CSSProperties;
}

function NavItem({ icon, text, isButton, buttonStyles }: NavItemProps) {
  if (isButton) {
    return (
      <li className="nav-item" style={navItemStyle}>
        <button
          className="btn d-flex align-items-center"
          style={buttonStyles}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#C581BD';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = '#3F51B5';
          }}
        >
          {icon}
          <span className="ms-2 d-none d-md-inline">{text}</span> {/* Text visible at md and up */}
        </button>
      </li>
    );
  }

  return (
    <li className="nav-item" style={navItemStyle}>
      <a href="#" className="nav-link d-flex align-items-center text-white hover:text-black">
        {icon}
        <span className="ms-1 d-none d-md-inline">{text}</span> {/* Text visible at md and up */}
      </a>
    </li>
  );
}