import React from "react";
import {
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTimeLine,
} from "react-icons/ri";

function HeroCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white border border-zinc-200 rounded-3xl p-6 text-center shadow-2xl shadow-gray-200">
        <RiPhoneLine size={30} className="mx-auto text-violet-600 mb-4" />

        <h3 className="font-bold">تلفن</h3>

        <p className="text-zinc-500 mt-3">021-12345678</p>
      </div>

      <div className="bg-white border border-zinc-200 rounded-3xl p-6 text-center shadow-2xl shadow-gray-200">
        <RiMailLine size={30} className="mx-auto text-violet-600 mb-4" />

        <h3 className="font-bold">ایمیل</h3>

        <p className="text-zinc-500 mt-3">support@store.com</p>
      </div>

      <div className="bg-white border border-zinc-200 rounded-3xl p-6 text-center shadow-2xl shadow-gray-200">
        <RiMapPinLine size={30} className="mx-auto text-violet-600 mb-4" />

        <h3 className="font-bold">آدرس</h3>

        <p className="text-zinc-500 mt-3">تهران، خیابان ولیعصر</p>
      </div>

      <div className="bg-white border border-zinc-200 rounded-3xl p-6 text-center shadow-2xl shadow-gray-200">
        <RiTimeLine size={30} className="mx-auto text-violet-600 mb-4" />

        <h3 className="font-bold">ساعات کاری</h3>

        <p className="text-zinc-500 mt-3">۹ صبح تا ۶ عصر</p>
      </div>
    </div>
  );
}

export default HeroCards;
