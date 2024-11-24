import "../App.css";

function NavbarHero(props) {
  return (
    <>
      <div className="h-36 lg:h-56 relative">
        <img src="/decorativeMirror.jpg" alt="Hero Image" className="absolute left-0 w-full h-full object-cover z-[-2]" />
        {/* Overlay Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/60 to-black/60 z-[-1]"></div>

        {/* Content */}
        <div className="flex flex-col justify-center items-center h-full mx-6 md:mx-12 lg:mx-16 xl:mx-28 pt-12 z-10">
          <h1 className="text-white font-alice font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-center lg:text-left">{props.tulisan}</h1>
        </div>
      </div>
    </>
  );
}

export default NavbarHero;
