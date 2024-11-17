import "../App.css";

function About() {
  return (
    <>
      <div className="bg-nadia-100 py-16 lg:py-32 px-6 md:px-12 lg:px-16 xl:px-28">
        <div>
          <div className="flex flex-col md:flex-row md:gap-5 xl:gap-10 justify-center items-center">
            <h1 className="md:hidden text-3xl md:text-4xl xl:text-5xl font-alice font-medium text-nadia-300 text-center mb-5 w-max">About Us</h1>
            <div className="w-full md:w-[50%] lg:w-[60%] max-w-72 lg:max-w-96">
              <img src="/aboutUs.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="md:w-[50%] lg:w-[40$]">
              <h1 className="hidden md:block text-center md:text-left text-3xl md:text-4xl xl:text-5xl font-alice font-medium text-nadia-300 w-max">About Us</h1>
              <p className="xl:w-[80%] text-pretty text-center md:text-left font-numans text-sm lg:text-base text-nadia-400 mt-4 md:mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse perferendis, nemo nulla aperiam nisi ratione!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-28">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-alice font-medium text-nadia-300 text-center mb-8">Why Choose Us</h1>
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-col md:flex-row md:gap-5 xl:gap-10 justify-center items-center">
              <div className="w-full md:w-[50%]">
                <img src="/whyChooseUs1.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-[50%]">
                <h1 className="font-medium font-raleway text-nadia-300 text-pretty leading-tight text-lg lg:text-xl xl:text-2xl mt-4 mb-2">Karya Seni yang Menceritakan Kisah</h1>
                <p className="font-numans text-nadia-400 text-pretty text-xs md:text-sm xl:text-base">
                  Setiap Produk Kami adalah hasil karya seni yang menceritakan kisah, dirancang khusus untuk menghiasi dan menambah keanggunan di setiap sudut ruang Anda
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-5 xl:gap-10 justify-center items-center">
              <div className="md:order-2 w-full md:w-[50%]">
                <img src="/whyChooseUs1.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-[50%]">
                <h1 className="font-medium font-raleway text-nadia-300 text-pretty leading-tight text-lg lg:text-xl xl:text-2xl mt-4 mb-2">Karya Seni yang Menceritakan Kisah</h1>
                <p className="font-numans text-nadia-400 text-pretty text-xs md:text-sm xl:text-base">
                  Setiap Produk Kami adalah hasil karya seni yang menceritakan kisah, dirancang khusus untuk menghiasi dan menambah keanggunan di setiap sudut ruang Anda
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-5 xl:gap-10 justify-center items-center">
              <div className="w-full md:w-[50%]">
                <img src="/whyChooseUs1.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-[50%]">
                <h1 className="font-medium font-raleway text-nadia-300 text-pretty leading-tight text-lg lg:text-xl xl:text-2xl mt-4 mb-2">Karya Seni yang Menceritakan Kisah</h1>
                <p className="font-numans text-nadia-400 text-pretty text-xs md:text-sm xl:text-base">
                  Setiap Produk Kami adalah hasil karya seni yang menceritakan kisah, dirancang khusus untuk menghiasi dan menambah keanggunan di setiap sudut ruang Anda
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-32">
          <div className="border-t-2 border-b-2 border-nadia-300 py-10 md:py-16 lg:py-20 xl:py-24  flex justify-center items-center">
            <div className="hidden lg:flex w-[30%] justify-center items-center">
              <img src="/aboutQuote.png" alt="" className="w-full h-full xl:w-[80%] xl:h-[80%] object-cover" />
            </div>
            <div className=" flex flex-col items-center lg:w-[70%] px-22">
              <p className="font-numans text-nadia-400 text-sm md:text-base xl:text-lg text-center">Product Quality</p>
              <h1 className="text-pretty font-alice text-nadia-300 text-xl md:text-2xl xl:text-4xl text-center leading-tight">We Always Produce Natural for Better Future</h1>
              <p className="text-pretty font-numans text-nadia-400 text-xs md:text-sm xl:text-base md:w-[80%] text-center mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam laboriosam quas ipsa odit magni, asperiores sequi enim id possimus molestiae quibusdam! Tempore facere totam eos pariatur{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
