import "../App.css";

function About() {
  const cards = [
    {
      image: "/about1.jpg",
      title: "Exported to 10+ countries!",
      description: "Our products are exported to over 10 countries with trusted quality.",
    },
    {
      image: "/about2.jpg",
      title: "International quality!",
      description: "International quality, pesticide-free, and eco-friendly.",
    },
    {
      image: "/about3.jpg",
      title: "Trusted globally!",
      description: "Trusted worldwide for our quality and reliability.",
    },
  ];

  return (
    <>
      <div id="about" className="bg-nadia-100 px-6 md:px-11 lg:px-14 xl:px-28 pt-16 lg:pt-24 pb-28 xl:pb-36">
        <h1 className="md:hidden text-center md:text-left font-alice font-medium text-nadia-300 text-3xl mb-4">About Us</h1>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row md:gap-6 xl:gap-8">
            <div className="w-full md:w-[50%]">
              <img src="/about.jpg" alt="About Us" className="w-full h-full object-cover shadow-lg rounded-md" />
            </div>
            <div className="md:w-[50%] mt-5 md:mt-0 flex flex-col justify-center items-center md:items-start ">
              <h1 className="hidden md:block text-center md:text-left font-raleway text-nadia-400 text-2xl xl:text-3xl">About Us</h1>
              <h2 className="font-alice font-medium md:mt-1 text-nadia-300 text-3xl md:text-4xl xl:text-5xl text-center md:text-left leading-tight">Quality Handicraft Products, Trusted in 10+ Export Countries</h2>
              <div className="hidden xl:block text-pretty text-center md:text-left font-raleway text-base text-nadia-400 mt-5 md:mt-8  ">
                <p>
                  As a trusted provider of handicraft products in more than 10 countries, we are committed to maintaining quality and sustainability in every product we send. With a touch of local creativity, we are ready to meet global
                  market demands with the best work.
                </p>
                <p className="mt-3">
                  Our commitment to craftsmanship and environmentally friendly practices ensures that every product we produce meets the high standards expected by the international market. Be it custom designs or ready-to-wear collections,
                  we strive to deliver exceptional products that are well received by global customers.
                </p>
              </div>
            </div>
          </div>
          <div className=" xl:hidden text-pretty text-center md:text-left font-raleway text-base text-nadia-400 mt-4 md:mt-8">
            <p>
              As a trusted provider of handicraft products in more than 10 countries, we are committed to maintaining quality and sustainability in every product we send. With a touch of local creativity, we are ready to meet global market
              demands with the best work.
            </p>
            <p className="mt-4 md:mt-2">
              Our commitment to craftsmanship and environmentally friendly practices ensures that every product we produce meets the high standards expected by the international market. Be it custom designs or ready-to-wear collections, we
              strive to deliver exceptional products that are well received by global customers.
            </p>
          </div>
        </div>
      </div>

      <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] relative px-6 md:px-11 lg:px-14 xl:px-28">
        <img src="/decorativeMirror.jpg" alt="Hero Image" className="absolute left-0 w-full h-full object-cover z-[-2]" />
        {/* Overlay Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/60 to-black/40 z-[-1]"></div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center lg:items-start h-full z-10">
          <div className="container">
            <div className=" flex flex-col items-center mb-4">
              <img src="/logoWhite.png" alt="Hero Image" className="w-8 h-8" />
              <h1 className="text-nadia-100 font-alice text-xl ">Nadia Art Shop</h1>
            </div>
            <div className="flex flex-col lg:w-[90%] xl:w-[80%] mx-auto">
              <h1 className="text-nadia-100 font-alice font-semibold text-3xl md:text-4xl lg:text-5xl mb-6 text-center xl:w-[70%] mx-auto">
                Transform Your Home with Handcrafted Balinese Artistry <span className="hidden xs:inline">and Unique Decorative Pieces</span>
              </h1>
              <p className="hidden lg:block font-raleway text-nadia-100 text-center text-sm md:text-base lg:text-lg mb-8">
                Discover the beauty of handcrafted Balinese art pieces, from intricate wooden carvings to elegant woven decor, each item crafted with love and tradition to add a touch of Bali’s soul to your space.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 lg:mt-20 py-16 px-8 md:px-16 lg:px-24">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-nadia-400 font-raleway text-lg md:text-xl">Why Choose Us?</p>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-medium text-nadia-300 font-alice leading-tight">Over 10 Years of Excellence</h1>
          <p className="font-raleway text-gray-500 mt-3 max-w-2xl mx-auto">we deliver top-quality products, ensuring sustainability and trust with every partnership.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {cards.map((card, index) => (
            <div key={index} className="relative h-60 md:h-72 lg:h-80 xl:h-[30rem] overflow-hidden rounded-lg shadow-lg group">
              {/* Image */}
              <img src={card.image} alt={card.title} className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300" />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-center font-raleway">
                <h2 className="text-lg md:text-xl font-semibold">{card.title}</h2>
                <p className="text-sm md:text-base mt-2 text-center px-4">{card.description}</p>
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

      <div className=" py-7 md:py-8 lg:py-14 xl:py-20 px-8 md:px-16 lg:px-24">
        <div className="border-y-2 border-nadia-300 py-14 lg:py-16">
          {/* Content on the right */}
          <div className="flex flex-col lg:px-22 justify-center items-center text-center">
            <p className="text-nadia-400 font-raleway text-lg md:text-xl">wholesale</p>
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-medium text-nadia-300 font-alice leading-tight text-pretty ">
              Large Quantity Orders? <span className="md:block">We are ready to meet your needs!</span>
            </h1>
            <p className="hidden md:block mt-4 lg:mt-6 text-pretty font-raleway text-base text-nadia-400 lg:w-[90%] xl:w-[70%]">
              We serve large orders with a high production capacity that can meet your needs for local and international markets. Each product is made to the highest quality standards, combining local handcrafted arts and environmentally
              friendly materials. We ensure every order is delivered on time with an organized production management system.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
