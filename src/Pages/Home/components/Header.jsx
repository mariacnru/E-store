import React from "react";
import { Link } from "react-router";

function Header() {
  const floatingProducts = [
    {
      id: 1,
      img: "/Images/homePageProducts/airpods.png",
      className: "-top-8 left-10",
    },
    {
      id: 2,
      img: "/Images/homePageProducts/camera.png",
      className: "top-20 -right-10",
    },
    {
      id: 3,
      img: "/Images/homePageProducts/headphon.png",
      className: "bottom-16 -left-10",
    },
    {
      id: 4,
      img: "/Images/homePageProducts/watch.png",
      className: "-bottom-8 right-12",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Grid Background */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),
        linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
        bg-size-[60px_60px]
      "
      />

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-175 h-175 rounded-full bg-violet-500/20 blur-[150px]" />
      </div>

      {/* Radial Lines */}
      <div className="absolute left-1/2 top-1/2 w-175 h-175 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />

      <div className="absolute left-1/2 top-1/2 w-138 h-138 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />

      <div className="absolute left-1/2 top-1/2 w-100 h-100 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side */}
          <div>
            <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm">
              نسل جدید تکنولوژی
            </span>

            <h1 className="text-6xl lg:text-6xl font-black leading-tight mt-8">
              آینده
              <span className="text-violet-600 block">همین حالاست</span>
            </h1>

            <p className="mt-8 text-zinc-600 leading-9 max-w-xl">
              جدیدترین گوشی‌ها، لپ‌تاپ‌ها، ساعت‌های هوشمند و گجت‌های تکنولوژی را
              با ضمانت اصالت، ارسال سریع و بهترین قیمت تجربه کنید.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">
              <Link
                to="/products"
                className="px-8 h-14 rounded-2xl bg-violet-600 text-white flex items-center justify-center hover:scale-105 transition-all duration-300 shadow-2xl shadow-violet-500/30"
              >
                ورود به آینده
              </Link>

              <Link
                to="/categories"
                className="
                px-8 h-14 rounded-2xl
                border border-zinc-300
                flex items-center justify-center
                hover:border-violet-600
                hover:text-violet-600
                transition-all duration-300
                "
              >
                کشف اکوسیستم
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex justify-center items-center">
            {/* Main Product */}
            <div
              className="
              relative
              w-88
              h-88
              rounded-full
              bg-white/60
              backdrop-blur-2xl
              border border-white/50
              shadow-[0_20px_80px_rgba(139,92,246,0.25)]
              flex items-center justify-center
            "
            >
              <img
                src="/Images/homePageProducts/Iphone 14 pro 1.png"
                className="
                w-65
                hover:scale-110
                transition-all
                duration-500
                drop-shadow-[0_20px_40px_rgba(0,0,0,.25)]
                "
                alt=""
              />

              {/* Floating Products */}
              {floatingProducts.map((product) => (
                <div
                  key={product.id}
                  className={`
                    absolute
                    ${product.className}
                    w-28 h-28
                    rounded-3xl
                    bg-white/80
                    backdrop-blur-xl
                    border border-white
                    shadow-xl
                    flex items-center justify-center
                    hover:scale-110
                    transition-all duration-300
                  `}
                >
                  <img
                    src={product.img}
                    className="w-16 h-16 object-contain"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white to-transparent" />
    </section>
  );
}

export default Header;
