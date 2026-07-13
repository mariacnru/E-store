import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function EstoreLayout() {
  return (
    <section>
      <Navbar />
      <main>
        <ScrollRestoration/>
        <Outlet />
      </main>
      <Footer />
    </section>
  );
}

export default EstoreLayout;
