import React from "react";
import { BuyIcon, ConatactIcon, FurniIcon } from "./Icon";
import Link from "next/link";

const Sidebar = ({ item, setItem }) => {
  return (
    <>
      <div className="">
        <div
          className="text-[60px] flex justify-end rotate-45 h-[20px]"
          onClick={() => setItem(!item)}
        >
          +
        </div>
        <div className="gap-[44px]  flex flex-col justify-center bg-[#6A6A6A]  max-w-[1440px] w-full">
          <Link
            href=""
            className="text-white font-Inter text-center text-[14px] font-medium hover:border-b-[#F9BF29] hover:border-b-[5px] pb-2"
          >
            Home
          </Link>
          <Link
            href=""
            className="text-white font-Inter text-center text-[14px] font-medium hover:border-b-[#F9BF29] hover:border-b-[5px] pb-2"
          >
            Shop
          </Link>
          <Link
            href=""
            className="text-white font-Inter text-center text-[14px] font-medium hover:border-b-[#F9BF29] hover:border-b-[5px] pb-2"
          >
            About us
          </Link>
          <Link
            href=""
            className="text-white font-Inter text-center text-[14px] font-medium hover:border-b-[#F9BF29] hover:border-b-[5px] pb-2"
          >
            Services{" "}
          </Link>
          <Link
            href=""
            className="text-white font-Inter text-center text-[14px] font-medium hover:border-b-[#F9BF29] hover:border-b-[5px] pb-2"
          >
            Blog
          </Link>
          <Link
            href=""
            className="text-white font-Inter text-center text-[14px] font-medium hover:border-b-[#F9BF29] hover:border-b-[5px] pb-2"
          >
            Contact us
          </Link>
          <div className="flex max-w-[300px] mx-auto justify-between gap-16">
            <div className="mx-auto">
              <ConatactIcon />
            </div>
            <div className="mx-auto pb-4">
              <BuyIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
