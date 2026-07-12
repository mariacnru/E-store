import React from "react";
import { RiRefreshLine, RiShieldCheckLine, RiTruckLine } from "react-icons/ri";

function Features() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
      <div className="flex items-center gap-2">
        <div className="w-15 h-15 flex justify-center items-center rounded-xl bg-gray-100">
          <RiTruckLine className="mx-auto mb-2 text-violet-600" size={24} />
        </div>
        <div className="text-xs space-y-1">
          <p className="text-zinc-600">ارسال رایگان</p>
          <span className="">1-2 روز</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-15 h-15 flex justify-center items-center rounded-xl bg-gray-100">
          <RiRefreshLine className="mx-auto mb-2 text-violet-600" size={24} />
        </div>
        <div className="text-xs space-y-1">
          <p className="text-zinc-600">بازگشت کالا</p>
          <span className="">تا 7 روز</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-15 h-15 flex justify-center items-center rounded-xl bg-gray-100">
          <RiShieldCheckLine
            className="mx-auto mb-2 text-violet-600"
            size={24}
          />
        </div>
        <div className="text-xs space-y-1">
          <p className="text-zinc-600">ضمانت اصالت</p>
          <span className="">original</span>
        </div>
      </div>
    </div>
  );
}

export default Features;
