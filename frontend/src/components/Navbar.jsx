import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ wishlistCount }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white flex justify-between items-center px-6 py-4 shadow">
      <Link to="/" className="font-bold text-xl">
        Car Store
      </Link>

      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/wishlist">
          Wishlist {wishlistCount > 0 && <span>({wishlistCount})</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
