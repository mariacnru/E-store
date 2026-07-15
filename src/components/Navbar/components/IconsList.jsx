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
import { CartContext } from "../../../context/CardContext";

function IconsList() {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const { cart, addToCart, removeFromCart, totalPrice } =
    useContext(CartContext);
  const [like, setLike] = useState(false);
  const [cartFlag, setCartFlag] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setLike(false);
        setCartFlag(false);
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
        <span onClick={() => setLike(!like)} className="relative">
          <RiHeart3Line size={20} />

          {wishlist.length > 0 && (
            <span
              className="
          absolute
          -top-3
          -right-3
          w-5 h-5
          rounded-full
          bg-rose-600
          text-white
          text-[10px]
          flex items-center justify-center
        "
            >
              {wishlist.length}
            </span>
          )}
        </span>

        <ul
          className={`${like ? "visible opacity-100" : "invisible opacity-0"} absolute top-8 bg-white border border-gray-100 rounded-xl -right-10 pt-3 px-3 pb-3 space-y-3 w-100 h-fit max-h-78 z-50 opacity-0 invisible transition-all duration-200 overflow-y-auto custom-scrollbar`}
        >
          <span className="pb-2">لیست علاقه مندی ها</span>
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
        <span onClick={() => setCartFlag(!cartFlag)} className="relative">
          <RiShoppingCart2Line size={20} />

          {cart.length > 0 && (
            <span
              className="
          absolute
          -top-3
          -right-3
          w-5 h-5
          rounded-full
          bg-violet-600
          text-white
          text-[10px]
          flex items-center justify-center
        "
            >
              {cart.length}
            </span>
          )}
        </span>

        <ul
          className={`${cartFlag ? "visible opacity-100" : "invisible opacity-0"} absolute top-13 bg-white border border-gray-100 rounded-xl right-10 pt-3 px-3 pb-3 space-y-3 w-100 h-fit  z-50 opacity-0 invisible transition-all duration-200 overflow-y-auto custom-scrollbar`}
        >
          <span className="pb-2">سبد خرید</span>
          <div className="custom-scrollbar p-2 space-y-2 h-[200px] overflow-y-auto">
            {cart.length > 0 &&
              cart.map((item) => (
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

                      <p className="mt-3 font-bold text-zinc-900">
                        تعداد: {item.quantity}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col items-center gap-3">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                      >
                        <RiDeleteBinLine size={18} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
          </div>

          {cart.length === 0 && (
            <div className="py-10 flex flex-col items-center gap-4 text-gray-400">
              <RiShoppingCart2Line size={40} />

              <p className="text-sm">هنوز محصولی به سبد خرید اضافه نشده</p>
            </div>
          )}

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="">مبلغ کل:</span>
              <span className="">{totalPrice.toLocaleString()}</span>
            </div>
            <button className="bg-violet-500 text-white w-full text-center py-2 rounded-lg shadow-md shadow-violet-200 hover:bg-violet-700 transition-colors cursor-pointer">
              ادامه فرایند خرید
            </button>
          </div>
        </ul>
      </li>
      <li>
        <FiUser size={20} />
      </li>
    </ul>
  );
}

export default IconsList;
