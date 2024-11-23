import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <header className="bg-teal-200 text-center py-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </header>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Form */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-lg p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
              rows="5"
            ></textarea>
            <button className="bg-teal-400 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:bg-teal-500 transition">
              Submit Button
            </button>
          </form>
        </div>

        {/* Newsletter Section */}
        <div className="bg-teal-400 text-white rounded-lg p-8">
          <h2 className="text-xl font-bold mb-4">Our Newsletters</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <div className="mt-6">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg focus:outline-none text-gray-800"
            />
            <button className="mt-4 bg-gray-800 text-white font-medium py-2 px-6 rounded-lg w-full hover:bg-gray-700 transition">
              Submit Button
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-teal-400 text-2xl font-bold">(+876) 765 685</p>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-teal-400 text-2xl font-bold">mail@influenca.id</p>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-teal-400 text-2xl font-bold">London Eye London</p>
          <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 py-16">
        <iframe
          className="w-full h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609961236!2d72.74109993955079!3d19.082197839435456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b64fb1c6b6e1%3A0x3be7b64fb1c6b6e1!2sMumbai!5e0!3m2!1sen!2sin!4v1632923566481!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Map Location"
        ></iframe>
      </div>

      <footer class="bg-teal-800 text-white py-12">
  <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
  
    <div>
      <h2 class="text-xl font-bold">grapeslab</h2>
      <p class="text-gray-400 mt-4 text-sm">
        Interior design is the art and science of enhancing the interior of a building.
      </p>
      <div class="flex space-x-4 mt-6">
        <a href="#" class="text-gray-400 hover:text-white">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="text-gray-400 hover:text-white">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="text-gray-400 hover:text-white">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>

  
    <div>
      <h3 class="font-semibold">About</h3>
      <ul class="mt-4 space-y-2 text-sm">
        <li><a href="#" class="text-gray-400 hover:text-white">About Us</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white">Features</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white">News</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white">Careers</a></li>
      </ul>
    </div>

   
    <div>
      <h3 class="font-semibold">Company</h3>
      <ul class="mt-4 space-y-2 text-sm">
        <li><a href="#" class="text-gray-400 hover:text-white">Our Team</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white">Partner With Us</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white">FAQ</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white">Blog</a></li>
      </ul>
    </div>

   
    <div>
      <h3 class="font-semibold">Support</h3>
      <ul class="mt-4 space-y-2 text-sm">
        <li><a href="#" class="text-gray-400 hover:text-white">Account</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white">Support Center</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white">Feedback</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white">Accessibility</a></li>
      </ul>
    </div>

   
    <div>
      <h3 class="font-semibold">Contact Us</h3>
      <ul class="mt-4 space-y-2 text-sm">
        <li class="text-gray-400">4140 Parker Rd. Allentown,</li>
        <li class="text-gray-400">New Mexico 31134</li>
        <li class="text-gray-400">+1 (480) 555-0103</li>
        <li class="text-gray-400">hello@grapeslab.com</li>
      </ul>
    </div>
  </div>

  <div class="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
   <div className="container">
   <p>Copyright © 2021 hello@grapeslab.com</p>
    <div class="flex space-x-4 mt-4 md:mt-0">
      <a href="#" class="hover:text-white">Privacy</a>
      <span>|</span>
      <a href="#" class="hover:text-white">Terms & Conditions</a>
    </div>
   </div>
  </div>
</footer>

    </div>
  );
};

export default ContactUs;
