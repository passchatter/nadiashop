import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProdukList({ category, material, size, color, search, page, setTotalPages }) {
  const [products, setProducts] = useState([]);
  // let base_url = "http://localhost/backendnadia/";
  let base_url = "http://localhost:8888/nadiashop/backend/";

  const getProducts = async () => {
    try {
      let url = `${base_url}api/produk/filter?page=${page}&limit=25`;

      // add filter di url
      if (category) url += `&category=${category}`;
      if (material) url += `&material=${material}`;
      if (size) url += `&size=${size}`;
      if (color) url += `&color=${color}`;
      if (search) url += `&search=${search}`;

      const response = await axios.get(url);
      setProducts(response.data.data);
      if (setTotalPages) {
        setTotalPages(response.data.total_pages || 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [category, material, size, color, search, page]);

  if (!products) {
    return (
      <>
        <div className="w-full py-14 flex justify-center items-center gap-1">
          <div className="h-3 w-3 bg-nadia-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-3 w-3 bg-nadia-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-3 w-3 bg-nadia-400 rounded-full animate-bounce"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="px-6 md:px-12 lg:px-16 xl:px-28 flex flex-col items-center">
        <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6 lg:w-[80%] font-raleway">
          {products.length === 0 ? (
            <div className="col-span-full text-center p-6 bg-gray-100 rounded-md">
              <h2 className="text-xl font-semibold text-gray-700">No products found</h2>
            </div>
          ) : (
            products.map((produk) => (
              <Link key={produk.id} to={`/product/detail/${produk.id}`}>
                <div className="group rounded-lg overflow-hidden transition">
                  <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
                    <img src={`${base_url}/image/${produk.image}`} alt={produk.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h2 className="hidden xs:block text-nadia-400 text-[.8rem] md:text-base">{produk.category}</h2>
                    <h1 className="text-nadia-500 text-base md:text-xl font-medium md:-mt-1 leading-tight">{produk.name}</h1>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ProdukList;
