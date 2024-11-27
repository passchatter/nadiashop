import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <>
   <div className="w-full h-48 lg:h-96 mb-2 mt-10">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7892.285838411072!2d115.26758909225468!3d-8.485481553141945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d5367e05a17%3A0xe3211f4061e3def0!2sNADIA%20art%20Shop!5e0!3m2!1sid!2sid!4v1731834336855!5m2!1sid!2sid&zoom=17"
    loading="lazy"
    className="w-full h-full"
  ></iframe>
</div> 
<footer className="bg-nadia-400 text-gray-300 w-full py-10 px-3 md:px-12 lg:px-20">
  <div className="container">
    <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
      {/* Brand Section */}
      <div className="lg:w-1/4">
        <div className="flex items-center mb-3 flex-row gap-2">
          <img src="/logoWhite.png" alt="" className="w-14 h-14"/>
          <h1 className="text-2xl mt-3 font-bold text-white mb-3 font-alice">NadiaShop</h1>
        </div>
        <p className="text-sm">
          We create handicrafts that combine traditional techniques with modern aesthetics. Each product reflects craftsmanship, creativity and passion in every detail.
        </p>
        <div className="flex gap-4 mt-4">
          <a href="https://www.facebook.com/makcrame/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
         
          <a href="https://www.instagram.com/nadia.shop.161/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* About */}
        <div>
          <h2 className="text-white font-semibold mb-2">About</h2>
          <ul className="text-sm space-y-1">
            <li><a href="/#about" className="hover:underline">About Us</a></li>
            <li><a href="/#about" className="hover:underline">Why Choose Us</a></li>
            <li><a href="/#about" className="hover:underline">Wholesale</a></li>
            <li><a href="/#about" className="hover:underline">Products</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-white font-semibold mb-2">Quick link</h2>
          <ul className="text-sm space-y-1">
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/#about" className="hover:underline">About</a></li>
            <li><a href="/#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-white font-semibold mb-2">Support</h2>
          <ul className="text-sm space-y-1">
            <li><a href="https://limajaricargo.com/" target={"_blank"} className="hover:underline">Limajari Cargo</a></li>
            <li><a href="https://nusatrans.com/" target={"_blank"} className="hover:underline">Nusatrans Cargo</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white font-semibold mb-2">Contact Us</h2>
          <p className="text-sm">
             Jl. Raya Gentong, Tegallalang, Kec. Tegallalang, Kabupaten Gianyar, Bali
          </p>
          <p className="text-sm mt-2">
            (+62) 812-3894-0106<br />
            nadiashop@gmail.com
          </p>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-gray-600 mt-10 pt-6 text-center">
      <p className="text-sm">
        &copy; 2024 NadiaShop. All rights reserved. | 
        <a href="#" className="hover:underline mx-1">Privacy</a> | 
        <a href="#" className="hover:underline">Terms & Conditions</a>
      </p>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
