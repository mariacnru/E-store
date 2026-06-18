import { Heart } from "lucide";
import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="h-15 flex items-center gap-10 px-20 py-2">
      <div className="">
        <ul>
          <li>
            <Heart />
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <ul className="flex items-center gap-5 text-sm text-gray-500">
        <li>
          <NavLink
            to={"/"}
            className={(isActive) =>
              isActive ? "text-black font-danaMedium" : "text-gray-500"
            }
          >
            خانه
          </NavLink>
        </li>
        <li>درباره ما</li>
        <li>ارتباط با ما</li>
        <li>بلاگ</li>
      </ul>
      <div className="">
        <img src="/Images/logo/Logo_dark.webp" alt="" width={65} height={22} />
      </div>
      <div className=""></div>
    </nav>
  );
}

export default Navbar;
