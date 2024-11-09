import React from 'react';
import { Home, Calendar, MapPin, User, Info, CogIcon, CalendarClock, CalendarHeart } from 'lucide-react';

/**
 * Interface defining the props for the SideMenu component.
 */
interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Inline styles for the side menu container. This controls the positioning,
 * background color, width transitions, and shadow effects.
 */
const sideMenuStyles: React.CSSProperties = {
  position: 'fixed',
  top: '57px', // Position just below the navbar
  left: 0,
  height: 'calc(100vh - 58px)', // Full height below the navbar
  backgroundColor: 'white', // Background color of the menu
  color: 'white',
  transition: 'width 0.3s ease-in-out', // Smooth transition for width when opening/closing the menu
  zIndex: 40,
  boxShadow: '4px 0 10px rgba(0, 0, 0, 0.2)', // Shadow for the side menu
};

/**
 * SideMenu component that displays a collapsible side navigation menu.
 * 
 * @param {boolean} isOpen - Controls whether the side menu is open or closed.
 * @param {function} onClose - Callback function to handle the closing of the menu.
 */
const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      style={{
        ...sideMenuStyles,
        width: isOpen ? '250px' : '60px', // Transition the width between 250px (open) and 60px (closed)
      }}
      onMouseEnter={() => {
        if (!isOpen) {
          onClose(); // Optionally call onClose when hovered (if needed for close behavior)
        }
      }}
      onMouseLeave={() => {
        if (isOpen) {
          onClose(); // Close the menu when mouse leaves
        }
      }}
    >
      <div className="d-flex flex-column p-3" style={{ height: '100%' }}>
        <div style={{ marginTop: '20px',marginBottom: '20px' }}> {/* Add margin-bottom to create space between groups */}
          <NavItem icon={<Home />} text="Home" isActive={true} isOpen={isOpen} />
          <NavItem icon={<Calendar />} text="Events" isOpen={isOpen} />
          <NavItem icon={<MapPin />} text="Locations" isOpen={isOpen} />
          <NavItem icon={<CalendarHeart />} text="My Events" isOpen={isOpen} />
          <NavItem icon={<Info />} text="About" isOpen={isOpen} />
        </div>
        <div style={{ marginTop: 'auto'}}> {/* Add margin-bottom here as well */}
          <NavItem icon={<CogIcon />} text="Settings" isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};

/**
 * Navigation item component for each side menu option.
 * 
 * @param {React.ReactNode} icon - The icon for the navigation item.
 * @param {string} text - The label text for the navigation item.
 * @param {boolean} isActive - Indicates whether the item is currently active.
 * @param {boolean} isOpen - Indicates whether the side menu is open or closed.
 */
const NavItem: React.FC<{ icon: React.ReactNode; text: string; isActive?: boolean; isOpen: boolean }> = ({ icon, text, isActive = false, isOpen }) => {
  return (
    <button
      className={`d-flex align-items-center w-100 text-lg font-medium transition ${isActive ? 'bg-white text-black' : 'text-black bg-white hover:bg-gray-100 hover:text-purple-600 hover:fill-purple-600'}`}
      style={{
        display: 'flex',
        justifyContent: isOpen ? 'flex-start' : 'center', // Align icon and text to the start when open, center when closed
        alignItems: 'center', // Align vertically in the center
        padding: isOpen ? '20px 15px' : '0', // Padding when open, none when closed
        width: isOpen ? '100%' : '60px', // Full width when open, icon-only when closed
        height: '60px', // Square height to make buttons uniform
        minHeight: '60px',
        borderRadius: '8px', // Rounded corners
        border: 'none', // Remove border
        boxShadow: 'none', // No shadow by default
        transition: 'all 0.3s ease-in-out', // Smooth transition for all changes
        color: 'black', // Text color
        backgroundColor: isActive ? 'white' : 'transparent', // Active item background
        marginBottom: '10px', // Add margin-bottom to increase spacing between items
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'; // Add shadow on hover
        if (!isActive) {
          e.currentTarget.style.backgroundColor = '#f0f0f0'; // Slightly darker background on hover
        }
      }} // Add shadow on hover and darken the background
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'; // Remove shadow when mouse leaves
        if (!isActive) {
          e.currentTarget.style.backgroundColor = 'transparent'; // Reset background when hover ends
        }
      }} // Reset shadow and background when mouse leaves
    >
      <div
        style={{
          fontSize: isOpen ? '20px' : '24px', // Change icon size when the menu is open vs closed
          transition: 'font-size 0.3s ease-in-out', // Smooth transition for font size change
        }}
      >
        {React.cloneElement(icon as React.ReactElement, { className: 'icon' })}
      </div>
      <span
        className={`ms-3 ${isOpen ? '' : 'd-none'}`} // Hide text when the menu is closed
        style={{
          transition: 'opacity 0.3s ease-in-out', // Smooth transition for text visibility
          opacity: isOpen ? 1 : 0, // Fade in/out based on menu state
          whiteSpace: 'nowrap', // Prevent text from wrapping
        }}
      >
        {text}
      </span>
    </button>
  );
};

export default SideMenu;
