import React from 'react';
import { Users, Calendar, MessageCircle, Menu, UserPen, Globe } from 'lucide-react';

// Styles for the Navbar background and elements
const navbarStyles = {
  backgroundColor: '#3F51B5',
};

// Styles specific to the button inside the navigation
const navButtonStyles = {
  backgroundColor: 'white',
  color: '#3F51B5',
  borderColor: '#3F51B5',
  borderRadius: '20px',
  padding: '8px 16px',
};

// Styles for the individual navigation items
const navItemStyle = {
  marginRight: '20px',
};

/**
 * Navbar component that renders a responsive navigation bar
 * with links and a button to join the community.
 */
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={navbarStyles}>
      <div className="container-fluid">
        {/* Logo and brand name */}
        <a className="navbar-brand d-flex align-items-center text-white" href="#">
          <Globe className="h-4 w-4 text-[#3F51B5]" />
          <span className="ms-2 text-xl font-weight-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            CultureConnect
          </span>
        </a>

        {/* Navbar toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: '#ffffff' }}
        >
          <span className="navbar-toggler-icon" style={{ color: '#ffffff' }}></span>
        </button>

        {/* Collapsible menu for larger screens */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Navigation Links */}
            <NavItem icon={<Users className="h-4 w-4 text-white" />} text="Community" />
            <NavItem icon={<Calendar className="h-4 w-4 text-white" />} text="Events" />
            <NavItem icon={<MessageCircle className="h-4 w-4 text-white" />} text="Chat" />
            
            {/* Join Now button with custom button styles */}
            <NavItem
              icon={<UserPen className="h-4 w-4 text-[#3F51B5]" />}
              text="Join Now"
              isButton={true}
              buttonStyles={navButtonStyles}
            />
          </ul>
        </div>

        {/* Menu icon for mobile view */}
        <div className="d-block d-lg-none">
          <Menu className="h-6 w-6 text-white" />
        </div>
      </div>
    </nav>
  );
}

/**
 * NavItem component renders individual navigation items
 * that can either be a link or a button depending on the `isButton` prop.
 * 
 * @param {React.ReactNode} icon - The icon to display alongside the text.
 * @param {string} text - The text to display in the navigation item.
 * @param {boolean} [isButton=false] - If true, renders a button instead of a link.
 * @param {React.CSSProperties} [buttonStyles] - Custom styles to apply if the item is a button.
 */
interface NavItemProps {
  icon: React.ReactNode;  // Icon to be displayed alongside the text
  text: string;           // Text to be displayed in the item
  isButton?: boolean;     // Whether the nav item should be a button instead of a link
  buttonStyles?: React.CSSProperties;  // Custom styles for the button
}

function NavItem({ icon, text, isButton, buttonStyles }: NavItemProps) {
  // If the item is a button, render it with the button styles and hover effects
  if (isButton) {
    return (
      <li className="nav-item" style={navItemStyle}>
        <button
          className="btn"
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
          <span className="ms-2">{text}</span>
        </button>
      </li>
    );
  }

  // If the item is a link, render a regular navigation link
  return (
    <li className="nav-item" style={navItemStyle}>
      <a href="#" className="nav-link d-flex align-items-center text-white hover:text-black">
        {icon}
        <span className="ms-1">{text}</span>
      </a>
    </li>
  );
}
