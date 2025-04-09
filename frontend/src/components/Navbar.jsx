import React from "react";
import { FaHeart, FaMoon, FaSun } from "react-icons/fa"; // Import heart, moon, and sun icons from react-icons
import { Link } from "react-router-dom";

const Navbar = ({ wishlistCount, toggleDarkMode, darkMode }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 flex justify-between items-center px-6 py-4 shadow">
      <div className="font-bold text-xl text-gray-900 dark:text-white">
        Car Store
      </div>

      {/* Mobile and Desktop Layout */}
      <div className="flex gap-4 md:gap-6 items-center text-sm md:text-base">
        <Link
          to="/"
          className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
        >
          Home
        </Link>

        {/* Heart Icon for Wishlist */}
        <Link
          to="/wishlist"
          className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-300 flex items-center gap-1"
        >
          <FaHeart className="text-lg" /> {/* Heart icon */}
          {wishlistCount > 0 && (
            <span className="text-xs md:text-sm">({wishlistCount})</span> // Wishlist count in small text
          )}
        </Link>

        {/* Dark Mode Button with icons */}
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded  dark:bg-gray-600 text-gray-800 dark:text-white"
        >
          {darkMode ? (
            <FaSun className="text-lg" /> // Sun icon for light mode
          ) : (
            <FaMoon className="text-lg" /> // Moon icon for dark mode
          )}
        </button>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="md:hidden flex items-center gap-2">
        <button onClick={toggleDarkMode} className="text-gray-900 dark:text-white">
          <i className="fas fa-bars"></i> {/* Add a hamburger icon for mobile */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
