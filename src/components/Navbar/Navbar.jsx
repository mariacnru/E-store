import React from "react";
import List from "./components/List";
import IconsList from "./components/IconsList";
import Input from "./components/Input";

function Navbar() {
  return (
    <nav className="hidden h-15 md:flex md:justify-center lg:justify-evenly items-center lg:px-20 py-2 border-b border-gray-200">
      <IconsList />
      <List />
      <Input />
      <div className="flex shrink-0">
        <img
          src="/Images/logo/Logo_dark.webp"
          alt="logo"
          className="w-auto h-7"
        />
      </div>
    </nav>
  );
}

export default Navbar;
