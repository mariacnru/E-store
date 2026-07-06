import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RiHeart3Line, RiShoppingCart2Line } from "react-icons/ri";

function IconsList() {
  return (
    <ul className="flex items-center gap-8 h-full">
      <li className="group relative cursor-pointer">
        <RiHeart3Line size={20} />

        <ul className="absolute top-full -right-10 pt-3 w-2xs z-50 opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible">
          <div className="bg-amber-400 rounded-lg p-5">
            <li>آیتم لیست علاقه مندی ها</li>
            <li>آیتم لیست علاقه مندی ها</li>
            <li>آیتم لیست علاقه مندی ها</li>
          </div>
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
