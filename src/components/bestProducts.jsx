import "../App.css";

function BestProducts() {
  return (
    <>
      <div className="bg-[#FAF7F0] px-6 md:px-12 lg:px-16 xl:px-28 py-16 lg:py-20 xl:py-24 flex flex-col items-center">
        <div>
          <p className="text-sm md:text-base lg:text-lg font-raleway text-center text-nadia-400 ">All Category</p>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-alice font-medium text-nadia-300 -mt-1 text-center">Best Product</h1>
        </div>
        <div className="flex flex-wrap w-full lg:w-[85%] xl:w-[68%] mt-7 xl:mt-9 justify-center gap-4 lg:gap-6">
          <div className="w-32 xs:w-36 md:basis-[30%] active:scale-95 transition-all group overflow-hidden cursor-pointer">
            <div className="w-full aspect-square mb-2 md:mb-3">
              <img src="/contohBestProduct.png" alt="" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all" />
            </div>
            <div className="w-full">
              <h2 className="font-numans text-nadia-400 text-xs md:text-sm xl:text-base -mb-1">Kategori</h2>
              <h1 className="font-raleway text-nadia-300 font-medium text-base md:text-lg lg:text-xl mb-2 md:mb-3">Nama Produk</h1>
              <p className="font-numans text-nadia-300  font-semibold md:text-lg">$30</p>
            </div>
          </div>
          <div className="w-32 xs:w-36 md:basis-[30%] active:scale-95 transition-all group overflow-hidden cursor-pointer">
            <div className="w-full aspect-square mb-2 md:mb-3">
              <img src="/contohBestProduct.png" alt="" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all" />
            </div>
            <div className="w-full">
              <h2 className="font-numans text-nadia-400 text-xs md:text-sm xl:text-base -mb-1">Kategori</h2>
              <h1 className="font-raleway text-nadia-300 font-medium text-base md:text-lg lg:text-xl mb-2 md:mb-3">Nama Produk</h1>
              <p className="font-numans text-nadia-300  font-semibold md:text-lg">$30</p>
            </div>
          </div>
          <div className="w-32 xs:w-36 md:basis-[30%] active:scale-95 transition-all group overflow-hidden cursor-pointer">
            <div className="w-full aspect-square mb-2 md:mb-3">
              <img src="/contohBestProduct.png" alt="" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all" />
            </div>
            <div className="w-full">
              <h2 className="font-numans text-nadia-400 text-xs md:text-sm xl:text-base -mb-1">Kategori</h2>
              <h1 className="font-raleway text-nadia-300 font-medium text-base md:text-lg lg:text-xl mb-2 md:mb-3">Nama Produk</h1>
              <p className="font-numans text-nadia-300  font-semibold md:text-lg">$30</p>
            </div>
          </div>
          <div className="w-32 xs:w-36 md:basis-[30%] active:scale-95 transition-all group overflow-hidden cursor-pointer">
            <div className="w-full aspect-square mb-2 md:mb-3">
              <img src="/contohBestProduct.png" alt="" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all" />
            </div>
            <div className="w-full">
              <h2 className="font-numans text-nadia-400 text-xs md:text-sm xl:text-base -mb-1">Kategori</h2>
              <h1 className="font-raleway text-nadia-300 font-medium text-base md:text-lg lg:text-xl mb-2 md:mb-3">Nama Produk</h1>
              <p className="font-numans text-nadia-300  font-semibold md:text-lg">$30</p>
            </div>
          </div>
          <div className="w-32 xs:w-36 md:basis-[30%] active:scale-95 transition-all group overflow-hidden cursor-pointer">
            <div className="w-full aspect-square mb-2 md:mb-3">
              <img src="/contohBestProduct.png" alt="" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all" />
            </div>
            <div className="w-full">
              <h2 className="font-numans text-nadia-400 text-xs md:text-sm xl:text-base -mb-1">Kategori</h2>
              <h1 className="font-raleway text-nadia-300 font-medium text-base md:text-lg lg:text-xl mb-2 md:mb-3">Nama Produk</h1>
              <p className="font-numans text-nadia-300  font-semibold md:text-lg">$30</p>
            </div>
          </div>
          <div className="w-32 xs:w-36 md:basis-[30%] active:scale-95 transition-all group overflow-hidden cursor-pointer">
            <div className="w-full aspect-square mb-2 md:mb-3">
              <img src="/contohBestProduct.png" alt="" className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-all" />
            </div>
            <div className="w-full">
              <h2 className="font-numans text-nadia-400 text-xs md:text-sm xl:text-base -mb-1">Kategori</h2>
              <h1 className="font-raleway text-nadia-300 font-medium text-base md:text-lg lg:text-xl mb-2 md:mb-3">Nama Produk</h1>
              <p className="font-numans text-nadia-300  font-semibold md:text-lg">$30</p>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-11 lg:mt-14 px-10 py-2 md:px-12 md:py-3 bg-nadia-300 text-nadia-100 font-numans text-sm lg:text-base rounded-full shadow-md hover:bg-nadia-more400 active:scale-95 transition-all cursor-pointer">
          Find Your Favorites
        </div>
      </div>
    </>
  );
}

export default BestProducts;
