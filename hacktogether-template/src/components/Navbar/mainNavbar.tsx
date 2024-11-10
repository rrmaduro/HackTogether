import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router and Route
import { Globe, User } from 'lucide-react';
import SideMenu from '../Menus/SideMenu';
import UserProfile from '../Pages/profilePage'; // Import the Profile Page component

const navbarStyles = {
  backgroundColor: '#0b5ed7',
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

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={navbarStyles}>
        <div className="container-fluid d-flex align-items-center justify-content-between">

          {/* Left Column: Culture Connect Brand */}
          <div className="d-flex align-items-center">
            <a className="navbar-brand d-flex align-items-center text-white" href="#">
              <Globe className="h-4 w-4 text-['#FFFF']" />
              <span className="ms-2 text-xl font-weight-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                CultureConnect
              </span>
            </a>
          </div>

          {/* Right Column: Profile Link (no dropdown) */}
          <div className="d-flex align-items-center">
            <ul className="navbar-nav">
              <NavItem
                icon={<User className="h-4 w-4 text-[#3F51B5]" />}
                text=""
                isButton={true}
                buttonStyles={navButtonStyles}
              />
            </ul>
          </div>
        </div>
      </nav>

      {/* Side Menu Drawer */}
      <SideMenu isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isButton?: boolean;
  buttonStyles?: React.CSSProperties;
}

const NavItem: React.FC<NavItemProps> = ({ icon, text, isButton, buttonStyles }) => {
  if (isButton) {
    return (
      <li className="nav-item" style={navItemStyle}>
        {/* Link to the profile page */}
        <Link to="/profile">
          <button
            className="btn d-flex align-items-center"
            style={buttonStyles}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#6900D9';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = '#3F51B5';
            }}
          >
            {icon}
            {/* Removed the text span */}
          </button>
        </Link>
      </li>
    );
  }

  return (
    <li className="nav-item" style={navItemStyle}>
      <a href="#" className="nav-link d-flex align-items-center text-white hover:text-black">
        {icon}
        {/* Removed the text span */}
      </a>
    </li>
  );
};

export default Navbar;
