import React from "react";
import { useParams } from "react-router";
import homePageProducts from "../../Data/HomePageProducts";

function Products() {
  const { slug } = useParams();

  const products = homePageProducts.filter((item) => item.slug === slug);

  return <div>{products.length}</div>;
}

export default Products;
