import React from "react";

function ProductsFilter({ productsFilter, setFilter }) {
  return (
    <ul className="text-sm flex gap-5 mb-5">
      <li
        onClick={() => setFilter("newArrival")}
        className={`${
          productsFilter === "newArrival"
            ? "font-danaMedium underline underline-offset-8"
            : ""
        } cursor-pointer transition-all`}
      >
        جدیدترین محصولات
      </li>

      <li
        onClick={() => setFilter("bestSeller")}
        className={`${
          productsFilter === "bestSeller"
            ? "font-danaMedium underline underline-offset-8"
            : ""
        } cursor-pointer transition-all`}
      >
        پرفروش‌ترین محصولات
      </li>

      <li
        onClick={() => setFilter("discount")}
        className={`${
          productsFilter === "discount"
            ? "font-danaMedium underline underline-offset-8"
            : ""
        } cursor-pointer transition-all`}
      >
        بیشترین تخفیف
      </li>
    </ul>
  );
}

export default ProductsFilter;
