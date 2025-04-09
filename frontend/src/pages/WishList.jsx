import React from "react";

const Wishlist = ({ cars, wishlist, toggleWishlist }) => {
  return (
    <div className="p-8 mt-12 max-w-7xl mx-auto animate-fadeIn">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-3 animate-slideDown">
        My Wishlist
      </h1>

      {cars.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 bg-gray-50 rounded-lg shadow-sm transition-all duration-500 animate-slideUp">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <p className="text-xl text-gray-600 animate-fadeIn">Your wishlist is empty</p>
          <p className="text-gray-500 mt-2 animate-fadeIn delay-150">Add cars you love to your wishlist to save them for later</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => {
            const carId = car._id.$oid || car._id;

            return (
              <div
                key={carId}
                className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-56 object-cover transition-transform duration-700 hover:scale-120"
                  />
                  <div className="absolute top-0 right-0 m-3 animate-bounceIn" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <span className="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full uppercase tracking-wide">
                      Wishlist
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="font-bold text-xl mb-2 text-gray-800 transition-colors duration-300 hover:text-red-500">
                    {car.name}
                  </h2>

                  <div className="flex flex-col gap-1 mb-4">
                    <p className="text-gray-600">
                      <span className="font-medium">Brand:</span> {car.brand}
                    </p>
                    <p className="text-gray-800 text-lg font-bold">
                      ${car.price?.toLocaleString ? car.price.toLocaleString() : car.price}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleWishlist(carId)}
                    className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-95 flex items-center justify-center group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes bounceIn {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }

        .animate-bounceIn {
          animation: bounceIn 0.6s ease-out forwards;
        }

        .delay-150 {
          animation-delay: 0.15s;
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Wishlist;
