import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="mt-20">
        <div className="w-full h-48 mb-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7892.285838411072!2d115.26758909225468!3d-8.485481553141945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d5367e05a17%3A0xe3211f4061e3def0!2sNADIA%20art%20Shop!5e0!3m2!1sid!2sid!4v1731834336855!5m2!1sid!2sid&zoom=17"
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="bg-nadia-400 text-nadia-100 w-full pt-9 pb-6 px-6 md:px-12 lg:px-16 xl:px-28 flex flex-col gap-4 lg:flex-row justify-center items-start">
          <div className="lg:w-[40%]">
            <div className="flex items-center w-full gap-4">
              <img src="/logoWhite.png" alt="" className="h-9 md:h-11" />
              <h1 className="text-xl md:text-2xl font-alice">Nadia Shop</h1>
            </div>
            <p className="text-pretty font-numans text-xs mt-3 md:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem suscipit totam ipsum possimus accusantium reiciendis labore iste ipsa?</p>
          </div>

          <div className="mt-3 lg:mt-0 lg:w-[30%]">
            <h1 className="font-alice font-medium text-lg md:text-xl">Address</h1>
            <p className="text-pretty font-numans font-light  text-xs ">Jl. Raya Gentong, Tegallalang, Ubud</p>
          </div>

          <div className="lg:w-[10%]">
            <h1 className="font-alice font-medium text-lg md:text-xl">Links</h1>
            <div className="flex flex-col text-xs md:text-sm gap-[.15rem] ">
              <a href="#" className="hover:text-nadia-200 active:scale-95 transition-all">
                Home
              </a>
              <a href="#" className="hover:text-nadia-200 active:scale-95 transition-all">
                About
              </a>
              <a href="#" className="hover:text-nadia-200 active:scale-95 transition-all">
                Products
              </a>
              <a href="#" className="hover:text-nadia-200 active:scale-95 transition-all">
                Gallery
              </a>
              <a href="#" className="hover:text-nadia-200 active:scale-95 transition-all">
                Contact
              </a>
            </div>
          </div>

          <div className="lg:w-[20%]">
            <h1 className="font-alice font-medium text-lg md:text-xl">Get In Touch</h1>
            <div className="flex gap-3 mt-1">
              <FontAwesomeIcon icon={faSquareFacebook} className="text-3xl hover:text-nadia-200 active:scale-95 transition-all" />
              <FontAwesomeIcon icon={faSquareInstagram} className="text-3xl hover:text-nadia-200 active:scale-95 transition-all" />
            </div>
          </div>
        </div>

        <p className="bg-nadia-400 text-nadia-100 pt-8 pb-3 text-center font-numans [font-size:10px] lg:text-xs lg:border-t lg:border-nadia-200">&copy; 2024 NADIA art Shop. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
