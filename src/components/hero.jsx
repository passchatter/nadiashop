import "../App.css";

function Hero() {
  return (
    <>
      <div className=" h-screen">
        <img src="/hero.jpg" alt="" className="absolute left-0 w-full h-full object-cover z-[-2]" />
        <div className="absolute left-0 w-full h-full bg-black opacity-60 z-[-1]"></div>
        <div className="flex flex-col justify-center items-center h-full mx-6 z-10">
          <h1 className="font-alice font-semibold text-3xl mb-2 text-[#D8D2C2] text-center">Welcome to Nadia Shop</h1>
          <p className="text-center font-medium text-[#D8D2C2]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quo itaque nemo totam! Voluptatibus, vitae corrupti deleniti in iusto quaerat!</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
