import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Produk from "./pages/Produk.jsx";
import DetailProduk from "./pages/DetailProduk.jsx";
import ContactUs from "./pages/ContactUs.jsx";

function App() {
  return (
    <>
      <a
        href="https://wa.me/6281238940106?text=I%20am%20interested%20in%20your%20products.%20Could%20you%20please%20provide%20more%20details%20about%20pricing%20and%20availability?"
        target="_blank"
        className="fixed md:bottom-10 md:right-10 bottom-7 right-4 z-50 animate-bounce"
      >
        <div className="flex gap-1 items-center">
          <p className="bg-[#fafafa] shadow-md text-titleColor px-3 py-2 rounded-xl">Contact Us</p>
          <img src="/logowa.png" alt="" className="w-[55px] md:w-[60px]" />
        </div>
      </a>

      <div className="overflow-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Produk />} />
            <Route path="/product/detail/:id" element={<DetailProduk />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
