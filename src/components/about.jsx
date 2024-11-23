import "../App.css";


function About() {

  const cards = [
    {
      image: "/about1.jpg",
      title: "100% natural",
      description: "Clean, pesticide free, responsibly grown and delivered to you",
    },
    {
      image: "/about2.jpg",
      title: "High quality",
      description: "Clean, pesticide free, responsibly grown and delivered to you",
    },
    {
      image: "/about3.jpg",
      title: "Fresh Items",
      description: "Clean, pesticide free, responsibly grown and delivered to you",
    },
  ];
  return (
    <>
      <div id="about" className="bg-nadia-100 py-16 lg:py-32 px-6 md:px-12 lg:px-16 xl:px-28">
      <div className="grid container grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-[90%]">
          <img src="/about.jpg" alt="About Us" className="w-full h-full object-cover shadow-lg rounded-3xl" />
        </div>
        <div className="flex md:pl-10 flex-col justify-center items-center md:items-start">
          <h1 className="hidden md:block text-center md:text-left font-alice font-medium text-nadia-more400 text-3xl">
            About Us
          </h1>
          <h2 className="xl:w-[85%] text-nadia-300 text-3xl md:text-5xl py-4 text-center md:text-left leading-relaxed">
            Quality Handicraft Products, Trusted in 10+ Export Countries
          </h2>

          <p className="text-pretty text-center md:text-left font-numans text-sm lg:text-base text-nadia-400 mt-4 md:mt-2">
            As a trusted provider of handicraft products in more than 10 countries, we are committed to maintaining quality and sustainability in every product we send. With a touch of local creativity, we are ready to meet global market demands with the best work.
          </p>
          <p className="text-pretty text-center md:text-left font-numans text-sm lg:text-base text-nadia-400 mt-4 md:mt-2">
            Our commitment to craftsmanship and environmentally friendly practices ensures that every product we produce meets the high standards expected by the international market. Be it custom designs or ready-to-wear collections, we strive to deliver exceptional products that are well received by global customers.
          </p>
        </div>
      </div>

      </div>

      <div id="home" className="h-[70vh] relative">
        <img src="/decorativeMirror.jpg" alt="Hero Image" className="absolute left-0 w-full h-full object-cover z-[-2]" />
        {/* Overlay Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/60 to-black/40 z-[-1]"></div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center lg:items-start h-full mx-6 md:mx-12 lg:mx-16 xl:mx-28 lg:pt-44 z-10">
         <div className="container">
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

        </div>
         </div>
      </div>

      <div className="py-16 px-8 md:px-16 lg:px-24">
  {/* Section Title */}
  <div className="text-center mb-12">
    <p className="text-orange-500 uppercase text-sm font-bold tracking-wide">
      About Us
    </p>
    <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
      Providing Great Foodstuffs
    </h1>
    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
      We have 30 years of agriculture & eco farming experience globally, work with professionals.
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 container md:grid-cols-3 gap-6 md:gap-12">
  {cards.map((card, index) => (
    <div
      key={index}
      className="relative h-60 md:h-[600px] overflow-hidden rounded-lg shadow-lg group"
    >
      {/* Image */}
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        <h2 className="text-lg md:text-xl font-semibold">{card.title}</h2>
        <p className="text-sm md:text-base mt-2 text-center px-4">
          {card.description}
        </p>
      </div>

      {/* Border Corner Design */}
      <div className="absolute top-0 left-0 flex justify-between w-full px-2 py-2">
        <div className="border-t-4 border-l-4 border-white w-6 h-6"></div>
        <div className="border-t-4 border-r-4 border-white w-6 h-6"></div>
      </div>
      <div className="absolute bottom-0 left-0 flex justify-between w-full px-2 py-2">
        <div className="border-b-4 border-l-4 border-white w-6 h-6"></div>
        <div className="border-b-4 border-r-4 border-white w-6 h-6"></div>
      </div>
    </div>
  ))}
</div>

</div>

<div className="mt-20 lg:mt-32 px-4 md:px-8 container">
  <div className="border-t-2 border-b-2 items-center justify-center border-nadia-300 py-10 md:py-16 lg:py-20 xl:py-24 grid grid-cols-2">
    
    {/* Image on the left (desktop only) */}
    <div className="">
      <img src="/jujukhat.jpg" alt="Product Quality" className="xl:w-[80%] xl:h-[80%] object-cover rounded-lg shadow-lg" />
    </div>

    {/* Content on the right */}
    <div className="flex flex-col px-4 lg:px-22">
      <p className="font-numans text-nadia-400 text-sm md:text-base xl:text-lg ">wholesale</p>
      <h1 className="text-pretty font-alice text-nadia-300 py-4 text-xl md:text-2xl xl:text-4xl leading-tight">
      Large Quantity Orders? We are ready to meet your needs!
      </h1>
      <p className="text-pretty font-numans text-nadia-400 text-xs md:text-sm xl:text-base md:w-[80%] mt-4">
        We serve large orders with a high production capacity that can meet your needs for local and international markets. Each product is made to the highest quality standards, combining local handcrafted arts and environmentally friendly materials. We ensure every order is delivered on time with an organized production management system.
      </p>
    </div>

  </div>
</div>


     
    </>
  );
}

export default About;
