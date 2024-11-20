import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/home.jsx";
import Produk from './pages/Produk.jsx';
import Detail from './pages/Detail.jsx';

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/products" element={<Produk/>}/>
         <Route path="/product/detail/:id" element={<Detail/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
