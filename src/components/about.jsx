import "../App.css";

function About() {
  return (
    <>
      <div className="bg-nadia-100 py-16 px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-alice font-semibold text-nadia-300 text-center mb-5">About Us</h1>
          <img src="/aboutUs.png" alt="" />
          <p className="text-center font-numans text-nadia-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse perferendis, nemo nulla aperiam nisi ratione!</p>
        </div>
        <div className="mt-28">
          <h1 className="text-3xl font-alice font-semibold text-nadia-300 text-center mb-12">Why Choose Us</h1>
          <div>
            <img src="/whyChooseUs1.png" alt="" />
            <div>
              <h1 className="font-medium font-raleway text-nadia-300 text-xl">Karya Seni yang Menceritakan Kisah</h1>
              <p className="font-numans text-nadia-400 text-sm">Setiap Produk Kami adalah hasil karya seni yang menceritakan kisah, dirancang khusus untuk menghiasi dan menambah keanggunan di setiap sudut ruang Anda</p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default About;
