import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function Ssswiper() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="mt-[159px] max-sm:mt-[60px]">
            <h1 className="text-[32px] font-Inter text-[#2F2F2F] font-medium text-center">
              Testimonials
            </h1>
            <p className="pt-7  max-sm:pt-2 text-[#6A6A6A] text-center font-Inter text-[18px] font-normal max-w-[853px] w-full mx-auto">
              “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </p>
            <Image
              src="/profile.png"
              width={80}
              height={80}
              className="mt-[49px] mx-auto max-w-[80px] w-full"
            />
            <h1 className="font-Inter text-[#2F2F2F] text-[14px] font-bold pt-5 text-center">
              Maria Jones
            </h1>
            <p className="text-[#6A6A6A] text-center font-Inter text-[14px] font-normal">
              CEO, Co-Founder, XYZ Inc.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-[159px] max-sm:mt-[60px]">
            <h1 className="text-[32px] font-Inter text-[#2F2F2F] font-medium text-center">
              Testimonials
            </h1>
          <p className="pt-7 px-6 max-sm:pt-2 text-[#6A6A6A] text-center font-Inter text-[18px] font-normal max-w-[853px] w-full mx-auto">
              “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </p>
            <Image
              src="/profile.png"
              width={80}
              height={80}
              className="mt-[49px] mx-auto max-w-[80px] w-full"
            />
            <h1 className="font-Inter text-[#2F2F2F] text-[14px] font-bold pt-5 text-center">
              Maria Jones
            </h1>
            <p className="text-[#6A6A6A] text-center font-Inter text-[14px] font-normal">
              CEO, Co-Founder, XYZ Inc.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-[159px] max-sm:mt-[60px]">
            <h1 className="text-[32px] font-Inter text-[#2F2F2F] font-medium text-center">
              Testimonials
            </h1>
            <p className="pt-7 max-sm:pt-2 text-[#6A6A6A] text-center font-Inter text-[18px] font-normal max-w-[853px] w-full mx-auto">
              “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </p>
            <Image
              src="/profile.png"
              width={80}
              height={80}
              className="mt-[49px] mx-auto max-w-[80px] w-full"
            />
            <h1 className="font-Inter text-[#2F2F2F] text-[14px] font-bold pt-5 text-center">
              Maria Jones
            </h1>
            <p className="text-[#6A6A6A] text-center font-Inter text-[14px] font-normal">
              CEO, Co-Founder, XYZ Inc.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mt-[159px] max-sm:mt-[60px]">
            <h1 className="text-[32px] font-Inter text-[#2F2F2F] font-medium text-center">
              Testimonials
            </h1>
            <p className="pt-7 max-sm:pt-2 text-[#6A6A6A] text-center font-Inter text-[18px] font-normal max-w-[853px] w-full mx-auto">
              “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Integer convallis volutpat dui quis scelerisque.”
            </p>
            <Image
              src="/profile.png"
              width={80}
              height={80}
              className="mt-[49px] mx-auto max-w-[80px] w-full"
            />
            <h1 className="font-Inter text-[#2F2F2F] text-[14px] font-bold pt-5 text-center">
              Maria Jones
            </h1>
            <p className="text-[#6A6A6A] text-center font-Inter text-[14px] font-normal">
              CEO, Co-Founder, XYZ Inc.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
