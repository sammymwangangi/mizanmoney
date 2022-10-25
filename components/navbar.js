import Link from "next/link";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import React from 'react'

const navbar = () => {
  return (
    <Popover>
        <div className="px-2 sm:px-6 pt-[44px]">
            <div className="flex items-center justify-between md:justify-start md:space-x-[50px]">
            <div className="flex justify-start lg:w-[707px]">
                <Link href="/home">
                <svg
                    width="150"
                    height="77"
                    viewBox="0 0 150 77"
                    fill="none"
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M56.4768 2.32999C56.4768 1.04317 55.4275 0 54.1331 0C52.8386 0 51.7893 1.04317 51.7893 2.32999C51.7893 3.61681 52.8386 4.65999 54.1331 4.65999C55.4275 4.65999 56.4768 3.61681 56.4768 2.32999Z"
                    fill="url(#paint0_linear_11_6972)"
                    />
                    <path
                    d="M54.1331 8.11739C55.4275 8.11739 56.4768 9.16057 56.4768 10.4474V33.3715C56.4768 34.6583 55.4275 35.7015 54.1331 35.7015C52.8386 35.7015 51.7893 34.6583 51.7893 33.3715V10.4474C51.7893 9.16057 52.8386 8.11739 54.1331 8.11739Z"
                    fill="url(#paint1_linear_11_6972)"
                    />
                    <path
                    d="M61.0887 10.4474C61.0887 9.16057 62.1381 8.11739 63.4325 8.11739H80.6704C81.5555 8.11739 82.3651 8.61309 82.7634 9.39887C83.1617 10.1846 83.0808 11.1265 82.5541 11.8337L68.0835 31.267H81.124C82.4184 31.267 83.4677 32.3102 83.4677 33.597C83.4677 34.8838 82.4184 35.927 81.124 35.927H63.4325C62.5474 35.927 61.7378 35.4313 61.3395 34.6455C60.9411 33.8597 61.0221 32.9179 61.5487 32.2107L76.0193 12.7774H63.4325C62.1381 12.7774 61.0887 11.7342 61.0887 10.4474Z"
                    fill="url(#paint2_linear_11_6972)"
                    />
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M110.988 33.597C110.988 34.8838 112.037 35.927 113.332 35.927C114.626 35.927 115.675 34.8838 115.675 33.597V22.1725C115.675 14.5761 109.481 8.41804 101.84 8.41804C94.1985 8.41804 88.004 14.5761 88.004 22.1725C88.004 29.7689 94.1985 35.927 101.84 35.927C105.347 35.927 108.549 34.6297 110.988 32.4915V33.597ZM92.6915 22.1725C92.6915 17.1498 96.7873 13.078 101.84 13.078C106.892 13.078 110.988 17.1498 110.988 22.1725C110.988 27.1953 106.892 31.267 101.84 31.267C96.7873 31.267 92.6915 27.1953 92.6915 22.1725Z"
                    fill="url(#paint3_linear_11_6972)"
                    />
                    <path
                    d="M0 20.4438C0 13.304 5.8221 7.51611 13.004 7.51611C17.3681 7.51611 21.23 9.65316 23.5887 12.932C25.9474 9.65316 29.8094 7.51611 34.1734 7.51611C41.3553 7.51611 47.1774 13.304 47.1774 20.4438V33.6722C47.1774 35.0005 46.0942 36.0773 44.7581 36.0773C43.4219 36.0773 42.3387 35.0005 42.3387 33.6722V20.4438C42.3387 15.9607 38.683 12.3264 34.1734 12.3264C29.6638 12.3264 26.0081 15.9607 26.0081 20.4438V33.6722C26.0081 35.0005 24.9249 36.0773 23.5887 36.0773C22.2525 36.0773 21.1694 35.0005 21.1694 33.6722V20.4438C21.1694 15.9607 17.5136 12.3264 13.004 12.3264C8.49445 12.3264 4.83871 15.9607 4.83871 20.4438V33.6722C4.83871 35.0005 3.75553 36.0773 2.41935 36.0773C1.08318 36.0773 0 35.0005 0 33.6722V20.4438Z"
                    fill="url(#paint4_linear_11_6972)"
                    />
                    <path
                    d="M125.202 22.2477C125.202 16.7683 129.67 12.3264 135.181 12.3264C140.693 12.3264 145.161 16.7683 145.161 22.2477V33.6722C145.161 35.0005 146.244 36.0773 147.581 36.0773C148.917 36.0773 150 35.0005 150 33.6722V22.2477C150 14.1117 143.365 7.51611 135.181 7.51611C126.997 7.51611 120.363 14.1117 120.363 22.2477V33.6722C120.363 35.0005 121.446 36.0773 122.782 36.0773C124.118 36.0773 125.202 35.0005 125.202 33.6722V22.2477Z"
                    fill="url(#paint5_linear_11_6972)"
                    />
                    <path
                    d="M63.3568 40.8876C64.6513 40.8876 65.7006 41.9308 65.7006 43.2176C65.7006 44.5044 64.6513 45.5476 63.3568 45.5476C62.0624 45.5476 61.0131 44.5044 61.0131 43.2176C61.0131 41.9308 62.0624 40.8876 63.3568 40.8876Z"
                    fill="url(#paint6_linear_11_6972)"
                    />
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M109.4 41.7895C104.181 41.7895 99.9496 45.9959 99.9496 51.1847C99.9496 52.9115 100.418 54.5295 101.236 55.9198H94.316C95.0156 54.6476 95.4133 53.1878 95.4133 51.6357C95.4133 47.9436 93.1259 44.4055 89.5154 43.3178C89.4967 43.3121 89.4778 43.3067 89.459 43.3015L85.0739 42.0989C83.8261 41.7567 82.5355 42.4849 82.1912 43.7254C81.847 44.9659 82.5795 46.2489 83.8273 46.5911L88.1798 47.7847C89.5487 48.2105 90.7258 49.7301 90.7258 51.6357C90.7258 54.0017 88.7964 55.9198 86.4163 55.9198H65.7762V51.335C65.7762 50.0482 64.7269 49.005 63.4325 49.005C62.138 49.005 61.0887 50.0482 61.0887 51.335V74.0336C61.0887 75.3205 62.138 76.3636 63.4325 76.3636C64.7269 76.3636 65.7762 75.3205 65.7762 74.0336V60.5798H140.549C145.769 60.5798 150 56.3735 150 51.1847C150 45.9959 145.769 41.7895 140.549 41.7895H109.4ZM140.549 55.9198H109.4C106.77 55.9198 104.637 53.7998 104.637 51.1847C104.637 48.5695 106.77 46.4495 109.4 46.4495H140.549C143.18 46.4495 145.312 48.5695 145.312 51.1847C145.312 53.7998 143.18 55.9198 140.549 55.9198Z"
                    fill="url(#paint7_linear_11_6972)"
                    />
                    <path
                    d="M56.4768 43.2928V74.0336C56.4768 75.3205 55.4275 76.3636 54.1331 76.3636C52.8386 76.3636 51.7893 75.3205 51.7893 74.0336V43.2928C51.7893 42.006 52.8386 40.9628 54.1331 40.9628C55.4275 40.9628 56.4768 42.006 56.4768 43.2928Z"
                    fill="url(#paint8_linear_11_6972)"
                    />
                    <path
                    d="M76.5877 64.0372C77.8821 64.0372 78.9314 65.0804 78.9314 66.3672C78.9314 67.654 77.8821 68.6972 76.5877 68.6972C75.2933 68.6972 74.2439 67.654 74.2439 66.3672C74.2439 65.0804 75.2933 64.0372 76.5877 64.0372Z"
                    fill="url(#paint9_linear_11_6972)"
                    />
                    <path
                    d="M85.8871 66.3672C85.8871 65.0804 84.8378 64.0372 83.5434 64.0372C82.2489 64.0372 81.1996 65.0804 81.1996 66.3672C81.1996 67.654 82.2489 68.6972 83.5434 68.6972C84.8378 68.6972 85.8871 67.654 85.8871 66.3672Z"
                    fill="url(#paint10_linear_11_6972)"
                    />
                    <path
                    d="M11.586 46.516C12.8338 46.1738 13.5663 44.8907 13.2221 43.6503C12.8778 42.4098 11.5872 41.6816 10.3394 42.0238L5.95435 43.2263C5.93546 43.2315 5.91663 43.2369 5.89787 43.2426C2.28739 44.3303 0 47.8685 0 51.5605C0 56.4992 4.0264 60.503 8.99386 60.5047H8.99697L38.1744 60.5798L38.1804 60.5798C43.1493 60.5798 47.1774 56.5754 47.1774 51.6357C47.1774 47.9436 44.89 44.4055 41.2795 43.3178C41.2608 43.3121 41.242 43.3067 41.2231 43.3015L36.838 42.0989C35.5902 41.7567 34.2996 42.4849 33.9554 43.7254C33.6111 44.9659 34.3436 46.2489 35.5914 46.5911L39.9439 47.7847C41.3128 48.2105 42.4899 49.7301 42.4899 51.6357C42.4899 54.0009 40.5619 55.9184 38.1831 55.9198H38.1804L9.00302 55.8447L8.99697 55.8447C6.61692 55.8447 4.6875 53.9266 4.6875 51.5605C4.6875 49.6549 5.86461 48.1354 7.23354 47.7096L11.586 46.516Z"
                    fill="url(#paint11_linear_11_6972)"
                    />
                    <path
                    d="M23.5887 40.8876C24.8831 40.8876 25.9325 41.9308 25.9325 43.2176C25.9325 44.5044 24.8831 45.5476 23.5887 45.5476C22.2943 45.5476 21.245 44.5044 21.245 43.2176C21.245 41.9308 22.2943 40.8876 23.5887 40.8876Z"
                    fill="url(#paint12_linear_11_6972)"
                    />
                    <defs>
                    <linearGradient
                        id="paint0_linear_11_6972"
                        x1="150"
                        y1="0"
                        x2="88.2515"
                        y2="121.292"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_11_6972"
                        x1="150"
                        y1="0"
                        x2="88.2515"
                        y2="121.292"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_11_6972"
                        x1="150"
                        y1="0"
                        x2="88.2515"
                        y2="121.292"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                        id="paint3_linear_11_6972"
                        x1="150"
                        y1="0"
                        x2="88.2515"
                        y2="121.292"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                        id="paint4_linear_11_6972"
                        x1="150"
                        y1="0"
                        x2="88.2515"
                        y2="121.292"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                        id="paint5_linear_11_6972"
                        x1="150"
                        y1="0"
                        x2="88.2515"
                        y2="121.292"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                        id="paint6_linear_11_6972"
                        x1="150"
                        y1="0"
                        x2="88.2515"
                        y2="121.292"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                        id="paint7_linear_11_6972"
                        x1="150"
                        y1="0"
                        x2="88.2515"
                        y2="121.292"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                        id="paint8_linear_11_6972"
                        x1="150"
                        y1="0"
                        x2="88.2515"
                        y2="121.292"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                        id="paint9_linear_11_6972"
                        x1="150"
                        y1="0"
                        x2="88.2515"
                        y2="121.292"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                        id="paint10_linear_11_6972"
                        x1="150"
                        y1="0"
                        x2="88.2515"
                        y2="121.292"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                        id="paint11_linear_11_6972"
                        x1="150"
                        y1="0"
                        x2="88.2515"
                        y2="121.292"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                        id="paint12_linear_11_6972"
                        x1="150"
                        y1="0"
                        x2="88.2515"
                        y2="121.292"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    </defs>
                </svg>
                </Link>
            </div>

            <Popover.Group
                as="nav"
                className="hidden space-x-[72px] md:flex lg:-mt-6"
            >
                <a
                href="#"
                className="text-[18px] leading-[25px] text-[#1B1C39] font-semibold"
                >
                Personal
                </a>
                <a href="#" className="text-lg text-[#6D6E8A] font-semibold">
                Brand Story
                </a>
            </Popover.Group>
            {/* Flag */}
            <div className="flex items-center justify-end lg:w-[170px] lg:-mt-6">
                <a href="#" className="group inline-flex items-center justify-center">
                <span>
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
                </span>
                <span className="ml-2 text-[#6D6E8A] text-sm font-medium">ENG</span>
                <span>
                    <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-[#6D6E8A] font-bold"
                    aria-hidden="true"
                    />
                </span>
                </a>
            </div>

            <div className="-my-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
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
                    <Link href="/home">
                        <svg
                        width="150"
                        height="77"
                        viewBox="0 0 150 77"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M56.4768 2.32999C56.4768 1.04317 55.4275 0 54.1331 0C52.8386 0 51.7893 1.04317 51.7893 2.32999C51.7893 3.61681 52.8386 4.65999 54.1331 4.65999C55.4275 4.65999 56.4768 3.61681 56.4768 2.32999Z"
                            fill="url(#paint0_linear_11_6972)"
                        />
                        <path
                            d="M54.1331 8.11739C55.4275 8.11739 56.4768 9.16057 56.4768 10.4474V33.3715C56.4768 34.6583 55.4275 35.7015 54.1331 35.7015C52.8386 35.7015 51.7893 34.6583 51.7893 33.3715V10.4474C51.7893 9.16057 52.8386 8.11739 54.1331 8.11739Z"
                            fill="url(#paint1_linear_11_6972)"
                        />
                        <path
                            d="M61.0887 10.4474C61.0887 9.16057 62.1381 8.11739 63.4325 8.11739H80.6704C81.5555 8.11739 82.3651 8.61309 82.7634 9.39887C83.1617 10.1846 83.0808 11.1265 82.5541 11.8337L68.0835 31.267H81.124C82.4184 31.267 83.4677 32.3102 83.4677 33.597C83.4677 34.8838 82.4184 35.927 81.124 35.927H63.4325C62.5474 35.927 61.7378 35.4313 61.3395 34.6455C60.9411 33.8597 61.0221 32.9179 61.5487 32.2107L76.0193 12.7774H63.4325C62.1381 12.7774 61.0887 11.7342 61.0887 10.4474Z"
                            fill="url(#paint2_linear_11_6972)"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M110.988 33.597C110.988 34.8838 112.037 35.927 113.332 35.927C114.626 35.927 115.675 34.8838 115.675 33.597V22.1725C115.675 14.5761 109.481 8.41804 101.84 8.41804C94.1985 8.41804 88.004 14.5761 88.004 22.1725C88.004 29.7689 94.1985 35.927 101.84 35.927C105.347 35.927 108.549 34.6297 110.988 32.4915V33.597ZM92.6915 22.1725C92.6915 17.1498 96.7873 13.078 101.84 13.078C106.892 13.078 110.988 17.1498 110.988 22.1725C110.988 27.1953 106.892 31.267 101.84 31.267C96.7873 31.267 92.6915 27.1953 92.6915 22.1725Z"
                            fill="url(#paint3_linear_11_6972)"
                        />
                        <path
                            d="M0 20.4438C0 13.304 5.8221 7.51611 13.004 7.51611C17.3681 7.51611 21.23 9.65316 23.5887 12.932C25.9474 9.65316 29.8094 7.51611 34.1734 7.51611C41.3553 7.51611 47.1774 13.304 47.1774 20.4438V33.6722C47.1774 35.0005 46.0942 36.0773 44.7581 36.0773C43.4219 36.0773 42.3387 35.0005 42.3387 33.6722V20.4438C42.3387 15.9607 38.683 12.3264 34.1734 12.3264C29.6638 12.3264 26.0081 15.9607 26.0081 20.4438V33.6722C26.0081 35.0005 24.9249 36.0773 23.5887 36.0773C22.2525 36.0773 21.1694 35.0005 21.1694 33.6722V20.4438C21.1694 15.9607 17.5136 12.3264 13.004 12.3264C8.49445 12.3264 4.83871 15.9607 4.83871 20.4438V33.6722C4.83871 35.0005 3.75553 36.0773 2.41935 36.0773C1.08318 36.0773 0 35.0005 0 33.6722V20.4438Z"
                            fill="url(#paint4_linear_11_6972)"
                        />
                        <path
                            d="M125.202 22.2477C125.202 16.7683 129.67 12.3264 135.181 12.3264C140.693 12.3264 145.161 16.7683 145.161 22.2477V33.6722C145.161 35.0005 146.244 36.0773 147.581 36.0773C148.917 36.0773 150 35.0005 150 33.6722V22.2477C150 14.1117 143.365 7.51611 135.181 7.51611C126.997 7.51611 120.363 14.1117 120.363 22.2477V33.6722C120.363 35.0005 121.446 36.0773 122.782 36.0773C124.118 36.0773 125.202 35.0005 125.202 33.6722V22.2477Z"
                            fill="url(#paint5_linear_11_6972)"
                        />
                        <path
                            d="M63.3568 40.8876C64.6513 40.8876 65.7006 41.9308 65.7006 43.2176C65.7006 44.5044 64.6513 45.5476 63.3568 45.5476C62.0624 45.5476 61.0131 44.5044 61.0131 43.2176C61.0131 41.9308 62.0624 40.8876 63.3568 40.8876Z"
                            fill="url(#paint6_linear_11_6972)"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M109.4 41.7895C104.181 41.7895 99.9496 45.9959 99.9496 51.1847C99.9496 52.9115 100.418 54.5295 101.236 55.9198H94.316C95.0156 54.6476 95.4133 53.1878 95.4133 51.6357C95.4133 47.9436 93.1259 44.4055 89.5154 43.3178C89.4967 43.3121 89.4778 43.3067 89.459 43.3015L85.0739 42.0989C83.8261 41.7567 82.5355 42.4849 82.1912 43.7254C81.847 44.9659 82.5795 46.2489 83.8273 46.5911L88.1798 47.7847C89.5487 48.2105 90.7258 49.7301 90.7258 51.6357C90.7258 54.0017 88.7964 55.9198 86.4163 55.9198H65.7762V51.335C65.7762 50.0482 64.7269 49.005 63.4325 49.005C62.138 49.005 61.0887 50.0482 61.0887 51.335V74.0336C61.0887 75.3205 62.138 76.3636 63.4325 76.3636C64.7269 76.3636 65.7762 75.3205 65.7762 74.0336V60.5798H140.549C145.769 60.5798 150 56.3735 150 51.1847C150 45.9959 145.769 41.7895 140.549 41.7895H109.4ZM140.549 55.9198H109.4C106.77 55.9198 104.637 53.7998 104.637 51.1847C104.637 48.5695 106.77 46.4495 109.4 46.4495H140.549C143.18 46.4495 145.312 48.5695 145.312 51.1847C145.312 53.7998 143.18 55.9198 140.549 55.9198Z"
                            fill="url(#paint7_linear_11_6972)"
                        />
                        <path
                            d="M56.4768 43.2928V74.0336C56.4768 75.3205 55.4275 76.3636 54.1331 76.3636C52.8386 76.3636 51.7893 75.3205 51.7893 74.0336V43.2928C51.7893 42.006 52.8386 40.9628 54.1331 40.9628C55.4275 40.9628 56.4768 42.006 56.4768 43.2928Z"
                            fill="url(#paint8_linear_11_6972)"
                        />
                        <path
                            d="M76.5877 64.0372C77.8821 64.0372 78.9314 65.0804 78.9314 66.3672C78.9314 67.654 77.8821 68.6972 76.5877 68.6972C75.2933 68.6972 74.2439 67.654 74.2439 66.3672C74.2439 65.0804 75.2933 64.0372 76.5877 64.0372Z"
                            fill="url(#paint9_linear_11_6972)"
                        />
                        <path
                            d="M85.8871 66.3672C85.8871 65.0804 84.8378 64.0372 83.5434 64.0372C82.2489 64.0372 81.1996 65.0804 81.1996 66.3672C81.1996 67.654 82.2489 68.6972 83.5434 68.6972C84.8378 68.6972 85.8871 67.654 85.8871 66.3672Z"
                            fill="url(#paint10_linear_11_6972)"
                        />
                        <path
                            d="M11.586 46.516C12.8338 46.1738 13.5663 44.8907 13.2221 43.6503C12.8778 42.4098 11.5872 41.6816 10.3394 42.0238L5.95435 43.2263C5.93546 43.2315 5.91663 43.2369 5.89787 43.2426C2.28739 44.3303 0 47.8685 0 51.5605C0 56.4992 4.0264 60.503 8.99386 60.5047H8.99697L38.1744 60.5798L38.1804 60.5798C43.1493 60.5798 47.1774 56.5754 47.1774 51.6357C47.1774 47.9436 44.89 44.4055 41.2795 43.3178C41.2608 43.3121 41.242 43.3067 41.2231 43.3015L36.838 42.0989C35.5902 41.7567 34.2996 42.4849 33.9554 43.7254C33.6111 44.9659 34.3436 46.2489 35.5914 46.5911L39.9439 47.7847C41.3128 48.2105 42.4899 49.7301 42.4899 51.6357C42.4899 54.0009 40.5619 55.9184 38.1831 55.9198H38.1804L9.00302 55.8447L8.99697 55.8447C6.61692 55.8447 4.6875 53.9266 4.6875 51.5605C4.6875 49.6549 5.86461 48.1354 7.23354 47.7096L11.586 46.516Z"
                            fill="url(#paint11_linear_11_6972)"
                        />
                        <path
                            d="M23.5887 40.8876C24.8831 40.8876 25.9325 41.9308 25.9325 43.2176C25.9325 44.5044 24.8831 45.5476 23.5887 45.5476C22.2943 45.5476 21.245 44.5044 21.245 43.2176C21.245 41.9308 22.2943 40.8876 23.5887 40.8876Z"
                            fill="url(#paint12_linear_11_6972)"
                        />
                        <defs>
                            <linearGradient
                            id="paint0_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#80B2FF" />
                            <stop offset="0.51551" stopColor="#7C27D9" />
                            <stop offset="1" stopColor="#FF68F0" />
                            </linearGradient>
                            <linearGradient
                            id="paint1_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#80B2FF" />
                            <stop offset="0.51551" stopColor="#7C27D9" />
                            <stop offset="1" stopColor="#FF68F0" />
                            </linearGradient>
                            <linearGradient
                            id="paint2_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#80B2FF" />
                            <stop offset="0.51551" stopColor="#7C27D9" />
                            <stop offset="1" stopColor="#FF68F0" />
                            </linearGradient>
                            <linearGradient
                            id="paint3_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#80B2FF" />
                            <stop offset="0.51551" stopColor="#7C27D9" />
                            <stop offset="1" stopColor="#FF68F0" />
                            </linearGradient>
                            <linearGradient
                            id="paint4_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#80B2FF" />
                            <stop offset="0.51551" stopColor="#7C27D9" />
                            <stop offset="1" stopColor="#FF68F0" />
                            </linearGradient>
                            <linearGradient
                            id="paint5_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#80B2FF" />
                            <stop offset="0.51551" stopColor="#7C27D9" />
                            <stop offset="1" stopColor="#FF68F0" />
                            </linearGradient>
                            <linearGradient
                            id="paint6_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#80B2FF" />
                            <stop offset="0.51551" stopColor="#7C27D9" />
                            <stop offset="1" stopColor="#FF68F0" />
                            </linearGradient>
                            <linearGradient
                            id="paint7_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#80B2FF" />
                            <stop offset="0.51551" stopColor="#7C27D9" />
                            <stop offset="1" stopColor="#FF68F0" />
                            </linearGradient>
                            <linearGradient
                            id="paint8_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#80B2FF" />
                            <stop offset="0.51551" stopColor="#7C27D9" />
                            <stop offset="1" stopColor="#FF68F0" />
                            </linearGradient>
                            <linearGradient
                            id="paint9_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#80B2FF" />
                            <stop offset="0.51551" stopColor="#7C27D9" />
                            <stop offset="1" stopColor="#FF68F0" />
                            </linearGradient>
                            <linearGradient
                            id="paint10_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#80B2FF" />
                            <stop offset="0.51551" stopColor="#7C27D9" />
                            <stop offset="1" stopColor="#FF68F0" />
                            </linearGradient>
                            <linearGradient
                            id="paint11_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#80B2FF" />
                            <stop offset="0.51551" stopColor="#7C27D9" />
                            <stop offset="1" stopColor="#FF68F0" />
                            </linearGradient>
                            <linearGradient
                            id="paint12_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                            >
                            <stop stopColor="#80B2FF" />
                            <stop offset="0.51551" stopColor="#7C27D9" />
                            <stop offset="1" stopColor="#FF68F0" />
                            </linearGradient>
                        </defs>
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
                    <a href="#" className="text-lg text-[#1B1C39] font-semibold">
                    Personal
                    </a>

                    <a href="#" className="text-lg text-[#6D6E8A] font-semibold">
                    Brand Story
                    </a>
                </div>
                </div>
            </div>
            </Popover.Panel>
        </Transition>
    </Popover>
  )
}

export default navbar
