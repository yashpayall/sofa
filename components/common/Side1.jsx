import Link from 'next/link'
import React from 'react'
import { BuyIcon, ConatactIcon } from './Icon'
 

const Side1 = ({setItem,item} ) => {
  return (
     <div className='bg-black '>
     
     <div className="w-full    pt-[20px]  p-[40px_60px] items-center justify-between">
        <div className='flex justify-end' onClick={() => setItem(!item)}>
        <p className='text-white text-[60px] flex justify-end rotate-45 '>+</p>
        </div>
            <div>
              <p className="text-[32px] pt-[20px] text-white mt-[-20px] font-semibold font-Inter ">
                Furni.
              </p>
            </div>
            <div className="">
              <Link className="h-[30px]" href="">
                {" "}
                <p className="text-[14px]     pt-[7px]   text-white  font-medium  font-Inter">
                  Home
                </p>{" "}
              </Link>

              <Link href="">
                <p className=" pt-[ 7px]    text-[14px] text-white  font-medium  font-Inter">
                  Shop
                </p>{" "}
              </Link>
              <Link href="">
                <p className="text-[14px] pt-[  7px]   text-white  font-medium  font-Inter">
                  About us
                </p>{" "}
              </Link>
              <Link href="">
                <p className="text-[14px] pt-[  7px]   text-white  font-medium  font-Inter">
                  Services
                </p>{" "}
              </Link>
              <Link href="">
                <p className="text-[14px] pt-[  7px]   text-white  font-medium  font-Inter">
                  Blog
                </p>{" "}
              </Link>
              <Link href="">
                <p className="text-[14px] pt-[  7px]   text-white  font-medium  font-Inter">
                  Contact us
                </p>{" "}
              </Link>
              <div className='flex justify-center gap-4'>
                
              <Link className=" hover:-translate-y-1 hover:scale-110" href="">
                {" "}
                <ConatactIcon />
              </Link>
              <Link className="hover:-translate-y-1 hover:scale-110" href="">
                {" "}
                <BuyIcon />
              </Link>
              </div>

            </div>
          </div>
     
     </div>
  )
}

export default Side1