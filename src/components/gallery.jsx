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
        <h1 className="text-center font-alice font-medium text-3xl md:text-4xl xl:text-5xl mb-4 text-nadia-300">Gallery</h1>
        <div className=" w-full mt-7">
          <Swiper
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper h-48 md:h-52 xl:h-80"
          >
            <SwiperSlide className="">
              <img src="/whyChooseUs1.png" alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide className="w-fit h-full">
              <img src="/wallDecoration.jpg" alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide className="w-fit h-full">
              <img src="/decorativeMirror.jpg" alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide className="w-fit h-full">
              <img src="/decorativeMirror.jpg" alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide className="w-fit h-full">
              <img src="/decorativeMirror.jpg" alt="" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Gallery;
