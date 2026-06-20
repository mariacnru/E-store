import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RiHeart3Line, RiShoppingCart2Line } from "react-icons/ri";

function IconsList() {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <RiHeart3Line size={20}/>
      </li>
      <li>
        <RiShoppingCart2Line size={20}/>
      </li>
      <li>
        <FiUser size={20}/>
      </li>
    </ul>
  );
}

export default IconsList;
