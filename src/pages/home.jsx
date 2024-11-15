import "../App.css";
import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import Products from "../components/products.jsx";
import BestProducts from "../components/bestProducts.jsx";
import Shipper from "../components/shipper.jsx";
import About from "../components/about.jsx";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Products></Products>
      <BestProducts></BestProducts>
      <Shipper></Shipper>
      <About></About>
    </>
  );
}

export default Home;
