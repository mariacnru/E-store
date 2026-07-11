import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function EstoreLayout() {
  return (
    <section>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default EstoreLayout;
