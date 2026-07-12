import React from "react";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

function Quantity({ quantity, setQuantity }) {
  return (
    <div className="mt-8 flex items-center gap-4">
      <span className="text-zinc-600">تعداد:</span>

      <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden">
        <button
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          className="w-12 h-12 flex items-center justify-center"
        >
          <RiSubtractLine />
        </button>

        <span className="w-12 text-center">{quantity}</span>

        <button
          onClick={() => setQuantity((prev) => prev + 1)}
          className="w-12 h-12 flex items-center justify-center"
        >
          <RiAddLine />
        </button>
      </div>
    </div>
  );
}

export default Quantity;
