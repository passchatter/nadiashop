import "../App.css";

function Shipper() {
  return (
    <>
      <div className="mt-16 mb-20 md:mt-20 md:mb-24 lg:mt-24 lg:mb-32 px-6 md:px-12 lg:px-16 xl:px-28 text-center">
        
        <h1 className="font-raleway text-nadia-300 text-lg md:text-xl lg:text-2xl font-semibold">
          Handled by Professional Shippers
        </h1>
        
        <p className="text-nadia-300 text-sm md:text-base lg:text-lg mt-4">
          We collaborate with trusted shipping partners to ensure your products arrive safely and on time.
        </p>
        
        <div className="flex gap-4 mt-6 justify-center">
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
