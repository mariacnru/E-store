import React from "react";
import List from "./components/List";
import IconsList from "./components/IconsList";
import Input from "./components/Input";

function LaptopNavbar() {
  return (
    <nav className="hidden sticky top-0 bg-white/50 backdrop-blur-sm h-15 lg:flex md:justify-center lg:justify-evenly items-center lg:px-20 py-2 border-b border-gray-200 z-50">
      <IconsList />
      <List />
      {/* <Input /> */}
      <div className="flex shrink-0">
        <img
          src="/E-store/Images/logo/Logo_dark.webp"
          alt="logo"
          className="w-auto h-7"
        />
      </div>
    </nav>
  );
}

export default LaptopNavbar;
