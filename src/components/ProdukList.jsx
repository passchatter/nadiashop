import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProdukList({
    category,
    material,
    size,
    color,
    search,
    page,
    setTotalPages,
}){

    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try{
            let url = `http://localhost:8888/nadiashop/backend/api/produk/filter?page=${page}&limit=25`;

            // add filter di url
            if (category) url += `&category=${category}`;
            if (material) url += `&material=${material}`;
            if (size) url += `&size=${size}`;
            if (color) url += `&color=${color}`;
            if (search) url += `&search=${search}`


            const response = await axios.get(url);
            setProducts(response.data.data);
            if(setTotalPages){
                setTotalPages(response.data.total_pages || 1);
            }
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getProducts()
    },[category, material, size, color, search, page])

    if (!products) {
        return <p>Loading...</p>;
    }
      
    return (
        <>
            <div className="grid px-6 mt-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-6xl">
            {products.length === 0 ? (
                <div className="col-span-full text-center p-6 bg-gray-100 rounded-md">
                <h2 className="text-xl font-semibold text-gray-700">No products found</h2>
                </div>
            ) : (
                products.map((produk) => (
                <Link key={produk.id} to={`/product/details/${produk.id}`}>
                    <div className="rounded-lg overflow-hidden transition">
                        <div className="w-full shadow-sm aspect-square p-5 bg-[#FAF7F0]">
                        <img
                            src={`http://localhost:8888/nadiashop/backend/image/${produk.image}`}
                            alt={produk.name}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        </div>
                        <div className="p-4">
                            <h2 className="text-gray-600 text-[.8rem] md:text-base">{produk.category}</h2>
                            <h1 className="text-gray-800 text-md md:text-xl font-medium">{produk.name}</h1>
                            <p className="text-nadia-more400 text-md font-semibold mt-2">$0.00</p>
                        </div>
                    </div>
                </Link>
                ))
            )}
            </div>
        </>
    )
}

export default ProdukList