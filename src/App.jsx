import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/home.jsx";
import Produk from './pages/Produk.jsx';
import Detail from './pages/Detail.jsx';
import ContactUs from './pages/ContactUs.jsx';

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<Produk/>}/>
         <Route path="/product/detail/:id" element={<Detail/>}/>
         <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
