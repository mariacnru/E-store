const homePageProducts = [
  {
    id: 1,
    title: "ایرپاد پرو اپل",
    price: 12990000,
    saleCount: 324,
    discount: 15,

    img: "/Images/homePageProducts/airpods.png",
    gallery: [
      { id: 1, img: "/Images/homePageProducts/airpods.png" },
      { id: 2, img: "/Images/homePageProducts/camera.png" },
      { id: 3, img: "/Images/homePageProducts/ipad.png" },
      { id: 4, img: "/Images/homePageProducts/samsung.png" },
      { id: 5, img: "/Images/homePageProducts/watch.png" },
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

    img: "/Images/homePageProducts/camera.png",
    gallery: [
      { id: 1, img: "/Images/homePageProducts/camera.png" },
      { id: 2, img: "/Images/homePageProducts/airpods.png" },
      { id: 3, img: "/Images/homePageProducts/headphon.png" },
      { id: 4, img: "/Images/homePageProducts/Iphone 14 pro 1.png" },
      { id: 5, img: "/Images/homePageProducts/smart watch.png" },
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
    title: "هدفون بی‌سیم",
    price: 7490000,
    saleCount: 215,
    discount: 20,

    img: "/Images/homePageProducts/headphon.png",
    gallery: [
      { id: 1, img: "/Images/homePageProducts/headphon.png" },
      { id: 2, img: "/Images/homePageProducts/ipad.png" },
      { id: 3, img: "/Images/homePageProducts/watch.png" },
      { id: 4, img: "/Images/homePageProducts/camera.png" },
      { id: 5, img: "/Images/homePageProducts/samsung.png" },
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
    title: "آیپد ایر اپل",
    price: 42900000,
    saleCount: 142,

    img: "/Images/homePageProducts/ipad.png",
    gallery: [
      { id: 1, img: "/Images/homePageProducts/ipad.png" },
      { id: 2, img: "/Images/homePageProducts/airpods.png" },
      { id: 3, img: "/Images/homePageProducts/headphon.png" },
      { id: 4, img: "/Images/homePageProducts/samsung.png" },
      { id: 5, img: "/Images/homePageProducts/watch.png" },
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
    title: "آیفون 14 پرو",
    price: 79900000,
    saleCount: 491,
    discount: 10,

    img: "/Images/homePageProducts/Iphone 14 pro 1.png",
    gallery: [
      { id: 1, img: "/Images/homePageProducts/Iphone 14 pro 1.png" },
      { id: 2, img: "/Images/homePageProducts/airpods.png" },
      { id: 3, img: "/Images/homePageProducts/camera.png" },
      { id: 4, img: "/Images/homePageProducts/ipad.png" },
      { id: 5, img: "/Images/homePageProducts/samsung.png" },
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
    title: "سامسونگ گلکسی S24",
    price: 62900000,
    saleCount: 278,

    img: "/Images/homePageProducts/samsung.png",
    gallery: [
      { id: 1, img: "/Images/homePageProducts/samsung.png" },
      { id: 2, img: "/Images/homePageProducts/Iphone 14 pro 1.png" },
      { id: 3, img: "/Images/homePageProducts/headphon.png" },
      { id: 4, img: "/Images/homePageProducts/watch.png" },
      { id: 5, img: "/Images/homePageProducts/airpods.png" },
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
    title: "ساعت هوشمند",
    price: 10900000,
    saleCount: 198,
    discount: 25,

    img: "/Images/homePageProducts/smart watch.png",
    gallery: [
      { id: 1, img: "/Images/homePageProducts/smart watch.png" },
      { id: 2, img: "/Images/homePageProducts/watch.png" },
      { id: 3, img: "/Images/homePageProducts/samsung.png" },
      { id: 4, img: "/Images/homePageProducts/airpods.png" },
      { id: 5, img: "/Images/homePageProducts/ipad.png" },
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
    title: "ساعت مچی کلاسیک",
    price: 5990000,
    saleCount: 104,

    img: "/Images/homePageProducts/watch.png",
    gallery: [
      { id: 1, img: "/Images/homePageProducts/watch.png" },
      { id: 2, img: "/Images/homePageProducts/smart watch.png" },
      { id: 3, img: "/Images/homePageProducts/headphon.png" },
      { id: 4, img: "/Images/homePageProducts/camera.png" },
      { id: 5, img: "/Images/homePageProducts/Iphone 14 pro 1.png" },
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
];

export default homePageProducts;
