// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom'; // Import useLocation hook
// // import logo from '../../assets/images/EPLogo.jpeg';
// import logo from '../../assets/images/HiFiLogo.jpg';
// import MenuListComposition from './User';

// const Navbar = () => {
//   const location = useLocation(); // Get the current location
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Helper function to check if the current path matches the link path
//   const isActiveLink = (linkPath) => {
//     const currentPath = location.pathname;
//     return currentPath === linkPath;
//   };

//   return (
//     <header className="sticky top-0 bg-white shadow-md z-50"> {/* Sticky top applied here */}
//       {/* Top Logo and Search Bar Section */}
//       <div className="bg-gradient-to-r from-purple-500 to-pink-500  text-white py-2 drop-shadow-lg px-4 md:px-10 flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-2 ">
//           <img
//             src={logo}
//             alt="Logo"
//             className="h-12 w-12 rounded-full shadow-md p-[2px] bg-white shadow-black"
//           />
//           <div className='h-12 w-[2px] bg-white rounded-md'></div>
//           <div className="leading-tight">
//             <h1 className="text-3xl font-semibold text-black italic" style={{ fontFamily: 'Playfair Display' }}>HiFi Creations</h1>
//             <p className="text-xs italic text-black">Planning the Event of Your Dreams....</p>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="hidden md:flex items-center bg-gray-100 text-black rounded-full px-4 py-2 w-1/2">
//           <input
//             type="text"
//             placeholder="Search for category or products..."
//             className="bg-transparent w-full outline-none text-sm"
//           />
//           <button className="ml-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-gray-600"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15.232 15.232l5.518 5.518M10 18a8 8 0 100-16 8 8 0 000 16z"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Cart and Profile Icons */}
//         <div className="flex items-center space-x-4 text-white ">
//           {/* Cart */}
//           <div className="relative">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 3h2l.4 2M7 13h10l3.6-7H5.4M7 13L5 6H3M7 13l1.2 6m10.6 0l1.2-6M9 19a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"
//               />
//             </svg>
//             <span className="absolute top-0 right-0 bg-[#9c27b0] text-xs text-white rounded-full h-4 w-4 flex items-center justify-center">
//               0
//             </span>
//           </div>
//           {/* Profile */}
//           <MenuListComposition sx={{ fontSize: '36px', color: '#9c27b0' }}/>
//         </div>
//       </div>

//       {/* Navigation Links Section */}
//       <nav className="shadow-sm md:flex justify-start z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Menu Links */}
//             <ul className="hidden md:flex space-x-8">
//               {["Home", "Category", "About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"].map((link) => {
//                 const linkPath = link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`;
//                 return (
//                   <li key={link}>
//                     <Link
//                       to={linkPath}
//                       className={`${
//                         isActiveLink(linkPath) ? "text-[#9c27b0] font-medium" : "text-black"
//                       } hover:text-[#9c27b0] transition-all font-medium`}
//                     >
//                       {link}
//                     </Link>
//                     {isActiveLink(linkPath) && (
//                       <div className="h-1 w-full bg-[#9c27b0] rounded-full mt-1">
//                         <div className="w-2 h-2 bg-[#9c27b0] rounded-full mx-auto mt-1"></div>
//                       </div>
//                     )}
//                   </li>
//                 );
//               })}
//             </ul>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-black focus:outline-none"
//               onClick={toggleMobileMenu}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Menu */}
//           {isMobileMenuOpen && (
//             <ul className="md:hidden space-y-4 py-4 z-50 text-center">
//               {["Home", "Category", "About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"].map((link) => {
//                 const linkPath = link === "Home" ? "/" : `/${link.toLowerCase().replace(/\s+/g, "-")}`;
//                 return (
//                   <li key={link}>
//                     <Link
//                       to={linkPath}
//                       onClick={() => {
//                         setMobileMenuOpen(false); // Close mobile menu after click
//                       }}
//                       className={`${
//                         isActiveLink(linkPath) ? "text-[#9c27b0] font-medium" : "text-black"
//                       } block hover:text-[#9c27b0] transition-all font-medium`}
//                     >
//                       {link}
//                     </Link>
//                     {isActiveLink(linkPath) && (
//                       <div className="h-[2px] bg-[#9c27b0] rounded-full mt-1 w-full">
//                         <div className="w-1 h-1 bg-[#9c27b0] rounded-full mx-auto mt-1"></div>
//                       </div>
//                     )}
//                   </li>
//                 );
//               })}
//             </ul>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaUser,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";
import LoginPopup from "../common/LoginPopup";

const categories = [
  { title: "Birthday", img: "https://i.imgur.com/IqUYVVA.png" },
  { title: "Anniversary", img: "https://i.imgur.com/fj5mgbB.png" },
  { title: "Baby shower", img: "https://i.imgur.com/EhF9Zja.png" },
  { title: "Welcome baby", img: "https://i.imgur.com/bz6AwEr.png" },
  { title: "₹1499 Decor", img: "https://i.imgur.com/O02jRzT.png" },
  { title: "Bachelorette", img: "https://i.imgur.com/RcUZR9k.png" },
  { title: "Kid's Party", img: "https://i.imgur.com/TAL0SK9.png" },
  { title: "Candlelight & Proposal", img: "https://i.imgur.com/qUzIDne.png" },
  { title: "Stage Decors", img: "https://i.imgur.com/mwXOHxk.png" },
  { title: "Pre-wedding", img: "https://i.imgur.com/zrbsmX2.png" },
  { title: "Premium decors", img: "https://i.imgur.com/bkpvlIs.png" },
];

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <>
      <div className="w-full bg-white shadow px-4 py-2 flex items-center justify-between sticky top-0 z-50">
        {/* Logo and Location */}
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-blue-600">HIFI </div>
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-blue-500" />
            <div>
              <div className="font-semibold">Mumbai</div>
              <div className="text-xs text-gray-500">Mumbai city</div>
            </div>
          </div>
        </div>

        {/* Search Bar with Dropdown */}
        <div
          className="relative flex-1 mx-6"
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setShowDropdown(false)}
        >
          <div className="flex items-center border rounded px-3 py-2 bg-gray-50">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder='Search for "Get Togeth"'
              className="ml-2 w-full outline-none bg-transparent"
            />
          </div>

          {/* Dropdown on Hover */}
          {showDropdown && (
            <div className="absolute z-50 w-full bg-white shadow-lg p-4 mt-2 rounded grid grid-cols-4 gap-4">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <span className="mt-2 text-sm font-medium">{cat.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-6">
          <div
            className="flex flex-col items-center text-sm text-gray-700"
            onClick={() => setShowLoginPopup(true)}
          >
            <FaUser className="text-xl" />
            <span>Login</span>
          </div>
          <div className="flex flex-col items-center text-sm text-gray-700">
            <FaHeart className="text-xl" />
            <span>Wishlist</span>
          </div>
          <div className="relative flex flex-col items-center text-sm text-gray-700">
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1">
              1
            </span>
          </div>
        </div>
      </div>

      {/* Login Popup */}
      {showLoginPopup && (
        <LoginPopup onClose={() => setShowLoginPopup(false)} />
      )}
    </>
  );
}
