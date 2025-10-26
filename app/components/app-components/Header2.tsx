import { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import * as Icons from "@heroicons/react/24/outline";
import * as Icons2 from "react-icons/pi";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "~/redux/hooks/hook";
import { getAllReportCategory } from "~/redux/features/reportSlice";
import { getAllProductCategory } from "~/redux/features/productSlice";
import { SkeletonCategoryItem } from "./category-skeleton";

export default function Header2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bounced, setBounced] = useState(false);
  const [hasBounced, setHasBounced] = useState(false);
  const dispatch = useAppDispatch();
  const { loading, categoryData } = useAppSelector((state) => state.report);
  const { loading: pLoading, categoryData: pCategory } = useAppSelector(
    (state) => state.product
  );
  const token = "";

  const getIcon = (name: string): React.ElementType => {
    return (
      (Icons as Record<string, React.ElementType>)[name] ||
      Icons.QuestionMarkCircleIcon
    );
  };
  const getIcon2 = (name: string): React.ElementType => {
    return (
      (Icons2 as Record<string, React.ElementType>)[name] || Icons2.PiQuestion
    );
  };

  useEffect(() => {
    dispatch(getAllReportCategory({ token }));
    dispatch(getAllProductCategory({ token }));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && !hasBounced) {
        setScrolled(true);
        setBounced(true);
        setHasBounced(true);

        setTimeout(() => {
          setBounced(false);
        }, 300);
      }

      if (window.scrollY <= 10) {
        setScrolled(false);
        setHasBounced(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasBounced]);

  return (
    <header
      className={clsx(
        "w-full p-0 px-4 md:px-10 sticky top-0 z-50 transition-all duration-500 text-black",
        scrolled ? "bg-white shadow-lg" : "bg-white",
        bounced ? "-translate-y-[30px]" : "translate-y-0"
      )}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Dk Global Fashion Wear Ltd.</span>
            <img alt="" src="/dkgloballogorb.png" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm/6 font-semibold">
            Home
          </Link>
          {/* reports */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold outline-0">
              Reports
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-500"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-200 outline-1 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4 max-h-[12.5rem] overflow-auto">
                {loading || !categoryData?.result ? (
                  <SkeletonCategoryItem />
                ) : (
                  categoryData?.result?.map((item) => {
                    const Icon = getIcon(item.icon);
                    return (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/40"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700 group-hover:shadow-2xl">
                          <Icon
                            aria-hidden="true"
                            className="size-6 text-gray-400 group-hover:text-white"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            to={item.link}
                            className="block font-semibold text-black"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </PopoverPanel>
          </Popover>
          {/* products */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold outline-0">
              Products
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-500"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-200 outline-1 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4 max-h-[12.5rem] overflow-auto">
                {pLoading || !pCategory?.result ? (
                  <SkeletonCategoryItem />
                ) : (
                  pCategory?.result?.map((item) => {
                    const Icon = getIcon2(item.icon);
                    return (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/40"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700 group-hover:shadow-2xl">
                          <Icon
                            aria-hidden="true"
                            className="size-6 text-gray-400 group-hover:text-white"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            to={item.link}
                            className="block font-semibold text-black"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </PopoverPanel>
          </Popover>

          <Link to="/blogs" className="text-sm/6 font-semibold ">
            Blogs
          </Link>
          <Link to="/about-us" className="text-sm/6 font-semibold ">
            About Us
          </Link>
          <Link to="/contact-us" className="text-sm/6 font-semibold">
            Contact Us
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white text-black p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between px-4 md:px-10">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Dk Global Fashion Wear Ltd.</span>
              <img alt="" src="/dkgloballogorb.png" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-900"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/40">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white/5"
                >
                  Home
                </Link>
                {/* reports */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold hover:bg-white/5">
                    Reports
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {categoryData?.result?.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.link}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold hover:bg-white/5"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                {/* products */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold hover:bg-white/5">
                    Products
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {pCategory?.result?.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.link}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold hover:bg-white/5"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  to="/about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white/5"
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white/5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
