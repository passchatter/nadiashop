import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar Tetap di Atas */}
      <nav
        className={`z-50 fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-11 lg:px-14 xl:px-28 py-4 lg:py-5 ${
          isScrolled ? "bg-white text-black shadow-lg" : "bg-nadia-000 text-white"
        } transition-all duration-300`}
      >
        <Link to="/">
          {/* Ganti logo sesuai kondisi scroll */}
          <img
            src={isScrolled ? "/logoBlack.png" : "/logoWhite.png"}
            alt="Logo"
            className="h-10 md:h-12 transition-all duration-300"
          />
        </Link>

        {/* Icon Hamburger */}
        <button className={`text-2xl md:hidden transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`} onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-raleway md:text-md">
          {['Home', 'Products', 'About', 'Gallery', 'Contact'].map((item, index) => (
            <div key={index} className="relative group">
              <Link
                to={item == 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`transition-colors duration-300 ${
                  isScrolled ? "hover:text-nadia-500" : "hover:text-nadia-500"
                }`}
              >
                {item}
              </Link>
              <span className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-black" : "bg-white"}`}></span>
            </div>
          ))}
        </div>
      </nav>

      {/* Overlay dan Mobile Navigation */}
      {isOpen && (
        <>
          {/* Overlay dengan Animasi Fade-in */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 animate-fadeIn"
            onClick={handleToggle}
          ></div>

          {/* Menu Mobile dengan Animasi Slide-in */}
          <div
            className={`fixed top-0 right-0 w-[80%] max-w-xs h-full bg-nadia-400 text-nadia-100 px-6 pt-4 z-50 transition-transform duration-500 transform ${isOpen ? "translate-x-0 animate-slideIn" : "translate-x-full animate-slideOut"}`}
          >
            <div className="flex justify-end">
              <button className="text-3xl" onClick={handleToggle}>
                <FontAwesomeIcon icon={faXmark} className={"text-white"} />
              </button>
            </div>


            <div className="flex flex-col mt-8 gap-6 text-lg font-semibold">
              {['Home', 'Products', 'About', 'Gallery', 'Contact'].map((item, index) => (
                <Link
                  key={index}
                  to={item == 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="hover:scale-105 transition-transform"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-white font-semibold">Address</p>
              <p>Jl. Raya Gentong, Tegallalang, Ubud</p>
              <p className="text-white font-semibold mt-4">Open Time</p>
              <p>Monday - Friday: 10.00 - 17.00</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
