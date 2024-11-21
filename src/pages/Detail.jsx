import "../App.css";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";

function Detail() {
  const { id } = useParams();
  const [produk, setProduk] = useState([]);
  const [relatedProduk, setRelatedProduk] = useState([]);
  let base_url = "http://localhost/backendnadia/";

  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await axios.get(`${base_url}/api/produk/detail/${id}`);
        const product = response.data[0];
        setProduk(product);

        if (product) {
          getRelatedProducts(product.category, product.id);
        }
      } catch (error) {
        error("Gagal memuat data produk.");
      }
    };

    // Fungsi untuk mengambil produk terkait
    const getRelatedProducts = async (category, productId) => {
      try {
        const response = await axios.get(`${base_url}/api/produk/related/${category}/${productId}`);
        setRelatedProduk(response.data);
      } catch (error) {
        console.error("Gagal memuat produk terkait.", error);
      }
    };

    getDetail();
  }, [id]);

  if (!produk) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Bagian Gambar */}
          <div>
            <img src={`${base_url}/image/${produk.image}`} alt={produk.name} className="w-full h-auto rounded-lg shadow-md" />
          </div>

          {/* Bagian Detail */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{produk.name}</h1>
            <p className="text-lg text-gray-600 mb-4">{produk.deskripsi}</p>

            {/* Informasi Tambahan */}
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-gray-700">Size:</span> <span className="text-gray-600">{produk.size}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Material:</span> <span className="text-gray-600">{produk.material}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Color:</span> <span className="text-gray-600">{produk.color}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Category:</span> <span className="text-gray-600">{produk.category}</span>
              </div>
            </div>

            {/* Tombol */}
            <button className="mt-4 px-6 py-3 bg-nadia-more400 text-white font-semibold rounded-lg transition">Order Now</button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Produk Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProduk.map((relatedProduct) => (
              <div key={relatedProduct.id} className="border rounded-lg overflow-hidden shadow-md">
                <img src={`${base_url}/image/${relatedProduct.image}`} alt={relatedProduct.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{relatedProduct.name}</h3>
                  <p className="text-gray-700 mb-2">{relatedProduct.category}</p>
                  <a href={`/product/detail/${relatedProduct.id}`} className="text-blue-500">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
