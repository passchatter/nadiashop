import React, { useState } from "react";

function FilterProduk({
  category,
  setCategory,
  material,
  setMaterial,
  size,
  setSize,
  color,
  setColor,
  search,
  setSearch,
  setPage,
}) {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    setCategory('');
    setMaterial('');
    setSize('');
    setColor('');
    setSearch('');
    setPage(1);
    setShowFilters(false)
  };

  const handleChage = (e) => {
    const { name, value } = e.target;
    setPage(1);
    switch (name) {
      case "category":
        setCategory(value);
        break;
      case "material":
        setMaterial(value);
        break;
      case "size":
        setSize(value);
        break;
      case "color":
        setColor(value);
        break;
      case "search":
        setSearch(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-xl mx-auto my-8 px-6">
      {/* Search Bar */}
      <div className="flex justify-between items-center gap-4 mb-4">
        <div className="relative w-full flex-1">
          <input
            type="text"
            name="search"
            value={search}
            onChange={handleChage}
            placeholder="Search products..."
            className="w-full px-10 pr-24 py-2 text-gray-700 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-gray-400 transition-all ease-in-out"
          />
        </div>

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
        } fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-lg p-6`}
      >
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-lg font-semibold">Filter Products</h2>
          <button
            onClick={() => setShowFilters(false)}
            className="text-black text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        {/* Category */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Category</h3>
          <div className="grid grid-cols-2 gap-4">
            {["decorative mirror", "jujukhat", "decorative table", "decorative lights", "wall decoration", "bag"].map(
              (item) => (
                <label
                  key={item}
                  className="relative flex items-center justify-center p-2 bg-[#FAF7F0] rounded cursor-pointer text-sm font-medium border-2 border-transparent peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500"
                >
                  <input
                    type="radio"
                    name="category"
                    value={item}
                    checked={category === item}
                    onChange={handleChage}
                    className="hidden peer"
                  />
                  {item}
                </label>
              )
            )}
          </div>
        </div>

        {/* Material */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Material</h3>
          <div className="grid grid-cols-2 gap-2">
            {["rope agel", "rapia agel", "wood", "quill"].map((item) => (
              <label
                key={item}
                className="relative flex items-center justify-center p-2 bg-[#FAF7F0] rounded cursor-pointer text-sm font-medium border-2 border-transparent peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500"
              >
                <input
                  type="radio"
                  name="material"
                  value={item}
                  checked={material === item}
                  onChange={handleChage}
                  className="hidden peer"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Size</h3>
          <div className="grid grid-cols-3 gap-2">
            {["30", "40", "60", "70", "1 meter"].map((item) => (
              <label
                key={item}
                className="relative flex items-center justify-center p-2 bg-[#FAF7F0] rounded cursor-pointer text-sm font-medium border-2 border-transparent peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500"
              >
                <input
                  type="radio"
                  name="size"
                  value={item}
                  checked={size === item}
                  onChange={handleChage}
                  className="hidden peer"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Color */}
        <div>
  <label className="block text-sm font-medium mb-2">Color:</label>
  <div className="grid grid-cols-2 gap-4">
    {[
      { name: 'Black', value: 'black', colorCode: '#000000' },
      { name: 'White', value: 'white', colorCode: '#FFFFFF' },
      { name: 'Natural', value: 'natural', colorCode: '#D9D9D9' },
      { name: 'Turkish', value: 'turkish', colorCode: '#30D5C8' },
    ].map(({ name, value, colorCode }) => (
      <label
        key={value}
        className={`inline-flex items-center space-x-2 p-3  bg-[#FAF7F0] cursor-pointer rounded-lg text-sm font-medium`}
       
        onClick={() => handleChage({ target: { value } })}
      >
        <input
          type="radio"
          name="color"
          value={value}
          checked={color === value}
          onChange={handleChage}
          className="form-radio"
          style={{ display: 'none' }}
        />
        <span
          className="inline-block w-5 h-5 rounded-full"
          style={{ backgroundColor: colorCode }}
        ></span>
        <span>{name}</span>
      </label>
    ))}
  </div>
</div>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="mt-7 reset-button px-6 py-3 bg-nadia-more400 text-white rounded-lg w-full"
        >
          Reset Filters
        </button>

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
