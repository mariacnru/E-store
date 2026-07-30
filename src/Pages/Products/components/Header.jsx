import React from "react";

function Header({ slug, listLength }) {
  return (
    <div className="relative overflow-hidden border border-zinc-200 rounded-3xl min-h-50 flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-size-[40px_40px] opacity-40" />

      {/* Glow */}
      <div
        className="absolute w-full h-50"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,92,246,0.18) 0%, rgba(139,92,246,0.1) 35%, rgba(139,92,246,0.04) 60%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-8 text-2xl font-danaMedium mt-8">
        {(slug && (
          <h2 className="">
            جستجو براساس دسته بندی:
            <span>
              {slug === "mobile" && "📱 موبایل و تبلت"}
              {slug === "watch" && "⌚ ساعت هوشمند"}
              {slug === "camera" && "📷 دوربین"}
              {slug === "headphone" && "🎧 هدفون"}
            </span>
          </h2>
        )) ||
          "همه محصولات"}

        <p className="text-sm text-gray-500 mt-2">تعداد محصول: {listLength}</p>
      </div>
    </div>
  );
}

export default Header;
