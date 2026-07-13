import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

function Gallery({ gallery }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  return (
    <div className="relative bg-zinc-50 rounded-3xl border border-zinc-200 p-10">
      {/* Main Image */}
      <img
        src={gallery[activeIndex].img}
        alt="product-image"
        className="w-full max-h-[500px] object-contain transition-all duration-300"
      />

      {/* Prev */}
      <button
        onClick={prevSlide}
        aria-label="تصویر قبلی"
        className="absolute top-1/2 -translate-y-1/2 right-0 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
      >
        <RiArrowRightSLine size={28} />
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        aria-label="تصویر بعدی"
        className="absolute top-1/2 -translate-y-1/2 left-0 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition"
      >
        <RiArrowLeftSLine size={28} />
      </button>

      {/* Thumbnails */}
      <div className="hidden sm:flex justify-center gap-3 mt-8 flex-wrap">
        {gallery.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setActiveIndex(index)}
            className={`
          w-20 h-20 rounded-2xl overflow-hidden border transition-all
          ${
            activeIndex === index
              ? "border-violet-600 scale-105"
              : "border-zinc-200 opacity-60 hover:opacity-100"
          }
        `}
          >
            <img
              src={image.img}
              alt="product-image"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
