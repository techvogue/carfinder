import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ wishlistCount, toggleDarkMode, darkMode }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-800 flex justify-between items-center px-6 py-4 shadow">
      <div className="font-bold text-xl text-gray-900 dark:text-white">
        Car Store
      </div>
      <div className="flex gap-4">
        <Link
          to="/"
          className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
        >
          Home
        </Link>
        <Link
          to="/wishlist"
          className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-300"
        >
          Wishlist {wishlistCount > 0 && <span>({wishlistCount})</span>}
        </Link>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
