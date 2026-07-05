import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

function Input() {
  const [value, setValue] = useState("");

  return (
    <label className="flex items-center gap-2 bg-stone-100 rounded-sm px-3 py-1 focus-within:bg-stone-200 transition-colors">
      <RiSearch2Line className="text-stone-400" />
      <input
        type="text"
        placeholder="جستجو..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-transparent text-sm py-1.5 focus:outline-0 w-full lg:w-2xs placeholder-stone-400"
      />
    </label>
  );
}

export default Input;
