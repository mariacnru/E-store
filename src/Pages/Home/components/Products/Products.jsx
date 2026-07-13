import React, { useMemo, useState } from "react";
import homePageProducts from "../../../../Data/HomePageProducts";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";

function Products() {
  const [productsFilter, setProductsFilter] = useState("newArrival");

  const products = useMemo(() => {
    switch (productsFilter) {
      case "bestSeller":
        return [...homePageProducts]
          .sort((a, b) => b.saleCount - a.saleCount)
          .slice(0, 4);
      case "discount":
        return homePageProducts
          .filter((product) => product.discount)
          .sort((a, b) => b.discount - a.discount)
          .slice(0, 4);

      case "newArrival":
      default:
        return [...homePageProducts].sort((a, b) => b.id - a.id);
    }
  }, [productsFilter]);

  return (
    <section className="md:px-27 my-24 px-4 bg-white">
      <div className="px-auto max-w-7xl py-10">
        <ProductsFilter
          productsFilter={productsFilter}
          setFilter={setProductsFilter}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(-8).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
