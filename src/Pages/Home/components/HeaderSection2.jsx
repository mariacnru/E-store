import React from "react";
import HeaderSection2Card from "./HeaderSection2Card";

function HeaderSection2() {
  const cardData = [
    {
      id: 1,
      title: "پلی استیشن 5",
      desceription:
        "پردازنده‌های مرکزی، پردازنده‌های گرافیکی فوق‌العاده قدرتمند و یک SSD با ورودی/خروجی یکپارچه، تجربه پلی‌استیشن شما را از نو تعریف خواهند کرد.",
      img: "/Images/hero/PlayStation.webp",
      imgPhone: "/Images/hero/heroSection2Mobile/PlayStation.webp",
    },
    {
      id: 2,
      title: "اپل ایرپاد مکس",
      desceription:
        "پردازش هوشمند صدا؛ کافی است گوش دهید، قدرتش را احساس کنید.",
      img: "/Images/hero/apple_airpods_max.webp",
      imgPhone: "/Images/hero/heroSection2Mobile/apple_airpds.webp",
    },
    {
      id: 3,
      title: "اپل ویژن پرو",
      desceription: "سرگرمی را عمیق‌تر و واقعی‌تر تجربه کنید.",
      img: "/Images/hero/apple_vision_pro.webp",
      imgPhone: "/Images/hero/heroSection2Mobile/apple_vision.webp",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2">
      <div className="flex grow">
        <div className="bg-stone-100">
          <div className="flex flex-col md:flex-row justify-between items-center h-auto">
            <img
              src="/Images/hero/MacBook_Pro_14.webp"
              alt=""
              className="w-fit hidden md:block"
            />
            <img
              src="/public//Images/hero/heroSection2Mobile/MacBook Pro 14.webp"
              alt=""
              className="w-full md:hidden"
            />
            <div className="px-5 pb-5 space-y-2 text-center md:text-right">
              <h3 className="text-3xl font-morabbaMedium">مک بوک ایر</h3>
              <p className="text-sm text-(--secondaryPassage)">
                مک‌بوک ایر ۱۵ اینچی جدید با نمایشگر بزرگ و خیره‌کننده‌ی Liquid
                Retina، فضای بیشتری برای انجام کارها و لذت بردن از محتوای مورد
                علاقه‌تان در اختیارتان قرار می‌دهد.
              </p>
              <button
                className=" px-8 py-2 rounded-md bg-violet-600 text-white text-sm shadow-[0_5px_0_#4c1d95] transition-all duration-150 hover:translate-y-1 hover:shadow-[0_3px_0_#4c1d95] active:translate-y-1.25 active:shadow-none cursor-pointer"
              >
                همین الان بخر
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {cardData.map((item) => (
          <HeaderSection2Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default HeaderSection2;
