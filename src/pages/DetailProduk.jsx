import "../App.css";
import Navbar from "../components/navbar";
import NavbarHero from "../components/NavbarHero";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../components/footer";

function DetailProduct() {
  const { id } = useParams();
  const [produk, setProduk] = useState([]);
  const [relatedProduk, setRelatedProduk] = useState([]);
  let base_url = "https://api.nadiaartshop.com/";
  //http://62.72.58.198/api/produk.php?request=all&page=2&limit=25


  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await axios.get(`${base_url}/api/produk.php?request=detail&id=${id}`);
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
        const response = await axios.get(`${base_url}/api/produk.php?request=related&category=${category}&id=${productId}`);
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
      <NavbarHero />

      <div className=" pt-8 md:pt-9 pb-32 w-full px-6 md:px-20 lg:px-32 xl:px-56">
        <div className="font-numans text-sm mb-5">
          <span className="px-2 hover:text-nadia-300">
            <Link to="/">Home</Link>
          </span>
          /
          <span className="px-2 hover:text-nadia-300">
            <Link to="/products">Product</Link>
          </span>
          /
          <span className="px-2 hover:text-nadia-300">
            <a href="">Details</a>
          </span>
        </div>
        <div className="font-raleway ">
          <div className="flex flex-col md:flex-row w-full gap-7 lg:gap-9 mb-8">
            <div className=" md:w-1/2 lg:w-[40%] xl:w-[30%] flex justify-center items-center ">
              <img src={`${base_url}/image/${produk.image}`} alt={produk.name} className="w-full object-cover" />
            </div>

            <div className="w-[70%] flex flex-col justify-center">
              <h1 className="hidden md:block md:text-lg  xl:text-xl capitalize">{produk.category}</h1>
              <h1 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-5 capitalize">{produk.name}</h1>
              <div>
                <h1 className="font-medium md:text-lg xl:text-xl mb-2">Details</h1>
                <div className="mb-2">
                  <p className="text-sm md:text-base">Material:</p>
                  <div className="text-[.83rem]">
                    <div className="capitalize">{produk.material}</div>
                  </div>
                </div>
                <div className="mb-2">
                  <p className="text-sm md:text-base">Size:</p>
                  <div className="text-[.83rem]">
                    <div className="">{produk.size}</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-base">Color:</p>
                  <div className="text-[.83rem]">
                    <div className="capitalize">{produk.color}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* deskripsi */}
          <div className="mb-7 lg:mb-9">
            <h1 className="font-medium md:text-lg xl:text-xl mb-1">Description</h1>
            <p className="text-pretty text-sm lg:text-base">{produk.deskripsi}</p>
          </div>

          <a
          href="https://wa.me/6281238940106?text=I%20am%20interested%20in%20your%20products.%20Could%20you%20please%20provide%20more%20details%20about%20pricing%20and%20availability?"
          target="_blank">
          <div className="md:mb-20">
            <button className="hidden md:block bg-nadia-300 hover:bg-nadia-more400 active:scale-95 transition-all text-nadia-100 py-2 lg:py-3 w-1/4 rounded-lg shadow-lg font-medium">Order Now</button>
          </div>
        </a>

          {/* produk terkait */}
          <div>
            <h1 className="font-medium md:text-lg xl:text-xl mb-2">You may also like</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
              {/* mappingnya disini */}
              {relatedProduk.map((relatedProduct) => (
                <a key={relatedProduct.id} href={`/product/detail/${relatedProduct.id}`} className="group rounded-lg overflow-hidden transition">
                  <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
                    <img src={`${base_url}/image/${relatedProduct.image}`} alt={relatedProduct.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h2 className="hidden xs:block text-nadia-400 text-[.8rem] md:text-base">{relatedProduct.category}</h2>
                    <h1 className="text-nadia-500 text-base md:text-xl font-medium md:-mt-1 leading-tight">{relatedProduct.name}</h1>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* order mobile */}
        <div className="md:hidden w-full px-6 md:px-20 lg:px-32 xl:px-56 pt-6 pb-4 fixed bottom-0 left-0 right-0 flex justify-center items-center bg-white shadow-lg">
          <button className="bg-nadia-300 text-nadia-100 py-2 w-full  rounded-lg shadow-lg">Order Now</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DetailProduct;
