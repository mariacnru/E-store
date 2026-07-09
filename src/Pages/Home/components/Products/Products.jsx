import React, { useState } from "react";
import ProductsFilter from "./PruductsFilter";
import homePageProducts from "../../../../Data/HomePageProducts";

function Products() {
  const [products, setProducts] = useState(homePageProducts);
  const [productsFilter, setProductsFilter] = useState("newArrival");

  return (
    <div className="px-30 py-10 bg-white">
      <ProductsFilter />
    </div>
  );
}

export default Products;
