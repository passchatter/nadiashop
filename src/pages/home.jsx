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

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Products></Products>
      <BestProducts></BestProducts>
      <About></About>
      <Gallery></Gallery>
      <CallToAction></CallToAction>
      <Shipper></Shipper>
      <Footer></Footer>
    </>
  );
}

export default Home;
