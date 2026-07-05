import React from "react";
import { NavLink } from "react-router";

function List() {
  return (
    <ul className="flex items-center gap-8 text-sm text-gray-500 *:hover:text-black *:cursor-pointer *:text-nowrap *:transition-colors">
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
  );
}

export default List;
