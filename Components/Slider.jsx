import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {sidedata} from "@/Components/Slide/Slidedata"

// Import Swiper styles


// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function Slider() {
  return (
    <div className="pb-[80px]">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper "
      >
        {sidedata.map((items, index) => (
          <div key={index} className="">
            <SwiperSlide>
              <div className=" bg-[#D9D9D9] w-[300px] h-[300px]">{items}</div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}
