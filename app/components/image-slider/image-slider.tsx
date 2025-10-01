import React, { useEffect, useRef, useState } from "react";
import images from "./images";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeID, setTimeID] = useState<NodeJS.Timeout | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);

  // ✅ Autoplay
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [activeIndex]);

  const startAutoPlay = () => {
    stopAutoPlay();
    const id = setTimeout(() => {
      slideNext();
    }, 5000);
    setTimeID(id);
  };

  const stopAutoPlay = () => {
    if (timeID) {
      clearTimeout(timeID);
      setTimeID(null);
    }
  };

  // ✅ Looping logic
  const slideNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const slidePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // ✅ Swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      slideNext();
    } else if (distance < -50) {
      slidePrev();
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-white"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Slides wrapper */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={item.imgURL}
              alt={item.imgAlt}
              className="w-full h-[300px] sm:h-[650px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full border border-gray-400 mx-1 transition-colors duration-500 ${
              activeIndex === index ? "bg-black" : "bg-white"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-all "
        onClick={slideNext}
      >
        <ArrowRightCircleIcon className="size-10" />
      </button>

      {/* Prev Button */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:scale-110 transition-all"
        onClick={slidePrev}
      >
        <ArrowLeftCircleIcon className="size-10" />
      </button>
    </div>
  );
};

export default ImageSlider;
