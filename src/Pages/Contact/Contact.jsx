import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiTimeLine,
} from "react-icons/ri";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <span className="text-violet-600 font-medium">ارتباط با ما</span>

        <h1 className="text-5xl font-bold mt-4">
          خوشحال می‌شویم صدایتان را بشنویم
        </h1>

        <p className="text-zinc-500 mt-6 max-w-2xl mx-auto leading-8">
          اگر سوالی درباره محصولات، سفارش‌ها یا همکاری دارید، از طریق فرم زیر یا
          اطلاعات تماس با ما در ارتباط باشید.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white border border-zinc-200 rounded-3xl p-6 text-center">
          <RiPhoneLine size={30} className="mx-auto text-violet-600 mb-4" />

          <h3 className="font-bold">تلفن</h3>

          <p className="text-zinc-500 mt-3">021-12345678</p>
        </div>

        <div className="bg-white border border-zinc-200 rounded-3xl p-6 text-center">
          <RiMailLine size={30} className="mx-auto text-violet-600 mb-4" />

          <h3 className="font-bold">ایمیل</h3>

          <p className="text-zinc-500 mt-3">support@store.com</p>
        </div>

        <div className="bg-white border border-zinc-200 rounded-3xl p-6 text-center">
          <RiMapPinLine size={30} className="mx-auto text-violet-600 mb-4" />

          <h3 className="font-bold">آدرس</h3>

          <p className="text-zinc-500 mt-3">تهران، خیابان ولیعصر</p>
        </div>

        <div className="bg-white border border-zinc-200 rounded-3xl p-6 text-center">
          <RiTimeLine size={30} className="mx-auto text-violet-600 mb-4" />

          <h3 className="font-bold">ساعات کاری</h3>

          <p className="text-zinc-500 mt-3">۹ صبح تا ۶ عصر</p>
        </div>
      </div>

      {/* Form + Map */}
      <div className="grid lg:grid-cols-2 gap-10 mt-20">
        {/* Form */}
        <div className="border border-zinc-200 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-8">ارسال پیام</h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="w-full h-14 rounded-2xl border border-zinc-200 px-5 outline-none focus:border-violet-600"
            />

            <input
              type="email"
              placeholder="ایمیل"
              className="w-full h-14 rounded-2xl border border-zinc-200 px-5 outline-none focus:border-violet-600"
            />

            <input
              type="text"
              placeholder="موضوع"
              className="w-full h-14 rounded-2xl border border-zinc-200 px-5 outline-none focus:border-violet-600"
            />

            <textarea
              rows="6"
              placeholder="پیام شما..."
              className="w-full rounded-2xl border border-zinc-200 p-5 outline-none resize-none focus:border-violet-600"
            />

            <button className="w-full h-14 rounded-2xl bg-zinc-900 text-white hover:bg-violet-600 transition-all duration-300">
              ارسال پیام
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="border border-zinc-200 rounded-3xl overflow-hidden min-h-[500px]">
          <div className="w-full h-full bg-zinc-100 flex items-center justify-center text-zinc-500">
            نقشه فروشگاه
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-10">سوالات متداول</h2>

        <div className="space-y-4 max-w-4xl mx-auto">
          <div className="border border-zinc-200 rounded-2xl p-6">
            <h3 className="font-semibold">زمان ارسال سفارش‌ها چقدر است؟</h3>

            <p className="text-zinc-500 mt-3">
              سفارش‌ها معمولاً بین ۱ تا ۳ روز کاری ارسال می‌شوند.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-2xl p-6">
            <h3 className="font-semibold">امکان بازگشت کالا وجود دارد؟</h3>

            <p className="text-zinc-500 mt-3">
              بله، تا ۷ روز پس از تحویل امکان بازگشت کالا وجود دارد.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-2xl p-6">
            <h3 className="font-semibold">چگونه سفارش خود را پیگیری کنم؟</h3>

            <p className="text-zinc-500 mt-3">
              از طریق پنل کاربری یا تماس با پشتیبانی.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
