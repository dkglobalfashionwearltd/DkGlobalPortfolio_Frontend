import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import QuickViewModal from "./QuickViewModal";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    category: "outerwear",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in white.",
    category: "outerwear",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in dark gray.",
    category: "workwear",
  },
  {
    id: 4,
    name: "Artwork Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    category: "outerwear",
  },
  {
    id: 5,
    name: "Artwork Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    category: "fashionwear",
  },
  {
    id: 6,
    name: "Artwork Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    category: "fashionwear",
  },
];

const UpperOutwear = () => {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedCat, setSelectedCat] = useState("all");

  const handleModalBtn = (id: number) => {
    setSelectedId(id);
    setOpen(true);
  };

  const categories = ["all", "outerwear", "workwear", "fashionwear"];

  const filteredProducts =
    selectedCat === "all"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === selectedCat.toLowerCase()
        );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap gap-3 border-b pb-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium capitalize transition-all duration-200 ${
                selectedCat === cat
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
          Our Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="group relative cursor-pointer">
                <div className="relative overflow-hidden rounded-lg">
                  {/* Image: clickable on mobile, hover overlay on desktop */}
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onClick={() => handleModalBtn(product.id)} // make it clickable on all devices
                  />

                  {/* Overlay content (desktop only) */}
                  <div className="absolute inset-0 hidden sm:flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {product.name}
                    </h3>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleModalBtn(product.id);
                      }}
                      className="bg-white text-black hover:bg-gray-200"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">
              No products found.
            </p>
          )}
        </div>

        {/* Quick View Modal */}
        <QuickViewModal
          pId={selectedId}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default UpperOutwear;
