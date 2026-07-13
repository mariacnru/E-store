import React from "react";
import { RiAddLine } from "react-icons/ri";

function FAQCard({ id, question, answer }) {
  return (
    <details
      key={id}
      className="bg-white group border border-zinc-200 rounded-2xl overflow-hidden"
    >
      <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
        {question}

        <span className="text-2xl transition-transform duration-300 group-open:rotate-45">
          <RiAddLine size={15}/>
        </span>
      </summary>

      <div className="px-6 pb-6 text-zinc-600 leading-8 text-sm">{answer}</div>
    </details>
  );
}

export default FAQCard;
