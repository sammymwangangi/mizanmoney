import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import header from "../styles/header.module.css";
import phonePic from "../public/phone2.png";
import kdic from "../public/clients/kdic.png";
import pci from "../public/clients/pci.png";
import shariyah from "../public/clients/shariyah.png";
import trustpilot from "../public/clients/trustpilot.png";
import iphone from "../public/banking/iphone.png";
import phone from "../public/banking/phone3.png";
import watch from "../public/banking/watchiphone.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { BsCheck2 } from "@heroicons/react/20/solid";

const personal = [{ name: "Personal", href: "#" }];

const brand = [{ name: "Brand Story", href: "#" }];

const seeHow = {
  background:
    "linear-gradient(80.75deg, #D155FF 4.6%, #B532F2 17.14%, #A016E8 29.4%, #9406E2 40.22%, #8F00E0 48.46%, #A08CFF 92.32%)",
};

export default function Index() {
  return (
    <div className={header.body}>
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-[1265px]">
          <div className="relative z-10">
            <Popover>
              <div className="px-2 sm:px-6 pt-[30px]">
                <div className="flex items-center justify-between md:justify-start md:space-x-[50px]">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
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
                            <stop stop-color="#80B2FF" />
                            <stop offset="0.51551" stop-color="#7C27D9" />
                            <stop offset="1" stop-color="#FF68F0" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#80B2FF" />
                            <stop offset="0.51551" stop-color="#7C27D9" />
                            <stop offset="1" stop-color="#FF68F0" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#80B2FF" />
                            <stop offset="0.51551" stop-color="#7C27D9" />
                            <stop offset="1" stop-color="#FF68F0" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#80B2FF" />
                            <stop offset="0.51551" stop-color="#7C27D9" />
                            <stop offset="1" stop-color="#FF68F0" />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#80B2FF" />
                            <stop offset="0.51551" stop-color="#7C27D9" />
                            <stop offset="1" stop-color="#FF68F0" />
                          </linearGradient>
                          <linearGradient
                            id="paint5_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#80B2FF" />
                            <stop offset="0.51551" stop-color="#7C27D9" />
                            <stop offset="1" stop-color="#FF68F0" />
                          </linearGradient>
                          <linearGradient
                            id="paint6_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#80B2FF" />
                            <stop offset="0.51551" stop-color="#7C27D9" />
                            <stop offset="1" stop-color="#FF68F0" />
                          </linearGradient>
                          <linearGradient
                            id="paint7_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#80B2FF" />
                            <stop offset="0.51551" stop-color="#7C27D9" />
                            <stop offset="1" stop-color="#FF68F0" />
                          </linearGradient>
                          <linearGradient
                            id="paint8_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#80B2FF" />
                            <stop offset="0.51551" stop-color="#7C27D9" />
                            <stop offset="1" stop-color="#FF68F0" />
                          </linearGradient>
                          <linearGradient
                            id="paint9_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#80B2FF" />
                            <stop offset="0.51551" stop-color="#7C27D9" />
                            <stop offset="1" stop-color="#FF68F0" />
                          </linearGradient>
                          <linearGradient
                            id="paint10_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#80B2FF" />
                            <stop offset="0.51551" stop-color="#7C27D9" />
                            <stop offset="1" stop-color="#FF68F0" />
                          </linearGradient>
                          <linearGradient
                            id="paint11_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#80B2FF" />
                            <stop offset="0.51551" stop-color="#7C27D9" />
                            <stop offset="1" stop-color="#FF68F0" />
                          </linearGradient>
                          <linearGradient
                            id="paint12_linear_11_6972"
                            x1="150"
                            y1="0"
                            x2="88.2515"
                            y2="121.292"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#80B2FF" />
                            <stop offset="0.51551" stop-color="#7C27D9" />
                            <stop offset="1" stop-color="#FF68F0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Link>
                  </div>

                  <Popover.Group
                    as="nav"
                    className="hidden space-x-[76px] md:flex"
                  >
                    <a
                      href="#"
                      className="text-lg text-[#1B1C39] font-semibold"
                    >
                      Personal
                    </a>
                    <a
                      href="#"
                      className="text-lg text-[#6D6E8A] font-semibold"
                    >
                      Brand Story
                    </a>
                  </Popover.Group>
                  {/* Flag */}
                  <div className="flex items-center justify-end lg:w-[166px]">
                    <a
                      href="#"
                      className="group inline-flex items-center justify-center"
                    >
                      <span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_7_234)">
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
                      <span className="ml-2 text-[#6D6E8A] text-sm font-medium">
                        ENG
                      </span>
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
                                  <stop stop-color="#80B2FF" />
                                  <stop offset="0.51551" stop-color="#7C27D9" />
                                  <stop offset="1" stop-color="#FF68F0" />
                                </linearGradient>
                                <linearGradient
                                  id="paint1_linear_11_6972"
                                  x1="150"
                                  y1="0"
                                  x2="88.2515"
                                  y2="121.292"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#80B2FF" />
                                  <stop offset="0.51551" stop-color="#7C27D9" />
                                  <stop offset="1" stop-color="#FF68F0" />
                                </linearGradient>
                                <linearGradient
                                  id="paint2_linear_11_6972"
                                  x1="150"
                                  y1="0"
                                  x2="88.2515"
                                  y2="121.292"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#80B2FF" />
                                  <stop offset="0.51551" stop-color="#7C27D9" />
                                  <stop offset="1" stop-color="#FF68F0" />
                                </linearGradient>
                                <linearGradient
                                  id="paint3_linear_11_6972"
                                  x1="150"
                                  y1="0"
                                  x2="88.2515"
                                  y2="121.292"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#80B2FF" />
                                  <stop offset="0.51551" stop-color="#7C27D9" />
                                  <stop offset="1" stop-color="#FF68F0" />
                                </linearGradient>
                                <linearGradient
                                  id="paint4_linear_11_6972"
                                  x1="150"
                                  y1="0"
                                  x2="88.2515"
                                  y2="121.292"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#80B2FF" />
                                  <stop offset="0.51551" stop-color="#7C27D9" />
                                  <stop offset="1" stop-color="#FF68F0" />
                                </linearGradient>
                                <linearGradient
                                  id="paint5_linear_11_6972"
                                  x1="150"
                                  y1="0"
                                  x2="88.2515"
                                  y2="121.292"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#80B2FF" />
                                  <stop offset="0.51551" stop-color="#7C27D9" />
                                  <stop offset="1" stop-color="#FF68F0" />
                                </linearGradient>
                                <linearGradient
                                  id="paint6_linear_11_6972"
                                  x1="150"
                                  y1="0"
                                  x2="88.2515"
                                  y2="121.292"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#80B2FF" />
                                  <stop offset="0.51551" stop-color="#7C27D9" />
                                  <stop offset="1" stop-color="#FF68F0" />
                                </linearGradient>
                                <linearGradient
                                  id="paint7_linear_11_6972"
                                  x1="150"
                                  y1="0"
                                  x2="88.2515"
                                  y2="121.292"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#80B2FF" />
                                  <stop offset="0.51551" stop-color="#7C27D9" />
                                  <stop offset="1" stop-color="#FF68F0" />
                                </linearGradient>
                                <linearGradient
                                  id="paint8_linear_11_6972"
                                  x1="150"
                                  y1="0"
                                  x2="88.2515"
                                  y2="121.292"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#80B2FF" />
                                  <stop offset="0.51551" stop-color="#7C27D9" />
                                  <stop offset="1" stop-color="#FF68F0" />
                                </linearGradient>
                                <linearGradient
                                  id="paint9_linear_11_6972"
                                  x1="150"
                                  y1="0"
                                  x2="88.2515"
                                  y2="121.292"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#80B2FF" />
                                  <stop offset="0.51551" stop-color="#7C27D9" />
                                  <stop offset="1" stop-color="#FF68F0" />
                                </linearGradient>
                                <linearGradient
                                  id="paint10_linear_11_6972"
                                  x1="150"
                                  y1="0"
                                  x2="88.2515"
                                  y2="121.292"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#80B2FF" />
                                  <stop offset="0.51551" stop-color="#7C27D9" />
                                  <stop offset="1" stop-color="#FF68F0" />
                                </linearGradient>
                                <linearGradient
                                  id="paint11_linear_11_6972"
                                  x1="150"
                                  y1="0"
                                  x2="88.2515"
                                  y2="121.292"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#80B2FF" />
                                  <stop offset="0.51551" stop-color="#7C27D9" />
                                  <stop offset="1" stop-color="#FF68F0" />
                                </linearGradient>
                                <linearGradient
                                  id="paint12_linear_11_6972"
                                  x1="150"
                                  y1="0"
                                  x2="88.2515"
                                  y2="121.292"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#80B2FF" />
                                  <stop offset="0.51551" stop-color="#7C27D9" />
                                  <stop offset="1" stop-color="#FF68F0" />
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
                        <a
                          href="#"
                          className="text-lg text-[#1B1C39] font-semibold"
                        >
                          Personal
                        </a>

                        <a
                          href="#"
                          className="text-lg text-[#6D6E8A] font-semibold"
                        >
                          Brand Story
                        </a>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="max-w-2xl mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-6xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#9E7AFC]">Salaam,</span>
                </h1>
                <h1 className={header.pr_1}>
                  <span className="block xl:inline">We are Mizan,</span>
                </h1>
                <h1 className={header.pr_1}>
                  <span className="block xl:inline">
                    Africa’s first Islamic neobank.
                  </span>
                </h1>
                <p className={header.pr_2}>
                  We are excited to have crafted a piece of tech that is
                  seamless, without walls, borders or physical limits, built on
                  an ethical islamic framework.
                </p>
                <p className="mt-3 text-xl text-[#4B4B4B] font-medium sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Join our waiting list.
                </p>
                <div className="mt-5 sm:mt-8 flex space-x-[80px] sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-full">
                    <div className={header.waitlist} style={{ color: "white" }}>
                      <a href="#" className="items-center">
                        JOIN WAITLIST
                      </a>
                    </div>
                  </div>
                  <div className="flex mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="flex w-full items-center justify-center rounded-full text-base font-medium text-indigo-700 md:py-4 md:px-10 md:text-lg"
                      style={{ seeHow }}
                    >
                      <span>SEE HOW</span>
                      <span>
                        <svg
                          width="15"
                          height="20"
                          viewBox="0 0 15 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.500157 0.939899L13.9442 10L0.500157 19.0601L0.500157 0.939899Z"
                            fill="white"
                            stroke="#1B1C39"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div className="flex space-x-[77px] mt-[157px] mb-[140px] items-center justify-center text-center">
            <div>
              <Image
                src={kdic}
                alt="Phone"
                width={190}
                height={80}
                objectFit="cover"
                priority
              />
            </div>
            <div>
              <Image
                src={pci}
                alt="Phone"
                width={160}
                height={62}
                objectFit="cover"
                priority
              />
            </div>
            <div>
              <Image
                src={trustpilot}
                alt="Phone"
                width={119}
                height={60}
                objectFit="cover"
                priority
              />
            </div>
            <div>
              <Image
                src={shariyah}
                alt="Phone"
                width={107}
                height={102}
                objectFit="cover"
                priority
              />
            </div>
          </div>

          <div className="flex items-center mb-[141px]">
            <Image
              src={phone}
              alt="Iphone"
              width={539}
              height={613.8}
              priority
            />
            <div className="relative card1 flex flex-col px-[81px] pt-[50px] pb-[44px] bg-white rounded-3xl w-[760px] h-auto text-center">
              <style jsx>{`
                .card1 {
                  box-shadow: 0px -8px 100px rgba(105, 67, 175, 0.1);
                }
                .button2 {
                  box-shadow: 0px -8px 100px rgba(105, 67, 175, 0.1);
                }
              `}</style>
              <div className="mb-[36px] text-left">
                <h1 className={header.pr_3}>Islamic Banking Reimagined</h1>
              </div>
              <div className="flex flex-col space-y-[22px] mb-[40px]">
                <div className="flex space-x-[15px] items-center">
                  <div className="w-[40px] h-[40px] flex rounded-full bg-[#6D6E8A] items-center justify-center">
                    <svg
                      width="19"
                      height="12"
                      viewBox="0 0 19 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66699 5.16667L7.50033 11L17.5003 1"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left text-xl text-black font-medium">
                    Halal ready without compromise.
                  </div>
                </div>
                <div className="flex space-x-[15px] items-center">
                  <div className="w-[40px] h-[40px] flex rounded-full bg-[#6D6E8A] items-center justify-center">
                    <svg
                      width="19"
                      height="12"
                      viewBox="0 0 19 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66699 5.16667L7.50033 11L17.5003 1"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left text-xl text-black font-medium">
                    Open your account in minutes (Goodbye paper work).
                  </div>
                </div>
                <div className="flex space-x-[15px] items-center">
                  <div className="w-[40px] h-[40px] flex rounded-full bg-[#6D6E8A] items-center justify-center">
                    <svg
                      width="19"
                      height="12"
                      viewBox="0 0 19 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66699 5.16667L7.50033 11L17.5003 1"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left text-xl text-black font-medium">
                    Get upto 3 days early salary.
                  </div>
                </div>
                <div className="flex space-x-[15px] items-center">
                  <div className="w-[40px] h-[40px] flex rounded-full bg-[#6D6E8A] items-center justify-center">
                    <svg
                      width="19"
                      height="12"
                      viewBox="0 0 19 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66699 5.16667L7.50033 11L17.5003 1"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left text-xl text-black font-medium">
                    Track every buck. Know your spend.
                  </div>
                </div>
                <div className="flex space-x-[15px] items-center">
                  <div className="w-[40px] h-[40px] flex rounded-full bg-[#6D6E8A] items-center justify-center">
                    <svg
                      width="19"
                      height="12"
                      viewBox="0 0 19 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66699 5.16667L7.50033 11L17.5003 1"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left text-xl text-black font-medium">
                    Buy now pay later,(interest free, forever).
                  </div>
                </div>
              </div>
              <div className="text-left mb-[55px]">
                <p className={header.pr_4}>
                  We didn’t just want to throw solutions around, in the hope
                  they find a problem to solve. Thats why we’ve chosen to run a
                  beta phase.
                </p>
              </div>
              <div className="rounded-full">
                <div className={header.button2} style={{ color: "white" }}>
                  <a href="#" className="items-center">
                    Apply for the Beta Progam
                  </a>
                </div>
              </div>
              <div className="absolute bottom-0 right-0">
                <svg
                  width="342"
                  height="342"
                  viewBox="0 0 342 342"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.2">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M285.001 127.573C308.985 127.573 328.429 147.016 328.429 171.001C328.429 194.986 308.985 214.429 285.001 214.429C261.016 214.429 241.572 194.986 241.572 171.001C241.572 147.016 261.016 127.573 285.001 127.573ZM285.001 114.002C316.481 114.002 342 139.521 342 171.001C342 202.481 316.481 228 285.001 228C253.521 228 228.001 202.481 228.001 171.001C228.001 139.521 253.521 114.002 285.001 114.002Z"
                      fill="#2603FF"
                      fill-opacity="0.24"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M284.999 156.073C293.244 156.073 299.927 162.757 299.927 171.001C299.927 179.246 293.244 185.93 284.999 185.93C276.754 185.93 270.07 179.246 270.07 171.001C270.07 162.757 276.754 156.073 284.999 156.073ZM284.999 142.502C300.739 142.502 313.499 155.261 313.499 171.001C313.499 186.741 300.739 199.501 284.999 199.501C269.259 199.501 256.499 186.741 256.499 171.001C256.499 155.261 269.259 142.502 284.999 142.502Z"
                      fill="#2603FF"
                      fill-opacity="0.24"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M228.001 243.837C228.001 235.091 235.131 227.885 243.795 229.086C294.118 236.06 333.941 275.883 340.915 326.205C342.116 334.869 334.91 341.999 326.163 341.999L243.838 341.999C235.091 341.999 228.001 334.909 228.001 326.162L228.001 243.837ZM308.072 297.893C308.072 316.256 293.185 331.142 274.822 331.142C256.459 331.142 241.572 316.256 241.572 297.893C241.572 279.529 256.459 264.643 274.822 264.643C293.185 264.643 308.072 279.529 308.072 297.893Z"
                      fill="#2603FF"
                      fill-opacity="0.24"
                    />
                    <path
                      d="M227.999 213.752C227.999 221.622 221.588 228.095 213.778 227.123C162.189 220.703 121.298 179.814 114.878 128.225C113.907 120.415 120.38 114.003 128.25 114.003C136.12 114.003 142.375 120.431 143.672 128.193C149.661 164.044 177.958 192.341 213.809 198.33C221.572 199.627 227.999 205.882 227.999 213.752Z"
                      fill="#2603FF"
                      fill-opacity="0.24"
                    />
                    <path
                      d="M192.266 114.006C183.519 114.006 176.186 121.261 178.828 129.599C183.879 145.539 196.466 158.127 212.406 163.177C220.744 165.819 228 158.486 228 149.74L228 129.843C228 121.096 220.909 114.006 212.163 114.006L192.266 114.006Z"
                      fill="#2603FF"
                      fill-opacity="0.24"
                    />
                    <path
                      d="M114.001 326.163C114.001 334.91 121.131 342.116 129.795 340.915C180.118 333.94 219.941 294.118 226.915 243.795C228.116 235.131 220.91 228.001 212.163 228.001L129.838 228.001C121.091 228.001 114.001 235.092 114.001 243.838L114.001 326.163Z"
                      fill="#2603FF"
                      fill-opacity="0.24"
                    />
                    <path
                      d="M295.855 82.7842C304.1 82.7842 310.783 76.1005 310.783 67.8558C310.783 59.611 304.1 52.9273 295.855 52.9273C287.61 52.9273 280.926 59.611 280.926 67.8558C280.926 76.1005 287.61 82.7842 295.855 82.7842Z"
                      fill="#2603FF"
                      fill-opacity="0.24"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M243.836 113.999C235.089 113.999 227.884 106.869 229.084 98.2049C236.059 47.8822 275.882 8.05953 326.204 1.08514C334.868 -0.115591 341.998 7.09034 341.998 15.8368L341.998 98.1619C341.998 106.908 334.908 113.999 326.161 113.999L243.836 113.999ZM295.855 96.3555C311.595 96.3555 324.355 83.5957 324.355 67.8558C324.355 52.1158 311.595 39.3561 295.855 39.3561C280.115 39.3561 267.355 52.1158 267.355 67.8558C267.355 83.5957 280.115 96.3555 295.855 96.3555Z"
                      fill="#2603FF"
                      fill-opacity="0.24"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.8369 342C7.09042 342 -0.115497 334.869 1.08524 326.206C8.0597 275.883 47.8825 236.061 98.2054 229.086C106.869 227.885 113.999 235.091 113.999 243.838L113.999 326.163C113.999 334.909 106.909 342 98.1624 342L15.8369 342ZM69.8924 261.929C88.2558 261.929 103.142 276.816 103.142 295.179C103.142 313.542 88.2558 328.428 69.8924 328.428C51.5291 328.428 36.6426 313.542 36.6426 295.179C36.6426 276.816 51.5291 261.929 69.8924 261.929Z"
                      fill="#2603FF"
                      fill-opacity="0.24"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute inset-y-0 lg:right-0 z-20">
          <svg
            width="849"
            height="850"
            viewBox="0 0 849 850"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.2">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M318.209 138.895C318.442 79.284 366.708 31.1473 426.015 31.3785C485.321 31.6097 533.21 80.1214 532.978 139.732C532.746 199.343 484.48 247.48 425.173 247.249C365.866 247.017 317.977 198.506 318.209 138.895ZM284.652 138.764C284.957 60.5248 348.306 -2.65466 426.146 -2.35119C503.986 -2.04772 566.841 61.6238 566.536 139.863C566.231 218.102 502.882 281.282 425.041 280.978C347.201 280.675 284.347 217.003 284.652 138.764Z"
                fill="#2603FF"
                fillOpacity="0.15"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M388.681 139.174C388.761 118.683 405.352 102.136 425.739 102.215C446.126 102.294 462.587 118.97 462.508 139.462C462.428 159.953 445.836 176.5 425.45 176.42C405.063 176.341 388.601 159.665 388.681 139.174ZM355.123 139.043C355.276 99.9233 386.95 68.3336 425.87 68.4853C464.79 68.637 496.218 100.473 496.065 139.592C495.913 178.712 464.238 210.302 425.318 210.15C386.398 209.998 354.971 178.163 355.123 139.043Z"
                fill="#2603FF"
                fillOpacity="0.15"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M595.983 281.645C579.415 281.58 565.87 268.053 567.657 251.581C582.025 119.131 687.152 14.2399 819.014 0.761058C835.496 -0.923779 848.92 12.7286 848.855 29.297L847.984 252.627C847.92 269.195 834.436 282.574 817.867 282.51L595.983 281.645ZM739.581 83.1963C784.988 83.3733 821.653 120.515 821.475 166.155C821.297 211.794 784.343 248.649 738.937 248.472C693.53 248.295 656.865 211.153 657.043 165.514C657.221 119.874 694.174 83.0193 739.581 83.1963Z"
                fill="#2603FF"
                fillOpacity="0.15"
              />
              <path
                d="M535.987 281.414C552.555 281.478 566.1 295.006 564.313 311.478C549.945 443.928 444.818 548.819 312.956 562.297C296.474 563.982 283.05 550.33 283.115 533.761L283.157 522.929C283.222 506.36 296.782 493.206 313.194 490.935C406.119 478.077 479.868 404.482 493.32 311.163C495.684 294.764 508.947 281.308 525.515 281.373L535.987 281.414Z"
                fill="#2603FF"
                fillOpacity="0.15"
              />
              <path
                d="M283.726 378.604C283.662 395.173 297.23 409.022 313.356 405.217C359.993 394.214 396.803 357.466 408.061 310.656C411.936 294.547 398.197 280.876 381.628 280.811L314.109 280.548C297.54 280.484 284.057 293.862 283.992 310.431L283.726 378.604Z"
                fill="#2603FF"
                fillOpacity="0.15"
              />
              <path
                d="M816.765 565.84C833.333 565.905 846.983 552.483 845.325 535.998C831.99 403.44 727.684 297.733 595.931 283.226C579.462 281.413 565.933 294.96 565.869 311.529L564.998 534.859C564.933 551.427 578.312 564.911 594.881 564.975L816.765 565.84Z"
                fill="#2603FF"
                fillOpacity="0.15"
              />
              <path
                d="M207.567 111.486C207.647 90.9944 191.185 74.3185 170.799 74.239C150.412 74.1595 133.82 90.7065 133.741 111.198C133.661 131.689 150.123 148.365 170.509 148.444C190.896 148.524 207.487 131.977 207.567 111.486Z"
                fill="#2603FF"
                fillOpacity="0.15"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M284.211 250.433C284.146 267.001 270.617 280.549 254.148 278.735C122.395 264.229 18.0893 158.522 4.75422 25.9634C3.09585 9.47803 16.7458 -3.94353 33.3143 -3.87893L255.199 -3.01388C271.767 -2.94928 285.146 10.5344 285.081 27.1028L284.211 250.433ZM241.125 111.616C241.277 72.4968 209.85 40.6611 170.93 40.5093C132.01 40.3576 100.335 71.9473 100.183 111.067C100.03 150.187 131.458 182.022 170.378 182.174C209.298 182.326 240.972 150.736 241.125 111.616Z"
                fill="#2603FF"
                fillOpacity="0.15"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M845.775 819.291C845.711 835.859 832.181 849.407 815.712 847.593C683.96 833.087 579.654 727.379 566.319 594.821C564.66 578.336 578.31 564.914 594.879 564.979L816.763 565.844C833.331 565.909 846.71 579.392 846.646 595.961L845.775 819.291ZM648.346 674.811C648.524 629.171 685.477 592.316 730.884 592.493C776.291 592.67 812.956 629.812 812.778 675.452C812.6 721.091 775.646 757.946 730.24 757.769C684.833 757.592 648.168 720.45 648.346 674.811Z"
                fill="#2603FF"
                fillOpacity="0.15"
              />
            </g>
          </svg>
        </div>
        <div className="lg:absolute inset-y-[206px] lg:left-[710px] z-30">
          <Image
            src={phonePic}
            alt="Phone"
            width={730}
            height={640}
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
