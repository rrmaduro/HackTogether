import React, { useState } from 'react';
import { UserPen, Globe, UserRound } from 'lucide-react';
import SideMenu from '../Menus/SideMenu';

const navbarStyles = {
  backgroundColor: '#3F51B5',
  height: '80px',
  padding: '0 20px', 
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
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={navbarStyles}>
        <div className="container-fluid d-flex align-items-center justify-content-between">
          
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
                icon={<UserRound className="h-4 w-4 text-[#3F51B5]" />}
                text="Login"
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
};

export default Navbar;
