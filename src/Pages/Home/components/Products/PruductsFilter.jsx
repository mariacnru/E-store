import React from "react";

function ProductsFilter({ setFilter }) {
  return (
    <ul className="text-sm flex gap-5 mb-5">
      <li onClick={() => setFilter("newArrival")} className="cursor-pointer">
        جدیدترین محصولات
      </li>
      <li onClick={() => setFilter("bestSeller")} className="cursor-pointer">
        پرفروش‌ترین محصولات
      </li>
      <li onClick={() => setFilter("featuredProducts")} className="cursor-pointer">
        محصولات ویژه
      </li>
    </ul>
  );
}

export default ProductsFilter;
