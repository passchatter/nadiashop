import "../App.css";

function Hero() {
  return (
    <>
      <div className="h-screen">
        <img src="/hero.jpg" alt="" className="absolute left-0 w-full h-full object-cover z-[-2] blur-sm" />
        <div className="absolute left-0 w-full h-full bg-black opacity-[65%] z-[-1]"></div>
        <div className="flex flex-col justify-center items-center lg:items-start h-full mx-6 md:mx-12 lg:mx-16 xl:mx-28 pt-16 lg:pt-52 z-10 ">
          <h1 className="text-pretty font-alice font-medium text-3xl md:text-4xl lg:text-5xl mb-4 text-nadia-200 text-center">Welcome to Nadia Shop</h1>
          <p className="text-pretty text-center lg:text-left lg:w-2/3 xl:w-2/4 font-medium text-xs md:text-sm lg:text-base font-numans text-nadia-200">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quo itaque nemo totam! Voluptatibus, vitae corrupti deleniti in iusto quaerat!
          </p>
          <button className="border-2 lg:border-4 border-nadia-300  text-nadia-200 px-12 md:px-16 py-3 rounded-full mt-8 font-numans hover:bg-nadia-more400 active:scale-95 transition-all">Shop Now</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
