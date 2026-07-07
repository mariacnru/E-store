import React from "react";

function CategorieCard({ icon, title }) {
  return (
    <div className="bg-gray-100 w-40 rounded-lg p-5 flex flex-col items-center gap-2 hover:bg-violet-600 hover:text-white hover:-translate-y-4 cursor-pointer transition-all">
      <span>{icon}</span>
      <p className="text-sm">{title}</p>
    </div>
  );
}

export default CategorieCard;
