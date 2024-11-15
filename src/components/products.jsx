import "../App.css";

function Products() {
  return (
    <>
      <div className="my-20 flex flex-col justify-center items-center mx-6">
        <h1 className="font-alice font-semibold text-3xl mb-2 text-[#B17457]">Products</h1>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad impedit aut rem harum dicta.</p>
        <div className="w-full mt-7 overflow-x-auto snap-x">
          <div className="flex gap-3 w-max">
            <div className="bg-slate-300 h-40 aspect-square"></div>
            <div className="bg-slate-300 h-40 aspect-square"></div>
            <div className="bg-slate-300 h-40 aspect-square"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
