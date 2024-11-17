import "../App.css";

function Shipper() {
  return (
    <>
      <div className="mt-16 mb-20 md:mt-20 md:mb-24 lg:mt-24 lg:mb-32 px-6 md:px-12 lg:px-16 xl:px-28">
        <h1 className="font-raleway text-nadia-300 text-pretty leading-tight text-lg md:text-xl lg:text-2xl text-center font-semibold">Handled by Professional Shipper</h1>
        <div className="flex gap-3 md:gap-4 xs:gap-2 mt-4 justify-center">
          <img src="/nusantaraCargo.png" alt="" className="h-8 xs:h-10 md:h-12 lg:h-16" />
          <img src="/limaJari.png" alt="" className="h-8 xs:h-10 md:h-12 lg:h-16" />
        </div>
      </div>
    </>
  );
}

export default Shipper;
