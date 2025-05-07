import React, { useEffect, useState } from 'react';
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 hover:bg-white text-white hover:text-[#9c27b0] h-10 w-10 rounded-full flex justify-center items-center shadow-lg bg-blue-500 transition-opacity duration-300  z-50 ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      aria-label="Scroll to top"
    >
      <KeyboardDoubleArrowUpIcon
        className="animate-bounce"
        style={{ fontSize: "30px" }}
      />
    </button>
  );
};
