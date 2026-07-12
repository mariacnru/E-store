import React from "react";

function Color({ colors, setSelectedColor }) {
  return (
    <div className="flex items-center gap-5">
      <h3 className="">انتخاب رنگ:</h3>
      <div className="flex gap-3">
        {colors?.map((color) => (
          <label key={color.id} className="cursor-pointer">
            <input
              type="radio"
              name="product-color"
              value={color.value}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="hidden peer"
            />

            <div
              style={{ backgroundColor: color.value }}
              className="
          w-10 h-10 rounded-full border border-zinc-200
          peer-checked:ring-2
          peer-checked:ring-gray-400
          peer-checked:ring-offset-2
        "
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default Color;
