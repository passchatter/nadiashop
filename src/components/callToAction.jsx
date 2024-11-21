import "../App.css";

function CallToAction() {
  return (
    <div className="bg-nadia-200 py-7 md:py-10 lg:py-16 px-6 md:px-12 lg:px-16 xl:px-28">
      <div className="flex flex-col items-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-alice font-medium text-nadia-300 text-center mb-2 md:mb-4">Lets Discuss for A Project</h1>
        <p className="text-pretty text-center text-nadia-400 font-numans text-xs md:text-sm lg:text-base md:w-[80%] xl:w-[60%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam laboriosam quas ipsa odit magni, asperiores sequi enim id possimus molestiae
        </p>
        <a target="_blank" href="">
          <button className="bg-nadia-300 font-numans text-nadia-100 text-xs md:text-sm lg:text-base w-max py-2 md:py-3 px-6 lg:px-8 xl:px-11 mt-6 md:mt-8 rounded-full hover:bg-nadia-more400 active:scale-95 transition-all shadow-md">
            Consultation Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default CallToAction;
