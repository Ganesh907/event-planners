import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-[#f3f6fd] text-gray-800 text-sm pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-2 md:grid-cols-5 gap-6 pb-10">
        {/* Categories */}
        <div>
          <h3 className="font-bold mb-3">Categories</h3>
          <ul className="space-y-2">
            <li>Birthday</li>
            <li>Anniversary</li>
            <li>kid's Party</li>
            <li>Baby Shower</li>
            <li>Welcome</li>
            <li>BYOD</li>
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h3 className="font-bold mb-3">Cities</h3>
          <ul className="space-y-2">
            <li>Mumbai</li>
            <li>Delhi-NCR</li>
            <li>Pune</li>
            <li>Siliguri</li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-bold mb-3">Policies</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Term & Conditions</li>
            <li>Shipping policy</li>
            <li>Cancellation & refunds</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-bold mb-3">About</h3>
          <ul className="space-y-2">
            <li>Contact</li>
            <li>FAQ's</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Logo & Social */}
        <div className="flex flex-col items-center justify-center text-center col-span-2 md:col-span-1">
          <div className="text-4xl font-bold text-blue-700 mb-1">ebo</div>
          <p className="mb-2">Share your memories! <span className="text-blue-700">💙</span></p>
          <div className="flex space-x-4 text-gray-700 text-xl mt-1">
            <FaInstagram />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaXTwitter />
          </div>
        </div>
      </div>

      {/* App Download */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 pb-6">
        <p className="font-medium mb-2">Download the app</p>
        <div className="flex space-x-4">
          <img src="/path-to-googleplay.png" alt="Google Play" className="w-36" />
          <img src="/path-to-appstore.png" alt="App Store" className="w-36" />
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center border-t border-gray-200 py-4 text-xs">
        © ebo Solutions Pvt. Ltd. All Rights Reserved. <br />
        Office No. 273, Plot No. 19, Sector - 19D, Satra Plaza, Vashi, Mumbai, Maharashtra, 400705
      </div>
    </footer>
  );
};


















// import React from "react";
// import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

// export const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
//       {/* Footer content */}
//       <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* About Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">About Us</h3>
//           <p className="text-sm">
//             We are passionate HiFi Creations dedicated to creating unforgettable
//             experiences tailored to your needs. Let us bring your vision to
//             life!
//           </p>
//         </div>

//         {/* Quick Links Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Categories</h3>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="#services"
//                 className="hover:underline hover:text-pink-200 transition"
//               >
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#about"
//                 className="hover:underline hover:text-pink-200 transition"
//               >
//                   Terms & Conditions
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="#services"
//                 className="hover:underline hover:text-pink-200 transition"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#about"
//                 className="hover:underline hover:text-pink-200 transition"
//               >
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#portfolio"
//                 className="hover:underline hover:text-pink-200 transition"
//               >
//                 Portfolio
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#contact"
//                 className="hover:underline hover:text-pink-200 transition"
//               >
//                 Contact Us
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div>
//           <h3 className="text-xl font-semibold mb-4">Policies</h3>
//           <ul className="space-y-2">
//             <li>
//               <a
//                 href="#services"
//                 className="hover:underline hover:text-pink-200 transition"
//               >
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#about"
//                 className="hover:underline hover:text-pink-200 transition"
//               >
//                   Terms & Conditions
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <span className="font-medium">Phone:</span> +1 (123) 456-7890
//             </li>
//             <li>
//               <span className="font-medium">Email:</span>{" "}
//               <a
//                 href="mailto:info@eventplanner.com"
//                 className="hover:underline hover:text-pink-200 transition"
//               >
//                 info@eventplanner.com
//               </a>
//             </li>
//             <li>
//               <span className="font-medium">Address:</span> 123 Event St., Party
//               City, World
//             </li>
//             <div className="flex space-x-4 mb-4 md:mb-0">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-200 transition"
//             >
//               <Facebook fontSize="medium" />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-200 transition"
//             >
//               <Instagram fontSize="medium" />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-200 transition"
//             >
//               <Twitter fontSize="medium" />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-200 transition"
//             >
//               <LinkedIn fontSize="medium" />
//             </a>
//           </div>

//           </ul>
//         </div>
//       </div>

//       {/* Social Media and Copyright */}
//       <div className="border-t border-purple-300 py-4">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm">
//           {/* Social Media Links */}
//           <div className="flex space-x-4 mb-4 md:mb-0">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-200 transition"
//             >
//               <Facebook fontSize="medium" />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-200 transition"
//             >
//               <Instagram fontSize="medium" />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-200 transition"
//             >
//               <Twitter fontSize="medium" />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-200 transition"
//             >
//               <LinkedIn fontSize="medium" />
//             </a>
//           </div>

//           {/* Copyright */}
//           <p>© {new Date().getFullYear()} HiFi Creations. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };




// import React from "react";
// import { Link } from "react-router-dom";
// import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

// const footerLinks = [
//   { name: "Privacy Policy", path: "/privacy-policy" },
//   { name: "Terms & Conditions", path: "/terms-&-conditions" },
//   { name: "Category", path: "/category" },
//   { name: "About Us", path: "/about-us" },
//   { name: "Portfolio", path: "/portfolio" },
//   { name: "Contact Us", path: "/contact-us" },
// ];

// const socialMediaLinks = [
//   { icon: <Facebook fontSize="medium" />, url: "https://facebook.com" },
//   { icon: <Instagram fontSize="medium" />, url: "https://instagram.com" },
//   { icon: <Twitter fontSize="medium" />, url: "https://twitter.com" },
//   { icon: <LinkedIn fontSize="medium" />, url: "https://linkedin.com" },
// ];

// export const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
//       {/* Footer content */}
//       <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* About Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">
//           HiFi Creations</h3>
//           <p className="text-sm">
//             We are passionate HiFi Creations dedicated to creating unforgettable
//             experiences tailored to your needs. Let us bring your vision to
//             life!
//           </p>
//         </div>

//         {/* Quick Links Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//           <ul className="space-y-2">
//             {footerLinks.map((link, index) => (
//               <li key={index}>
//                 <Link
//                   to={link.path}
//                   className="hover:underline hover:text-pink-200 transition"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Section */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
//           <ul className="space-y-2 text-sm">
//             <li>
//               <span className="font-medium">Phone:</span> +1 (123) 456-7890
//             </li>
//             <li>
//               <span className="font-medium">Email:</span>{" "}
//               <a
//                 href="mailto:info@eventplanner.com"
//                 className="hover:underline hover:text-pink-200 transition"
//               >
//                 info@eventplanner.com
//               </a>
//             </li>
//             <li>
//               <span className="font-medium">Address:</span> 123 Event St., Party
//               City, World
//             </li>
//           </ul>
//           <div className="flex space-x-4 mb-4 md:mb-0 mt-5">
//             {socialMediaLinks.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-pink-200 transition"
//               >
//                 {social.icon}
//               </a>
//             ))}
//           </div>
//         </div>
        
//       </div>

//       {/* Social Media and Copyright */}
//       <div className="border-t border-purple-300 py-4">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm">

//           {/* Copyright */}
//           <p>© {new Date().getFullYear()} HiFi Creations. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };
