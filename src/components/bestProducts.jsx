import "../App.css";
import { Link } from "react-router-dom";

function BestProducts() {
  return (
    <>
      {/* bg-[#FAF7F0] */}
      <div className="bg-[#ffffff] px-6 md:px-12 lg:px-16 xl:px-28 py-16 lg:py-20 xl:py-24 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-lg md:text-xl text-nadia-400">All Category</h2>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-alice font-medium text-nadia-300">best selling product</h1>
        </div>

        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-4 lg:w-[80%] font-raleway">
          <div className="group rounded-lg overflow-hidden transition">
            <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
              <img src="/1.png" alt="Product" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h2 className="text-nadia-400 text-[.8rem] md:text-base">Category Name</h2>
              <h1 className="text-nadia-500 text-base md:text-xl font-medium -mt-1">Product Name</h1>
              <p className="text-nadia-300 text-lg font-semibold mt-2">$0.00</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden transition">
            <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
              <img src="/2.png" alt="Product" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h2 className="text-nadia-400 text-[.8rem] md:text-base">Category Name</h2>
              <h1 className="text-nadia-500 text-base md:text-xl font-medium -mt-1">Product Name</h1>
              <p className="text-nadia-300 text-lg font-semibold mt-2">$0.00</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden transition">
            <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
              <img src="/75.png" alt="Product" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h2 className="text-nadia-400 text-[.8rem] md:text-base">Category Name</h2>
              <h1 className="text-nadia-500 text-md md:text-xl font-medium -mt-1">Product Name</h1>
              <p className="text-nadia-300 text-lg font-semibold mt-2">$0.00</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden transition">
            <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
              <img src="/86.png" alt="Product" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h2 className="text-nadia-400 text-[.8rem] md:text-base">Category Name</h2>
              <h1 className="text-nadia-500 text-md md:text-xl font-medium -mt-1">Product Name</h1>
              <p className="text-nadia-300 text-lg font-semibold mt-2">$0.00</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden transition">
            <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
              <img src="/137.png" alt="Product" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h2 className="text-nadia-400 text-[.8rem] md:text-base">Category Name</h2>
              <h1 className="text-nadia-500 text-md md:text-xl font-medium -mt-1">Product Name</h1>
              <p className="text-nadia-300 text-lg font-semibold mt-2">$0.00</p>
            </div>
          </div>
          <div className="group rounded-lg overflow-hidden transition">
            <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
              <img src="/152.png" alt="Product" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h2 className="text-nadia-400 text-[.8rem] md:text-base">Category Name</h2>
              <h1 className="text-nadia-500 text-md md:text-xl font-medium -mt-1">Product Name</h1>
              <p className="text-nadia-300 text-lg font-semibold mt-2">$0.00</p>
            </div>
          </div>
        </div>

        <Link
          to="/Products"
          className="mt-10 md:mt-11 lg:mt-14 px-10 py-2 md:px-12 md:py-3 bg-nadia-300 text-nadia-100 font-numans text-sm lg:text-base rounded-full shadow-md hover:bg-nadia-more400 active:scale-95 transition-all cursor-pointer"
        >
          Find Your Favorites
        </Link>
      </div>
    </>
  );
}

export default BestProducts;
