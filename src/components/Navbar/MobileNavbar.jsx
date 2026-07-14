import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import {
  RiMenu4Line,
  RiCloseLine,
  RiHeart3Line,
  RiShoppingCart2Line,
  RiUser3Line,
  RiHome5Line,
  RiStore2Line,
  RiInformationLine,
  RiContactsLine,
  RiDeleteBinLine,
  RiHeartFill,
} from "react-icons/ri";

import { WishlistContext } from "../../context/WishlistContext";

function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const { wishlist, toggleWishlist } = useContext(WishlistContext);

  // موقت تا زمانی که CartContext بسازی
  const cart = [];

  const links = [
    {
      title: "خانه",
      path: "/",
      icon: <RiHome5Line size={22} />,
    },
    {
      title: "همه محصولات",
      path: "/products",
      icon: <RiStore2Line size={22} />,
    },
    {
      title: "درباره ما",
      path: "/about",
      icon: <RiInformationLine size={22} />,
    },
    {
      title: "ارتباط با ما",
      path: "/contact",
      icon: <RiContactsLine size={22} />,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <header
        className="
        lg:hidden
        fixed top-4 left-1/2 -translate-x-1/2
        z-[999]
        w-[calc(100%-24px)]
        h-16
        rounded-[28px]
        bg-white/75
        backdrop-blur-2xl
        border border-white/60
        shadow-[0_15px_40px_rgba(0,0,0,.08)]
        px-4
      "
      >
        <div className="h-full flex items-center justify-between">
          {/* Menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="
            w-11 h-11
            rounded-2xl
            bg-zinc-100
            flex items-center justify-center cursor-pointer
          "
          >
            <RiMenu4Line size={24} />
          </button>

          {/* Logo */}
          <NavLink
            to="/"
            className="
            text-xl
            font-black
            tracking-tight
          "
          >
            Cyber<span className="text-violet-600">Store</span>
          </NavLink>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Wishlist */}
            <button
              onClick={() => setWishlistOpen(true)}
              className="
              relative
              w-11 h-11
              rounded-2xl
              bg-zinc-100
              flex items-center justify-center cursor-pointer
            "
            >
              <RiHeart3Line size={20} />

              {wishlist.length > 0 && (
                <span
                  className="
                  absolute
                  -top-1
                  -right-1
                  w-5 h-5
                  rounded-full
                  bg-rose-500
                  text-white
                  text-[10px]
                  flex items-center justify-center
                "
                >
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart */}
            <button
              onClick={() => setCartOpen(true)}
              className="
              relative
              w-11 h-11
              rounded-2xl
              bg-zinc-100
              flex items-center justify-center cursor-pointer
            "
            >
              <RiShoppingCart2Line size={20} />

              {cart.length > 0 && (
                <span
                  className="
                  absolute
                  -top-1
                  -right-1
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
            </button>

            {/* Profile */}
            {/* <NavLink
              to="/profile"
              className="
              w-11 h-11
              rounded-2xl
              bg-violet-600
              text-white
              flex items-center justify-center
            "
            >
              <RiUser3Line size={20} />
            </NavLink> */}
          </div>
        </div>
      </header>

      {/* ================= Drawer Overlay ================= */}
      {(menuOpen || wishlistOpen || cartOpen) && (
        <div
          onClick={() => {
            setMenuOpen(false);
            setWishlistOpen(false);
            setCartOpen(false);
          }}
          className="
          fixed inset-0
          z-[998]
          bg-black/40
          backdrop-blur-sm
        "
        />
      )}

      {/* ================= Menu Drawer ================= */}
      <aside
        className={`
        fixed top-0 right-0 z-[999]
        h-screen w-[320px]
        bg-white/90
        backdrop-blur-3xl
        border-l border-zinc-100
        transition-all duration-500
        shadow-[-20px_0_60px_rgba(0,0,0,.08)]
        ${menuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="p-6 flex items-center justify-between border-b border-zinc-100">
          <h2 className="font-black text-xl">
            Tech<span className="text-violet-600">Store</span>
          </h2>

          <button
            onClick={() => setMenuOpen(false)}
            className="
            w-11 h-11
            rounded-2xl
            bg-zinc-100
            flex items-center justify-center
          "
          >
            <RiCloseLine size={24} />
          </button>
        </div>

        <nav className="p-5 space-y-3">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `
                h-11
                px-5
                rounded-lg
                flex items-center gap-4
                transition-all duration-300
                ${
                  isActive
                    ? "bg-violet-600 text-white shadow-lg"
                    : "text-zinc-700 hover:bg-zinc-100"
                }
              `
              }
            >
              {item.icon}
              <span className="font-medium">{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* ================= Wishlist Sheet ================= */}
      <div
        className={`
        fixed bottom-0 left-0 right-0 z-[1000]
        h-[75vh]
        bg-white
        rounded-t-[36px]
        transition-all duration-500
        ${wishlistOpen ? "translate-y-0" : "translate-y-full"}
      `}
      >
        <div className="p-6 border-b border-zinc-100 flex justify-between items-center">
          <h2 className="font-bold text-lg">علاقه‌مندی‌ها</h2>

          <button onClick={() => setWishlistOpen(false)}>
            <RiCloseLine size={28} />
          </button>
        </div>

        <div className="p-5 overflow-y-auto h-[calc(100%-90px)] space-y-4">
          {wishlist.length > 0 ? (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="
                flex items-center gap-4
                p-4 rounded-3xl
                border border-zinc-100
                bg-zinc-50
              "
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />

                <div className="flex-1">
                  <p className="line-clamp-2 text-sm text-zinc-800">
                    {item.title}
                  </p>

                  <p className="mt-3 font-bold text-zinc-900">
                    {item.price.toLocaleString("fa-IR")} تومان
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <RiHeartFill size={20} className="text-rose-500" />

                  <button onClick={() => toggleWishlist(item)}>
                    <RiDeleteBinLine
                      size={20}
                      className="text-zinc-400 hover:text-red-500"
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-zinc-400">
              <RiHeart3Line size={48} />
              <p className="mt-4">هنوز محصولی به علاقه‌مندی‌ها اضافه نشده</p>
            </div>
          )}
        </div>
      </div>

      {/* ================= Cart Sheet ================= */}
      <div
        className={`
        fixed bottom-0 left-0 right-0 z-[1000]
        h-[80vh]
        bg-white
        rounded-t-[36px]
        transition-all duration-500
        ${cartOpen ? "translate-y-0" : "translate-y-full"}
      `}
      >
        <div className="p-6 border-b border-zinc-100 flex justify-between items-center">
          <h2 className="font-bold text-lg">سبد خرید</h2>

          <button onClick={() => setCartOpen(false)}>
            <RiCloseLine size={28} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-zinc-400">
            <RiShoppingCart2Line size={48} />
            <p className="mt-4">سبد خرید شما خالی است</p>
          </div>
        ) : (
          <>
            <div className="p-5 overflow-y-auto space-y-4 h-[calc(100%-180px)]">
              {/* Cart Items */}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-zinc-100 bg-white">
              <div className="flex justify-between mb-4">
                <span className="text-zinc-500">مبلغ کل</span>

                <span className="font-bold text-xl">۰ تومان</span>
              </div>

              <button
                className="
                w-full h-14
                rounded-2xl
                bg-violet-600
                text-white
                font-medium
                shadow-[0_10px_30px_rgba(139,92,246,.35)]
              "
              >
                ادامه فرآیند خرید
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MobileNavbar;
