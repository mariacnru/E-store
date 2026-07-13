import React from "react";
import { NavLink } from "react-router";

function CategorieCard({ icon, title, slug }) {
  return (
    <NavLink
      to={`/products/${slug}`}
      className="bg-gray-100 w-full rounded-lg p-5 flex flex-col items-center gap-2 hover:bg-violet-600 hover:text-white hover:-translate-y-4 active:bg-violet-600 active:text-white active:-translate-y-4 cursor-pointer transition-all"
    >
      <span>{icon}</span>
      <p className="text-sm text-nowrap">{title}</p>
    </NavLink>
  );
}

export default CategorieCard;
