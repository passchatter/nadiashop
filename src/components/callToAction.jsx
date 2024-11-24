import "../App.css";

function CallToAction() {
  return (
    <div className="mt-16 mb-20 md:mt-20 md:mb-24 lg:mt-24 lg:mb-32 px-6 md:px-12 lg:px-16 xl:px-28">
       <div className="bg-nadia-200 py-7 md:py-10 lg:py-16 px-6 md:px-12 lg:px-16 xl:px-28 rounded-lg shadow-lg">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-alice font-medium text-nadia-300 mb-2 md:mb-4">
          Let's Discuss Your Next Project
        </h1>
        <p className="text-nadia-400 font-numans text-xs md:text-sm lg:text-base md:w-[80%] xl:w-[60%]">
          Share your ideas with us and let our experts help bring your vision to life with customized solutions.
        </p>
        <a target="_blank" href="https://wa.me/6281238940106?text=Hi%2C%20I%27m%20interested%20in%20starting%20a%20project%20with%20your%20team.%20Can%20we%20discuss%20further%3F">
          <button className="bg-nadia-300 font-numans text-nadia-100 text-xs md:text-sm lg:text-base w-max py-2 md:py-3 px-6 lg:px-8 xl:px-11 mt-6 md:mt-8 rounded-full hover:bg-nadia-more400 active:scale-95 transition-all shadow-md">
            Consultation Now
          </button>
        </a>
      </div>
    </div>
    <div className="border-t border-nadia-300 mt-12 mb-10"></div>
    
  </div>
  );
}

export default CallToAction;
