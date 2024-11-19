import React, { useState } from "react";

function FilterProduk() {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    document.getElementById("filter-form").reset();
  };

  return (
    <div className="max-w-xl mx-auto my-8 px-6">
      {/* Search Bar */}
      <div className="flex justify-between items-center gap-4 mb-4">
      <form action="" method="">
        {/* Search Input */}
        <div className="relative w-full flex-1">
          <input
            type="text"
            name="keyword"
            placeholder="Search products..."
            className="w-full px-10 pr-24 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400 transition-all ease-in-out"
          />
          {/* Search Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
              />
            </svg>
          </div>
        </div>
    </form>
        {/* Hamburger Button */}
        <button
            onClick={toggleFilters}
            className="p-2 text-gray-700 rounded-md border border-gray-300"
            >
            {/* Hamburger Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
            </button>
        </div>

      {/* Filter Slider */}
      <div
        className={`transition-transform duration-300 ease-in-out transform ${
          showFilters ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg p-6`}
      >
        <h2 className="mb-4 text-lg font-semibold">Filters</h2>
        <form id="filter-form">
          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block mb-2 text-sm font-medium">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="furniture">Furniture</option>
              <option value="decor">Decor</option>
              <option value="textile">Textile</option>
            </select>
          </div>

          {/* Material */}
          <div className="mb-4">
            <label htmlFor="material" className="block mb-2 text-sm font-medium">
              Material
            </label>
            <select
              name="material"
              id="material"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Material</option>
              <option value="wood">Wood</option>
              <option value="metal">Metal</option>
              <option value="plastic">Plastic</option>
            </select>
          </div>

          {/* Size */}
          <div className="mb-4">
            <label htmlFor="size" className="block mb-2 text-sm font-medium">
              Size
            </label>
            <select
              name="size"
              id="size"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          {/* Color */}
          <div className="mb-4">
            <label htmlFor="color" className="block mb-2 text-sm font-medium">
              Color
            </label>
            <select
              name="color"
              id="color"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Color</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>

          {/* Reset Filters */}
          <button
            type="button"
            onClick={resetFilters}
            className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
          >
            Reset Filters
          </button>
        </form>
      </div>

      {/* Overlay */}
      {showFilters && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={toggleFilters}
        ></div>
      )}
    </div>
  );
}

export default FilterProduk;
