import React from "react";

function Price({ price, finalPrice, discount }) {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4">
      <span className="text-4xl font-bold">{finalPrice.toLocaleString()}</span>

      <span className="text-lg">تومان</span>

      {discount && (
        <>
          <span className="text-zinc-400 line-through">
            {price.toLocaleString()}
          </span>

          <span className="bg-red-100 text-red-500 px-2 py-1 rounded-lg text-sm">
            %{discount}
          </span>
        </>
      )}
    </div>
  );
}

export default Price;
