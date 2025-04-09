import React from "react";

const CarCard = ({ car, toggleWishlist, wishlist }) => {
  const carId = car._id.$oid || car._id;
  const isInWishlist = wishlist.includes(carId);

  return (
    <div className="border p-4 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700">
      {/* Image Container */}
      <div className="relative w-full h-48 overflow-hidden rounded-md group">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
        />
      </div>

      {/* Car Details */}
      <h2 className="font-semibold text-xl mt-4 mb-2 text-gray-800 dark:text-white">
        {car.name}
      </h2>
      <p className="text-gray-600 mb-1 dark:text-gray-400">
        Brand: {car.brand}
      </p>
      <p className="text-gray-800 font-bold mb-3 dark:text-gray-200">
        Price: ${car.price}
      </p>

      {/* Wishlist Button */}
      <button
        onClick={() => toggleWishlist(carId)}
        className={`relative h-[50px] w-50 overflow-hidden border ${
          isInWishlist
            ? "border-red-600 text-red-600 dark:border-red-600 dark:text-red-600"
            : "border-gray-800 text-gray-800 dark:border-gray-700 dark:text-gray-300"
        } bg-white shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full ${
          isInWishlist ? "before:bg-red-600" : "before:bg-gray-800"
        } before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full ${
          isInWishlist ? "after:bg-red-600" : "after:bg-gray-800"
        } after:duration-500 hover:text-white hover:shadow-lg hover:before:h-2/4 hover:after:h-2/4 rounded-lg font-medium px-.5 transition-all duration-300 cursor-pointer`}
      >
        <span className="relative z-10">
          {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        </span>
      </button>
    </div>
  );
};

export default CarCard;
