import React from "react";
import { FirstIcon, InstaIcon, LinkdinIcon } from "./Icon";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-black">
        <div className="max-w-[1512px] w-full mx-auto px-3 text-white font-Jost">
          <div className="max-w-[1168px] w-full mx-auto pt-[68px] lg:flex justify-between">
            <div className="lg:max-w-[465px] max-lg:max-w-[1168px] w-full justify-between mx-auto">
              <div>
                <h1 className="font-extrabold text-[20px] max-md:text-center">
                  NEWSLETTER
                </h1>
                <h1 className="text-[60px] font-bold max-w-[465px] max-sm:text-[40px] max-md:mx-auto max-lg:max-w-[800px] w-full leading-[112%] pt-[42px]">
                  Updates on everything social media.
                </h1>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-black bg-white max-w-[172px] w-full h-[43px] rounded-[10px] text-[20px] font-bold mt-[36px] hover:bg-slate-500 hover:text-white"
                >
                  Subscribe
                </button>
                <h1 className="text-[40px] font-extrabold pt-5 font-mono">ONEFLUENT</h1>
                
                <div className="flex">
                  <Link href="">
                    <InstaIcon />
                  </Link>
                  <Link href="">
                    <LinkdinIcon />
                  </Link>
                </div>
              </div>
            </div>

            <div className=" max-lg:flex justify-between gap-4 max-lg:mt-10 max-md:flex-wrap">
              <div className="max-w-[530px] max-md:mx-auto w-full bg-[url(/bg.svg)] bg-no-repeat bg-center bg-cover pl-[34px] rounded-[10px] pb-[30px]">
                <h1 className="text-[36px] font-bold text-black font-Montserrat pt-7">
                  @onefluent
                </h1>
                <div className="flex gap-7 items-center mt-[33px]">
                  <Image src="/box2.svg" height={67} width={67} />
                  <div>
                    <h1 className="text-black text-[16px] font-Montserrat font-bold">
                      Posted by @mdmotivator @onefluent
                    </h1>
                    <p className="text-black text-[16px] font-light pt-[14px] max-w-[300px]">
                      I bought everything at the store and THIS happened 🥺❤️
                      @mdmotivator @onefluent
                    </p>
                  </div>
                </div>
                <div className="flex gap-7 mt-9 items-center">
                  <Image src="/box2.svg" height={67} width={67} />
                  <div className="pr-16">
                    <h1 className="text-black text-[16px] font-Montserrat font-bold">
                      Posted by @mdmotivator @onefluent
                    </h1>
                    <p className="text-black text-[16px] font-light pt-[14px] max-w-[300px]">
                      I bought everything at the store and THIS happened 🥺❤️
                      @mdmotivator @onefluent
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-[42px] mx-auto  lg:flex-row md:flex-col lg:justify-end">
                <div className="lg:mt-[72px] flex flex-col">
                  <Link
                    href=""
                    className="font-Jost text-[32px] font-extrabold"
                  >
                    Creators
                  </Link>
                  <Link href="" className="font-Jost text-[28px] font-normal">
                    Business
                  </Link>
                  <Link href="" className="font-Jost text-[28px] font-normal">
                    Snapchat
                  </Link>
                </div>
                <div className="lg:mt-[72px] flex flex-col">
                  {/* <Image src="/media.svg" width={200} height={10} /> */}
                <h1 className="text-[30px] font-extrabold font-mono">Onefluent</h1>
                  <Link href="" className="font-Jost text-[28px] font-normal">
                    About Us
                  </Link>
                  <Link href="" className="font-Jost text-[28px] font-normal">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-white p-[67px] pb-[35px] font-Jost text-[14px] font-normal">© Onefluent Media, All rights reserved. Privacy Policy | Donor Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
