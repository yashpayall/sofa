import React from "react";
import {
  FacebookIcon,
  InstaIcon,
  InstagramIcon,
  LinkdinIcon,
  LinnkdinIcon,
  MessageIcon,
  TeliIcon,
  TwwiterIcon,
} from "./Icon";
import Image from "next/image";
import Link from "next/link";

const Sofafoter = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1440px] w-full mx-auto max-xl:px-3 p-[80px_60px]">
        <div className="flex gap-1">
          {/* <MessageIcon/> */}
          <Image src="/message.png" height={28} width={28} />
          <p className="text-[#3B5D50] font-Inter text-[18px] font-medium">
            Subscribe to Newsletter
          </p>
        </div>
        <div className="flex max-sm:flex-wrap mt-3 gap-5 relative">
          <input
            type="text"
            placeholder="Enter your name"
            className="text-[#6C757D] font-Inter font-normal text-[14px] max-w-[276px] w-full border-[#CED4DA] border-[1px] p-[15px_12px] rounded-[10px]"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="text-[#6C757D] font-Inter font-normal text-[14px] max-w-[276px] w-full border-[#CED4DA] border-[1px] p-[15px_12px] rounded-[10px]"
          />
          <Link href="">
            <TeliIcon />
          </Link>
          <Image
            src="/sofa.png"
            width={380}
            height={328}
            className="absolute top-[-240px] max-lg:hidden right-0"
          />
        </div>
        <h1 className="text-[#3B5D50] font-Inter text-[32px] font-medium max-sm:mt-6 mt-[80px]">
          Furni.
        </h1>
        <div className="flex justify-between gap-6 max-lg:flex-col max-sm:mt-2 mt-[31px]">
          <div className="max-w-[383px] w-full">
            <p className="text-[#6A6A6A] text-[14px] font-normal font-Inter">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>
            <div className="flex gap-2 mt-6">
              <Link href="dasd" className="hover:scale-125">
                <FacebookIcon />
              </Link>
              <Link href="xqsad" className="hover:scale-125">
                <TwwiterIcon />
              </Link>
              <Link href="asD" className="hover:scale-125">
                <InstagramIcon />
              </Link>
              <Link href="sa" className="hover:scale-125">
                <LinnkdinIcon />
              </Link>
            </div>
          </div>
          <div className="flex justify-between max-w-[872px] gap-4 max-sm:grid grid-cols-2 w-full">
            <div className="flex flex-col">
              <Link
                href="d"
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold"
              >
                About us
              </Link>
              <Link
                href="d"
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold mt-[10px]"
              >
                Services
              </Link>
              <Link
                href="d"
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold mt-[10px]"
              >
                Blog
              </Link>
              <Link
                href="d"
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold mt-[10px]"
              >
                Contact us
              </Link>
            </div>
            <div className="flex flex-col">
              <Link
                href="d"
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold"
              >
                Support
              </Link>
              <Link
                href="d"
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold mt-[10px]"
              >
                Knowledge base
              </Link>
              <Link
                href="d"
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold mt-[10px]"
              >
                Live chat
              </Link>
            </div>
            <div className="flex flex-col">
              <Link
                href="d"
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold"
              >
                Jobs
              </Link>
              <Link
                href="d"
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold mt-[10px]"
              >
                Our team
              </Link>
              <Link
                href="d"
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold mt-[10px]"
              >
                Leadership
              </Link>
              <Link
                href="d"
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold mt-[10px]"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-col">
              <Link
                href="d"
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold"
              >
                Nordic Chair
              </Link>
              <Link
                href=""
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold mt-[10px]"
              >
                Kruzo Aero
              </Link>
              <Link
                href=""
                className="text-[#2F2F2F] hover:text-[blue] text-[14px] font-Inter font-semibold mt-[10px]"
              >
                Ergonomic Chair
              </Link>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-[#2F2F2F] mt-[48px]"></div>
        <p className="text-[#6A6A6A] font-Inter text-[14px] font-normal text-center pt-6 leading-[26px]">
          Copyright ©2023. All Rights Reserved. — Designed with love by
          Untree.co Distributed By ThemeWagon
        </p>
      </div>
    </div>
  );
};

export default Sofafoter;
