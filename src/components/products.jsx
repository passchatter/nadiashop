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
    { src: "/decorativeMirror.jpg", alt: "Decorative Mirror", desc: "Designed with a blend of traditional and modern art, bringing warmth and beauty to every corner of your room." },
    { src: "/decorativetable.jpg", alt: "Decorative Table", desc: "An elegant decorative table perfect for furnishing your living room or office, with a design that is both functional and artistic." },
    { src: "/jujukhat.jpg", alt: "Jujukhat", desc: "Handmade traditional ornaments, reflecting the beauty of culture with a modern twist for a unique wall decoration." },
    { src: "/wallDecoration.jpg", alt: "Wall Decoration", desc: "Premium wall decor with innovative designs, creating a luxurious and eye-catching atmosphere in your home or workspace." },
  ];

  return (
    <>
      <div id="products" className="my-20 md:my-28 flex flex-col lg:flex-row justify-center items-center mx-6 md:mx-12 lg:mx-16 xl:mx-28">
        <div className="lg:w-1/2">
          <h1 className="text-center lg:text-left font-alice font-medium text-3xl md:text-4xl xl:text-5xl mb-4 text-nadia-300">Products</h1>
          <p className="text-center lg:text-left font-raleway text-nadia-400 text-sm lg:text-base md:w-96 lg:w-[80%]">We present a range of premium decoration products designed to enhance your interior.</p>
          <p className="mt-3 hidden lg:block text-center lg:text-left font-raleway text-nadia-400 text-sm lg:text-base md:w-96 lg:w-[80%]">
            Every product in our collection is designed with attention to detail and beauty, making them the perfect choice for creating a warm and elegant atmosphere in any space. We combine traditional and modern art elements to produce
            decorations that are not only functional, but also able to become the center of attention in your home, office or commercial space.
          </p>
        </div>
        {/* product */}
        <div className="relative w-full lg:w-1/2 mt-7">
          <button onClick={scrollLeft} className="hidden lg:block absolute h-full left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 transition z-10 text-2xl text-nadia-300 hover:text-nadia-400 active:scale-90 font-bold ">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="relative w-full overflow-y-hidden overflow-x-auto snap-x hideScroll" ref={scrollRef}>
            <div className="flex gap-5 md:gap-8 w-max scroll-smooth ">
              {productList.map((product, index) => (
                <div key={index} className=" bg-slate-300 h-48 md:h-64 xl:h-80 aspect-square snap-center rounded-lg relative group">
                  <img src={product.src} alt={product.alt} className="w-full h-full object-cover rounded-lg z-0" />
                  <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-[100%] bg-gradient-to-b from-black/0 via-black/50 to-black/60 z-[2] rounded-lg transition-all ease-in-out">
                    <div className="font-raleway text-white px-6 mt-32 md:mt-28 xl:mt-48">
                      <h1 className="font-semibold text-lg">{product.alt}</h1>
                      <p className="hidden md:block text-sm mt-1 lg:mt-2">{product.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollRight}
            aria-label="Scroll Right"
            className="hidden lg:block absolute h-full right-0 top-1/2 transform -translate-y-1/2 translate-x-8 transition z-10 text-2xl text-nadia-300 hover:text-nadia-400 active:scale-90 font-bold"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
