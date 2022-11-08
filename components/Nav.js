import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, forwardRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import React from 'react'

const flags = [
  {
    name: "ENG",
    href: "/en",
    icon: IconOne,
  },
  {
    name: "AR",
    href: "/ar",
    icon: IconTwo,
  },
];

export default function Navbar() {
  const [selected, setSelected] = useState(flags[0]);
  const router = useRouter();
  return (
    <Popover>
      <div className="ml-[22px] lg:ml-[130px] mr-[57px] pt-[32px] lg:pt-[44px]">
        <div className="flex items-center justify-between space-x-[4 0px] md:space-x-[50px]">
          <div className="flex justify-start w-[100px] lg:w-[210px] xl:w-[536px] 2xl:w-[720px]">
            <Link href="/">
              <svg
                width="175"
                height="41"
                viewBox="0 0 175 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="175" height="41" fill="white" />
                <path
                  d="M76.5 2.5C76.5 3.52309 75.47 4.5 74 4.5C72.5301 4.5 71.5 3.52308 71.5 2.5C71.5 1.47692 72.5301 0.5 74 0.5C75.47 0.5 76.5 1.47691 76.5 2.5Z"
                  fill="#6D6E8A"
                  stroke="#6D6E8A"
                />
                <path
                  d="M117.965 17.8494H118.844L118.395 17.0939C117.483 15.5601 116.962 13.7744 116.962 11.8706C116.962 6.15012 121.678 1.5 127.516 1.5H163.945C169.783 1.5 174.5 6.15012 174.5 11.8706C174.5 17.5912 169.783 22.2413 163.945 22.2413H76.4832H75.9832V22.7413V38.3041C75.9832 39.5103 74.9889 40.5 73.7416 40.5C72.4943 40.5 71.5 39.5103 71.5 38.3041V12.0406C71.5 10.8344 72.4943 9.84469 73.7416 9.84469C74.9889 9.84469 75.9832 10.8344 75.9832 12.0406V17.3455V17.8455H76.4832H100.627C103.681 17.8455 106.168 15.4119 106.168 12.3885C106.168 9.98341 104.665 8.02032 102.837 7.45577L102.828 7.4532L102.82 7.45092L97.7308 6.07132L97.7307 6.0713C96.5336 5.74702 95.8425 4.53372 96.1679 3.37227C96.4939 2.20872 97.727 1.51291 98.9285 1.83838L104.04 3.22506C104.049 3.22776 104.056 3.22998 104.062 3.23175C104.071 3.23457 104.08 3.23704 104.086 3.23862L104.09 3.24002L104.11 3.24606C108.095 4.43661 110.651 8.31417 110.651 12.3924C110.651 14.1003 110.211 15.7085 109.432 17.1059L109.017 17.8494H109.869H117.965ZM127.516 17.8494H163.953C167.301 17.8494 170.025 15.1785 170.025 11.8706C170.025 8.56259 167.297 5.89184 163.953 5.89184H127.516C124.173 5.89184 121.445 8.5626 121.445 11.8706C121.445 15.1787 124.173 17.8494 127.516 17.8494Z"
                  fill="#6D6E8A"
                  stroke="#6D6E8A"
                />
                <path
                  d="M65.5 2.69852V38.3015C65.5 39.4685 64.4333 40.5 63 40.5C61.5666 40.5 60.5 39.4686 60.5 38.3015V2.69852C60.5 1.53145 61.5666 0.5 63 0.5C64.4328 0.5 65.5 1.53497 65.5 2.69852Z"
                  fill="#6D6E8A"
                  stroke="#6D6E8A"
                />
                <path
                  d="M91.5 29.5C91.5 30.6046 90.6046 31.5 89.5 31.5C88.3954 31.5 87.5 30.6046 87.5 29.5C87.5 28.3954 88.3954 27.5 89.5 27.5C90.6046 27.5 91.5 28.3954 91.5 29.5Z"
                  fill="#6D6E8A"
                  stroke="#6D6E8A"
                />
                <path
                  d="M99.5 29.5C99.5 30.6046 98.6046 31.5 97.5 31.5C96.3954 31.5 95.5 30.6046 95.5 29.5C95.5 28.3954 96.3954 27.5 97.5 27.5C98.6046 27.5 99.5 28.3954 99.5 29.5Z"
                  fill="#6D6E8A"
                  stroke="#6D6E8A"
                />
                <path
                  d="M13.3721 5.91942L13.372 5.91944L8.29985 7.32652L8.29185 7.32874L8.28393 7.33123C6.4556 7.90446 4.96475 9.91157 4.96475 12.3521C4.96475 15.4193 7.43325 17.9079 10.4888 17.9079L10.4955 17.9079L10.4968 17.9079L44.5099 17.9966H44.5112H44.5152C47.5673 17.9966 50.0353 15.5034 50.0353 12.4408C50.0353 9.99942 48.5439 7.99758 46.7172 7.42026L46.7088 7.41758L46.7002 7.41521L41.6281 6.00813L41.628 6.0081C40.4423 5.67939 39.7409 4.4402 40.0696 3.2393C40.3977 2.04091 41.6294 1.34127 42.8152 1.67001L47.9096 3.08425C47.9177 3.08698 47.9249 3.08924 47.9308 3.09104C47.9401 3.09387 47.9489 3.09636 47.9548 3.09799L47.9582 3.09939L47.9788 3.10567C51.9456 4.31846 54.5 8.27368 54.5 12.4449C54.5 18.0016 50.0254 22.5 44.5112 22.5L44.5045 22.5L44.5032 22.5L10.4901 22.4113H10.4888H10.4851C4.97452 22.4075 0.5 17.9127 0.5 12.3561C0.5 8.18438 3.05078 4.22589 7.02065 3.01713L7.0415 3.01078L7.04901 3.00776L7.0509 3.00722L7.06274 3.00379C7.06848 3.00211 7.07534 3.00005 7.08303 2.99762L12.1849 1.5813C12.1849 1.58128 12.185 1.58126 12.1851 1.58125C13.3708 1.25263 14.6024 1.95227 14.9304 3.15061C15.2592 4.35152 14.5578 5.5907 13.3721 5.91942Z"
                  fill="#6D6E8A"
                  stroke="#6D6E8A"
                />
                <path
                  d="M29.5 2.5C29.5 3.60456 28.6046 4.5 27.5 4.5C26.3954 4.5 25.5 3.60457 25.5 2.5C25.5 1.39543 26.3954 0.5 27.5 0.5C28.6046 0.5 29.5 1.39544 29.5 2.5Z"
                  fill="#6D6E8A"
                  stroke="#6D6E8A"
                />
              </svg>
            </Link>
          </div>

          <Popover.Group
            as="nav"
            className="hidden space-x-[72px] md:flex lg:-mt-6"
          >
            <Link href="/">
              <a
                className={`text-[18px] leading-[25px] font-semibold hover:text-[#1B1C39] ${
                  router.pathname == "/" ? "text-[#1B1C39]" : "text-[#6D6E8A]"
                }`}
              >
                Personal
              </a>
            </Link>
            <Link href="/brand-story">
              <a
                className={`text-[18px] leading-[25px] font-semibold hover:text-[#1B1C39] ${
                  router.pathname == "/brand-story"
                    ? "text-[#1B1C39]"
                    : "text-[#6D6E8A]"
                }`}
              >
                Brand Story
              </a>
            </Link>
          </Popover.Group>
          {/* Flag */}

          <Popover
            className="relative items-center lg:-mt-6"
            value={selected}
            onChange={setSelected}
          >
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex gap-[10px] items-center rounded-md px-3 py-2 text-sm font-medium text-[#6D6E8A] hover:text-opacity-100 focus:outline-none`}
                >
                  <IconOne />
                  <span>{selected.name}</span>
                  <ChevronDownIcon
                    className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-[#6D6E8A] transition duration-150 ease-in-out group-hover:text-opacity-80`}
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-40 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-2 bg-white p-7 lg:grid-cols-1">
                        {flags.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                              <item.icon aria-hidden="true" />
                            </div>
                            <div className="ml-4">
                              <p className="text-sm font-medium text-gray-900">
                                {item.name}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <div className="-my-2 ml-[20px] md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <svg
                width="24"
                height="9"
                viewBox="0 0 24 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="8" width="16" height="2" rx="1" fill="#6D6E8A" />
                <rect y="7" width="24" height="2" rx="1" fill="#6D6E8A" />
              </svg>
            </Popover.Button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <svg
                      width="175"
                      height="41"
                      viewBox="0 0 175 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="175" height="41" fill="white" />
                      <path
                        d="M76.5 2.5C76.5 3.52309 75.47 4.5 74 4.5C72.5301 4.5 71.5 3.52308 71.5 2.5C71.5 1.47692 72.5301 0.5 74 0.5C75.47 0.5 76.5 1.47691 76.5 2.5Z"
                        fill="#6D6E8A"
                        stroke="#6D6E8A"
                      />
                      <path
                        d="M117.965 17.8494H118.844L118.395 17.0939C117.483 15.5601 116.962 13.7744 116.962 11.8706C116.962 6.15012 121.678 1.5 127.516 1.5H163.945C169.783 1.5 174.5 6.15012 174.5 11.8706C174.5 17.5912 169.783 22.2413 163.945 22.2413H76.4832H75.9832V22.7413V38.3041C75.9832 39.5103 74.9889 40.5 73.7416 40.5C72.4943 40.5 71.5 39.5103 71.5 38.3041V12.0406C71.5 10.8344 72.4943 9.84469 73.7416 9.84469C74.9889 9.84469 75.9832 10.8344 75.9832 12.0406V17.3455V17.8455H76.4832H100.627C103.681 17.8455 106.168 15.4119 106.168 12.3885C106.168 9.98341 104.665 8.02032 102.837 7.45577L102.828 7.4532L102.82 7.45092L97.7308 6.07132L97.7307 6.0713C96.5336 5.74702 95.8425 4.53372 96.1679 3.37227C96.4939 2.20872 97.727 1.51291 98.9285 1.83838L104.04 3.22506C104.049 3.22776 104.056 3.22998 104.062 3.23175C104.071 3.23457 104.08 3.23704 104.086 3.23862L104.09 3.24002L104.11 3.24606C108.095 4.43661 110.651 8.31417 110.651 12.3924C110.651 14.1003 110.211 15.7085 109.432 17.1059L109.017 17.8494H109.869H117.965ZM127.516 17.8494H163.953C167.301 17.8494 170.025 15.1785 170.025 11.8706C170.025 8.56259 167.297 5.89184 163.953 5.89184H127.516C124.173 5.89184 121.445 8.5626 121.445 11.8706C121.445 15.1787 124.173 17.8494 127.516 17.8494Z"
                        fill="#6D6E8A"
                        stroke="#6D6E8A"
                      />
                      <path
                        d="M65.5 2.69852V38.3015C65.5 39.4685 64.4333 40.5 63 40.5C61.5666 40.5 60.5 39.4686 60.5 38.3015V2.69852C60.5 1.53145 61.5666 0.5 63 0.5C64.4328 0.5 65.5 1.53497 65.5 2.69852Z"
                        fill="#6D6E8A"
                        stroke="#6D6E8A"
                      />
                      <path
                        d="M91.5 29.5C91.5 30.6046 90.6046 31.5 89.5 31.5C88.3954 31.5 87.5 30.6046 87.5 29.5C87.5 28.3954 88.3954 27.5 89.5 27.5C90.6046 27.5 91.5 28.3954 91.5 29.5Z"
                        fill="#6D6E8A"
                        stroke="#6D6E8A"
                      />
                      <path
                        d="M99.5 29.5C99.5 30.6046 98.6046 31.5 97.5 31.5C96.3954 31.5 95.5 30.6046 95.5 29.5C95.5 28.3954 96.3954 27.5 97.5 27.5C98.6046 27.5 99.5 28.3954 99.5 29.5Z"
                        fill="#6D6E8A"
                        stroke="#6D6E8A"
                      />
                      <path
                        d="M13.3721 5.91942L13.372 5.91944L8.29985 7.32652L8.29185 7.32874L8.28393 7.33123C6.4556 7.90446 4.96475 9.91157 4.96475 12.3521C4.96475 15.4193 7.43325 17.9079 10.4888 17.9079L10.4955 17.9079L10.4968 17.9079L44.5099 17.9966H44.5112H44.5152C47.5673 17.9966 50.0353 15.5034 50.0353 12.4408C50.0353 9.99942 48.5439 7.99758 46.7172 7.42026L46.7088 7.41758L46.7002 7.41521L41.6281 6.00813L41.628 6.0081C40.4423 5.67939 39.7409 4.4402 40.0696 3.2393C40.3977 2.04091 41.6294 1.34127 42.8152 1.67001L47.9096 3.08425C47.9177 3.08698 47.9249 3.08924 47.9308 3.09104C47.9401 3.09387 47.9489 3.09636 47.9548 3.09799L47.9582 3.09939L47.9788 3.10567C51.9456 4.31846 54.5 8.27368 54.5 12.4449C54.5 18.0016 50.0254 22.5 44.5112 22.5L44.5045 22.5L44.5032 22.5L10.4901 22.4113H10.4888H10.4851C4.97452 22.4075 0.5 17.9127 0.5 12.3561C0.5 8.18438 3.05078 4.22589 7.02065 3.01713L7.0415 3.01078L7.04901 3.00776L7.0509 3.00722L7.06274 3.00379C7.06848 3.00211 7.07534 3.00005 7.08303 2.99762L12.1849 1.5813C12.1849 1.58128 12.185 1.58126 12.1851 1.58125C13.3708 1.25263 14.6024 1.95227 14.9304 3.15061C15.2592 4.35152 14.5578 5.5907 13.3721 5.91942Z"
                        fill="#6D6E8A"
                        stroke="#6D6E8A"
                      />
                      <path
                        d="M29.5 2.5C29.5 3.60456 28.6046 4.5 27.5 4.5C26.3954 4.5 25.5 3.60457 25.5 2.5C25.5 1.39543 26.3954 0.5 27.5 0.5C28.6046 0.5 29.5 1.39544 29.5 2.5Z"
                        fill="#6D6E8A"
                        stroke="#6D6E8A"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5 text-center">
              <div className="flex flex-col gap-y-4 gap-x-8">
                <Link href="/">
                  <span className="text-lg text-[#1B1C39] font-semibold cursor-pointer">
                    Personal
                  </span>
                </Link>
                <Link href="/brand-story">
                  <span className="text-lg text-[#1B1C39] font-semibold cursor-pointer">
                    Brand Story
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

function IconOne() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_7_234)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="#F0F0F0"
        />
        <path
          d="M11.4775 12.0001H23.9993C23.9993 10.917 23.8549 9.86774 23.5859 8.86963H11.4775V12.0001Z"
          fill="#D80027"
        />
        <path
          d="M11.4775 5.73934H22.238C21.5034 4.54065 20.5642 3.48114 19.4691 2.60889H11.4775V5.73934Z"
          fill="#D80027"
        />
        <path
          d="M12.0001 24.0003C14.8243 24.0003 17.4201 23.0242 19.4699 21.3916H4.53027C6.58012 23.0242 9.17592 24.0003 12.0001 24.0003Z"
          fill="#D80027"
        />
        <path
          d="M1.76098 18.2608H22.2384C22.8281 17.2985 23.2855 16.2467 23.5863 15.1304H0.413086C0.713883 16.2467 1.17124 17.2985 1.76098 18.2608Z"
          fill="#D80027"
        />
        <path
          d="M5.55863 1.87397H6.65217L5.63498 2.61295L6.02353 3.80869L5.00639 3.0697L3.98925 3.80869L4.32487 2.7757C3.42928 3.52172 2.64431 4.39575 1.99744 5.36963H2.34783L1.70034 5.84002C1.59947 6.0083 1.50272 6.17925 1.41 6.35273L1.71919 7.30434L1.14234 6.88523C0.998953 7.18903 0.867797 7.49967 0.749906 7.81678L1.09055 8.86528H2.34783L1.33064 9.60427L1.71919 10.8L0.702047 10.061L0.0927656 10.5037C0.0317812 10.9939 0 11.4932 0 12H12C12 5.37262 12 4.59131 12 0C9.62944 0 7.41961 0.687656 5.55863 1.87397ZM6.02353 10.8L5.00639 10.061L3.98925 10.8L4.3778 9.60427L3.36061 8.86528H4.61789L5.00639 7.66955L5.39489 8.86528H6.65217L5.63498 9.60427L6.02353 10.8ZM5.63498 6.10861L6.02353 7.30434L5.00639 6.56536L3.98925 7.30434L4.3778 6.10861L3.36061 5.36963H4.61789L5.00639 4.17389L5.39489 5.36963H6.65217L5.63498 6.10861ZM10.3279 10.8L9.31073 10.061L8.29359 10.8L8.68214 9.60427L7.66495 8.86528H8.92223L9.31073 7.66955L9.69923 8.86528H10.9565L9.93933 9.60427L10.3279 10.8ZM9.93933 6.10861L10.3279 7.30434L9.31073 6.56536L8.29359 7.30434L8.68214 6.10861L7.66495 5.36963H8.92223L9.31073 4.17389L9.69923 5.36963H10.9565L9.93933 6.10861ZM9.93933 2.61295L10.3279 3.80869L9.31073 3.0697L8.29359 3.80869L8.68214 2.61295L7.66495 1.87397H8.92223L9.31073 0.678234L9.69923 1.87397H10.9565L9.93933 2.61295Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="clip0_7_234">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.989 12.0238L23.8795 13.6518C23.3605 16.9317 21.842 19.5549 19.3239 21.5214C16.7885 23.4863 13.8028 24.2831 10.3669 23.9117C7.08778 23.3926 4.46521 21.8737 2.4992 19.3551C1.86927 18.5409 1.3504 17.6538 0.942585 16.6938L0.428455 15.2132C0.145994 14.1944 0.00317529 13.1313 0 12.0238C0.0857465 8.62503 1.25678 5.79721 3.5131 3.54033C5.76942 1.28346 8.59655 0.112133 11.9945 0.0263672C15.3924 0.112135 18.2195 1.28346 20.4759 3.54034C22.7322 5.79721 23.9032 8.62503 23.989 12.0238Z"
        fill="#D72612"
      />
      <path
        d="M11.9849 0V4.73003e-05C9.45899 0.0637541 7.24851 0.727381 5.35345 1.99087C5.35361 3.91945 5.41943 5.97071 5.41936 7.89929C11.3721 7.89923 17.259 7.7765 23.2115 7.77644C22.6277 6.18142 21.7126 4.76059 20.4663 3.51397C18.21 1.25709 15.3828 0.0857664 11.9849 0V4.73003e-05V0Z"
        fill="#00822F"
      />
      <path
        d="M5.41129 7.646L5.41128 7.79678L5.41098 16.5466L23.1062 16.5461C23.4662 15.6461 23.7276 14.6814 23.8905 13.652L24 12.0241C23.9601 10.4409 23.6847 8.98164 23.1738 7.64625L5.41129 7.646Z"
        fill="#F0F0F0"
      />
      <path
        d="M23.1293 16.5355V16.5356V16.5356L5.42127 16.4824C5.39755 20.1906 5.39945 22.0086 5.39945 22.0086C6.85063 22.9678 8.51553 23.6173 10.4037 23.8949C10.9472 23.9748 11.4846 23.9835 12.0081 23.9835C14.7774 23.9835 17.2311 23.1608 19.3607 21.5047C21.0894 20.1603 22.3429 18.5004 23.1297 16.5355L23.1293 16.5356V16.5355Z"
        fill="black"
      />
    </svg>
  );
}
