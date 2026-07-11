import React from "react";
import {
  RiCustomerService2Line,
  RiShieldCheckLine,
  RiTruckLine,
  RiRefreshLine,
} from "react-icons/ri";

function About() {
  const stats = [
    { id: 1, value: "15K+", title: "مشتری فعال" },
    { id: 2, value: "5K+", title: "سفارش موفق" },
    { id: 3, value: "500+", title: "محصول متنوع" },
    { id: 4, value: "98%", title: "رضایت مشتری" },
  ];

  const features = [
    {
      id: 1,
      icon: <RiShieldCheckLine size={22} />,
      title: "ضمانت اصالت کالا",
      desc: "تمام محصولات با ضمانت اصالت و سلامت فیزیکی ارائه می‌شوند.",
    },
    {
      id: 2,
      icon: <RiTruckLine size={22} />,
      title: "ارسال سریع",
      desc: "سفارشات در سریع‌ترین زمان ممکن پردازش و ارسال می‌شوند.",
    },
    {
      id: 3,
      icon: <RiCustomerService2Line size={22} />,
      title: "پشتیبانی تخصصی",
      desc: "قبل و بعد از خرید کنار شما هستیم.",
    },
    {
      id: 4,
      icon: <RiRefreshLine size={22} />,
      title: "بازگشت کالا",
      desc: "امکان بازگشت کالا مطابق شرایط فروشگاه فراهم است.",
    },
  ];

  return (
    <main className="bg-zinc-50 min-h-screen">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-5 py-24 text-center">
        <span className="text-sm text-violet-600 bg-violet-50 px-2 py-1 rounded-full border border-violet-200 font-medium">
          درباره فروشگاه
        </span>

        <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mt-4 leading-tight">
          خرید مطمئن کالای دیجیتال،
          <br />
          ساده‌تر از همیشه
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-zinc-600 leading-8 text-sm">
          ما فعالیت خود را با هدف ارائه تجربه‌ای مطمئن، سریع و شفاف در خرید
          کالای دیجیتال آغاز کردیم و امروز تلاش می‌کنیم با ارائه محصولات اصل،
          پشتیبانی واقعی و خدمات مناسب، اعتماد مشتریان را حفظ کنیم.
        </p>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-zinc-200 rounded-2xl p-6 text-center"
            >
              <h2 className="text-3xl font-bold text-violet-600">
                {item.value}
              </h2>

              <p className="text-zinc-500 text-sm mt-2">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-5 py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-sm text-violet-600 font-medium">
              داستان ما
            </span>

            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mt-3">
              چرا این فروشگاه را ایجاد کردیم؟
            </h2>

            <p className="text-zinc-600 leading-8 mt-6">
              خرید کالای دیجیتال نباید همراه با نگرانی درباره اصالت کالا،
              گارانتی یا خدمات پس از فروش باشد. به همین دلیل تلاش کردیم فروشگاهی
              ایجاد کنیم که شفافیت، کیفیت خدمات و رضایت مشتری در آن اولویت داشته
              باشد.
            </p>

            <p className="text-zinc-600 leading-8 mt-4">
              هدف ما فقط فروش محصول نیست؛ بلکه ایجاد تجربه‌ای است که باعث شود
              برای خرید بعدی نیز با اطمینان به ما بازگردید.
            </p>
          </div>

          <div className="bg-linear-30 from-violet-200 to-white border border-zinc-200 rounded-3xl h-80 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-6xl font-bold text-violet-600">2025</h3>
              <p className="text-zinc-500 mt-3">
                آغاز مسیر ما در دنیای تکنولوژی
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-5 pb-24">
        <div className="text-center">
          <span className="text-sm text-violet-600 font-medium">
            مزیت‌های ما
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mt-3">
            چرا مشتریان ما را انتخاب می‌کنند؟
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-zinc-200 rounded-2xl p-6 hover:border-violet-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-200 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center group-hover:-translate-y-2 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-zinc-900 mt-5">
                {item.title}
              </h3>

              <p className="text-sm text-zinc-500 leading-7 mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-5 pb-24">
        <div className="bg-white border border-zinc-200 rounded-3xl py-14 px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-zinc-900">
            آماده یک خرید مطمئن هستید؟
          </h2>

          <p className="text-zinc-600 mt-4 max-w-xl mx-auto leading-8">
            محصولات متنوع، ارسال سریع و پشتیبانی واقعی در کنار شماست تا تجربه
            بهتری از خرید آنلاین داشته باشید.
          </p>

          <button className="mt-8 px-6 py-3 bg-violet-600 text-white rounded-xl hover:bg-violet-700 transition-colors cursor-pointer">
            مشاهده محصولات
          </button>
        </div>
      </section>
    </main>
  );
}

export default About;
