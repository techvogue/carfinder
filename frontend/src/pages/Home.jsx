import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import CarCard from "../components/CarCard";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

const Home = ({
  searchQuery,
  setSearchQuery,
  brand,
  setBrand,
  fuelType,
  setFuelType,
  priceRange,
  setPriceRange,
  sortOrder,
  setSortOrder,
  currentPage,
  setCurrentPage,
  carsPerPage,
  filterCars,
  toggleWishlist,
  wishlist,
  uniqueBrands,
  uniqueFuelTypes,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [filterCars]);

  // Reset to page 1 when searchQuery changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="mt-10">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex gap-4 min-h-[calc(100vh-100px)]">
          
          {/* Left Filters */}
          <div className="w-full md:w-1/5 h-[100vh] border-r border-gray-300">
            <div className="mt-10 p-4 bg-white rounded-xl shadow-md sticky top-4 h-[100vh]">
              <Filter
                brand={brand}
                setBrand={setBrand}
                fuelType={fuelType}
                setFuelType={setFuelType}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
                uniqueBrands={uniqueBrands}
                uniqueFuelTypes={uniqueFuelTypes}
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="mt-10 px-3 w-full md:w-3/4 flex flex-col">
            
            <div className="mb-4">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </div>

            {filterCars.length < 1 ? (
              <div className="text-center text-2xl font-semibold mt-10">
                No Products Found 😕
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterCars
                  .slice(
                    (currentPage - 1) * carsPerPage,
                    currentPage * carsPerPage
                  )
                  .map((car) => (
                    <CarCard
                      key={car._id}
                      car={car}
                      toggleWishlist={toggleWishlist}
                      wishlist={wishlist}
                    />
                  ))}
              </div>
            )}

            <div className="mt-6">
              <Pagination
                carsPerPage={carsPerPage}
                totalCars={filterCars.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
