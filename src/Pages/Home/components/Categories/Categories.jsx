import React, { useState } from "react";
import { categories } from "../../../../Data/Constants";
import CategorieCard from "./CategorieCard";

function Categories() {
  const [data, setData] = useState(categories);

  return (
    <div className="px-27 my-20">
      <div className="mb-10 font-danaMedium">
        <h3 className="">جستجو بر اساس دسته بندی</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-self-center gap-5">
        {data.map((item) => (
          <CategorieCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
