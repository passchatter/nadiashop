import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <nav
        className={`z-50 fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-11 lg:px-14 xl:px-28 py-2 lg:py-3 transition-all duration-300 ${isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"}`}
      >
        <img src={`${isScrolled ? "/logoBlack.png" : "logoWhite.png"}`} alt="" className="h-9 md:h-10" />
        <button className="text-2xl md:hidden" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="hidden md:flex gap-6 font-raleway md:text-md">
          <div className="relative group">
            <a href="#">Home</a>
            <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-black" : "bg-white"}`}></span>
          </div>
          <div className="relative group">
            <a href="#">Products</a>
            <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-black" : "bg-white"}`}></span>
          </div>
          <div className="relative group">
            <a href="#">About</a>
            <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-black" : "bg-white"}`}></span>
          </div>
          <div className="relative group">
            <a href="#">Gallery</a>
            <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-black" : "bg-white"}`}></span>
          </div>
          <div className="relative group">
            <a href="#">Contact</a>
            <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-black" : "bg-white"}`}></span>
          </div>
        </div>

        <div className="hidden lg:block"></div>

        {isOpen && (
          <div className={`absolute right-0 top-0 w-[90%] bg-nadia-400 text-nadia-100 font-numans px-6 pt-3 h-screen flex flex-col transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className="w-full flex justify-end">
              <button className="w-max text-3xl " onClick={handleToggle}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div className="flex flex-col text-lg gap-4 mt-8">
              <a href="#" className="w-max active:scale-95 transition-all">
                Home
              </a>
              <a href="#" className="w-max active:scale-95 transition-all">
                Products
              </a>
              <a href="#" className="w-max active:scale-95 transition-all">
                About
              </a>
              <a href="#" className="w-max active:scale-95 transition-all">
                Gallery
              </a>
              <a href="#" className="w-max active:scale-95 transition-all">
                Contact
              </a>
            </div>

            <div className="mt-7 flex flex-col gap-4 text-sm">
              <div>
                <p className="font-semibold text-md">Address</p>
                <p>Jl. Raya Gentong, Tegallalang, Ubud</p>
              </div>
              <div>
                <p className="font-semibold text-md">Open Time</p>
                <p>Monday - Friday : 10.00 - 17.00</p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
