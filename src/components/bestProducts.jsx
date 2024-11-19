import "../App.css";

function BestProducts() {
  return (
    <>
    {/* bg-[#FAF7F0] */}
      <div className="bg-[#ffffff] px-6 md:px-12 lg:px-16 xl:px-28 py-16 lg:py-20 xl:py-24 flex flex-col items-center">
      <div className="text-center mb-12">
          <h2 className="text-lg md:text-xl text-gray-500">All Category</h2>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-alice font-semibold text-gray-800">best selling product</h1>
          <button className="mt-4 px-6 py-2 bg-nadia-more400  text-white rounded-full hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>

        <div className="grid mt-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-6xl">
              <div className="rounded-lg overflow-hidden transition">
                <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
                  <img
                    src="/1.png"
                    alt="Product"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-gray-600 text-[.8rem] md:text-base">Category Name</h2>
                  <h1 className="text-gray-800 text-md md:text-xl font-medium">Product Name</h1>
                  <p className="text-nadia-more400 text-md font-semibold mt-2">$0.00</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden transition">
                <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
                  <img
                    src="/2.png"
                    alt="Product"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-gray-600 text-[.8rem] md:text-base">Category Name</h2>
                  <h1 className="text-gray-800 text-md md:text-xl font-medium">Product Name</h1>
                  <p className="text-nadia-more400 text-md font-semibold mt-2">$0.00</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden transition">
                <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
                  <img
                    src="/75.png"
                    alt="Product"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-gray-600 text-[.8rem] md:text-base">Category Name</h2>
                  <h1 className="text-gray-800 text-md md:text-xl font-medium">Product Name</h1>
                  <p className="text-nadia-more400 text-md font-semibold mt-2">$0.00</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden transition">
                <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
                  <img
                    src="/86.png"
                    alt="Product"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-gray-600 text-[.8rem] md:text-base">Category Name</h2>
                  <h1 className="text-gray-800 text-md md:text-xl font-medium">Product Name</h1>
                  <p className="text-nadia-more400 text-md font-semibold mt-2">$0.00</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden transition">
                <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
                  <img
                    src="/137.png"
                    alt="Product"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-gray-600 text-[.8rem] md:text-base">Category Name</h2>
                  <h1 className="text-gray-800 text-md md:text-xl font-medium">Product Name</h1>
                  <p className="text-nadia-more400 text-md font-semibold mt-2">$0.00</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden transition">
                <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
                  <img
                    src="/152.png"
                    alt="Product"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-gray-600 text-[.8rem] md:text-base">Category Name</h2>
                  <h1 className="text-gray-800 text-md md:text-xl font-medium">Product Name</h1>
                  <p className="text-nadia-more400 text-md font-semibold mt-2">$0.00</p>
                </div>
              </div>
        </div>
      </div>
    </>
  );
}

export default BestProducts;
