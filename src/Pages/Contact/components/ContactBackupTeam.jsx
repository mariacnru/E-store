import React from 'react'
import { RiCustomerService2Line } from 'react-icons/ri';

function ContactBackupTeam() {
  return (
    <div className="relative overflow-hidden border border-zinc-200 rounded-3xl min-h-[500px] bg-white flex items-center justify-center">
      {/* Grid Background */}
      <div
        className="
      absolute inset-0
      bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
      bg-size-[40px_40px]
      opacity-40
    "
      />

      {/* Glow */}
      <div className="absolute w-96 h-96 bg-violet-500/15 blur-3xl rounded-full" />

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        <div className="w-24 h-24 rounded-full bg-violet-100 flex items-center justify-center mx-auto">
          <RiCustomerService2Line size={42} className="text-violet-600" />
        </div>

        <h2 className="text-4xl font-bold mt-8">
          تیم پشتیبانی همیشه در کنار شماست
        </h2>

        <p className="text-zinc-500 mt-6 leading-8 max-w-lg mx-auto">
          اگر درباره سفارش‌ها، محصولات یا فرایند خرید سوالی دارید، کارشناسان ما
          در سریع‌ترین زمان ممکن پاسخگوی شما خواهند بود. هدف ما ارائه تجربه‌ای
          ساده، سریع و لذت‌بخش از خرید آنلاین است.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <div className="px-6 py-3 rounded-2xl bg-white border border-zinc-200 shadow-sm">
            📞 021-12345678
          </div>

          <div className="px-6 py-3 rounded-2xl bg-white border border-zinc-200 shadow-sm">
            ✉️ support@store.com
          </div>
        </div>

        <button className="mt-8 px-8 h-14 rounded-2xl bg-zinc-900 text-white hover:bg-violet-600 transition-all duration-300">
          تماس با پشتیبانی
        </button>
      </div>
    </div>
  );
}

export default ContactBackupTeam