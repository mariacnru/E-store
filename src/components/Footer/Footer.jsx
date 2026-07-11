import React from "react";
import {
  RiFacebookFill,
  RiInstallFill,
  RiTiktokFill,
  RiTwitterFill,
} from "react-icons/ri";

function Footer() {
  return (
    <div className="bg-black text-white lg:h-62 p-10 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-5 lg:*:justify-self-center">
      <div className="flex flex-col justify-between gap-5 h-full">
        <div className="space-y-2">
          <h3 className="font-morabbaMedium text-2xl">سایبر</h3>
          <p className="text-sm text-gray-200">
            عرضه کننده کالای دیجیتال به قسطی و نقدی
          </p>
        </div>
        <div className="flex items-center gap-5">
          <span className="hover:text-(--accent) transition-colors cursor-pointer">
            <RiTwitterFill size={20} />
          </span>
          <span className="hover:text-(--accent) transition-colors cursor-pointer">
            <RiFacebookFill size={20} />
          </span>
          <span className="hover:text-(--accent) transition-colors cursor-pointer">
            <RiTiktokFill size={20} />
          </span>
          <span className="hover:text-(--accent) transition-colors cursor-pointer">
            <RiInstallFill size={20} />
          </span>
        </div>
      </div>

      <ul className="space-y-1 text-sm *:cursor-pointer *:not-first:hover:text-(--accent) *:not-[1]:transition-colors">
        <li className="font-semibold mb-2"> لینک‌های سریع</li>
        <li className="text-gray-300">صفحه اصلی</li>
        <li className="text-gray-300">فروشگاه</li>
        <li className="text-gray-300">محصولات جدید</li>
        <li className="text-gray-300">محصولات پرفروش</li>
        <li className="text-gray-300">وبلاگ</li>
      </ul>

      <ul className="space-y-1 text-sm *:cursor-pointer *:not-first:hover:text-(--accent) *:not-[1]:transition-colors">
        <li className="font-semibold mb-2">خدمات پس از فروش</li>
        <li className="text-gray-300">ضمانت اصالت و سلامت فیزیکی کالا</li>
        <li className="text-gray-300">۷ روز ضمانت بازگشت کالا</li>
        <li className="text-gray-300">
          پشتیبانی و مشاوره تخصصی قبل و بعد از خرید
        </li>
        <li className="text-gray-300">
          ارسال سریع و پیگیری سفارش تا زمان تحویل
        </li>
        <li className="text-gray-300">گارانتی معتبر و خدمات تعمیر و تعویض</li>
      </ul>
    </div>
  );
}

export default Footer;
