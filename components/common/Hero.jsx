import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BuyIcon, ConatactIcon, FurniIcon } from "./Icon";
import Link from "next/link";
import Side1 from "./Side1";
import { CustomEase } from "gsap/dist/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/dist/EasePack";
import { Flip } from "gsap/dist/Flip";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Observer } from "gsap/dist/Observer";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Draggable } from "gsap/dist/Draggable";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { EaselPlugin } from "gsap/dist/EaselPlugin";
import { PixiPlugin } from "gsap/dist/PixiPlugin";
import { TextPlugin } from "gsap/dist/TextPlugin";
import gsap from "gsap";

gsap.registerPlugin(
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  EaselPlugin,
  PixiPlugin,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase
);
const Hero = () => {
  // useEffect(() => {
  //   gsap.to("#sofa", {
  //     duration: 1,
  //     x: 520,
  //     rotate: 360,
  //     repeat: true,
  //   });
  //   gsap.from("#sofa", {
  //     x: -1000,
  //     duration: 2,
  //     trigger: "#sofa",
  //     toggleActions: "restart restart restart restart",
  //   });
  // });
  const [item, setItem] = useState(false);
  return (
    <>
      <div className="bg-[#3B5D50]">
        <div
          id="main"
          className="max-w-[1440px] w-full relative mx-auto px-5 xl:px-[60px]"
        >
          <div className="py-[20px] flex justify-between">
            <div className="max-w-[87px] w-full">
              <FurniIcon />
            </div>
            <Image
              src="/menu.svg"
              width={50}
              height={50}
              className="lg:hidden"
              onClick={() => setItem(!item)}
            />
            <div className="gap-[44px] flex max-w-[650px] max-lg:hidden w-full">
              <Link
                href=""
                className="text-white font-Inter text-[14px] font-medium hover:border-b-[#F9BF29] hover:border-b-[5px] pb-1 h-[30px]"
              >
                Home
              </Link>
              <Link
                href=""
                className="text-white font-Inter text-[14px] font-medium hover:border-b-[#F9BF29] hover:border-b-[5px] pb-1 h-[30px]"
              >
                Shop
              </Link>
              <Link
                href=""
                className="text-white font-Inter text-[14px] font-medium hover:border-b-[#F9BF29] hover:border-b-[5px] pb-1 h-[30px]"
              >
                About us
              </Link>
              <Link
                href=""
                className="text-white font-Inter text-[14px] font-medium hover:border-b-[#F9BF29] hover:border-b-[5px] pb-1 h-[30px]"
              >
                Services{" "}
              </Link>
              <Link
                href=""
                className="text-white font-Inter text-[14px] font-medium hover:border-b-[#F9BF29] hover:border-b-[5px] pb-1 h-[30px]"
              >
                Blog
              </Link>
              <Link
                href=""
                className="text-white font-Inter text-[14px] font-medium hover:border-b-[#F9BF29] hover:border-b-[5px] pb-1 h-[30px]"
              >
                Contact us
              </Link>
              <Link href="" className="hover:scale-125">
                <ConatactIcon />
              </Link>
              <Link href="" className="hover:scale-125">
                <BuyIcon />
              </Link>
            </div>
          </div>
          <div className="flex justify-between md:h-[533px] items-center max-md:flex-col">
            <div className="max-w-[450px] w-full">
              <h1 className="text-white text-[54px] max-lg:text-[40px] max-sm:text-[36px] font-Inter font-bold">
                Modern Interior Design Studio
              </h1>
              <p className="text-[rgba(255,_255,_255,_0.50)] font-Inter text-[14px] font-medium pt-[30px]">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <div className="flex mt-6 w-full gap-[7px] max-w-[300px]">
                <Link href="" className="w-full">
                  <button
                    type="submit"
                    className="max-w-[141px] w-full hover:bg-transparent hover:border-[2px] hover:border-[rgba(255,_255,_255,_0.30)] hover:text-white bg-[#F9BF29] rounded-[30px] border-[1px] border-[#F9BF29] h-[50px] text-[#2F2F2F] font-Inter text-[14px] font-semibold"
                  >
                    Shop Now
                  </button>
                </Link>
                <Link href="" className="w-full">
                  <button
                    type="submit"
                    className="max-w-[131px] w-full bg-transparent rounded-[30px] hover:bg-[#F9BF29] hover:text-black border-[3px] border-[rgba(255,_255,_255,_0.30)] h-[52px] text-[white] font-Inter text-[14px] font-semibold"
                  >
                    Explore
                  </button>
                </Link>
              </div>
            </div>
            <div className="max-w-[780px] w-full">
              <Image id="sofa" src="/sofa.svg" width={780} height={559} />
            </div>
          </div>
          <div
            className={`absolute duration-500 w-full ${
              item ? "left-0 top-0" : "top-0 left-[-155%]"
            }`}
          >
            <Side1 item={item} setItem={setItem} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
