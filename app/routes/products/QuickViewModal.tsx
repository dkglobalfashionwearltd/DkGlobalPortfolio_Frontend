import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: "$35",
    color: "Charcoal",
  },
  {
    id: 4,
    name: "Artwork Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "$35",
    color: "Iso Dots",
  },
];

const QuickViewModal = ({
  pId,
  open,
  onClose,
}: {
  pId: number | null;
  open: boolean;
  onClose: () => void;
}) => {
  const product = products.find((prod) => prod.id === pId);
  if (!product) return null;

  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <DialogBackdrop className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>

        {/* Panel container */}
        <div className="fixed inset-0 flex items-center justify-center sm:items-center sm:justify-center">
          {/* Mobile drawer (bottom slide) */}
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-y-0"
            leaveTo="translate-y-full"
          >
            <DialogPanel className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 shadow-lg sm:hidden">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="flex flex-col gap-4">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-56 rounded-md object-cover"
                />
                <h2 className="text-xl font-bold text-gray-900">
                  {product.name}
                </h2>
                <p className="text-gray-600">{product.color}</p>
                <p className="text-indigo-600 text-lg font-semibold">
                  {product.price}
                </p>
              </div>
            </DialogPanel>
          </Transition.Child>

          {/* Desktop modal (centered) */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="hidden sm:block relative bg-white rounded-lg p-6 shadow-xl w-full max-w-2xl">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full sm:w-1/2 rounded-md object-cover"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </h2>
                  <p className="text-lg text-gray-700 mt-2">{product.color}</p>
                  <p className="text-xl font-semibold text-indigo-600 mt-4">
                    {product.price}
                  </p>
                </div>
              </div>
            </DialogPanel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default QuickViewModal;
