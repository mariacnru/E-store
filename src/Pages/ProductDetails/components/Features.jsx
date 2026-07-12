import React from "react";
import { RiRefreshLine, RiShieldCheckLine, RiTruckLine } from "react-icons/ri";

function Features() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-10">
      <div className="border border-zinc-200 rounded-2xl p-4 text-center">
        <RiTruckLine className="mx-auto mb-2 text-violet-600" size={24} />
        <p className="text-xs text-zinc-600">ارسال سریع</p>
      </div>

      <div className="border border-zinc-200 rounded-2xl p-4 text-center">
        <RiShieldCheckLine className="mx-auto mb-2 text-violet-600" size={24} />
        <p className="text-xs text-zinc-600">ضمانت اصالت</p>
      </div>

      <div className="border border-zinc-200 rounded-2xl p-4 text-center">
        <RiRefreshLine className="mx-auto mb-2 text-violet-600" size={24} />
        <p className="text-xs text-zinc-600">بازگشت کالا</p>
      </div>
    </div>
  );
}

export default Features;
