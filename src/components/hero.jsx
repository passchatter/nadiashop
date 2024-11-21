import "../App.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div id="home" className="h-screen relative">
        <img src="/hero.jpg" alt="Hero Image" className="absolute left-0 w-full h-full object-cover z-[-2]" />
        {/* Overlay Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/60 to-black/60 z-[-1]"></div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center lg:items-start h-full mx-6 md:mx-12 lg:mx-16 xl:mx-28 lg:pt-44 z-10">
          <div className="lg:hidden flex flex-col items-center mb-4">
            <img src="/logoWhite.png" alt="Hero Image" className="w-8 h-8" />
            <h1 className="text-nadia-100 font-alice text-xl ">Nadia Art Shop</h1>
          </div>
          <h1 className="text-nadia-100 font-alice font-semibold text-3xl md:text-5xl lg:text-6xl mb-6 text-center lg:text-left">
            Elevate Your Space with Authentic Balinese Handicrafts <span className="hidden xs:inline">and Decorative Pieces</span>
          </h1>

          <p className="hidden lg:block font-raleway text-nadia-100 text-center lg:text-left lg:w-2/3 xl:w-2/4 text-sm md:text-base lg:text-lg mb-8">
            Explore handcrafted decor like rattan mirrors and elegant table pieces, blending Balinese tradition with modern style for a unique touch in any space.
          </p>

          <Link
            to="/#products"
            className="border-2 border-nadia-100 text-nadia-100 px-12 md:px-16 py-3 rounded-full mt-5 font-numans font-medium hover:border-nadia-300 hover:bg-nadia-300 active:scale-95 transition-all animate-breathe hover:animate-none"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
