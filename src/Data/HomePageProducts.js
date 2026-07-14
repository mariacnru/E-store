const homePageProducts = [
  {
    id: 1,
    slug: "headphone",
    title: "ایرپاد پرو اپل",
    price: 12990000,
    saleCount: 324,
    discount: 15,

    img: "/E-store/Images/homePageProducts/airpods.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/airpods.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/camera.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/ipad.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/samsung.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/watch.webp" },
    ],
    rate: 4.8,
    reviewsCount: 127,
    stock: 14,

    colors: [
      { id: 1, value: "#FFFFFF" },
      { id: 2, value: "#D4D4D8" },
      { id: 3, value: "#1F2937" },
      { id: 4, value: "#8B5CF6" },
    ],

    description:
      "ایرپاد پرو اپل با حذف نویز فعال و کیفیت صدای فوق‌العاده، انتخابی ایده‌آل برای موسیقی و مکالمه روزمره است.",

    variants: ["سفید"],

    specifications: {
      برند: "Apple",
      اتصال: "Bluetooth 5.3",
      "حذف نویز": "فعال (ANC)",
      شارژدهی: "30 ساعت",
      مقاومت: "IPX4",
    },
  },

  {
    id: 2,
    title: "دوربین کانن EOS",
    price: 54900000,
    saleCount: 87,

    img: "/E-store/Images/homePageProducts/camera.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/camera.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/airpods.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/headphon.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/Iphone 14 pro 1.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/smart watch.webp" },
    ],
    rate: 4.6,
    reviewsCount: 52,
    stock: 7,

    colors: [
      { id: 1, value: "#FFFFFF" },
      { id: 2, value: "#D4D4D8" },
      { id: 3, value: "#1F2937" },
      { id: 4, value: "#8B5CF6" },
    ],

    description:
      "دوربین حرفه‌ای کانن مناسب عکاسی پرتره، طبیعت و تولید محتوای ویدیویی.",

    variants: ["Body Only", "Kit Lens"],

    specifications: {
      برند: "Canon",
      سنسور: "24MP",
      ویدئو: "4K",
      نمایشگر: "لمسی چرخان",
      اتصال: "Wi-Fi",
    },
  },

  {
    id: 3,
    slug: "headphone",
    title: "هدفون بی‌سیم",
    price: 7490000,
    saleCount: 215,
    discount: 20,

    img: "/E-store/Images/homePageProducts/headphon.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/headphon.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/ipad.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/watch.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/camera.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/samsung.webp" },
    ],
    rate: 4.7,
    reviewsCount: 88,
    stock: 20,

    colors: [
      { id: 1, value: "#FFFFFF" },
      { id: 2, value: "#D4D4D8" },
      { id: 3, value: "#1F2937" },
      { id: 4, value: "#8B5CF6" },
    ],

    description:
      "هدفون بی‌سیم با طراحی ارگونومیک و کیفیت صدای شفاف برای استفاده روزمره و گیمینگ.",

    variants: ["مشکی", "سفید"],

    specifications: {
      اتصال: "Bluetooth 5.3",
      شارژدهی: "40 ساعت",
      میکروفون: "دارد",
      طراحی: "تاشو",
      دستیارصوتی: "پشتیبانی می‌شود",
    },
  },

  {
    id: 4,
    slug: "mobile",
    title: "آیپد ایر اپل",
    price: 42900000,
    saleCount: 142,

    img: "/E-store/Images/homePageProducts/ipad.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/ipad.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/airpods.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/headphon.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/samsung.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/watch.webp" },
    ],
    rate: 4.9,
    reviewsCount: 65,
    stock: 9,

    colors: [
      { id: 1, value: "#FFFFFF" },
      { id: 2, value: "#D4D4D8" },
      { id: 3, value: "#1F2937" },
      { id: 4, value: "#8B5CF6" },
    ],

    description:
      "تبلت قدرتمند اپل مناسب طراحی، مطالعه، تماشای فیلم و کارهای حرفه‌ای.",

    variants: ["128GB", "256GB"],

    specifications: {
      نمایشگر: "10.9 اینچ",
      پردازنده: "Apple M2",
      قلم: "Apple Pencil",
      حافظه: "256GB",
      باتری: "تمام روز",
    },
  },

  {
    id: 5,
    slug: "mobile",
    title: "آیفون 14 پرو",
    price: 79900000,
    saleCount: 491,
    discount: 10,

    img: "/E-store/Images/homePageProducts/Iphone 14 pro 1.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/Iphone 14 pro 1.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/airpods.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/camera.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/ipad.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/samsung.webp" },
    ],
    rate: 4.9,
    reviewsCount: 243,
    stock: 5,

    colors: [
      { id: 1, value: "#FFFFFF" },
      { id: 2, value: "#D4D4D8" },
      { id: 3, value: "#1F2937" },
      { id: 4, value: "#8B5CF6" },
    ],

    description:
      "پرچمدار محبوب اپل با دوربین حرفه‌ای، نمایشگر فوق‌العاده و عملکرد بسیار سریع.",

    variants: ["128GB", "256GB", "512GB", "1TB"],

    specifications: {
      پردازنده: "A16 Bionic",
      دوربین: "48MP",
      نمایشگر: "Super Retina XDR",
      ویژگی: "Dynamic Island",
      شبکه: "5G",
    },
  },

  {
    id: 6,
    slug: "mobile",
    title: "سامسونگ گلکسی S24",
    price: 62900000,
    saleCount: 278,

    img: "/E-store/Images/homePageProducts/samsung.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/samsung.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/Iphone 14 pro 1.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/headphon.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/watch.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/airpods.webp" },
    ],
    rate: 4.8,
    reviewsCount: 156,
    stock: 11,

    colors: [
      { id: 1, value: "#FFFFFF" },
      { id: 2, value: "#D4D4D8" },
      { id: 3, value: "#1F2937" },
      { id: 4, value: "#8B5CF6" },
    ],

    description:
      "گوشی پرچمدار سامسونگ با دوربین قدرتمند و نمایشگر باکیفیت AMOLED.",

    variants: ["128GB", "256GB", "512GB"],

    specifications: {
      نمایشگر: "Dynamic AMOLED 2X",
      پردازنده: "Snapdragon",
      دوربین: "سه‌گانه",
      باتری: "5000mAh",
      شبکه: "5G",
    },
  },

  {
    id: 7,
    slug: "watch",
    title: "ساعت هوشمند",
    price: 10900000,
    saleCount: 198,
    discount: 25,

    img: "/E-store/Images/homePageProducts/smart watch.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/smart watch.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/watch.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/samsung.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/airpods.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/ipad.webp" },
    ],
    rate: 4.5,
    reviewsCount: 94,
    stock: 17,

    colors: [
      { id: 1, value: "#FFFFFF" },
      { id: 2, value: "#D4D4D8" },
      { id: 3, value: "#1F2937" },
      { id: 4, value: "#8B5CF6" },
    ],

    description:
      "ساعت هوشمند با قابلیت‌های سلامتی و ورزشی برای استفاده روزمره.",

    variants: ["مشکی", "نقره‌ای"],

    specifications: {
      "ضربان قلب": "دارد",
      "اکسیژن خون": "دارد",
      GPS: "دارد",
      مقاومت: "ضد آب",
      تماس: "پشتیبانی می‌شود",
    },
  },

  {
    id: 8,
    slug: "watch",
    title: "ساعت مچی کلاسیک",
    price: 5990000,
    saleCount: 104,

    img: "/E-store/Images/homePageProducts/watch.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/watch.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/smart watch.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/headphon.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/camera.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/Iphone 14 pro 1.webp" },
    ],
    rate: 4.4,
    reviewsCount: 43,
    stock: 8,

    colors: [
      { id: 1, value: "#FFFFFF" },
      { id: 2, value: "#D4D4D8" },
      { id: 3, value: "#1F2937" },
      { id: 4, value: "#8B5CF6" },
    ],

    description: "ساعت مچی کلاسیک با طراحی لوکس و مناسب استایل رسمی و روزمره.",

    variants: ["مشکی", "نقره‌ای", "طلایی"],

    specifications: {
      بند: "استیل ضد زنگ",
      شیشه: "ضد خش",
      مقاومت: "ضد آب",
      موتور: "کوارتز",
      طراحی: "کلاسیک",
    },
  },
  {
    id: 9,
    slug: "mobile",
    title: "شیائومی 14 Ultra",
    price: 68900000,
    saleCount: 182,
    discount: 8,
    img: "/E-store/Images/homePageProducts/Iphone 14 pro 1.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/Iphone 14 pro 1.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/iphone15promax.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/samsung.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/ipad.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/airpods.webp" },
    ],
    rate: 4.8,
    reviewsCount: 114,
    stock: 12,
    colors: [
      { id: 1, value: "#000000" },
      { id: 2, value: "#FFFFFF" },
      { id: 3, value: "#16A34A" },
    ],
    description:
      "پرچمدار قدرتمند شیائومی با دوربین حرفه‌ای Leica و نمایشگر AMOLED.",
    variants: ["256GB", "512GB"],
    specifications: {
      پردازنده: "Snapdragon 8 Gen 3",
      نمایشگر: "AMOLED 120Hz",
      دوربین: "50MP Leica",
      باتری: "5000mAh",
      شبکه: "5G",
    },
  },

  {
    id: 10,
    slug: "mobile",
    title: "گوگل پیکسل 9 پرو",
    price: 75900000,
    saleCount: 94,
    img: "/E-store/Images/homePageProducts/samsung.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/samsung.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/samsung.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/ipad.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/watch.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/headphon.webp" },
    ],
    rate: 4.9,
    reviewsCount: 61,
    stock: 6,
    colors: [
      { id: 1, value: "#FFFFFF" },
      { id: 2, value: "#1F2937" },
    ],
    description:
      "گوشی هوشمند گوگل با پردازنده Tensor و قابلیت‌های هوش مصنوعی پیشرفته.",
    variants: ["128GB", "256GB"],
    specifications: {
      پردازنده: "Google Tensor G4",
      نمایشگر: "OLED 120Hz",
      دوربین: "50MP",
      باتری: "4900mAh",
      شبکه: "5G",
    },
  },

  {
    id: 11,
    slug: "mobile",
    title: "وان پلاس 13",
    price: 59900000,
    saleCount: 129,
    discount: 5,
    img: "/E-store/Images/homePageProducts/samsung.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/samsung.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/samsung.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/iphone15promax.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/ipad.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/headphon.webp" },
    ],
    rate: 4.7,
    reviewsCount: 84,
    stock: 15,
    colors: [
      { id: 1, value: "#000000" },
      { id: 2, value: "#EF4444" },
    ],
    description: "پرچمدار وان پلاس با سرعت شارژ فوق‌العاده و نمایشگر LTPO.",
    variants: ["256GB", "512GB"],
    specifications: {
      پردازنده: "Snapdragon 8 Elite",
      نمایشگر: "LTPO AMOLED",
      دوربین: "50MP",
      باتری: "5500mAh",
      شبکه: "5G",
    },
  },

  {
    id: 12,
    slug: "mobile",
    title: "آیفون 15 پرو مکس",
    price: 104900000,
    saleCount: 301,
    discount: 10,
    img: "/E-store/Images/homePageProducts/Iphone 14 pro 1.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/Iphone 14 pro 1.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/Iphone 14 pro 1.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/ipad.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/airpods.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/watch.webp" },
    ],
    rate: 5,
    reviewsCount: 203,
    stock: 4,
    colors: [
      { id: 1, value: "#D6D3D1" },
      { id: 2, value: "#44403C" },
      { id: 3, value: "#FFFFFF" },
    ],
    description: "جدیدترین پرچمدار اپل با فریم تیتانیومی و پردازنده A17 Pro.",
    variants: ["256GB", "512GB", "1TB"],
    specifications: {
      پردازنده: "A17 Pro",
      دوربین: "48MP",
      نمایشگر: "Super Retina XDR",
      ویژگی: "Titanium Body",
      شبکه: "5G",
    },
  },

  {
    id: 13,
    slug: "mobile",
    title: "سامسونگ گلکسی Z Fold 6",
    price: 112000000,
    saleCount: 77,
    img: "/E-store/Images/homePageProducts/samsung.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/samsung.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/samsung.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/ipad.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/watch.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/airpods.webp" },
    ],
    rate: 4.8,
    reviewsCount: 48,
    stock: 3,
    colors: [
      { id: 1, value: "#000000" },
      { id: 2, value: "#94A3B8" },
    ],
    description: "گوشی تاشوی سامسونگ با نمایشگر داخلی بزرگ و قابلیت چندوظیفگی.",
    variants: ["512GB", "1TB"],
    specifications: {
      پردازنده: "Snapdragon 8 Gen 3",
      نمایشگر: "Dynamic AMOLED 2X",
      باتری: "4400mAh",
      قلم: "S Pen",
      شبکه: "5G",
    },
  },

  {
    id: 14,
    slug: "watch",
    title: "اپل واچ سری 10",
    price: 24900000,
    saleCount: 156,
    discount: 12,
    img: "/E-store/Images/homePageProducts/watch.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/watch.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/watch.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/smart watch.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/airpods.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/Iphone 14 pro 1.webp" },
    ],
    rate: 4.9,
    reviewsCount: 122,
    stock: 10,
    colors: [
      { id: 1, value: "#000000" },
      { id: 2, value: "#FFFFFF" },
    ],
    description: "جدیدترین ساعت هوشمند اپل با قابلیت‌های سلامتی پیشرفته.",
    variants: ["42mm", "46mm"],
    specifications: {
      GPS: "دارد",
      تماس: "پشتیبانی می‌شود",
      مقاومت: "ضد آب",
      شارژدهی: "18 ساعت",
      سنسورها: "سلامتی کامل",
    },
  },

  {
    id: 15,
    slug: "watch",
    title: "گلکسی واچ 7",
    price: 18900000,
    saleCount: 111,
    img: "/E-store/Images/homePageProducts/smart watch.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/smart watch.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/smart watch.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/watch.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/samsung.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/airpods.webp" },
    ],
    rate: 4.7,
    reviewsCount: 73,
    stock: 14,
    colors: [
      { id: 1, value: "#000000" },
      { id: 2, value: "#6B7280" },
    ],
    description: "ساعت هوشمند سامسونگ با امکانات ورزشی و سلامتی کامل.",
    variants: ["44mm"],
    specifications: {
      GPS: "دارد",
      مقاومت: "5ATM",
      باتری: "40 ساعت",
      تماس: "پشتیبانی می‌شود",
      سیستم: "Wear OS",
    },
  },

  {
    id: 16,
    slug: "camera",
    title: "سونی Alpha A7 IV",
    price: 97900000,
    saleCount: 65,
    img: "/E-store/Images/homePageProducts/camera.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/camera.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/camera.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/ipad.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/watch.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/headphon.webp" },
    ],
    rate: 4.9,
    reviewsCount: 39,
    stock: 5,
    colors: [{ id: 1, value: "#000000" }],
    description: "دوربین فول‌فریم حرفه‌ای سونی برای عکاسی و فیلمبرداری.",
    variants: ["Body Only"],
    specifications: {
      سنسور: "33MP",
      ویدئو: "4K 60fps",
      اتصال: "WiFi",
      لرزشگیر: "5 محوره",
      نمایشگر: "لمسی",
    },
  },

  {
    id: 17,
    slug: "camera",
    title: "نیکون Z6 II",
    price: 86900000,
    saleCount: 48,
    discount: 7,
    img: "/E-store/Images/homePageProducts/camera.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/camera.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/camera.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/headphon.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/watch.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/samsung.webp" },
    ],
    rate: 4.8,
    reviewsCount: 31,
    stock: 7,
    colors: [{ id: 1, value: "#000000" }],
    description: "دوربین بدون آینه نیکون مناسب عکاسان حرفه‌ای.",
    variants: ["Body Only", "24-70 Kit"],
    specifications: {
      سنسور: "24MP",
      ویدئو: "4K",
      نمایشگر: "لمسی",
      اتصال: "WiFi",
      لرزشگیر: "داخلی",
    },
  },

  {
    id: 18,
    slug: "headphone",
    title: "Sony WH-1000XM5",
    price: 17900000,
    saleCount: 221,
    discount: 15,
    img: "/E-store/Images/homePageProducts/headphon.webp",
    gallery: [
      { id: 1, img: "/E-store/Images/homePageProducts/headphon.webp" },
      { id: 2, img: "/E-store/Images/homePageProducts/headphon.webp" },
      { id: 3, img: "/E-store/Images/homePageProducts/airpods.webp" },
      { id: 4, img: "/E-store/Images/homePageProducts/watch.webp" },
      { id: 5, img: "/E-store/Images/homePageProducts/samsung.webp" },
    ],
    rate: 4.9,
    reviewsCount: 165,
    stock: 18,
    colors: [
      { id: 1, value: "#000000" },
      { id: 2, value: "#FFFFFF" },
    ],
    description:
      "هدفون پرچمدار سونی با حذف نویز فوق‌العاده و کیفیت صدای حرفه‌ای.",
    variants: ["مشکی", "نقره‌ای"],
    specifications: {
      اتصال: "Bluetooth 5.3",
      شارژدهی: "40 ساعت",
      ANC: "دارد",
      میکروفون: "دارد",
      دستیارصوتی: "پشتیبانی می‌شود",
    },
  },
];

export default homePageProducts;
