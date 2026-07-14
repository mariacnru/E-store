import React from "react";
import { NavLink } from "react-router";

function List() {
  return (
    <ul className="flex items-center gap-8 text-sm text-gray-500 *:hover:text-black *:cursor-pointer *:text-nowrap *:transition-colors">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-black font-danaMedium" : "text-gray-500"
          }
        >
          خانه
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"about"}
          className={({ isActive }) =>
            isActive ? "text-black font-danaMedium" : "text-gray-500"
          }
        >
          درباره ما
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"contact"}
          className={({ isActive }) =>
            isActive ? "text-black font-danaMedium" : "text-gray-500"
          }
        >
          ارتباط با ما
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"products"}
          className={({ isActive }) =>
            isActive ? "text-black font-danaMedium" : "text-gray-500"
          }
        >
          همه محصولات
        </NavLink>
      </li>
    </ul>
  );
}

export default List;
