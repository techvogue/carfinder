import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Wishlist from "./pages/WishList";
import Home from "./pages/Home";

import { fetchCars } from "./services/api";

const App = () => {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [brand, setBrand] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;
  const [wishlist, setWishlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  useEffect(() => {
    const getCars = async () => {
      const data = await fetchCars();
      setCars(data.cars);
    };
    getCars();
  }, []);

  useEffect(() => {
    // Toggle dark mode by adding/removing 'dark' class on <html> element
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleWishlist = (carId) => {
    setWishlist((prevWishlist) => {
      // Check if the carId is already in the wishlist
      const isInWishlist = prevWishlist.includes(carId);

      // Add the carId if it's not in the wishlist, or remove it if it's already there
      const newWishlist = isInWishlist
        ? prevWishlist.filter(id => id !== carId)
        : [...prevWishlist, carId];

      // Save the updated wishlist to localStorage
      localStorage.setItem("wishlist", JSON.stringify(newWishlist));

      return newWishlist;
    });
  };

  const handlePriceRangeChange = (rangeString) => {
    if (!rangeString) {
      setPriceRange([0, 1000000]);
      return;
    }

    const [min, max] = rangeString.split('-').map(Number);
    setPriceRange([min, max || 1000000]);
  };

  const uniqueBrands = [...new Set(cars.map((car) => car.brand))];
  const uniqueFuelTypes = [...new Set(cars.map((car) => car.fuelType))];

  const filterCars = cars
    .filter((car) =>
      car.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((car) => (brand ? car.brand === brand : true))
    .filter((car) => (fuelType ? car.fuelType === fuelType : true))
    .filter(
      (car) =>
        car.price >= priceRange[0] &&
        car.price <= priceRange[1]
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  // Get wishlist cars
  const wishlistCars = cars.filter(car => {
    const carId = car._id.$oid || car._id;
    return wishlist.includes(carId);
  });

  return (
    <Router>
      <Navbar 
        wishlistCount={wishlist.length} 
        toggleDarkMode={() => setDarkMode(prev => !prev)} 
        darkMode={darkMode}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              brand={brand}
              setBrand={setBrand}
              fuelType={fuelType}
              setFuelType={setFuelType}
              priceRange={priceRange}
              setPriceRange={handlePriceRangeChange}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              carsPerPage={carsPerPage}
              filterCars={filterCars}
              toggleWishlist={toggleWishlist}
              wishlist={wishlist}
              uniqueBrands={uniqueBrands}
              uniqueFuelTypes={uniqueFuelTypes}
            />
          }
        />
        <Route
          path="/wishlist"
          element={<Wishlist cars={wishlistCars} wishlist={wishlist} toggleWishlist={toggleWishlist} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
