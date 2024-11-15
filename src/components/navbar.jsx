import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-2">
        <img src="/logo.png" alt="" className="h-10" />
        <button className="text-xl text-white" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {isOpen && (
          <div className="absolute right-0 top-0 w-[90%] bg-[#4A4947] text-white font-numans px-6 pt-3 h-screen flex flex-col">
            <div className="w-full flex justify-end">
              <button className="w-max text-2xl " onClick={handleToggle}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div className="flex flex-col text-xl gap-4 mt-4">
              <a href="#">Home</a>
              <a href="#">Products</a>
              <a href="#">About</a>
              <a href="#">Gallery</a>
              <a href="#">Contact</a>
            </div>

            <div className="mt-7 flex flex-col gap-2 text-sm">
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
