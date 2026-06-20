import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RiHeart3Line, RiShoppingCart2Line } from "react-icons/ri";

function IconsList() {
  return (
    <ul className="flex items-center gap-5">
      <li>
        <RiHeart3Line />
      </li>
      <li>
        <RiShoppingCart2Line />
      </li>
      <li>
        <FiUser />
      </li>
    </ul>
  );
}

export default IconsList;
