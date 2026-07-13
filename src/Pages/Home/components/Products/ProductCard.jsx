import React, { useContext } from "react";
import { RiArrowLeftLine, RiHeartFill, RiHeartLine } from "react-icons/ri";
import { WishlistContext } from "../../../../context/WishlistContext";
import { NavLink } from "react-router";

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
    <div className="bg-gray-50 w-full py-5 px-2 rounded-lg border border-gray-200">
      <div
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
        className="flex items-center gap-5"
      >
        <span
          className={`cursor-pointer ${
            isLiked ? "text-rose-500" : "text-gray-400"
          } bg-white block w-fit p-2 rounded-full shadow-lg`}
        >
          {isLiked ? <RiHeartFill size={20} /> : <RiHeartLine size={20} />}
        </span>

        {discount && (
          <span className="bg-zinc-100 text-zinc-700 text-xs px-2 py-1 rounded-md">
            %{discount} OFF
          </span>
        )}
      </div>

      <div className="flex flex-col items-center gap-2">
        <img src={img} alt={title} />

        <p className="text-sm font-danaMedium">{title}</p>

        <span className="text-sm">{price.toLocaleString("fa-IR")} تومان</span>

        <NavLink
          to={`/productDetail/${id}`}
          className="group relative overflow-hidden w-full mt-4 py-3.5 rounded-xl bg-zinc-900 text-white text-sm font-danaMedium shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(0,0,0,0.24)] active:translate-y-0 active:scale-[0.98] text-center cursor-pointer"
        >
          <button>
            {/* Shimmer */}
            <span className="absolute inset-0 translate-x-[-150%] bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-700 group-hover:translate-x-[150%]" />

            <span className="relative z-10 flex items-center justify-center gap-2">
              مشاهده محصول
              <span className="group-hover:-translate-x-1 transition-transform duration-300">
                <RiArrowLeftLine />
              </span>
            </span>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default ProductCard;
