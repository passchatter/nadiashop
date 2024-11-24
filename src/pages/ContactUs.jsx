import Footer from "../components/footer";
import Navbar from "../components/navbar";
import NavbarHero from "../components/NavbarHero";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <NavbarHero tulisan="Contact Us" />

      <div className="bg-nadia-100">
        {/* Header Section */}
        {/* Form Section */}
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Form */}
          <div className="lg:col-span-2 bg-nadia-100 shadow-lg rounded-lg lg:p-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-nadia-more400 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-nadia-500">1. Does NadiaShop accept large orders?</h3>
                  <p className="text-nadia-400 mt-2">
                    Yes! We accept bulk orders for business needs or special events. Feel free to reach out to us via email at <span className="text-nadia-more400">nadiashop@gmail.com</span>.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-nadia-500">2. What types of products are available at NadiaShop?</h3>
                  <p className="text-nadia-400 mt-2">
                    We offer a variety of products including <strong>table decor</strong>, <strong>wall art</strong>, <strong>decorative mirrors</strong>, and <strong>exclusive handcrafted items</strong> that are perfect for complementing
                    your home’s interior.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-nadia-500">3. Can I customize certain products?</h3>
                  <p className="text-nadia-400 mt-2">Yes, we provide customization options for certain products. Feel free to consult with our team via email to discuss your specific needs.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-nadia-500">4. Does NadiaShop offer decor for events?</h3>
                  <p className="text-nadia-400 mt-2">Yes, our products are perfect for decorating events such as weddings, birthdays, or corporate events. We can also help select products that match your events theme.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-nadia-500">5. Are all NadiaShop products available for international shipping?</h3>
                  <p className="text-nadia-400 mt-2">Yes, we offer international shipping. However, shipping costs and delivery times may vary depending on your location.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="bg-nadia-300 text-nadia-100 rounded-lg p-8">
            <div className="bg-nadia-300 text-nadia-100 rounded-lg p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white">Discover the Best Quality!</h1>
                <p className="text-nadia-200 text-sm md:text-base mt-3">Premium quality products crafted just for you.</p>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Section 1 */}
                <div className="rounded-lg bg-[#FAF7F0] p-6 shadow-md text-center">
                  <h2 className="text-xl font-semibold text-nadia-500">Unmatched Quality</h2>
                  <p className="text-nadia-400 text-sm md:text-base">Every product is crafted with meticulous attention to detail. Visit our store to experience the quality firsthand.</p>
                </div>

                {/* Section 2 */}
                <div className="rounded-lg bg-[#FAF7F0] p-6 shadow-md text-center">
                  <h2 className="text-xl font-semibold text-nadia-500">Visit Our Store</h2>
                  <p className="text-nadia-400 text-sm md:text-base">Enjoy a seamless shopping experience at our store. Meet our friendly and professional staff.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Contact Info */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-nadia-more400 text-2xl font-bold">(+62) 812-3894-0106</p>
            <p className="text-nadia-400 mt-2">For support and inquiries.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-nadia-more400 text-2xl font-bold">nadiashop@gmail.com</p>
            <p className="text-nadia-400 mt-2">Reach us via email.</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-nadia-more400 text-2xl font-bold">Nadia HQ</p>
            <p className="text-nadia-400 mt-2">Your trusted partner in design.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
