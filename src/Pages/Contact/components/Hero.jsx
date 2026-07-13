import React from "react";

function Hero() {
  return (
    <div className="text-center mb-16">
      <span className="text-sm text-violet-600 bg-violet-50 px-2 py-1 rounded-full border border-violet-200 font-medium">
        ارتباط با ما
      </span>

      <h1 className="text-5xl font-bold mt-4">
        خوشحال می‌شویم صدایتان را بشنویم
      </h1>

      <p className="text-zinc-500 mt-6 max-w-2xl mx-auto leading-8">
        اگر سوالی درباره محصولات، سفارش‌ها یا همکاری دارید، از طریق فرم زیر یا
        اطلاعات تماس با ما در ارتباط باشید.
      </p>
    </div>
  );
}

export default Hero;
