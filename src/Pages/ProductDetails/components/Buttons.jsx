import React from "react";
import { RiHeart3Line, RiShoppingCart2Line } from "react-icons/ri";

function Buttons({
  product,
  quantity,
  selectedColor,
  selectedVariant,
  addToCart,
}) {
  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      selectedColor,
      selectedVariant,
    });
  };

  return (
    <div className="mt-10 flex gap-4 flex-wrap">
      <button
        onClick={handleAddToCart}
        aria-label="افزودن به سبد خرید"
        className="
          flex-1 min-w-50 h-14 rounded-2xl
          bg-zinc-900 text-white
          flex items-center justify-center gap-2
          cursor-pointer
          hover:bg-zinc-800
          transition-colors
        "
      >
        <RiShoppingCart2Line />
        افزودن به سبد خرید
      </button>

      <button
        aria-label="افزودن به علاقه مندی ها"
        className="
          w-14 h-14 rounded-2xl
          border border-zinc-200
          flex items-center justify-center
          hover:text-(--accent)
          hover:border-(--accent)
          hover:shadow-lg
          shadow-(--accent)
          transition-all
          cursor-pointer
        "
      >
        <RiHeart3Line size={22} />
      </button>
    </div>
  );
}

export default Buttons;
