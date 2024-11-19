import "../App.css";

function Hero() {
  return (
    <>
      <div className="h-[30vh] relative">
        <img 
          src="/decorativemirror.jpg" 
          alt="Hero Image" 
          className="absolute left-0 w-full h-full object-cover z-[-2]" 
        />
        {/* Overlay Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/50 to-black/70 z-[-1]"></div>
        
        {/* Content */}
        <div className="flex flex-col justify-center items-center lg:items-start h-full mx-6 md:mx-12 lg:mx-16 xl:mx-28 pt-16 lg:pt-52 z-10">
        <h1 className="text-white font-alice font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-center lg:text-left">
        Product
        </h1>

        <p className="text-white text-center lg:text-left lg:w-2/3 xl:w-2/4 font-light text-sm md:text-base lg:text-lg mb-8">
          Home / Product
        </p>

        </div>
      </div>
    </>
  );
}

export default Hero;
