import "../App.css";
import Navbar from "../components/navbar.jsx";
import NavbarHero from "../components/NavbarHero.jsx";
import FilterProduk from "../components/FilterProduk";
import ProdukList from "../components/ProdukList";
import Footer from "../components/footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Produk() {
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleResetPage = () => setPage(1);

  const getVisiblePages = (currentPage, totalPages, maxVisible = 5) => {
    const halfRange = Math.floor(maxVisible / 2);
    let start = Math.max(1, currentPage - halfRange);
    let end = Math.min(totalPages, currentPage + halfRange);

    if (end - start + 1 < maxVisible) {
      if (start === 1) {
        end = Math.min(totalPages, start + maxVisible - 1);
      } else if (end === totalPages) {
        start = Math.max(1, end - maxVisible + 1);
      }
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <>
      <Navbar />
      <NavbarHero tulisan="Product List" />
      <FilterProduk
        category={category}
        setCategory={setCategory}
        material={material}
        setMaterial={setMaterial}
        size={size}
        setSize={setSize}
        color={color}
        setColor={setColor}
        search={search}
        setSearch={setSearch}
        setPage={handleResetPage}
      />

      <ProdukList category={category} material={material} size={size} color={color} search={search} page={page} setTotalPages={setTotalPages} />

      {/* pagination */}
      <div className="px-6 md:px-12 lg:px-16 xl:px-28 mt-4 flex items-center justify-center gap-2 lg:text-lg font-raleway">
        <button
          onClick={() => {
            setPage((prev) => {
              const newPage = Math.max(prev - 1, 1); // Hitung halaman baru
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas
              return newPage; // Kembalikan nilai halaman baru
            });
          }}
          disabled={page === 1}
          className="px-3 lg:px-4 py-1 bg-nadia-300 text-nadia-100 rounded disabled:opacity-50"
        >
          <p className="hidden md:block">Previous</p>
          <FontAwesomeIcon icon={faAngleLeft} className="md:hidden" />
        </button>

        {getVisiblePages(page, totalPages, 5).map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => {
              setPage(pageNumber);
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas
            }}
            className={`px-3 aspect-square rounded ${page === pageNumber ? "bg-nadia-300 text-nadia-100" : "bg-nadia-200 opacity-50 text-nadia-400"}`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={() => {
            setPage((prev) => {
              const newPage = Math.min(prev + 1, totalPages); // Hitung halaman baru
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas
              return newPage; // Kembalikan nilai halaman baru
            });
          }}
          disabled={page === totalPages}
          className="px-3 lg:px-4 py-1  bg-nadia-300 text-nadia-100 rounded disabled:opacity-50"
        >
          <p className="hidden md:block">Next</p>
          <FontAwesomeIcon icon={faAngleRight} className="md:hidden" />
        </button>
      </div>

      <Footer />
    </>
  );
}

export default Produk;
