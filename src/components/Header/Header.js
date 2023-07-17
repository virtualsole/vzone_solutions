"use client";

import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const products = [
  {
    name: "About Us",
    description: "Get a better understanding of your traffic",
    href: "/about/aboutUs",
  },
  // {
  //   name: "Our Team",
  //   description: "Our Professional team",
  //   href: "/about/ourTeam",
  // },
  {
    name: "Privacy Policy",
    description: "Your customers’ data will be safe and secure",
    href: "/about/privacy",
  },
  {
    name: "Terms And Conditions",
    description: "Terms And Conditions",
    href: "/about/termAndCondition",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HeaderComp() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  // const handleItemClick = () => {
  //   console.log("in", isOpen);
  //   setIsOpen(false);
  // };
  // const handleDropdownClick = () => {
  //   console.log("in", isOpen);
  //   setIsOpen(true);
  // };
  // console.log("outsude", isOpen);
  // useEffect(() => {
  //   setIsOpen(true);
  // }, [isOpen]);
  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-8 lg:px-8 text-white"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              className="h-20 w-auto"
              src="/VzoneSolutionsLogo.gif"
              width={1000}
              height={1000}
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            {/* <Popover.Button
              className="flex  items-center gap-x-1 text-lg  font-bold leading-6 text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text hover:font-bold"
              // onClick={() => handleDropdownClick()}
            >
              About Us
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button> */}
            {/* {isOpen && ( */}
            {/* <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden  bg-black shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      // onClick={() => handleItemClick()}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-lg leading-6 "
                    >
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-bold text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-transparent hover:font-bold hover:bg-clip-text"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition> */}
            {/* )} */}
          </Popover>
          <Link
            href="/"
            className="text-md font-bold leading-6 text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text hover:font-bold"
          >
            About Us
          </Link>
          <Link
            href="/project"
            className="text-md font-bold leading-6 text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text hover:font-bold"
          >
            Projects
          </Link>
          {/* <Link
            href="/features"
            className="text-md font-bold leading-6 text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text hover:font-bold"
          >
            Features
          </Link> */}
          <Link
            href="/ourTeam"
            className="text-lg font-bold leading-6 text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text hover:font-bold"
          >
            Our Team
          </Link>
          {/* <Link
            href="/blog"
            className="text-lg font-bold leading-6 text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text hover:font-bold"
          >
            Blog
          </Link> */}
          <Link
            href="/contact"
            className="text-lg font-bold leading-6 text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text hover:font-bold"
          >
            Contact
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src="/VzoneSolutionsLogo.gif"
                alt=""
                width={1000}
                height={1000}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        About
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure> */}
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text hover:font-bold"
                >
                  About Us
                </a>
                <a
                  href="/project"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text hover:font-bold"
                >
                  Projects
                </a>
                <a
                  href="/ourTeam"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text hover:font-bold"
                >
                  Our Team
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-transparent hover:bg-clip-text hover:font-bold"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
