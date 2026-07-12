import React from "react";
import { RiHeart3Line, RiShoppingCart2Line } from "react-icons/ri";

function Buttons() {
  return (
    <div className="mt-10 flex gap-4 flex-wrap">
      <button className="flex-1 min-w-50 h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center gap-2">
        <RiShoppingCart2Line />
        افزودن به سبد خرید
      </button>

      <button className="w-14 h-14 rounded-2xl border border-zinc-200 flex items-center justify-center hover:text-(--accent) hover:border-(--accent) hover:shadow-lg shadow-(--accent) transition-all cursor-pointer">
        <RiHeart3Line size={22} />
      </button>
    </div>
  );
}

export default Buttons;
