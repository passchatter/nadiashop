import "../App.css";

function Hero() {
  return (
    <>
      <div className="h-screen relative">
        <img 
          src="/hero.jpg" 
          alt="Hero Image" 
          className="absolute left-0 w-full h-full object-cover z-[-2]" 
        />
        {/* Overlay Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/50 to-black/70 z-[-1]"></div>
        
        {/* Content */}
        <div className="flex flex-col justify-center items-center lg:items-start h-full mx-6 md:mx-12 lg:mx-16 xl:mx-28 pt-16 lg:pt-52 z-10">
        <h1 className="text-white font-alice font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-center lg:text-left">
          Elevate Your Space with Authentic Balinese Handicrafts and Decorative Pieces
        </h1>

        <p className="text-white text-center lg:text-left lg:w-2/3 xl:w-2/4 font-light text-sm md:text-base lg:text-lg mb-8">
          Explore handcrafted decor like rattan mirrors and elegant table pieces, blending Balinese tradition with modern style for a unique touch in any space.
        </p>

          <button className="border-2 lg:border-4 border-nadia-300  text-white px-12 md:px-16 py-3 rounded-full mt-8 font-numans bg-nadia-more400 active:scale-95 transition-all">Shop Now</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
