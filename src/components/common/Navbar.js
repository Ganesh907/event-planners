import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
import logo from '../../assets/images/EPLogo.jpeg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuListComposition from './User';

const Navbar = () => {
  const location = useLocation(); // Get the current location
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to check if the current path matches the link path
  const isActiveLink = (linkPath) => {
    const currentPath = location.pathname;
    return currentPath === linkPath;
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50"> {/* Sticky top applied here */}
      {/* Top Logo and Search Bar Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500  text-white py-2 drop-shadow-lg px-4 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 ">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-full shadow-md p-1 bg-white shadow-black"
          />
          <div className='h-12 w-[2px] bg-white rounded-md'></div>
          <div className="leading-tight">
            <h1 className="text-3xl font-semibold italic" style={{ fontFamily: 'Playfair Display' }}>Event Planners</h1>
            <p className="text-xs italic">Planning the Event of Your Dreams....</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 text-black rounded-full px-4 py-2 w-1/2">
          <input
            type="text"
            placeholder="Search for category or products..."
            className="bg-transparent w-full outline-none text-sm"
          />
          <button className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 15.232l5.518 5.518M10 18a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
        </div>

        {/* Cart and Profile Icons */}
        <div className="flex items-center space-x-4 text-white ">
          {/* Cart */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l3.6-7H5.4M7 13L5 6H3M7 13l1.2 6m10.6 0l1.2-6M9 19a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute top-0 right-0 bg-[#9c27b0] text-xs text-white rounded-full h-4 w-4 flex items-center justify-center">
              0
            </span>
          </div>
          {/* Profile */}
          <MenuListComposition/>
        </div>
      </div>

      {/* Navigation Links Section */}
      <nav className="shadow-sm md:flex justify-start z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Menu Links */}
            <ul className="hidden md:flex space-x-8">
              {["Home", "Category", "About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"].map((link) => {
                const linkPath = link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <li key={link}>
                    <Link
                      to={linkPath}
                      className={`${
                        isActiveLink(linkPath) ? "text-[#9c27b0] font-medium" : "text-black"
                      } hover:text-[#9c27b0] transition-all font-medium`}
                    >
                      {link}
                    </Link>
                    {isActiveLink(linkPath) && (
                      <div className="h-1 w-full bg-[#9c27b0] rounded-full mt-1">
                        <div className="w-2 h-2 bg-[#9c27b0] rounded-full mx-auto mt-1"></div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul className="md:hidden space-y-4 py-4 z-50">
              {["Home", "Category", "About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"].map((link) => {
                const linkPath = link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`;
                return (
                  <li key={link}>
                    <Link
                      to={linkPath}
                      onClick={() => {
                        setMobileMenuOpen(false); // Close mobile menu after click
                      }}
                      className={`${
                        isActiveLink(linkPath) ? "text-[#9c27b0] font-medium" : "text-black"
                      } block hover:text-[#9c27b0] transition-all font-medium`}
                    >
                      {link}
                    </Link>
                    {isActiveLink(linkPath) && (
                      <div className="h-1 bg-[#9c27b0] rounded-full mt-1 w-full">
                        <div className="w-2 h-2 bg-[#9c27b0] rounded-full mx-auto mt-1"></div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
