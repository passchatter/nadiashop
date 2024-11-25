import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

function Gallery() {
  return (
    <>
      <div id="gallery" className="py-16 lg:py-24 px-6 md:px-12 lg:px-16 xl:px-28">
        <h1 className="text-center font-alice font-medium text-3xl md:text-4xl xl:text-5xl mb-8 text-nadia-300">Gallery</h1>
        <div className="w-full mt-7">
          <Swiper
            spaceBetween={20} // Jarak antar gambar
            centeredSlides={true} // Menjaga gambar tetap di tengah
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true} // Menambahkan loop agar galeri bergulir tanpa ada gambar kosong
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="relative overflow-hidden rounded-md">
              <img src="/galery1.jpg" alt="Gallery 1" className="w-full h-full object-cover transition-transform transform rounded-md hover:scale-110" />
            </SwiperSlide>
            <SwiperSlide className="relative overflow-hidden rounded-md">
              <img src="/galery2.jpg" alt="Gallery 2" className="w-full h-full object-cover transition-transform transform rounded-md hover:scale-110" />
            </SwiperSlide>
            <SwiperSlide className="relative overflow-hidden rounded-md">
              <img src="/galery3.jpg" alt="Gallery 3" className="w-full h-full object-cover transition-transform transform rounded-md hover:scale-110" />
            </SwiperSlide>
            <SwiperSlide className="relative overflow-hidden rounded-md">
              <img src="/galery4.jpg" alt="Gallery 4" className="w-full h-full object-cover transition-transform transform rounded-md hover:scale-110" />
            </SwiperSlide>
            <SwiperSlide className="relative overflow-hidden rounded-md">
              <img src="/galery5.jpg" alt="Gallery 5" className="w-full h-full object-cover transition-transform transform rounded-md hover:scale-110" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Gallery;
