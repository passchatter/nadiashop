import "../App.css";
import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import Products from "../components/products.jsx";
import BestProducts from "../components/bestProducts.jsx";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Products></Products>
      <BestProducts></BestProducts>
    </>
  );
}

export default Home;
