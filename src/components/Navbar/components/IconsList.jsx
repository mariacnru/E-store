import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import {
  RiDeleteBinLine,
  RiHeart3Line,
  RiHeartFill,
  RiShoppingCart2Line,
} from "react-icons/ri";

function IconsList() {
  return (
    <ul className="flex items-center gap-8 h-full">
      <li className="group relative cursor-pointer">
        <RiHeart3Line size={20} />

        <ul className="absolute top-full bg-gray-100 rounded-xl -right-10 pt-3 px-3 pb-3 space-y-3 w-100 h-78 z-50 opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible overflow-y-auto custom-scrollbar">
          <li className="rounded-l-lg border-r-4 border-rose-500">
            <div className="flex justify-between items-center bg-white p-2 rounded-sm">
              <div className="">
                <img
                  src="/public/Images/hero/heroSection2Mobile/MacBook Pro 14.webp"
                  alt=""
                  className="w-30"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm line-clamp-1">آیفون 14 پرو 512GB طلایی</p>
                <span className="bg-black text-white text-xs p-1 rounded-sm">
                  $1437
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-rose-500">
                  <RiHeartFill size={20}/>
                </span>
                <span className="font-extralight">
                  <RiDeleteBinLine size={20}/>
                </span>
              </div>
            </div>
          </li>
          <li className="rounded-l-lg border-r-4 border-rose-500">
            <div className="flex justify-between items-center bg-white p-2 rounded-sm">
              <div className="">
                <img
                  src="/public/Images/hero/heroSection2Mobile/MacBook Pro 14.webp"
                  alt=""
                  className="w-30"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm line-clamp-1">آیفون 14 پرو 512GB طلایی</p>
                <span className="bg-black text-white text-xs p-1 rounded-sm">
                  $1437
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-rose-500">
                  <RiHeartFill size={20}/>
                </span>
                <span className="font-extralight">
                  <RiDeleteBinLine size={20}/>
                </span>
              </div>
            </div>
          </li>
          <li className="rounded-l-lg border-r-4 border-rose-500">
            <div className="flex justify-between items-center bg-white p-2 rounded-sm">
              <div className="">
                <img
                  src="/public/Images/hero/heroSection2Mobile/MacBook Pro 14.webp"
                  alt=""
                  className="w-30"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm line-clamp-1">آیفون 14 پرو 512GB طلایی</p>
                <span className="bg-black text-white text-xs p-1 rounded-sm">
                  $1437
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-rose-500">
                  <RiHeartFill size={20}/>
                </span>
                <span className="font-extralight">
                  <RiDeleteBinLine size={20}/>
                </span>
              </div>
            </div>
          </li>
          <li className="rounded-l-lg border-r-4 border-rose-500">
            <div className="flex justify-between items-center bg-white p-2 rounded-sm">
              <div className="">
                <img
                  src="/public/Images/hero/heroSection2Mobile/MacBook Pro 14.webp"
                  alt=""
                  className="w-30"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm line-clamp-1">آیفون 14 پرو 512GB طلایی</p>
                <span className="bg-black text-white text-xs p-1 rounded-sm">
                  $1437
                </span>
              </div>
              <div className="space-y-2">
                <span className="text-rose-500">
                  <RiHeartFill size={20}/>
                </span>
                <span className="font-extralight">
                  <RiDeleteBinLine size={20}/>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <RiShoppingCart2Line size={20} />
      </li>
      <li>
        <FiUser size={20} />
      </li>
    </ul>
  );
}

export default IconsList;
