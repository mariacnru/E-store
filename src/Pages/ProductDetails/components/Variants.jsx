import React from "react";

function Variants({ variants, selectedVariant, setSelectedVariant }) {
  return (
    <div className="mt-8">
      <h3 className="font-medium mb-4">انتخاب مدل</h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
        {variants.map((variant) => (
          <button
            key={variant}
            onClick={() => setSelectedVariant(variant)}
            className={`px-4 py-2 rounded-xl border transition-all ${
              selectedVariant === variant
                ? "border-violet-600 bg-violet-50 text-violet-600"
                : "border-zinc-200"
            }`}
          >
            {variant}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Variants;
