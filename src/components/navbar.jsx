import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
      <nav className={`w-full z-50 fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-11 lg:px-14 xl:px-28 py-4 lg:py-5 ${isScrolled ? "bg-white text-nadia-400 shadow-lg" : " text-white"} transition-all duration-300`}>
        <Link to="/">
          <img src={isScrolled ? "/logoBlack.png" : "/logoWhite.png"} alt="Logo" className="h-10 md:h-12 transition-all duration-300" />
        </Link>

        <button className={`text-2xl md:hidden transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"}`} onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 font-raleway font-medium md:text-md">
          {["Home", "Products", "About", "Gallery", "Contact"].map((item, index) => {
            if (item === "Products") {
              // Navigasi ke halaman Products
              return (
                <a key={index} href="/products" className="cursor-pointer group relative w-max">
                  <span>{item}</span>
                  <span className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 group-hover:w-3/6  ${isScrolled ? "bg-nadia-400" : "bg-nadia-100"}`}></span>
                  <span className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 ${isScrolled ? "bg-nadia-400" : "bg-nadia-100"}`}></span>
                </a>
              );
            } else if (item == "Contact") {
              return (
                <a key={index} href="/contact" className="cursor-pointer group relative w-max">
                  <span>{item}</span>
                  <span className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 group-hover:w-3/6  ${isScrolled ? "bg-nadia-400" : "bg-nadia-100"}`}></span>
                  <span className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 ${isScrolled ? "bg-nadia-400" : "bg-nadia-100"}`}></span>
                </a>
              );
            }
            // Navigasi ke bagian tertentu di halaman Home
            return (
              <Link
                key={index}
                to={`/#${item.toLowerCase()}`} // Gunakan hash URL
                className="cursor-pointer group relative w-max"
              >
                <span>{item}</span>
                <span className={`absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 group-hover:w-3/6  ${isScrolled ? "bg-nadia-400" : "bg-nadia-100"}`}></span>
                <span className={`absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 group-hover:w-3/6 ${isScrolled ? "bg-nadia-400" : "bg-nadia-100"}`}></span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Overlay dan Mobile Navigation */}
      {isOpen && (
        <>
          {/* Overlay dengan Animasi Fade-in */}
          <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 animate-fadeIn" onClick={handleToggle}></div>

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
              {["Home", "Products", "About", "Gallery", "Contact"].map((item, index) => {
                if (item === "Products") {
                  // Navigasi ke halaman terpisah
                  return (
                    <Link
                      key={index}
                      to="/products" // Rute ke halaman Products
                      className="cursor-pointer hover:text-nadia-500 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  );
                } else if (item == "Contact") {
                  return (
                    <Link
                      key={index}
                      to="/contact" // Rute ke halaman Products
                      className="cursor-pointer hover:text-nadia-500 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  );
                } else {
                  return (
                    <Link
                      key={index}
                      to={`/#${item.toLowerCase()}`} // Gunakan hash URL
                      className="cursor-pointer hover:text-nadia-500 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  );
                }
              })}
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
