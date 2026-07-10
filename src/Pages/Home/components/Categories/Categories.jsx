import React, { useState } from "react";
import { categories } from "../../../../Data/Constants";
import CategorieCard from "./CategorieCard";

function Categories() {
  const [data] = useState(categories);

  return (
    <section className="md:mx-27 my-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-danaBold text-zinc-900">
              جستجو بر اساس دسته‌بندی
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              دسته مورد نظر خود را انتخاب کنید
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5
          "
        >
          {data.map((item) => (
            <CategorieCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
