import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Ssswiper from "./Ssswiper";
import { gsap } from "gsap/dist/gsap";

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
const Section = () => {
  useEffect(() => {
    Draggable.create("#heading", {
      type: "rotation",
      inertia: "true",
    });
    gsap.to("#heading", {
      duration: 1,
      rotation: 360,
    });
  });
  const [read, setRead] = useState(false);
  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto px-4 xl:px-[60px] max-sm:mt-[60px] mt-[111px]">
        <div className="flex justify-between gap-[24px] max-lg:flex-wrap max-md:justify-center">
          <div className="max-w-[305px] w-full max-md:max-w-[900px]">
            <h1
              id="heading"
              className="text-[#2F2F2F] font-Inter text-[32px] font-medium leading-[120%] max-md:max-w-[900px] max-w-[280px] w-full"
            >
              Crafted with excellent material.
            </h1>
            <p className="text-[#6A6A6A] max-w-[305px] w-full max-md:max-w-[900px] text-[14px] font-Inter font-normal leading-[28px] pt-6">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <Link href="sd">
              <button
                type="submit"
                className="max-w-[120px] w-full h-[50px] rounded-[30px] bg-black font-Inter text-[16px] font-semibold text-white border-[#2F2F2F] border-[1px] hover:bg-[#F9BF29] hover:text-black mt-6"
              >
                Explore
              </button>
            </Link>
          </div>
          <div>
            <Image src="/chair1.png" height={300} width={300} />
            <p className="text-[#2F2F2F] text-center text-[16px] font-Inter font-semibold pt-7">
              Nordic Chair
            </p>
            <p className="text-[#2F2F2F] text-center text-[18px] font-Inter font-extrabold pt-2">
              $50.00
            </p>
          </div>
          <div>
            <Image src="/chair2.png" height={300} width={300} />
            <p className="text-[#2F2F2F] text-center text-[16px] font-Inter font-semibold pt-7">
              Kruzo Aero Chair
            </p>
            <p className="text-[#2F2F2F] text-center text-[18px] font-Inter font-extrabold pt-2">
              $78.00
            </p>
          </div>
          <div>
            <Image src="/chair3.png" height={300} width={300} />
            <p className="text-[#2F2F2F] text-center text-[16px] font-Inter font-semibold pt-7">
              Ergonomic Chair
            </p>
            <p className="text-[#2F2F2F] text-center text-[18px] font-Inter font-extrabold pt-2">
              $43.00
            </p>
          </div>
        </div>

        <div className="mt-[224px] max-lg:mt-[100px] max-sm:mt-[50px] flex items-center max-md:flex-col justify-between">
          <div className="max-w-[660px] max-lg:max-w-[300px] max-md:max-w-[6640px] w-full">
            <h1 className="text-[#2F2F2F] font-Inter text-[32px] font-medium">
              Why Choose Us
            </h1>
            <p className="text-[#6A6A6A] font-Inter text-[14px] font-normal pt-2 leading-[28px]">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="flex max-lg:flex-col max-md:flex-row max-sm:gap-2 gap-6">
              <div className="max-w-[306px] w-full mt-[48px]">
                <Image src="/truck.png" height={46} width={46} />
                <p className="text-[#2F2F2F] font-Inter text-[14px] font-medium pt-5">
                  Fast & Free Shipping
                </p>
                <p className="text-[#6A6A6A] text-[14px] font-Inter font-normal pt-2">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
              <div className="max-w-[306px] w-full mt-[48px]">
                <Image src="/truck2.png" height={46} width={46} />
                <p className="text-[#2F2F2F] font-Inter text-[14px] font-medium pt-5">
                  Easy to Shop
                </p>
                <p className="text-[#6A6A6A] text-[14px] font-Inter font-normal pt-2">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
            <div className="flex max-lg:flex-col max-md:flex-row max-sm:gap-2 gap-6">
              <div className="max-w-[306px] w-full mt-[48px]">
                <Image src="/truvk3.png" height={46} width={46} />
                <p className="text-[#2F2F2F] font-Inter text-[14px] font-medium pt-5">
                  24/7 Support
                </p>
                <p className="text-[#6A6A6A] text-[14px] font-Inter font-normal pt-2">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
              <div className="max-w-[306px] w-full mt-[48px]">
                <Image src="/truck4.png" height={46} width={46} />
                <p className="text-[#2F2F2F] font-Inter text-[14px] font-medium pt-5">
                  Hassle Free Returns
                </p>
                <p className="text-[#6A6A6A] text-[14px] font-Inter font-normal pt-2">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/dots.png"
              width={255}
              height={217}
              className="absolute top-[-90px] left-[-90px] -z-40 max-xl:hidden"
            />
            <Image
              src="/bad.png"
              width={526}
              height={602}
              className="max-md:pt-6 mx-auto"
            />
          </div>
        </div>

        <div className="mt-[223px] max-sm:mt-[70px] flex max-lg:flex-col-reverse justify-between gap-6">
          {/* <div className="relative max-w-[746px] w-full mx-auto">
            <div className="flex max-sm:flex-col justify-between ">
              <Image
                src="/gridfirst.png"
                width={497}
                height={605}
                className="min-w-[450px] w-full max-md:min-w-[300px]"
              />
              <Image
                src="/gridsecond.png"
                width={228}
                height={228}
                className="max-w-[228px] h-[228px]"
              />
            </div>
            <Image
              src="/gridthird.png"
              width={386}
              height={463}
              className="absolute top-[244px] right-0 max-w-[386px] w-full"
            />
          </div> */}
          <div>
            <Image src="/three.png" width={746} height={712} />
          </div>
          <div className="max-w-[473px] w-full">
            <h1 className="text-[#2F2F2F] font-Inter text-[32px] max-sm:text-[26px] font-medium leading-[38px]">
              We Help You Make Modern Interior Design
            </h1>
            <p className="text-[#6A6A6A] font-Inter text-[14px] font-normal leading-[28px] pt-6">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada
            </p>
            <div className="flex flex-wrap">
              <div className="max-w-[225px] w-full flex mt-6 gap-2">
                <div className="border-[3px] border-[#3B5D50] rounded-full mt-1 w-[15px] h-[12px]"></div>
                <p className="text-[#6A6A6A] text-[14px] font-normal">
                  Donec vitae odio quis nisl dapibus malesuada
                </p>
              </div>
              <div className="max-w-[225px] w-full flex mt-6 gap-2">
                <div className="border-[3px] border-[#3B5D50] rounded-full mt-1 w-[15px] h-[12px]"></div>
                <p className="text-[#6A6A6A] text-[14px] font-normal">
                  Donec vitae odio quis nisl dapibus malesuada
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="max-w-[225px] w-full flex mt-3 gap-2">
                <div className="border-[3px] border-[#3B5D50] rounded-full mt-1 w-[15px] h-[12px]"></div>
                <p className="text-[#6A6A6A] text-[14px] font-normal">
                  Donec vitae odio quis nisl dapibus malesuada
                </p>
              </div>
              <div className="max-w-[225px] w-full flex mt-6 gap-2">
                <div className="border-[3px] border-[#3B5D50] rounded-full mt-1 w-[15px] h-[12px]"></div>
                <p className="text-[#6A6A6A] text-[14px] font-normal">
                  Donec vitae odio quis nisl dapibus malesuada
                </p>
              </div>
            </div>
            <Link href="asd">
              <button
                type="submit"
                className="max-w-[120px] w-full h-[50px] rounded-[30px] border-[#2F2F2F] border-[1px] bg-[#2F2F2F] text-white text-[16px] font-Inter font-semibold mt-6 hover:bg-[#F9BF29] hover:text-black"
              >
                Explore
              </button>
            </Link>
          </div>
        </div>

        <div className="">
          <div className="flex justify-between mt-[212px] max-sm:mt-[100px] gap-[100px] ">
            <div className="overflow-auto gap-[100px] w-[1320px] flex">
              <div className="flex gap-3 ">
                <Image src="/chair1.png" width={120} height={120} />
                <div>
                  <h1 className="text-[#2F2F2F] font-Inter text-[14px] font-bold">
                    Nordic Chair
                  </h1>
                  <p className="text-[#6A6A6A] w-[242px] pt-[7px] font-Inter text-[14px] font-normal leading-[19px]">
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio
                  </p>
                  <Link
                    href="wd"
                    className="pt-2 text-[#2F2F2F] font-Inter text-[14px] font-normal"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex gap-3">
                <Image src="/chair1.png" width={120} height={120} />
                <div>
                  <h1 className="text-[#2F2F2F] font-Inter text-[14px] font-bold">
                    Kruzo Aero Chair
                  </h1>
                  <p className="text-[#6A6A6A] w-[242px]  pt-[7px] font-Inter text-[14px] font-normal leading-[19px]">
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio
                  </p>
                  <Link
                    href="wd"
                    className="pt-2 text-[#2F2F2F] font-Inter text-[14px] font-normal"
                    onClick={() => setRead(!read)}
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <div className="flex gap-3">
                <Image src="/chair3.png" width={120} height={120} />
                <div>
                  <h1 className="text-[#2F2F2F] font-Inter text-[14px] font-bold">
                    Ergonomic Chair
                  </h1>
                  <p className="text-[#6A6A6A] w-[242px]  pt-[7px] font-Inter text-[14px] font-normal leading-[19px]">
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio
                  </p>
                  <Link
                    href="wd"
                    className="pt-2 text-[#2F2F2F] font-Inter text-[14px] font-normal"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-[159px] max-sm:mt-[60px]">
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
            className="mt-[49px] mx-auto"
          />
          <h1 className="font-Inter text-[#2F2F2F] text-[14px] font-bold pt-5 text-center">
            Maria Jones
          </h1>
          <p className="text-[#6A6A6A] text-center font-Inter text-[14px] font-normal">
            CEO, Co-Founder, XYZ Inc.
          </p>
        </div> */}
        <Ssswiper />

        <div className="mt-[180px] max-sm:mt-[60px]">
          <div className="flex justify-between items-center">
            <h1 className="text-[#2F2F2F] font-Inter text-[32px] max-sm:text-[26px] font-medium">
              Recent Blog
            </h1>
            <Link
              href=""
              className="text-[#2F2F2F] text-[14px] font-Inter font-semibold underline"
            >
              View All Posts
            </Link>
          </div>
          <div className="flex gap-6 mt-[56px] max-lg:flex-wrap justify-center max-sm:pb-6 pb-[192px]">
            <div className="">
              <Image src="/stull1.png" height={287} width={416} />
              <p className="pt-5 text-[#2F2F2F] font-Inter text-[16px] font-semibold">
                First Time Home Owner Ideas
              </p>
              <p className="pt-1 text-[#2F2F2F] font-Inter text-[16px] font-semibold">
                by Kristin Watson on Dec 19, 2021
              </p>
            </div>
            <div className="">
              <Image src="/stull2.png" height={287} width={416} />
              <p className="pt-5 text-[#2F2F2F] font-Inter text-[16px] font-semibold">
                How To Keep Your Furniture Clean
              </p>
              <p className="pt-1 text-[#2F2F2F] font-Inter text-[16px] font-semibold">
                by Robert Fox on Dec 15, 2021
              </p>
            </div>
            <div className="">
              <Image src="/stull3.png" height={287} width={416} />
              <p className="pt-5 text-[#2F2F2F] font-Inter text-[16px] font-semibold">
                Small Space Furniture Apartment Ideas
              </p>
              <p className="pt-1 text-[#2F2F2F] font-Inter text-[16px] font-semibold">
                by Kristin Watson on Dec 12, 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
