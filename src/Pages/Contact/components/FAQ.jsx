import React from "react";
import { faqData } from "../../../Data/Contact";
import FAQCard from "./FAQCard";

function FAQ() {
  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-10">سوالات متداول</h2>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqData.map((item) => (
          <FAQCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
