import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router"; // keep whatever Link import you already use

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Company Profile", href: "/company-profile", current: false },
  {
    name: "Audit Reports",
    href: "/audit-reports",
    current: false,
    items: [
      { name: "RSC Reports", href: "/rsc-reports", current: false },
      { name: "Sales Reports", href: "/sales-reports", current: false },
    ],
  },
  { name: "Product", href: "/products", current: false },
  { name: "Contact Us", href: "/contact-us", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ children }: any) {
  return (
    <Disclosure as="nav" className="relative bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button (left) */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    className={classNames(open ? "hidden" : "block", "h-6 w-6")}
                    aria-hidden="true"
                  />
                  <XMarkIcon
                    className={classNames(open ? "block" : "hidden", "h-6 w-6")}
                    aria-hidden="true"
                  />
                </DisclosureButton>
              </div>

              {/* Logo */}
              <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-start">
                <Link to={"/"} className="flex shrink-0 items-center">
                  <img
                    alt="DK Global Fasion Wear Ltd"
                    src="/dkgloballogorb.png"
                    className="h-8 w-auto"
                  />
                </Link>
              </div>

              {/* Desktop navigation (right) */}
              <div className="hidden sm:flex sm:items-center sm:space-x-2">
                <div className="flex space-x-4">
                  {navigation.map((item) =>
                    item.items ? (
                      // Wrap each dropdown in a relative container so MenuItems position under the trigger
                      <div key={item.name} className="relative inline-block">
                        <Menu>
                          <MenuButton
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-black hover:bg-gray-100 hover:text-black",
                              "rounded-md px-3 py-2 text-sm font-medium inline-flex items-center"
                            )}
                          >
                            <span>{item.name}</span>
                            <svg
                              className="ml-2 h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M6 8l4 4 4-4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </MenuButton>

                          <MenuItems className="absolute left-0 mt-2 w-44 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-gray-100 ring-opacity-5 focus:outline-none z-50">
                            <div className="py-1">
                              {item.items.map((sub) => (
                                <MenuItem key={sub.name}>
                                  {({ active }) => (
                                    <Link
                                      to={sub.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {sub.name}
                                    </Link>
                                  )}
                                </MenuItem>
                              ))}
                            </div>
                          </MenuItems>
                        </Menu>
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black hover:bg-gray-100 hover:text-black",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <DisclosurePanel className="sm:hidden absolute top-16 left-0 right-0 z-50 bg-white shadow-md">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) =>
                item.items ? (
                  <Disclosure as="div" key={item.name} className="mb-0">
                    {({ open: subOpen }) => (
                      <>
                        <DisclosureButton className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-100">
                          <span>{item.name}</span>
                          <span className="ml-2">{subOpen ? "▲" : "▼"}</span>
                        </DisclosureButton>
                        <DisclosurePanel className="pl-6">
                          {item.items.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </DisclosurePanel>

          {/* Page children/content */}
          <div className="">{children}</div>
        </>
      )}
    </Disclosure>
  );
}
