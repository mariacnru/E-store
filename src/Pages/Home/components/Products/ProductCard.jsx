import React, { useContext } from "react";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { WishlistContext } from "../../../../context/WishlistContext";

function ProductCard({
  id,
  img,
  title,
  price,
  saleCount,
  discount,
  description,
  options,
}) {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  const isLiked = wishlist.some((item) => item.id === id);

  return (
    <div className="bg-gray-100 w-full py-5 px-2 rounded-lg">
      <span
        onClick={() =>
          toggleWishlist({
            id,
            img,
            title,
            price,
            saleCount,
            discount,
            description,
            options,
          })
        }
        className={`cursor-pointer ${
          isLiked ? "text-rose-500" : "text-gray-400"
        }`}
      >
        {isLiked ? <RiHeartFill size={20} /> : <RiHeartLine size={20} />}
      </span>

      <div className="flex flex-col items-center gap-2">
        <img src={img} alt={title} />

        <p className="text-sm font-danaMedium">{title}</p>

        <span className="text-sm">{price.toLocaleString("fa-IR")} تومان</span>

        <button className="bg-black text-white text-xs py-2 px-5 rounded-sm hover:scale-95 active:scale-95 transition-transform cursor-pointer">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
