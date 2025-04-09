import React from "react";

const Pagination = ({
  totalCars,
  carsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalCars / carsPerPage);
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-5">
      {totalCars > 0 && (
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed dark:bg-gray-600"
                : "bg-gray-200 dark:bg-gray-800"
            }`}
          >
            Prev
          </button>

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                currentPage === number
                  ? "bg-blue-500 text-white dark:bg-blue-600"
                  : "bg-gray-200 dark:bg-gray-800"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed dark:bg-gray-600"
                : "bg-gray-200 dark:bg-gray-800"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
