import "../App.css";
import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import Products from "../components/products.jsx";
import BestProducts from "../components/bestProducts.jsx";
import Shipper from "../components/shipper.jsx";
import About from "../components/about.jsx";
import Gallery from "../components/gallery.jsx";
import CallToAction from "../components/callToAction.jsx";
import Footer from "../components/footer.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function Home() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <a
        href="https://wa.me/6281238940106?text=I%20am%20interested%20in%20your%20products.%20Could%20you%20please%20provide%20more%20details%20about%20pricing%20and%20availability?"
        target="_blank"
        className={`${isScrolled ? "fixed" : "hidden"} w-max bottom-7 right-3 z-50 animate-bounce transition-all`}
      >
        <div className="font-raleway flex flex-col items-center  gap-1 w-24 h-16 ">
          <img src="/logowa.png" alt="" className="w-[40%] aspect-square" />
          <p className="bg-[#fafafa] shadow-md text-[.7rem] px-3 py-2 rounded-full">Contact Us</p>
        </div>
      </a>
      <Navbar />
      <Hero id="home" />
      <Products id="products" />
      <BestProducts id="best-products" />
      <About id="about" />
      <Gallery id="gallery" />
      <CallToAction id="call-to-action" />
      <Shipper id="shipper" />
      <Footer id="footer" />
    </>
  );
}

export default Home;
