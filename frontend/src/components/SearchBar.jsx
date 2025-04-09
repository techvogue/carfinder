import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex justify-center my-5">
      <div className="relative w-[100%] max-w-3xl">

        <input
          type="text"
          placeholder="Search by name or brand..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-400 focus:border-black focus:border-[1.5px] outline-none p-3 pl-12 w-full rounded-lg text-base"
        />
        <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 text-lg" />
      </div>
    </div>
  );
};

export default SearchBar;
