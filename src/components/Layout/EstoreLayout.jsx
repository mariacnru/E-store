import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

function EstoreLayout() {
  return (
    <section>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </section>
  );
}

export default EstoreLayout;
