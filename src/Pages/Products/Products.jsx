import React, { useState } from "react";
import { useParams } from "react-router";
import homePageProducts from "../../Data/HomePageProducts";
import ProductCard from "./components/Products/ProductCard";
import Header from "./components/Header";

function Products() {
  const { slug } = useParams();

  const products = slug
    ? homePageProducts.filter((item) => item.slug === slug)
    : homePageProducts;

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 4;

  const pagesCount = Math.ceil(products.length / productsPerPage);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <div className="px-10 py-15 bg-white">
      <Header slug={slug} listLength={products.length} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-12">
        {Array.from({ length: pagesCount }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`
                w-11 h-11 rounded-xl border transition-all cursor-pointer
                ${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-white border-black"
                }
              `}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Products;
