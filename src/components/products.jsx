import "../App.css";

function Products() {
  return (
    <>
      <div className="my-20 flex flex-col justify-center items-center mx-6">
        <h1 className="font-alice font-semibold text-3xl mb-2 text-nadia-300">Products</h1>
        <p className="text-center font-numans text-nadia-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad impedit aut rem harum dicta.</p>
        <div className="w-full mt-7 overflow-x-auto snap-x">
          <div className="flex gap-5 w-max">
            <div className="bg-slate-300 h-52 aspect-square snap-center">
              <img src="/decorativeMirror.jpg" alt="" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="bg-slate-300 h-52 aspect-square snap-center">
              <img src="/decorativeMirror.jpg" alt="" className="w-full h-full object-cover  rounded-md" />
            </div>
            <div className="bg-slate-300 h-52 aspect-square snap-center">
              <img src="/decorativeMirror.jpg" alt="" className="w-full h-full object-cover  rounded-md" />
            </div>
            <div className="bg-slate-300 h-52 aspect-square snap-center">
              <img src="/decorativeMirror.jpg" alt="" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="bg-slate-300 h-52 aspect-square snap-center">
              <img src="/decorativeMirror.jpg" alt="" className="w-full h-full object-cover  rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
