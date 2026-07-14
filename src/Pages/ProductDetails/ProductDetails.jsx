import React, { useContext, useState } from "react";
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
import Color from "./components/Color";
import Variants from "./components/Variants";
import Price from "./components/Price";
import Quantity from "./components/Quantity";
import Features from "./components/Features";
import Buttons from "./components/Buttons";
import Gallery from "./components/Gallery";
import { CartContext } from "../../context/CardContext";

function ProductDetails() {
  const { productID } = useParams();
  const { cart, addToCart } = useContext(CartContext);

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
    saleCount,
    discount,
    img,
    gallery,
    rate,
    reviewsCount,
    stock,
    colors,
    description,
    specifications,
    variants,
  } = product;

  const [activeImage, setActiveImage] = useState(gallery[0]);
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);

  const finalPrice = discount
    ? Math.floor(price - (price * discount) / 100)
    : price;

  return (
    <div className="max-w-7xl mx-auto overflow-hidden">
      {/* TOP SECTION */}
      <div className="grid lg:grid-cols-2 gap-12 px-4 py-10">
        {/* Gallery */}
        <div className="flex justify-center items-center flex-col-reverse lg:flex-row gap-4">
          {/* Thumbnails */}
          <Gallery gallery={gallery} />
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

          {/* Select Color */}
          <Color colors={product.colors} setSelectedColor={setSelectedColor} />

          {/* Variants */}
          <Variants
            variants={variants}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
          />

          {/* Price */}
          <Price price={price} finalPrice={finalPrice} discount={discount} />

          {/* Quantity */}
          <Quantity quantity={quantity} setQuantity={setQuantity} />

          {/* Buttons */}
          <Buttons
            product={product}
            quantity={quantity}
            selectedColor={selectedColor}
            selectedVariant={selectedVariant}
            addToCart={addToCart}
          />
          {/* Features */}
          <Features />
        </div>
      </div>

      {/* Specifications */}
      <div className="mt-24 bg-gray-100 px-4 py-10">
        <h2 className="text-2xl font-bold mb-8">مشخصات محصول</h2>

        <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden">
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
      {/* <div className="mt-24">
        <h2 className="text-2xl font-bold mb-8">نظرات کاربران</h2>

        <div className="border border-zinc-200 rounded-3xl p-10 text-center text-zinc-500">
          هنوز نظری برای این محصول ثبت نشده است.
        </div>
      </div> */}
    </div>
  );
}

export default ProductDetails;
