import React, { useState } from "react";
import ProductsFilter from "./PruductsFilter";
import homePageProducts from "../../../../Data/HomePageProducts";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState(homePageProducts);
  const [productsFilter, setProductsFilter] = useState("newArrival");

  return (
    <div className="px-30 py-10 bg-white">
      <ProductsFilter setFilter={setProductsFilter} />

      <div className="grid grid-cols-4 gap-2">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
