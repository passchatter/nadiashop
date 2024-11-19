import "../App.css";
import Navbar from "../components/navbar.jsx";
import NavbarHero from '../components/NavbarHero.jsx';
import FilterProduk from "../components/FilterProduk";

function Produk() {
  return (
    <>
      <Navbar/>
      <NavbarHero/>
      <FilterProduk/>
    </>
  );
}

export default Produk;
