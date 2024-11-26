import Footer from "../components/footer";
import Navbar from "../components/navbar";
import NavbarHero from "../components/NavbarHero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ContactUs = () => {
  const [isOpen, setIsOpen] = useState(null);

  const faqs = [
    {
      question: "Does Nadia Shop accept large orders?",
      answer: "Yes! We accept bulk orders for business needs or special events. Feel free to reach out to us via email at nadiashop@gmail.com.",
    },
    {
      question: "What types of products are available at NadiaShop?",
      answer: "We offer a variety of products including table decor, wall art, decorative mirrors, and exclusive handcrafted items that are perfect for complementing your home’s interior.",
    },
    {
      question: "Can I customize certain products?",
      answer: "Yes, we provide customization options for certain products. Feel free to consult with our team via email to discuss your specific needs.",
    },
    {
      question: "Does NadiaShop offer decor for events?",
      answer: "Yes, our products are perfect for decorating events such as weddings, birthdays, or corporate events. We can also help select products that match your events theme.",
    },
    {
      question: "Are all NadiaShop products available for international shipping?",
      answer: "Yes, we offer international shipping. However, shipping costs and delivery times may vary depending on your location.",
    },
  ];
  const toggleFAQ = (index) => {
    setIsOpen(!isOpen === index ? null : index);
  };
  return (
    <>
      <Navbar />
      <NavbarHero tulisan="Contact Us" />

      <div className="bg-white font-raleway">
        <div className="bg-nadia-300 flex flex-col justify-center items-center text-nadia-100 text-center px-6 md:px-11 lg:px-14 xl:px-28 py-10 lg:py-20">
          <h1 className="text-3xl md:text-4xl font-alice font-semibold">
            Discover <span className="block md:inline">The Best Quality!</span>
          </h1>
          <p className="mt-1 md:mt-2">Premium quality products crafted just for you.</p>
          <div className="mt-6 flex flex-col md:flex-row gap-4 lg:gap-6">
            <div className="bg-nadia-100 text-nadia-500 px-4 md:px-6 py-4 md:py-5 rounded-lg max-w-[30rem]">
              <h2 className="text-xl font-semibold mb-2">Unmatched Quality</h2>
              <p>Every product is crafted with meticulous attention to detail. Visit our store to experience the quality firsthand.</p>
            </div>
            <div className="bg-nadia-100 text-nadia-500 px-4 md:px-6 py-4 md:py-5 rounded-lg max-w-[30rem]">
              <h2 className="text-xl font-semibold mb-2">Visit Our Store</h2>
              <p>Enjoy a seamless shopping experience at our store. Meet our friendly and professional staff.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col py-16 px-6 md:px-11 lg:px-20 xl:px-36">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-nadia-300 font-raleway font-semibold mb-3 text-center">FAQ</h1>
          {faqs.map((faq, index) => (
            <div key={index} className="px-2 md:px-4 py-4 md:py-5 border-b border-nadia-300 cursor-pointer">
              <div className="flex justify-between items-center gap-7" onClick={() => toggleFAQ(index)}>
                <h1 className="text-nadia-500 font-raleway font-semibold md:text-lg">{faq.question}</h1>
                <FontAwesomeIcon icon={faAngleDown} className={`md:text-lg transition-all ${isOpen === index ? "-rotate-90" : ""}`} />
              </div>
              {isOpen === index && <p className={`mt-3 transition-all ${isOpen !== index ? "opacity-0 max-h-0 overflow-hidden" : "opacity-100"}`}>{faq.answer}</p>}
            </div>
          ))}
        </div>

        <div className="mt-8 mb-24 grid md:grid-cols-3 gap-4 md:gap-3 lg:w-max mx-auto font-raleway">
          <div className=" px-6 py-5 shadow-lg flex flex-col items-center justify-center text-center">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-nadia-300">(+62) 812-3894-0106</h1>
            <p>For support and inquiries.</p>
          </div>
          <div className=" px-6 py-5 shadow-lg flex flex-col items-center justify-center text-center">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-nadia-300">nadiashop@gmail.com</h1>
            <p>Reach us via email</p>
          </div>
          <div className=" px-6 py-5 shadow-lg flex flex-col items-center justify-center text-center">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-nadia-300">Nadia HQ</h1>
            <p>Your trusted partner in design.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
