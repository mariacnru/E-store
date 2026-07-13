import React from "react";

function ContactCard({ icon: Icon, title, text }) {
  return (
    <div className="bg-white border border-zinc-200 rounded-3xl p-6 text-center shadow-2xl shadow-gray-200">
      <Icon size={30} className="mx-auto text-violet-600 mb-4" />

      <h2 className="font-bold">{title}</h2>

      <p className="text-zinc-500 mt-3">{text}</p>
    </div>
  );
}

export default ContactCard;
