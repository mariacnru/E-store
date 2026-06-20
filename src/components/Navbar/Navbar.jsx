import React from "react";
import List from "./components/List";
import IconsList from "./components/IconsList";
import Input from "./components/Input";

function Navbar() {
  return (
    <nav className="h-15 flex justify-evenly items-center gap-10 px-20 py-2">
      <IconsList />
      <List />
      <Input />
      <div className="">
        <img src="/Images/logo/Logo_dark.webp" alt="" width={65} height={22} />
      </div>
    </nav>
  );
}

export default Navbar;
