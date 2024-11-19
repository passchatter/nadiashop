import "../App.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Products() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    const scrollAmount = scrollRef.current.offsetWidth / 2; // Scroll setengah lebar kontainer
    scrollRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const scrollAmount = scrollRef.current.offsetWidth / 2; // Scroll setengah lebar kontainer
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="my-20 md:my-28 flex flex-col lg:flex-row justify-center items-center mx-6 md:mx-12 lg:mx-16 xl:mx-28">
        <div className="lg:w-1/2 ">
          <h1 className="text-center lg:text-left font-alice font-semibold text-3xl md:text-4xl xl:text-5xl mb-2 text-nadia-more400">Products</h1>
          <p className="text-center lg:text-left font-numans text-nadia-400 text-sm lg:text-base md:w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad impedit aut rem harum dicta.</p>
        </div>
        {/* product */}
        <div className="relative w-full lg:w-1/2 mt-7 ">
          <button onClick={scrollLeft} className="hidden lg:block absolute h-full left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 transition z-10 text-2xl text-nadia-300 hover:text-nadia-400 active:scale-90 font-bold ">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="relative w-full  overflow-x-auto snap-x hideScroll" ref={scrollRef}>
            <div className="flex gap-5 md:gap-8 w-max scroll-smooth ">
              <div className="bg-slate-300 h-48 md:h-64 xl:h-80 aspect-square snap-center rounded-lg">
                <img src="/decorativemirror.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="bg-slate-300 h-48 md:h-64 xl:h-80 aspect-square snap-center rounded-lg">
                <img src="/decorativetable.jpg" alt="" className="w-full h-full object-cover  rounded-lg" />
              </div>
              <div className="bg-slate-300 h-48 md:h-64 xl:h-80 aspect-square snap-center rounded-lg">
                <img src="/jujukhat.jpg" alt="" className="w-full h-full object-cover  rounded-lg" />
              </div>
              <div className="bg-slate-300 h-48 md:h-64 xl:h-80 aspect-square snap-center rounded-lg">
                <img src="/walldecoration.jpg" alt="" className="w-full h-full object-cover rounded-lg" />
              </div>
              
            </div>
          </div>
          <button onClick={scrollRight} className="hidden lg:block absolute h-full right-0 top-1/2 transform -translate-y-1/2 translate-x-8 transition z-10 text-2xl text-nadia-300 hover:text-nadia-400 active:scale-90   font-bold ">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
