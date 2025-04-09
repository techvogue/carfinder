import React from "react";

const Filter = ({
  brand,
  setBrand,
  fuelType,
  setFuelType,
  priceRange,
  setPriceRange,
  sortOrder,
  setSortOrder,
  uniqueBrands,
  uniqueFuelTypes,
}) => {
  const getCurrentPriceRangeValue = () => {
    if (priceRange[0] === 0) {
      if (priceRange[1] === 20000) return "0-20000";
      if (priceRange[1] === 40000) return "20000-40000";
      if (priceRange[1] === 60000) return "40000-60000";
      if (priceRange[1] === 100000) return "60000-100000";
    }
    return "";
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold text-gray-700">Filter By</h2>

      {/* Brand Filter */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm">Brand</label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Brands</option>
          {uniqueBrands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {/* Fuel Type */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm">Fuel Type</label>
        <select
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Fuel Types</option>
          {uniqueFuelTypes.map((ft) => (
            <option key={ft} value={ft}>
              {ft}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm">Price Range</label>
        <select
          value={getCurrentPriceRangeValue()}
          onChange={(e) => setPriceRange(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Prices</option>
          <option value="0-20000">Below $20,000</option>
          <option value="20000-40000">$20,000 - $40,000</option>
          <option value="40000-60000">$40,000 - $60,000</option>
          <option value="60000-100000">Above $60,000</option>
        </select>
      </div>

      {/* Sort Order */}
      <div className="flex flex-col gap-1">
        <label className="text-gray-600 text-sm">Sort By</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
