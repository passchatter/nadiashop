import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Produk from "./pages/Produk.jsx";
import DetailProduk from "./pages/DetailProduk.jsx";
import ContactUs from "./pages/ContactUs.jsx";

function App() {
  return (
    <>
      <div>
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
