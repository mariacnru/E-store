import React, { useContext, useEffect, useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import {
  RiDeleteBinLine,
  RiHeart3Line,
  RiHeartFill,
  RiShoppingCart2Line,
} from "react-icons/ri";
import { WishlistContext } from "../../../context/WishlistContext";

function IconsList() {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const [like, setLike] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setLike(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <ul ref={cardRef} className="flex items-center gap-8 h-full">
      <li className="relative cursor-pointer">
        <span onClick={() => setLike(!like)}>
          <RiHeart3Line size={20} />
        </span>

        <ul
          className={`${like ? "visible opacity-100" : "invisible opacity-0"} absolute top-8 bg-white border border-gray-100 rounded-xl -right-10 pt-3 px-3 pb-3 space-y-3 w-100 h-fit max-h-78 z-50 opacity-0 invisible transition-all duration-200 overflow-y-auto custom-scrollbar`}
        >
          {wishlist.length > 0 &&
            wishlist.map((item) => (
              <li
                key={item.id}
                className="group bg-white rounded-2xl p-3 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  {/* Product Image */}
                  <div className="shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-20 object-contain rounded-xl bg-gray-50 p-2"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-danaMedium text-gray-800 line-clamp-2">
                      {item.title}
                    </p>

                    <p className="mt-3 text-sm font-semibold text-zinc-900">
                      {item.price.toLocaleString("fa-IR")} تومان
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col items-center gap-3">
                    <button className="text-rose-500 hover:scale-110 transition-transform cursor-pointer">
                      <RiHeartFill size={20} />
                    </button>

                    <button
                      onClick={() => toggleWishlist(item)}
                      className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                    >
                      <RiDeleteBinLine size={18} />
                    </button>
                  </div>
                </div>
              </li>
            ))}

          {wishlist.length === 0 && (
            <div className="py-10 flex flex-col items-center gap-4 text-gray-400">
              <RiHeart3Line size={40} />

              <p className="text-sm">هنوز محصولی به علاقه‌مندی‌ها اضافه نشده</p>
            </div>
          )}
        </ul>
      </li>
      <li>
        <RiShoppingCart2Line size={20} />
      </li>
      <li>
        <FiUser size={20} />
      </li>
    </ul>
  );
}

export default IconsList;
