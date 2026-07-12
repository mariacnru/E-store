import React, { useState } from "react";
import { useParams } from "react-router";
import homePageProducts from "../../data/homePageProducts";
import {
  RiHeart3Line,
  RiShoppingCart2Line,
  RiStarFill,
  RiSubtractLine,
  RiAddLine,
  RiShieldCheckLine,
  RiTruckLine,
  RiRefreshLine,
} from "react-icons/ri";

function ProductDetails() {
  const { productID } = useParams();

  const product = homePageProducts.find(
    (item) => item.id === Number(productID),
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        محصول مورد نظر پیدا نشد.
      </div>
    );
  }

  const {
    title,
    price,
    discount,
    saleCount,
    gallery,
    rate,
    reviewsCount,
    stock,
    description,
    variants,
    specifications,
  } = product;

  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);

  const finalPrice = discount
    ? Math.floor(price - (price * discount) / 100)
    : price;

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* TOP SECTION */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <div className="flex flex-col-reverse lg:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 overflow-auto">
            {gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(image)}
                className={`w-20 h-20 rounded-2xl border overflow-hidden flex-shrink-0 transition-all ${
                  activeImage === image
                    ? "border-violet-600"
                    : "border-zinc-200"
                }`}
              >
                <img
                  src={image}
                  className="w-full h-full object-contain p-2"
                  alt=""
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-zinc-50 rounded-3xl border border-zinc-200 flex items-center justify-center p-10">
            <img
              src={activeImage}
              className="max-h-[500px] object-contain"
              alt={title}
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <span className="text-sm text-violet-600 font-medium">
            {saleCount} فروش موفق
          </span>

          <h1 className="text-3xl font-bold mt-3">{title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-4 mt-5">
            <div className="flex items-center gap-1">
              <RiStarFill className="text-yellow-400" />
              <span>{rate}</span>
            </div>

            <span className="text-zinc-300">|</span>

            <span className="text-zinc-500 text-sm">{reviewsCount} دیدگاه</span>

            <span className="text-zinc-300">|</span>

            <span className="text-green-600 text-sm">
              {stock} عدد موجود در انبار
            </span>
          </div>

          {/* Description */}
          <p className="mt-8 text-zinc-600 leading-8">{description}</p>

          {/* Variants */}
          <div className="mt-8">
            <h3 className="font-medium mb-4">انتخاب مدل</h3>

            <div className="flex flex-wrap gap-3">
              {variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-4 py-2 rounded-xl border transition-all ${
                    selectedVariant === variant
                      ? "border-violet-600 bg-violet-50 text-violet-600"
                      : "border-zinc-200"
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="mt-10 flex items-center gap-4">
            <span className="text-4xl font-bold">
              {finalPrice.toLocaleString()}
            </span>

            <span className="text-lg">تومان</span>

            {discount && (
              <>
                <span className="text-zinc-400 line-through">
                  {price.toLocaleString()}
                </span>

                <span className="bg-red-100 text-red-500 px-2 py-1 rounded-lg text-sm">
                  %{discount}
                </span>
              </>
            )}
          </div>

          {/* Quantity */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-zinc-600">تعداد:</span>

            <div className="flex items-center border border-zinc-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-12 h-12 flex items-center justify-center"
              >
                <RiSubtractLine />
              </button>

              <span className="w-12 text-center">{quantity}</span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-12 h-12 flex items-center justify-center"
              >
                <RiAddLine />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex gap-4 flex-wrap">
            <button className="flex-1 min-w-[200px] h-14 rounded-2xl bg-zinc-900 text-white flex items-center justify-center gap-2">
              <RiShoppingCart2Line />
              افزودن به سبد خرید
            </button>

            <button className="w-14 h-14 rounded-2xl border border-zinc-200 flex items-center justify-center">
              <RiHeart3Line size={22} />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="border border-zinc-200 rounded-2xl p-4 text-center">
              <RiTruckLine className="mx-auto mb-2 text-violet-600" size={24} />
              <p className="text-xs text-zinc-600">ارسال سریع</p>
            </div>

            <div className="border border-zinc-200 rounded-2xl p-4 text-center">
              <RiShieldCheckLine
                className="mx-auto mb-2 text-violet-600"
                size={24}
              />
              <p className="text-xs text-zinc-600">ضمانت اصالت</p>
            </div>

            <div className="border border-zinc-200 rounded-2xl p-4 text-center">
              <RiRefreshLine
                className="mx-auto mb-2 text-violet-600"
                size={24}
              />
              <p className="text-xs text-zinc-600">بازگشت کالا</p>
            </div>
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-24">
        <h2 className="text-2xl font-bold mb-8">مشخصات محصول</h2>

        <div className="border border-zinc-200 rounded-3xl overflow-hidden">
          {Object.entries(specifications).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between items-center px-6 py-5 border-b border-zinc-100 last:border-none"
            >
              <span className="text-zinc-500">{key}</span>

              <span className="font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Placeholder */}
      <div className="mt-24">
        <h2 className="text-2xl font-bold mb-8">نظرات کاربران</h2>

        <div className="border border-zinc-200 rounded-3xl p-10 text-center text-zinc-500">
          هنوز نظری برای این محصول ثبت نشده است.
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
