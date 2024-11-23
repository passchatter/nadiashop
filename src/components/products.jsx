import "../App.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Products() {
  const scrollRef = useRef(null);

  // Fungsi untuk scroll ke kiri
  const scrollLeft = () => {
    const scrollAmount = scrollRef.current.offsetWidth / 2; // Setengah lebar kontainer
    scrollRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  // Fungsi untuk scroll ke kanan
  const scrollRight = () => {
    const scrollAmount = scrollRef.current.offsetWidth / 2; // Setengah lebar kontainer
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const productList = [
    { src: "/decorativeMirror.jpg", alt: "Decorative Mirror" },
    { src: "/decorativetable.jpg", alt: "Decorative Table" },
    { src: "/jujukhat.jpg", alt: "Jujukhat" },
    { src: "/wallDecoration.jpg", alt: "Wall Decoration" },
  ];

  return (
    <>
      <div id="products" className="md:my-28 px-6 container">
  <div className="container items-center grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
    {/* Section Heading */}
    <div>
      <h1 className="text-center lg:text-left font-alice font-medium text-3xl md:text-4xl xl:text-5xl mb-4 text-nadia-300">
        Products
      </h1>
      <p className="text-center lg:text-left font-numans text-nadia-400 text-sm lg:text-base md:max-w-md lg:max-w-lg mx-auto lg:mx-0 mb-6">
        We present a range of premium decoration products designed to enhance your interior.
      </p>
      <p className="text-center lg:text-left font-numans text-nadia-400 text-sm lg:text-base md:max-w-md lg:max-w-lg mx-auto lg:mx-0">
        Every product in our collection is designed with attention to detail and beauty, making them the perfect choice for creating a warm and elegant atmosphere in any space. We combine traditional and modern art elements to produce decorations that are not only functional, but also able to become the center of attention in your home, office or commercial space.
      </p>
    </div>

    {/* Product Carousel */}
    <div className="relative w-full mt-10 md:mt-0">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        aria-label="Scroll Left"
        className="hidden lg:block absolute h-full left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 transition z-10 text-2xl text-nadia-300 hover:text-nadia-400 active:scale-90 font-bold"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Scrollable Container */}
      <div
        className="relative w-full overflow-x-auto snap-x hideScroll"
        ref={scrollRef}
      >
        <div className="flex gap-5 md:gap-8 w-max scroll-smooth">
          {/* Product Items */}
          {productList.map((product, index) => (
            <div
              key={index}
              className="bg-slate-300 h-56 md:h-72 xl:h-[400px] w-56 md:w-72 xl:w-[500px] snap-center rounded-lg hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
            >
              <img
                src={product.src}
                alt={product.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        aria-label="Scroll Right"
        className="hidden lg:block absolute h-full right-0 top-1/2 transform -translate-y-1/2 translate-x-8 transition z-10 text-2xl text-nadia-300 hover:text-nadia-400 active:scale-90 font-bold"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  </div>
</div>

    </>
  );
}

export default Products;
