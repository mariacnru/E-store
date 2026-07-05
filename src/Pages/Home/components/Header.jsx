import React from "react";

function Header() {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-between items-center px-20 bg-(--priamry) text-center md:text-right">
      <div className="space-y-5">
        <p className="text-(--secondaryPassage) text-sm sm:text-base">
          فرا تر از عالی
        </p>
        <h2 className="text-white text-4xl xs:text-6xl sm:text-7xl whitespace-nowrap">
          آیفون 14 <span className="font-semibold">پرو</span>
        </h2>
        <p className="text-(--secondaryPassage) text-sm sm:text-base">
          ساخته شده برای تغییر و بهترین ها, برای عالی بودن
        </p>
        <button className="font-light text-white border border-white rounded-sm text-xs sm:text-sm px-8 py-2 hover:bg-(--accent) hover:border-transparent transition-colors cursor-pointer">
          همین الان بخر
        </button>
      </div>
      <div className="flex justify-center md:justify-end">
        <img
          src="/Images/hero/Iphone Image.webp"
          alt="phone-img"
          className="w-[83%]"
        />
      </div>
    </div>
  );
}

export default Header;
