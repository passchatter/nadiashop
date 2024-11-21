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

function Home() {
  const location = useLocation();

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
