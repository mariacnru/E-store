import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function changeHandler(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "نام و نام خانوادگی الزامی است.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "ایمیل الزامی است.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "ایمیل معتبر نیست.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "شماره تماس الزامی است.";
    }

    if (!formData.subject) {
      newErrors.subject = "موضوع پیام را انتخاب کنید.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "متن پیام نمی‌تواند خالی باشد.";
    } else if (formData.message.length < 20) {
      newErrors.message = "پیام باید حداقل 20 کاراکتر باشد.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 2000);
  }

  return (
    <div className="border border-zinc-200 rounded-3xl p-8 bg-white shadow-xl shadow-zinc-100">
      <h2 className="text-2xl font-bold mb-2">ارسال پیام</h2>

      <p className="text-zinc-500 mb-8">
        سوال، پیشنهاد یا انتقادی دارید؟ پیام خود را برای ما ارسال کنید.
      </p>

      {isSuccess && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-700 rounded-2xl p-4">
          پیام شما با موفقیت ارسال شد. کارشناسان ما در اولین فرصت با شما تماس
          خواهند گرفت.
        </div>
      )}

      <form onSubmit={submitHandler} className="space-y-5">
        <div>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={changeHandler}
            placeholder="نام و نام خانوادگی"
            className={`w-full h-14 rounded-2xl border px-5 outline-none transition-all
            ${
              errors.fullName
                ? "border-red-400"
                : "border-zinc-200 focus:border-violet-600"
            }`}
          />

          {errors.fullName && (
            <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="ایمیل"
              className={`w-full h-14 rounded-2xl border px-5 outline-none transition-all
              ${
                errors.email
                  ? "border-red-400"
                  : "border-zinc-200 focus:border-violet-600"
              }`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={changeHandler}
              placeholder="شماره تماس"
              className={`w-full h-14 rounded-2xl border px-5 outline-none transition-all
              ${
                errors.phone
                  ? "border-red-400"
                  : "border-zinc-200 focus:border-violet-600"
              }`}
            />

            {errors.phone && (
              <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
            )}
          </div>
        </div>

        <div>
          <select
            name="subject"
            value={formData.subject}
            onChange={changeHandler}
            className={`w-full h-14 rounded-2xl border px-5 outline-none bg-white transition-all
            ${
              errors.subject
                ? "border-red-400"
                : "border-zinc-200 focus:border-violet-600"
            }`}
          >
            <option value="">موضوع پیام را انتخاب کنید</option>
            <option value="support">پشتیبانی</option>
            <option value="order">پیگیری سفارش</option>
            <option value="suggestion">پیشنهاد و انتقاد</option>
            <option value="cooperation">همکاری</option>
          </select>

          {errors.subject && (
            <p className="text-red-500 text-sm mt-2">{errors.subject}</p>
          )}
        </div>

        <div>
          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={changeHandler}
            placeholder="پیام شما..."
            className={`w-full rounded-2xl border p-5 outline-none resize-none transition-all
            ${
              errors.message
                ? "border-red-400"
                : "border-zinc-200 focus:border-violet-600"
            }`}
          />

          <div className="flex justify-between mt-2">
            {errors.message ? (
              <p className="text-red-500 text-sm">{errors.message}</p>
            ) : (
              <span />
            )}

            <p className="text-sm text-zinc-400">
              {formData.message.length}/500
            </p>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="w-full h-14 rounded-2xl bg-zinc-900 text-white hover:bg-violet-600 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSending ? "در حال ارسال..." : "ارسال پیام"}
        </button>
      </form>
    </div>
  );
}

export default Form;
