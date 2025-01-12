import React from "react";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We are passionate event planners dedicated to creating unforgettable
            experiences tailored to your needs. Let us bring your vision to
            life!
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#services"
                className="hover:underline hover:text-pink-200 transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline hover:text-pink-200 transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:underline hover:text-pink-200 transition"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline hover:text-pink-200 transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium">Phone:</span> +1 (123) 456-7890
            </li>
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:info@eventplanner.com"
                className="hover:underline hover:text-pink-200 transition"
              >
                info@eventplanner.com
              </a>
            </li>
            <li>
              <span className="font-medium">Address:</span> 123 Event St., Party
              City, World
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="border-t border-purple-300 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm">
          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-200 transition"
            >
              <Facebook fontSize="medium" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-200 transition"
            >
              <Instagram fontSize="medium" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-200 transition"
            >
              <Twitter fontSize="medium" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-200 transition"
            >
              <LinkedIn fontSize="medium" />
            </a>
          </div>

          {/* Copyright */}
          <p>© {new Date().getFullYear()} Event Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
