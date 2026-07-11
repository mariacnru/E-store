import React from "react";
import Header from "./components/Header";
import HeaderSection2 from "./components/HeaderSection2";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import FooterBanner from "./components/FooterBanner";

function Home() {
  return (
    <div>
      <Header />
      <HeaderSection2 />
      <Categories />
      <Products />
      <FooterBanner />
    </div>
  );
}

export default Home;
