import React from "react";

function FooterBanner() {
  return (
    <div className="text-center space-y-5 my-10 p-10 bg-linear-30 from-zinc-700 to-zinc-950">
      <h3 className="font-morabbaMedium text-5xl text-white">
        از تخفیف جا نمونی
      </h3>
      <p className="text-sm text-gray-400">تخفیف تابستانی برای آیفون سری 14</p>
      <button className="text-white border border-white rounded-md w-28 py-1 hover:bg-white hover:text-black transition-colors cursor-pointer">
        خرید آنی
      </button>
    </div>
  );
}

export default FooterBanner;
