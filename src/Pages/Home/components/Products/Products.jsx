import React, { useMemo, useState } from "react";
import homePageProducts from "../../../../Data/HomePageProducts";
import ProductCard from "./ProductCard";
import ProductsFilter from "./PruductsFilter";

function Products() {
  const [productsFilter, setProductsFilter] = useState("newArrival");

  const products = useMemo(() => {
    switch (productsFilter) {
      case "bestSeller":
        return [...homePageProducts].sort((a, b) => b.saleCount - a.saleCount);

      case "featuredProducts":
        return homePageProducts.filter((product) => product.discount);

      case "newArrival":
      default:
        return [...homePageProducts].sort((a, b) => b.id - a.id);
    }
  }, [productsFilter]);

  return (
    <div className="px-30 py-10 bg-white">
      <ProductsFilter
        productsFilter={productsFilter}
        setFilter={setProductsFilter}
      />

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
