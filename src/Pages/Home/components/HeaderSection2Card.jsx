import React from "react";

function HeaderSection2Card({ title, desceription, img, imgPhone }) {
  return (
    <div className="flex justify-center text-center md:text-right bg-white nth-2:bg-stone-100 nth-3:bg-zinc-800 nth-3:text-white md:first:col-span-2 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5">
        <div className="px-5 space-y-2">
          <h3 className="text-3xl font-morabbaMedium">{title}</h3>
          <p className="text-sm text-(--secondaryPassage)">{desceription}</p>
        </div>
        <img src={img} alt="" className="w-fit hidden md:block" />
        <img src={imgPhone} alt="" className="w-fit md:hidden" />
      </div>
    </div>
  );
}

export default HeaderSection2Card;
