import {
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine,
  RiTimeLine,
  RiCustomerService2Line,
} from "react-icons/ri";
import Hero from "./components/Hero";
import HeroCards from "./components/HeroCards";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      {/* Hero */}
      <Hero />

      {/* Contact Cards */}
      <HeroCards />

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
              اگر درباره سفارش‌ها، محصولات یا فرایند خرید سوالی دارید، کارشناسان
              ما در سریع‌ترین زمان ممکن پاسخگوی شما خواهند بود. هدف ما ارائه
              تجربه‌ای ساده، سریع و لذت‌بخش از خرید آنلاین است.
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
      </div>

      {/* FAQ */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-10">سوالات متداول</h2>

        <div className="space-y-4 max-w-4xl mx-auto">
          <details className="group border border-zinc-200 rounded-2xl overflow-hidden">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
              مدت زمان ارسال سفارش چقدر است؟
              <span className="text-2xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="px-6 pb-6 text-zinc-600 leading-8 text-sm">
              تمامی سفارش‌ها پس از ثبت و تایید پرداخت، در کوتاه‌ترین زمان ممکن
              پردازش و آماده ارسال می‌شوند. سفارش‌های شهر تهران معمولاً بین ۱ تا
              ۲ روز کاری و سفارش‌های سایر شهرها بین ۲ تا ۵ روز کاری به دست
              مشتریان می‌رسند. در زمان جشنواره‌ها یا مناسبت‌های خاص ممکن است
              زمان پردازش سفارش کمی افزایش یابد که در این صورت از طریق پیامک یا
              ایمیل به اطلاع شما خواهد رسید.
            </div>
          </details>

          <details className="group border border-zinc-200 rounded-2xl overflow-hidden">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
              آیا امکان بازگشت یا تعویض کالا وجود دارد؟
              <span className="text-2xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="px-6 pb-6 text-zinc-600 leading-8 text-sm">
              بله، در صورتی که کالا دارای ایراد فنی، آسیب‌دیدگی در زمان حمل و
              نقل یا مغایرت با سفارش ثبت شده باشد، می‌توانید تا ۷ روز پس از
              تحویل کالا درخواست بازگشت یا تعویض ثبت کنید. پس از بررسی و تایید
              تیم پشتیبانی، مبلغ پرداختی به حساب شما بازگردانده شده یا کالای
              جایگزین ارسال خواهد شد.
            </div>
          </details>

          <details className="group border border-zinc-200 rounded-2xl overflow-hidden">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
              چگونه می‌توانم وضعیت سفارش خود را پیگیری کنم؟
              <span className="text-2xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="px-6 pb-6 text-zinc-600 leading-8 text-sm">
              پس از ثبت سفارش، یک کد رهگیری برای شما ارسال می‌شود که از طریق پنل
              کاربری و بخش «سفارش‌های من» می‌توانید وضعیت سفارش خود را مشاهده
              کنید. همچنین در هر مرحله از پردازش، بسته‌بندی و ارسال، اطلاع‌رسانی
              لازم از طریق پیامک یا ایمیل انجام خواهد شد.
            </div>
          </details>

          <details className="group border border-zinc-200 rounded-2xl overflow-hidden">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
              آیا تمامی محصولات دارای ضمانت اصالت هستند؟
              <span className="text-2xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="px-6 pb-6 text-zinc-600 leading-8 text-sm">
              تمامی محصولات عرضه شده در فروشگاه با ضمانت اصالت و سلامت فیزیکی
              کالا ارائه می‌شوند. محصولات برندهای معتبر همراه با گارانتی رسمی
              شرکت‌های ارائه‌دهنده خدمات پس از فروش عرضه می‌شوند و اطلاعات مربوط
              به گارانتی هر محصول در صفحه همان کالا قابل مشاهده است.
            </div>
          </details>

          <details className="group border border-zinc-200 rounded-2xl overflow-hidden">
            <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
              چه روش‌هایی برای پرداخت سفارش وجود دارد؟
              <span className="text-2xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            <div className="px-6 pb-6 text-zinc-600 leading-8 text-sm">
              کاربران می‌توانند سفارش خود را از طریق درگاه پرداخت آنلاین و با
              استفاده از تمامی کارت‌های عضو شبکه شتاب پرداخت کنند. تمامی
              تراکنش‌ها در بستر امن بانکی انجام می‌شود و اطلاعات پرداخت کاربران
              نزد فروشگاه ذخیره نخواهد شد.
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}

export default Contact;
