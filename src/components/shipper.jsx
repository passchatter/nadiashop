import "../App.css";

function Shipper() {
  return (
    <>
      <div className="mt-16 mb-24 md:mt-20 md:mb-28 lg:mt-24 lg:mb-36 px-6 md:px-12 lg:px-16 xl:px-28 text-center flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-alice font-medium text-nadia-300">
          Handled by <span className="block md:inline">Professional Shippers</span>
        </h1>

        <p className="font-raleway hidden md:block text-nadia-400 text-base mt-2 md:w-[90%]">We collaborate with trusted shipping partners to ensure your products arrive safely and on time.</p>
        <div className="flex gap-4 mt-6 md:mt-8 lg:mt-11 justify-center">
          <a href="https://nusatrans.com/" target="_blank" className="relative z-10">
            <img src="/nusantaraCargo.png" alt="Nusantara Cargo" className="h-10 md:h-12 lg:h-16" />
          </a>
          <a href="https://limajaricargo.com/" target="_blank" className="relative z-10">
            <img src="/limaJari.png" alt="Lima Jari" className="h-10 md:h-12 lg:h-16" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Shipper;
