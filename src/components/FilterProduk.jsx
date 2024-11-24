import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSliders, faXmark } from "@fortawesome/free-solid-svg-icons";

function FilterProduk({ category, setCategory, material, setMaterial, size, setSize, color, setColor, search, setSearch, setPage }) {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const resetFilters = () => {
    setCategory("");
    setMaterial("");
    setSize("");
    setColor("");
    setSearch("");
    setPage(1);
    setShowFilters(false);
  };

  const handleChange = (e) => {
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
    <div className="px-6 md:px-12 lg:px-16 xl:px-28">
      <div className="py-16 flex justify-center items-center gap-3">
        <button onClick={toggleFilters} className="flex items-center justify-center w-[12%] px-3 py-2 max-w-11 aspect-square rounded-md text-xl text-nadia-400 border border-gray-300 active:scale-95 transition-all ease-in-out">
          <FontAwesomeIcon icon={faSliders} />
        </button>
        {/* Search Bar */}
        <div className="w-full lg:w-[75%]">
          <div className="relative w-full">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              name="search"
              value={search}
              onChange={handleChange}
              placeholder="Search products..."
              className="w-full pl-10 pr-24 py-2 text-nadia-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-nadia-300 focus:border-nadia-300 placeholder:text-gray-400 transition-all ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Filter Slider */}
      <div
        className={`transition-transform duration-300 ease-in-out transform ${
          showFilters ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-[90%] md:w-[60%] lg:w-[50%] xl:w-[38%] overflow-y-scroll bg-white text-nadia-400 shadow-lg px-6 md:px-12 py-6 font-raleway`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-raleway text-base md:text-lg lg:text-xl font-semibold">Filter</h2>
          <button onClick={() => setShowFilters(false)} className=" text-2xl font-bold">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {/* Category */}
        <div className="mb-8">
          <h3 className="text-sm lg:text-base font-medium mb-2">Category</h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {["Decorative Mirror", "Jujukhat", "Decorative Table", "Decorative Lights", "Wall Decoration", "Bag"].map((item) => (
              <label key={item}>
                <input type="radio" name="category" value={item} checked={category === item} onChange={handleChange} className="hidden peer" />
                <div className="text-center leading-tight flex items-center justify-center bg-gray-100 text-nadia-400 px-3 py-3 md:py-4 lg:py-5 rounded cursor-pointer text-[.8rem] font-medium transition-all peer-checked:border-2 peer-checked:bg-transparent peer-checked:border-nadia-300">
                  {item}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Material */}
        <div className="mb-8">
          <h3 className="text-sm lg:text-base font-medium mb-2">Material</h3>
          <div className="grid grid-cols-2 gap-2">
            {["Rope Agel", "Rapia Agel", "Wood", "Quill"].map((item) => (
              <label key={item}>
                <input type="radio" name="material" value={item} checked={material === item} onChange={handleChange} className="hidden peer" />
                <div className="text-center leading-tight flex items-center justify-center bg-gray-100 text-nadia-400 px-3 py-3 md:py-4 lg:py-5 rounded cursor-pointer text-[.8rem] font-medium transition-all peer-checked:border-2 peer-checked:bg-transparent peer-checked:border-nadia-300">
                  {item}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="mb-8">
          <h3 className="text-sm lg:text-base font-medium mb-2">Size</h3>
          <div className="grid grid-cols-3 gap-2">
            {["30", "40", "60", "70", "1 meter"].map((item) => (
              <label key={item}>
                <input type="radio" name="size" value={item} checked={size === item} onChange={handleChange} className="hidden peer" />
                <div className="text-center leading-tight flex items-center justify-center bg-gray-100 text-nadia-400 px-3 py-3 md:py-4 lg:py-5 rounded cursor-pointer text-[.8rem] font-medium transition-all peer-checked:border-2 peer-checked:bg-transparent peer-checked:border-nadia-300">
                  {item}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm lg:text-lg font-medium mb-2">Color</label>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: "Black", value: "black", colorCode: "#000000" },
              { name: "White", value: "white", colorCode: "#FFFFFF" },
              { name: "Natural", value: "natural", colorCode: "#D9D9D9" },
              { name: "Turkish", value: "turkish", colorCode: "#30D5C8" },
            ].map(({ name, value, colorCode }) => (
              <label key={value} onClick={() => handleChange({ target: { value } })}>
                <input type="radio" name="color" value={value} checked={color === value} onChange={handleChange} className="form-radio hidden peer" />
                <div className="text-center leading-tight flex items-center justify-left gap-2 bg-gray-100 text-nadia-400 px-3 py-3 md:py-4 lg:py-5 rounded cursor-pointer text-[.8rem] font-medium transition-all peer-checked:border-2 peer-checked:bg-transparent peer-checked:border-nadia-300">
                  <span className="inline-block w-5 h-5 rounded-full border border-gray-200" style={{ backgroundColor: colorCode }}></span>
                  <span>{name}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        <button onClick={resetFilters} className="mt-7 reset-button  py-2 md:py-3 text-sm lg:text-base bg-nadia-more400 text-white rounded-lg w-full shadow-lg">
          Reset Filters
        </button>
      </div>

      {/* Overlay */}
      {showFilters && <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleFilters}></div>}
    </div>
  );
}

export default FilterProduk;
