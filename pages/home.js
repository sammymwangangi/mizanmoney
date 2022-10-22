import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import header from "../styles/header.module.css";
import phonePic from "../public/phone2.png";
import kdic from "../public/clients/kdic.png";
import pci from "../public/clients/pci.png";
import pci2 from "../public/pci.png";
import shariyah from "../public/clients/shariyah.png";
import trustpilot from "../public/clients/trustpilot.png";
import phone from "../public/banking/phone3.png";
import pay from "../public/pay.png";
import paymask from "../public/payMask.png";
import card from "../public/card.png";
import card2 from "../public/card2.png";
import Shadow from "../public/Shadow.png";
import appleStore from "../public/apple.png";
import googlePlay from "../public/gplay.png";
import linkedin from "../public/socials/linkedin.png";
import facebook from "../public/socials/facebook.png";
import twitter from "../public/socials/twitter.png";
import youtube from "../public/socials/youtube.png";
import feature1 from "../public/features/fe1.png";
import phone2 from "../public/features/Phone.png";
import phoneInvest from "../public/phone_invest.png";
import cup from "../public/cup.png";
import ccb from "../public/ccb.png";
import ccb2 from "../public/ccb2.png";
import ccb3 from "../public/ccb3.png";
import love from "../public/profile/love.png"
import wink from "../public/profile/wink.png"
import glasses from "../public/profile/glasses.png"
import pray from "../public/profile/pray.png"
import cardImage from "../public/profile/card.png"
import stars from "../public/profile/stars.png"
import blackHand from "../public/blackHand.png"
import blackShadow from "../public/blackShadow.png"
import cloud from "../public/providers/cloud.png"
import codebase from "../public/providers/codebase.png"
import duck from "../public/providers/duck.png"
import shariyah2 from "../public/providers/shariyah.png"
import backer1 from "../public/backers/1.png"
import backer2 from "../public/backers/2.png"
import backer3 from "../public/backers/3.png"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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
        <div className="mx-auto max-w-[1290px]">
          <div className="relative z-10">
            {/* Navbar */}
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
                    <a
                      href="#"
                      className="text-lg text-[#6D6E8A] font-semibold"
                    >
                      Brand Story
                    </a>
                  </Popover.Group>
                  {/* Flag */}
                  <div className="flex items-center justify-end lg:w-[170px] lg:-mt-6">
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
            {/* End */}

            {/* Salaam */}
            <main className="max-w-xl mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-12 xl:mt-[90px]">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-[62px] leading[93px] font-bold -mb-[6px]">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#9E7AFC]">
                    Salaam,
                  </span>
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
                <div className="mt-5 sm:mt-8 lg:flex space-x-[80px] sm:justify-center lg:justify-start">
                  <div className="rounded-full">
                    <div className={header.waitlist} style={{ color: "white" }}>
                      <a href="#" className="items-center text-center">
                        JOIN WAITLIST
                      </a>
                    </div>
                  </div>
                  <div className={header.btn2}>
                    <div className="flex mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="flex w-full space-x-[11px] items-center justify-center text-[15px] font-semibold text-[#6D6E8A] leading-[22px] py-[16px] px-[60px]"
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
              </div>
            </main>
            {/* End */}
          </div>

          {/* Clients */}
          <div className="flex lg:ml-[200px] space-x-[77px] mt-[157px] mb-[140px] items-center">
            <div>
              <Image src={kdic} alt="kdic" width={190} height={80} priority />
            </div>
            <div>
              <Image src={pci} alt="pci" width={160} height={62} priority />
            </div>
            <div>
              <Image
                src={trustpilot}
                alt="trustpilot"
                width={119}
                height={60}
                priority
              />
            </div>
            <div>
              <Image
                src={shariyah}
                alt="shariyah"
                width={107}
                height={102}
                priority
              />
            </div>
          </div>
          {/* End */}

          {/* Islamic Banking Reimagined */}
          <div className="lg:flex items-center mb-[278px]">
            <div className="lg:w-[540px]">
              <Image src={phone} alt="Iphone" priority />
            </div>
            <div className="relative z-20 card1 flex flex-col px-[81px] pt-[50px] pb-[44px] bg-white rounded-3xl lg:w-[760px] h-auto text-center">
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M285.001 127.573C308.985 127.573 328.429 147.016 328.429 171.001C328.429 194.986 308.985 214.429 285.001 214.429C261.016 214.429 241.572 194.986 241.572 171.001C241.572 147.016 261.016 127.573 285.001 127.573ZM285.001 114.002C316.481 114.002 342 139.521 342 171.001C342 202.481 316.481 228 285.001 228C253.521 228 228.001 202.481 228.001 171.001C228.001 139.521 253.521 114.002 285.001 114.002Z"
                      fill="#2603FF"
                      fillOpacity="0.24"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M284.999 156.073C293.244 156.073 299.927 162.757 299.927 171.001C299.927 179.246 293.244 185.93 284.999 185.93C276.754 185.93 270.07 179.246 270.07 171.001C270.07 162.757 276.754 156.073 284.999 156.073ZM284.999 142.502C300.739 142.502 313.499 155.261 313.499 171.001C313.499 186.741 300.739 199.501 284.999 199.501C269.259 199.501 256.499 186.741 256.499 171.001C256.499 155.261 269.259 142.502 284.999 142.502Z"
                      fill="#2603FF"
                      fillOpacity="0.24"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M228.001 243.837C228.001 235.091 235.131 227.885 243.795 229.086C294.118 236.06 333.941 275.883 340.915 326.205C342.116 334.869 334.91 341.999 326.163 341.999L243.838 341.999C235.091 341.999 228.001 334.909 228.001 326.162L228.001 243.837ZM308.072 297.893C308.072 316.256 293.185 331.142 274.822 331.142C256.459 331.142 241.572 316.256 241.572 297.893C241.572 279.529 256.459 264.643 274.822 264.643C293.185 264.643 308.072 279.529 308.072 297.893Z"
                      fill="#2603FF"
                      fillOpacity="0.24"
                    />
                    <path
                      d="M227.999 213.752C227.999 221.622 221.588 228.095 213.778 227.123C162.189 220.703 121.298 179.814 114.878 128.225C113.907 120.415 120.38 114.003 128.25 114.003C136.12 114.003 142.375 120.431 143.672 128.193C149.661 164.044 177.958 192.341 213.809 198.33C221.572 199.627 227.999 205.882 227.999 213.752Z"
                      fill="#2603FF"
                      fillOpacity="0.24"
                    />
                    <path
                      d="M192.266 114.006C183.519 114.006 176.186 121.261 178.828 129.599C183.879 145.539 196.466 158.127 212.406 163.177C220.744 165.819 228 158.486 228 149.74L228 129.843C228 121.096 220.909 114.006 212.163 114.006L192.266 114.006Z"
                      fill="#2603FF"
                      fillOpacity="0.24"
                    />
                    <path
                      d="M114.001 326.163C114.001 334.91 121.131 342.116 129.795 340.915C180.118 333.94 219.941 294.118 226.915 243.795C228.116 235.131 220.91 228.001 212.163 228.001L129.838 228.001C121.091 228.001 114.001 235.092 114.001 243.838L114.001 326.163Z"
                      fill="#2603FF"
                      fillOpacity="0.24"
                    />
                    <path
                      d="M295.855 82.7842C304.1 82.7842 310.783 76.1005 310.783 67.8558C310.783 59.611 304.1 52.9273 295.855 52.9273C287.61 52.9273 280.926 59.611 280.926 67.8558C280.926 76.1005 287.61 82.7842 295.855 82.7842Z"
                      fill="#2603FF"
                      fillOpacity="0.24"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M243.836 113.999C235.089 113.999 227.884 106.869 229.084 98.2049C236.059 47.8822 275.882 8.05953 326.204 1.08514C334.868 -0.115591 341.998 7.09034 341.998 15.8368L341.998 98.1619C341.998 106.908 334.908 113.999 326.161 113.999L243.836 113.999ZM295.855 96.3555C311.595 96.3555 324.355 83.5957 324.355 67.8558C324.355 52.1158 311.595 39.3561 295.855 39.3561C280.115 39.3561 267.355 52.1158 267.355 67.8558C267.355 83.5957 280.115 96.3555 295.855 96.3555Z"
                      fill="#2603FF"
                      fillOpacity="0.24"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.8369 342C7.09042 342 -0.115497 334.869 1.08524 326.206C8.0597 275.883 47.8825 236.061 98.2054 229.086C106.869 227.885 113.999 235.091 113.999 243.838L113.999 326.163C113.999 334.909 106.909 342 98.1624 342L15.8369 342ZM69.8924 261.929C88.2558 261.929 103.142 276.816 103.142 295.179C103.142 313.542 88.2558 328.428 69.8924 328.428C51.5291 328.428 36.6426 313.542 36.6426 295.179C36.6426 276.816 51.5291 261.929 69.8924 261.929Z"
                      fill="#2603FF"
                      fillOpacity="0.24"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          {/* End */}
          
          {/* Pay with card */}
          <div className="relative lg:flex items-center">
            <div className="flex flex-col mb-[700px] ml-[30px]">
              <div className={header.pr_6}>
                Turn heads with our <br></br>cards made from steel.
              </div>
              <div className={header.pr_5}>
                Pay or get paid, wherever, whenever.
              </div>
            </div>
          </div>
          {/* End */}

          {/* Features */}
          <div className="flex flex-col text-center h-[919px] bg-white py-[34px]">
            <h1 className={header.features}>Features</h1>
            <div className="flex gap-4">
              <div className={header.feature_2}>
                <div className="flex flex-col">
                  <div className={header.card_bg}>
                    <Image
                      src={phone2}
                      alt="phone2"
                      className="object-contain lg:object-cover"
                    />
                  </div>
                  <div className="mt-[40px] mb-[87]">
                    <h1 className="text-[24px] leading-[36px] font-bold text-[#333333] mb-[31px]">
                      Track Ur buck. “The Ostrich-effect”
                    </h1>
                  </div>
                </div>
              </div>
              <div className={header.feature_1}>
                <div className="flex flex-col">
                  <div>
                    <Image src={feature1} alt="feature" />
                  </div>
                  <div className={header.card20}>
                    <h1 className="text-[27px] leading-[40.5px] font-bold text-[#333333] mb-[31px]">
                      Mizan Pay - Shop now pay at your own pace
                    </h1>
                    <p className="text-[16px] leading-[25.6px] font-medium text-[#6D6E8A]">
                      With our aethetically appealing mizan metal card, you can
                      easily spread your payments upto 12 months. No late
                      payment fees, no penalties. What you borrow is what you
                      will pay. Let’s just keep it at that.
                    </p>
                  </div>
                </div>
              </div>
              <div className={header.feature_3}>
                <div className="flex flex-col">
                  <div className={header.card_bg}>
                    <Image
                      src={phone2}
                      alt="phone2"
                      className="object-contain lg:object-cover"
                    />
                  </div>
                  <div className="mt-[40px] mb-[87]">
                    <h1 className="text-[24px] leading-[36px] font-bold text-[#333333] mb-[31px]">
                      Donate to a cause you care. (Effortlessly)
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End */}
          
          {/* Round Ups */}
          <div className="relative z-20 card1 flex px-[79px] pt-[123px] pb-[44px] bg-white rounded-3xl lg:w-[1290px] h-[821px]">
            <style jsx>{`
              .card1 {
                box-shadow: 0px -8px 100px rgba(105, 67, 175, 0.1);
              }
              .button2 {
                box-shadow: 0px -8px 100px rgba(105, 67, 175, 0.1);
              }
            `}</style>
            <div className="w-[479px]">
              <div className="mb-[4px] text-left">
                <h1 className={header.pr_3}>How Round-Ups work</h1>
              </div>

              <div className="flex-1 text-left text-[27px] leading-[40px] text-black font-normal mb-[60px]">
                Invest and save when you spend
              </div>
              <div className="text-left">
                <p className={header.pr_4}>
                  Imagine you had collected all of your loose change over the
                  years from all your daily purchases—all of the sodas, coffees,
                  meals out—you name it. You’d likely have a good amount of
                  money saved up. Well, that’s the idea behind Round-Ups.
                </p>
              </div>
            </div>
            <div className="absolute top-[269px] left-[641px]">
              <Image src={phoneInvest} alt="phone invest" priority />
            </div>
            <div className="absolute top-[52px] left-[864px]">
              <Image src={cup} alt="cup" priority />
            </div>
            <div className="absolute top-[536px] left-[987.42px]">
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8502 2.28026L2.71251 8.57955L12.4256 19.4394"
                  stroke="#C6BAFF"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="absolute top-[338.5px] left-[988.5px]">
              <svg
                width="229"
                height="223"
                viewBox="0 0 229 223"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M195 1.5C218 39 242.212 124.881 212 169C180.5 215 97 235 1.5 208"
                  stroke="#C6BAFF"
                  stroke-width="4"
                  stroke-dasharray="22 22"
                />
              </svg>
            </div>
            <div className="absolute bottom-[21.47px] left-[32px]">
              <svg
                width="719"
                height="723"
                viewBox="0 0 719 723"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.12">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M450.172 602.247C450.172 652.859 409.352 693.889 358.998 693.889C308.644 693.889 267.824 652.859 267.824 602.247C267.824 551.635 308.644 510.606 358.998 510.606C409.352 510.606 450.172 551.635 450.172 602.247ZM478.663 602.247C478.663 668.676 425.087 722.527 358.998 722.527C292.908 722.527 239.332 668.676 239.332 602.247C239.332 535.819 292.908 481.968 358.998 481.968C425.087 481.968 478.663 535.819 478.663 602.247Z"
                    fill="#2603FF"
                    fill-opacity="0.15"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M390.339 602.244C390.339 619.642 376.307 633.746 358.998 633.746C341.689 633.746 327.657 619.642 327.657 602.244C327.657 584.846 341.689 570.742 358.998 570.742C376.307 570.742 390.339 584.846 390.339 602.244ZM418.831 602.244C418.831 635.458 392.043 662.384 358.998 662.384C325.953 662.384 299.165 635.458 299.165 602.244C299.165 569.03 325.953 542.104 358.998 542.104C392.043 542.104 418.831 569.03 418.831 602.244Z"
                    fill="#2603FF"
                    fill-opacity="0.15"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M209.332 481.968C225.901 481.968 239.527 495.466 237.496 511.909C224.049 620.777 138.231 707.079 29.9398 720.663C13.5 722.725 0.00060778 709.095 0.000609226 692.527L0.00062498 511.968C0.000626426 495.399 13.4321 481.968 30.0006 481.968L209.332 481.968ZM92.5991 650.932C54.0468 650.932 22.7941 619.519 22.7941 580.769C22.7941 542.019 54.0469 510.606 92.5991 510.606C131.151 510.606 162.404 542.019 162.404 580.769C162.404 619.519 131.151 650.932 92.5991 650.932Z"
                    fill="#2603FF"
                    fill-opacity="0.15"
                  />
                  <path
                    d="M269.246 481.965C252.724 481.965 239.135 468.505 241.155 452.106C254.569 343.2 340.404 256.857 448.722 243.27C465.162 241.208 478.661 254.908 478.661 271.476C478.661 288.045 465.127 301.282 448.789 304.033C373.511 316.708 314.113 376.475 301.599 452.171C298.904 468.472 285.769 481.965 269.246 481.965Z"
                    fill="#2603FF"
                    fill-opacity="0.15"
                  />
                  <path
                    d="M478.654 403.142C478.654 386.573 464.962 372.72 449.029 377.266C413.004 387.544 384.627 416.1 374.449 452.33C369.967 468.281 383.817 481.966 400.385 481.966L448.654 481.966C465.223 481.966 478.654 468.534 478.654 451.966L478.654 403.142Z"
                    fill="#2603FF"
                    fill-opacity="0.15"
                  />
                  <path
                    d="M29.9996 241.408C13.4311 241.408 -0.195693 254.906 1.8354 271.35C15.2826 380.217 101.101 466.52 209.392 480.103C225.832 482.165 239.331 468.536 239.331 451.967L239.331 271.408C239.331 254.84 225.9 241.408 209.331 241.408L29.9996 241.408Z"
                    fill="#2603FF"
                    fill-opacity="0.15"
                  />
                  <path
                    d="M544.217 625.153C544.217 642.551 558.249 656.654 575.558 656.654C592.867 656.654 606.899 642.551 606.899 625.153C606.899 607.755 592.867 593.651 575.558 593.651C558.249 593.651 544.217 607.755 544.217 625.153Z"
                    fill="#2603FF"
                    fill-opacity="0.15"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M478.685 511.965C478.685 495.396 492.184 481.767 508.624 483.829C616.915 497.412 702.733 583.715 716.18 692.582C718.211 709.026 704.585 722.524 688.016 722.524L508.685 722.524C492.116 722.524 478.685 709.092 478.685 692.524L478.685 511.965ZM515.725 625.153C515.725 658.367 542.513 685.292 575.558 685.292C608.603 685.292 635.391 658.367 635.391 625.153C635.391 591.938 608.603 565.013 575.558 565.013C542.513 565.013 515.725 591.938 515.725 625.153Z"
                    fill="#2603FF"
                    fill-opacity="0.15"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.000975251 30.8461C0.000975975 14.2775 13.5004 0.647933 29.9401 2.71006C138.231 16.2936 224.049 102.596 237.497 211.463C239.528 227.907 225.901 241.405 209.332 241.405L30.001 241.405C13.4324 241.405 0.000966634 227.973 0.000967359 211.405L0.000975251 30.8461ZM168.103 148.332C168.103 187.081 136.85 218.495 98.2978 218.495C59.7456 218.495 28.4928 187.081 28.4928 148.332C28.4928 109.582 59.7456 78.1685 98.2978 78.1685C136.85 78.1685 168.103 109.582 168.103 148.332Z"
                    fill="#2603FF"
                    fill-opacity="0.15"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="relative z-20 -top-40 card1 flex gap-8 px-[40px] bg-white rounded-3xl lg:w-[1177px] h-[auto] left-[50px]">
            <style jsx>{`
              .card1 {
                box-shadow: 0px -8px 100px rgba(105, 67, 175, 0.1);
              }
              .button2 {
                box-shadow: 0px -8px 100px rgba(105, 67, 175, 0.1);
              }
            `}</style>
            <div className="w-[479px] pt-[70px]">
              <div className="mb-[23px] text-left">
                <h1 className={header.pr_3}>Mizan Round-Ups</h1>
              </div>
              <div className="text-left mb-[58px]">
                <p className={header.p6}>
                  When you make a purchase with your Mizan debit card or another
                  linked card, Mizan rounds up your transaction to the nearest
                  dollar and invests the spare change into your Invest account
                  portfolio or a charity of your choice.
                </p>
              </div>
              <div>
                <div className={header.button3} style={{ color: "white" }}>
                  <a href="#" className="items-center">
                    JOIN WAITLIST
                  </a>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col pt-[24px]">
              <svg
                width="576"
                height="384"
                viewBox="0 0 576 384"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="40.5451"
                  y1="247.626"
                  x2="40.5451"
                  y2="1.52588e-05"
                  stroke="#E6E7F4"
                  stroke-width="0.909734"
                />
                <line
                  x1="161.545"
                  y1="247.626"
                  x2="161.545"
                  y2="1.52588e-05"
                  stroke="#E6E7F4"
                  stroke-width="0.909734"
                />
                <line
                  x1="282.545"
                  y1="247.626"
                  x2="282.545"
                  y2="1.52588e-05"
                  stroke="#E6E7F4"
                  stroke-width="0.909734"
                />
                <line
                  x1="403.545"
                  y1="247.626"
                  x2="403.545"
                  y2="1.52588e-05"
                  stroke="#E6E7F4"
                  stroke-width="0.909734"
                />
                <line
                  x1="524.545"
                  y1="247.626"
                  x2="524.545"
                  y2="1.52588e-05"
                  stroke="#E6E7F4"
                  stroke-width="0.909734"
                />
                <g filter="url(#filter0_d_11_7074)">
                  <path
                    d="M532.774 68.7663C532.774 73.7906 528.701 77.8636 523.676 77.8636C518.652 77.8636 514.579 73.7906 514.579 68.7663C514.579 63.742 518.652 59.6689 523.676 59.6689C528.701 59.6689 532.774 63.742 532.774 68.7663Z"
                    fill="white"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M532.774 68.7663C532.774 73.7906 528.701 77.8636 523.676 77.8636C518.652 77.8636 514.579 73.7906 514.579 68.7663C514.579 63.742 518.652 59.6689 523.676 59.6689C528.701 59.6689 532.774 63.742 532.774 68.7663Z"
                    stroke="url(#paint0_linear_11_7074)"
                    stroke-width="3.63894"
                    shape-rendering="crispEdges"
                  />
                </g>
                <g filter="url(#filter1_d_11_7074)">
                  <path
                    d="M48.0127 240.217C48.0127 245.188 43.9833 249.217 39.0127 249.217C34.0421 249.217 30.0127 245.188 30.0127 240.217C30.0127 235.247 34.0421 231.217 39.0127 231.217C43.9833 231.217 48.0127 235.247 48.0127 240.217Z"
                    fill="white"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M48.0127 240.217C48.0127 245.188 43.9833 249.217 39.0127 249.217C34.0421 249.217 30.0127 245.188 30.0127 240.217C30.0127 235.247 34.0421 231.217 39.0127 231.217C43.9833 231.217 48.0127 235.247 48.0127 240.217Z"
                    stroke="url(#paint1_linear_11_7074)"
                    stroke-width="3.63894"
                    shape-rendering="crispEdges"
                  />
                </g>
                <path
                  opacity="0.13"
                  d="M359.71 139.319L347.661 136.514C309.787 127.7 270.559 137.061 242.298 161.656L184.299 212.132C165.521 228.475 141.614 238.246 116.147 240.453C91.9499 242.55 65.5126 245.184 65.5126 246.681L65.5126 266.554L505.378 266.554L505.378 73.3864L471.721 107.896C443.36 136.976 400.866 148.897 359.71 139.319Z"
                  fill="url(#paint2_linear_11_7074)"
                />
                <path
                  d="M70.5264 245.234L123.129 240.286C148.296 237.918 171.739 227.792 190.073 211.368L244.792 162.352C273.233 136.875 313.252 127.12 351.836 136.258L361.485 138.543C403.085 148.395 446.105 136.251 474.564 106.62L506.258 73.6234"
                  stroke="#8F00E0"
                  stroke-width="2.7292"
                  stroke-linecap="round"
                />
                <path
                  d="M28.2936 271.431V272.446H26.274V279.018H25.0295V272.446H22.999V271.431H28.2936ZM32.1631 279.117C31.5954 279.117 31.0824 278.989 30.6238 278.734C30.1653 278.472 29.8051 278.109 29.5431 277.643C29.2811 277.17 29.1501 276.624 29.1501 276.005C29.1501 275.394 29.2847 274.852 29.554 274.379C29.8233 273.906 30.1908 273.542 30.6566 273.287C31.1224 273.032 31.6428 272.905 32.2177 272.905C32.7927 272.905 33.313 273.032 33.7788 273.287C34.2446 273.542 34.6121 273.906 34.8814 274.379C35.1507 274.852 35.2853 275.394 35.2853 276.005C35.2853 276.617 35.147 277.159 34.8705 277.632C34.5939 278.105 34.2155 278.472 33.7351 278.734C33.2621 278.989 32.7381 279.117 32.1631 279.117ZM32.1631 278.036C32.4833 278.036 32.7817 277.959 33.0583 277.807C33.3421 277.654 33.5714 277.424 33.7461 277.119C33.9207 276.813 34.0081 276.442 34.0081 276.005C34.0081 275.569 33.9244 275.201 33.757 274.903C33.5896 274.597 33.3676 274.368 33.091 274.215C32.8145 274.062 32.5161 273.986 32.1959 273.986C31.8756 273.986 31.5773 274.062 31.3007 274.215C31.0314 274.368 30.8167 274.597 30.6566 274.903C30.4965 275.201 30.4164 275.569 30.4164 276.005C30.4164 276.653 30.5802 277.155 30.9077 277.512C31.2425 277.861 31.6609 278.036 32.1631 278.036ZM36.1008 275.983C36.1008 275.379 36.2245 274.844 36.4719 274.379C36.7267 273.913 37.0687 273.553 37.4981 273.298C37.9348 273.036 38.4188 272.905 38.9501 272.905C39.3431 272.905 39.7288 272.992 40.1072 273.167C40.493 273.334 40.7986 273.56 41.0242 273.844V270.94H42.2797V279.018H41.0242V278.112C40.8205 278.403 40.5366 278.643 40.1727 278.833C39.8161 279.022 39.4049 279.117 38.9391 279.117C38.4151 279.117 37.9348 278.986 37.4981 278.724C37.0687 278.454 36.7267 278.083 36.4719 277.61C36.2245 277.13 36.1008 276.587 36.1008 275.983ZM41.0242 276.005C41.0242 275.59 40.9369 275.23 40.7622 274.925C40.5949 274.619 40.3729 274.386 40.0963 274.226C39.8198 274.066 39.5214 273.986 39.2011 273.986C38.8809 273.986 38.5825 274.066 38.306 274.226C38.0294 274.379 37.8038 274.608 37.6291 274.914C37.4617 275.212 37.378 275.569 37.378 275.983C37.378 276.398 37.4617 276.762 37.6291 277.075C37.8038 277.388 38.0294 277.628 38.306 277.796C38.5898 277.956 38.8882 278.036 39.2011 278.036C39.5214 278.036 39.8198 277.956 40.0963 277.796C40.3729 277.636 40.5949 277.403 40.7622 277.097C40.9369 276.784 41.0242 276.42 41.0242 276.005ZM43.4995 275.983C43.4995 275.379 43.6232 274.844 43.8706 274.379C44.1254 273.913 44.4674 273.553 44.8968 273.298C45.3335 273.036 45.8138 272.905 46.3378 272.905C46.8109 272.905 47.2221 273 47.5714 273.189C47.9281 273.371 48.2119 273.6 48.4229 273.876V273.003H49.6784V279.018H48.4229V278.123C48.2119 278.407 47.9244 278.643 47.5605 278.833C47.1966 279.022 46.7818 279.117 46.316 279.117C45.7993 279.117 45.3262 278.986 44.8968 278.724C44.4674 278.454 44.1254 278.083 43.8706 277.61C43.6232 277.13 43.4995 276.587 43.4995 275.983ZM48.4229 276.005C48.4229 275.59 48.3356 275.23 48.1609 274.925C47.9936 274.619 47.7716 274.386 47.495 274.226C47.2185 274.066 46.9201 273.986 46.5998 273.986C46.2796 273.986 45.9812 274.066 45.7047 274.226C45.4281 274.379 45.2025 274.608 45.0278 274.914C44.8604 275.212 44.7767 275.569 44.7767 275.983C44.7767 276.398 44.8604 276.762 45.0278 277.075C45.2025 277.388 45.4281 277.628 45.7047 277.796C45.9885 277.956 46.2869 278.036 46.5998 278.036C46.9201 278.036 47.2185 277.956 47.495 277.796C47.7716 277.636 47.9936 277.403 48.1609 277.097C48.3356 276.784 48.4229 276.42 48.4229 276.005ZM56.7277 273.003L53.0379 281.846H51.7497L52.9724 278.92L50.6034 273.003H51.9898L53.682 277.588L55.4396 273.003H56.7277Z"
                  fill="#6D6E8A"
                />
                <path
                  d="M501.208 272.13H497.551V274.302C497.704 274.098 497.929 273.927 498.228 273.789C498.533 273.651 498.857 273.582 499.199 273.582C499.811 273.582 500.306 273.713 500.684 273.975C501.07 274.237 501.343 274.568 501.503 274.968C501.67 275.368 501.754 275.791 501.754 276.235C501.754 276.773 501.648 277.253 501.437 277.676C501.234 278.09 500.924 278.418 500.509 278.658C500.102 278.898 499.6 279.018 499.003 279.018C498.21 279.018 497.573 278.822 497.092 278.429C496.612 278.036 496.325 277.515 496.23 276.868H497.442C497.522 277.21 497.7 277.483 497.977 277.686C498.253 277.883 498.599 277.981 499.014 277.981C499.53 277.981 499.916 277.825 500.171 277.512C500.433 277.199 500.564 276.784 500.564 276.267C500.564 275.743 500.433 275.343 500.171 275.066C499.909 274.783 499.523 274.641 499.014 274.641C498.657 274.641 498.355 274.732 498.108 274.914C497.868 275.088 497.693 275.328 497.584 275.634H496.405V271.038H501.208V272.13ZM509.51 279.095C508.804 279.095 508.152 278.931 507.555 278.603C506.966 278.269 506.497 277.807 506.147 277.217C505.805 276.62 505.634 275.951 505.634 275.208C505.634 274.466 505.805 273.8 506.147 273.211C506.497 272.621 506.966 272.163 507.555 271.835C508.152 271.5 508.804 271.333 509.51 271.333C510.223 271.333 510.874 271.5 511.464 271.835C512.061 272.163 512.53 272.621 512.872 273.211C513.214 273.8 513.385 274.466 513.385 275.208C513.385 275.951 513.214 276.62 512.872 277.217C512.53 277.807 512.061 278.269 511.464 278.603C510.874 278.931 510.223 279.095 509.51 279.095ZM509.51 278.014C510.012 278.014 510.459 277.901 510.852 277.676C511.245 277.443 511.551 277.115 511.769 276.693C511.995 276.264 512.108 275.769 512.108 275.208C512.108 274.648 511.995 274.157 511.769 273.735C511.551 273.312 511.245 272.989 510.852 272.763C510.459 272.537 510.012 272.425 509.51 272.425C509.007 272.425 508.56 272.537 508.167 272.763C507.774 272.989 507.465 273.312 507.239 273.735C507.021 274.157 506.911 274.648 506.911 275.208C506.911 275.769 507.021 276.264 507.239 276.693C507.465 277.115 507.774 277.443 508.167 277.676C508.56 277.901 509.007 278.014 509.51 278.014ZM514.195 276.005C514.195 275.387 514.319 274.844 514.566 274.379C514.821 273.906 515.17 273.542 515.614 273.287C516.058 273.032 516.567 272.905 517.142 272.905C517.87 272.905 518.471 273.08 518.944 273.429C519.424 273.771 519.748 274.262 519.915 274.903H518.573C518.463 274.604 518.289 274.371 518.049 274.204C517.808 274.037 517.506 273.953 517.142 273.953C516.633 273.953 516.225 274.135 515.92 274.499C515.621 274.855 515.472 275.358 515.472 276.005C515.472 276.653 515.621 277.159 515.92 277.523C516.225 277.887 516.633 278.069 517.142 278.069C517.863 278.069 518.34 277.752 518.573 277.119H519.915C519.741 277.73 519.413 278.218 518.933 278.582C518.452 278.938 517.856 279.117 517.142 279.117C516.567 279.117 516.058 278.989 515.614 278.734C515.17 278.472 514.821 278.109 514.566 277.643C514.319 277.17 514.195 276.624 514.195 276.005ZM522.607 274.018V277.348C522.607 277.574 522.658 277.737 522.76 277.839C522.869 277.934 523.051 277.981 523.306 277.981H524.07V279.018H523.088C522.527 279.018 522.098 278.887 521.8 278.625C521.501 278.363 521.352 277.938 521.352 277.348V274.018H520.642V273.003H521.352V271.508H522.607V273.003H524.07V274.018H522.607ZM528.577 277.326C529.276 276.722 529.825 276.227 530.226 275.842C530.633 275.449 530.972 275.041 531.241 274.619C531.51 274.197 531.645 273.775 531.645 273.352C531.645 272.916 531.539 272.574 531.328 272.326C531.124 272.079 530.801 271.955 530.357 271.955C529.927 271.955 529.592 272.093 529.352 272.37C529.119 272.639 528.996 273.003 528.981 273.462H527.78C527.802 272.632 528.05 271.999 528.523 271.562C529.003 271.118 529.611 270.896 530.346 270.896C531.139 270.896 531.758 271.115 532.202 271.551C532.653 271.988 532.878 272.57 532.878 273.298C532.878 273.822 532.744 274.328 532.474 274.815C532.212 275.296 531.896 275.729 531.525 276.114C531.161 276.493 530.695 276.933 530.127 277.435L529.636 277.872H533.097V278.909H527.791V278.003L528.577 277.326ZM534.19 274.935C534.19 273.676 534.401 272.694 534.823 271.988C535.253 271.275 535.988 270.918 537.028 270.918C538.069 270.918 538.801 271.275 539.223 271.988C539.652 272.694 539.867 273.676 539.867 274.935C539.867 276.209 539.652 277.206 539.223 277.927C538.801 278.64 538.069 278.996 537.028 278.996C535.988 278.996 535.253 278.64 534.823 277.927C534.401 277.206 534.19 276.209 534.19 274.935ZM538.644 274.935C538.644 274.346 538.604 273.847 538.524 273.44C538.451 273.032 538.298 272.701 538.066 272.446C537.833 272.184 537.487 272.053 537.028 272.053C536.57 272.053 536.224 272.184 535.991 272.446C535.758 272.701 535.602 273.032 535.522 273.44C535.449 273.847 535.413 274.346 535.413 274.935C535.413 275.547 535.449 276.06 535.522 276.475C535.595 276.89 535.748 277.224 535.98 277.479C536.221 277.734 536.57 277.861 537.028 277.861C537.487 277.861 537.833 277.734 538.066 277.479C538.306 277.224 538.462 276.89 538.535 276.475C538.608 276.06 538.644 275.547 538.644 274.935ZM541.871 277.326C542.57 276.722 543.12 276.227 543.52 275.842C543.927 275.449 544.266 275.041 544.535 274.619C544.804 274.197 544.939 273.775 544.939 273.352C544.939 272.916 544.833 272.574 544.622 272.326C544.419 272.079 544.095 271.955 543.651 271.955C543.221 271.955 542.887 272.093 542.646 272.37C542.414 272.639 542.29 273.003 542.275 273.462H541.074C541.096 272.632 541.344 271.999 541.817 271.562C542.297 271.118 542.905 270.896 543.64 270.896C544.433 270.896 545.052 271.115 545.496 271.551C545.947 271.988 546.173 272.57 546.173 273.298C546.173 273.822 546.038 274.328 545.769 274.815C545.507 275.296 545.19 275.729 544.819 276.114C544.455 276.493 543.989 276.933 543.422 277.435L542.93 277.872H546.391V278.909H541.085V278.003L541.871 277.326ZM548.172 277.326C548.871 276.722 549.42 276.227 549.82 275.842C550.228 275.449 550.566 275.041 550.836 274.619C551.105 274.197 551.24 273.775 551.24 273.352C551.24 272.916 551.134 272.574 550.923 272.326C550.719 272.079 550.395 271.955 549.951 271.955C549.522 271.955 549.187 272.093 548.947 272.37C548.714 272.639 548.59 273.003 548.576 273.462H547.375C547.397 272.632 547.644 271.999 548.117 271.562C548.598 271.118 549.205 270.896 549.941 270.896C550.734 270.896 551.352 271.115 551.796 271.551C552.248 271.988 552.473 272.57 552.473 273.298C552.473 273.822 552.339 274.328 552.069 274.815C551.807 275.296 551.491 275.729 551.12 276.114C550.756 276.493 550.29 276.933 549.722 277.435L549.231 277.872H552.692V278.909H547.386V278.003L548.172 277.326Z"
                  fill="#6D6E8A"
                />
                <defs>
                  <filter
                    id="filter0_d_11_7074"
                    x="485.468"
                    y="44.2035"
                    width="76.4181"
                    height="76.4177"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="13.646" />
                    <feGaussianBlur stdDeviation="13.646" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.223889 0 0 0 0 0.103125 0 0 0 0 0.45 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_11_7074"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_11_7074"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_11_7074"
                    x="0.901325"
                    y="215.752"
                    width="76.2227"
                    height="76.223"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="13.646" />
                    <feGaussianBlur stdDeviation="13.646" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.223889 0 0 0 0 0.103125 0 0 0 0 0.45 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_11_7074"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_11_7074"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_11_7074"
                    x1="532.774"
                    y1="59.6689"
                    x2="514.579"
                    y2="77.8636"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#8BB4F2" />
                    <stop
                      offset="0.51551"
                      stop-color="#7C27D9"
                      stop-opacity="0.887325"
                    />
                    <stop offset="1" stop-color="#DE52D0" stop-opacity="0.76" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_11_7074"
                    x1="48.0127"
                    y1="231.217"
                    x2="30.0127"
                    y2="249.217"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#8BB4F2" />
                    <stop
                      offset="0.51551"
                      stop-color="#7C27D9"
                      stop-opacity="0.887325"
                    />
                    <stop offset="1" stop-color="#DE52D0" stop-opacity="0.76" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_11_7074"
                    x1="335.628"
                    y1="145.106"
                    x2="330.389"
                    y2="258.584"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#8F00E0" />
                    <stop offset="1" stop-color="#8F00E0" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                className="-mt-24 ml-6"
                width="545"
                height="92"
                viewBox="0 0 545 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.6426 32.0725C236.793 32.0725 346.206 32.0725 541.356 32.0725"
                  stroke="#E7E8F4"
                  stroke-width="7.27788"
                  stroke-linecap="round"
                />
                <line
                  x1="3.63894"
                  y1="32.3611"
                  x2="282.361"
                  y2="32.3611"
                  stroke="#BD61DC"
                  stroke-width="7.27788"
                  stroke-linecap="round"
                />
                <g filter="url(#filter0_d_11_7087)">
                  <circle
                    cx="283.267"
                    cy="32.1947"
                    r="18.1947"
                    fill="url(#paint0_linear_11_7087)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_11_7087"
                    x="237.78"
                    y="0.353983"
                    width="90.9737"
                    height="90.9734"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="13.646" />
                    <feGaussianBlur stdDeviation="13.646" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.223889 0 0 0 0 0.103125 0 0 0 0 0.45 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_11_7087"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_11_7087"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_11_7087"
                    x1="301.462"
                    y1="14"
                    x2="265.072"
                    y2="50.3894"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#80B2FF" />
                    <stop offset="0.51551" stop-color="#7C27D9" />
                    <stop offset="1" stop-color="#FF68F0" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex gap-2 items-center">
                <div className={header.pr_4}>
                  Enter a recurring monthly/weekly deposit
                </div>
                <div className={header.btn3}>
                  <div className="flex mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="items-center text-center text-[13.65px] text-[#1B1C39] leading-[20.47px] py-[15px] px-[15px]"
                    >
                      <span>$ 10.00</span>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[12px] text-[#1B1C39] leading-[20.52px] font-[300] mt-[25px] mb-[37px]">
                  Use this tool to see how round-ups and depositing money each
                  month can impact the long term value of your account.
                </p>
              </div>
              <div className="absolute top-[59px] left-[550px]">
                <div className={header.btn3}>
                  <div className="flex mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="items-center text-center text-[13.65px] text-[#1B1C39] leading-[20.47px] py-[15px] px-[15px]"
                    >
                      <span>$500</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0">
              <svg
                width="521"
                height="453"
                viewBox="0 0 521 453"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M-110.367 92.1307C-109.777 -59.2684 12.8082 -181.525 163.435 -180.938C314.061 -180.351 435.69 -57.1418 435.099 94.2572C434.509 245.656 311.924 367.913 161.297 367.326C10.6707 366.739 -110.958 243.53 -110.367 92.1307ZM-195.597 91.7984C-194.822 -106.913 -33.9286 -267.375 163.769 -266.604C361.466 -265.834 521.103 -104.122 520.329 94.5895C519.554 293.301 358.66 453.763 160.963 452.992C-36.734 452.222 -196.371 290.51 -195.597 91.7984Z"
                  fill="#2603FF"
                  fill-opacity="0.02"
                />
              </svg>
            </div>
          </div>
          {/* End */}

          {/* Pricing */}
          <div className={header.pricing}>
            <div className="mb-[4px] text-center">
              <h1 className={header.pr_3}>
                Simple Pricing. No Complex Contracts
              </h1>
            </div>
            <div className="lg:flex space-x-[20px] justify-center">
              {/* Purple */}
              <div className="flex">
                <div className={header.price1}>
                  <div className="relative flex flex-col px-[20px] py-[50px] items-center">
                    <div className="flex justify-between gap-[100px]">
                      <div className="text-[30px] text-[#A08CFF] font-semibold leading-[45px]">
                        Purple
                      </div>
                      <div className="text-[#1B1C39]">
                        <span className="font-medium text-[28px] leading-[42px]">
                          $1.00
                        </span>
                        <span className="text-[12px] leading-[18px]">
                          /per month
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-[#1B1828]/0.12 mt-[33px] mb-[30px]"></div>
                    <div className="relative">
                      <ul class="list-inside list-disc text-[#6D6E8A] text-[20px] leading-[30px] space-y-[10px]">
                        <li>Bank Better</li>
                        <li>Pay Later</li>
                        <li>Customizable Virtual Cards</li>
                      </ul>
                    </div>
                    <div className="absolute top-[216px]">
                      <Image src={ccb} alt="card control" />
                    </div>
                    <div className={header.sub1} style={{ color: "white" }}>
                      <a href="#" className="items-center">
                        Subscribe (Trial)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Premium */}
              <div className="flex relative">
                <div className={header.price2}>
                  <div className="absolute top-0 left-0 right-0 rounded-t-[25px] w-[380px] text-center text-[15px] leading-[22.5px] bg-[#6D6E8A] text-white py-2 mb-[25px]">
                    Recommended
                  </div>
                  <div className="relative flex flex-col px-[20px] py-[50px] items-center">
                    <div className="flex justify-between pl-[10px] gap-[61px]">
                      <div className={header.premium}>Premium</div>
                      <div className="flex flex-col">
                        <div className="text-[#1B1C39]">
                          <span className="font-medium text-[28px] leading-[42px]">
                            $3.00
                          </span>
                          <span className="text-[12px] leading-[18px]">
                            {" "}
                            /m
                          </span>
                        </div>
                        <div className="text-[12px] leading-[18px] text-[#6D6E8A]">
                          (per user per month)
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-[#1B1828]/0.12 mt-[33px] mb-[19px]"></div>
                    <div className="text-[16px] leading-[24px] font-semibold text-[#6D6E8A] mb-[15px]">
                      Everything in Purple plus:
                    </div>
                    <div className="relative">
                      <ul class="list-inside list-disc text-[#6D6E8A] text-[20px] leading-[30px] space-y-[10px]">
                        <li>Bank Better +</li>
                        <li>Pay Later +</li>
                        <li>Spend Better +</li>
                        <li>Physical Card</li>
                        <li>Save Better +</li>
                      </ul>
                    </div>
                    <div className="absolute top-[279px]">
                      <Image src={ccb2} alt="card control" />
                    </div>
                    <div className={header.sub2} style={{ color: "white" }}>
                      <a href="#" className="items-center">
                        Subscribe (Trial)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Metal */}
              <div className="flex">
                <div className={header.price3}>
                  <div className="relative flex flex-col px-[20px] py-[50px] items-center">
                    <div className="flex justify-end pl-[10px] gap-[61px]">
                      <div className="text-[#393939] text-[30px] leading-[45px] font-medium">Metal</div>
                      <div className="flex flex-col">
                        <div className="text-[#1B1C39]">
                          <span className="font-medium text-[28px] leading-[42px]">
                            $5.00
                          </span>
                          <span className="text-[12px] leading-[18px]">
                            {" "}
                            /m
                          </span>
                        </div>
                        <div className="text-[12px] leading-[18px] text-[#6D6E8A]">
                          (per user per month)
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-[#1B1828]/0.12 mt-[33px] mb-[15px]"></div>
                    <div className="text-[16px] leading-[24px] font-semibold text-[#6D6E8A] mb-[18px] pl-[30px]">
                      Everything in Premium plus:
                    </div>
                    <div className="relative">
                      <ul class="list-inside list-disc text-[#6D6E8A] text-[20px] leading-[30px] space-y-[10px] pl-[30px]">
                        <li>Bank Better Pro</li>
                        <li>Pay Later Pro</li>
                        <li>Spend Better Pro</li>
                        <li>Signature Metal card</li>
                        <li>Invest better Pro</li>
                      </ul>
                    </div>
                    <div className="absolute top-[279px]">
                      <Image src={ccb3} alt="card control" />
                    </div>
                    <div className={header.sub3} style={{ color: "white" }}>
                      <a href="#" className="items-center">
                        Subscribe (Trial)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End */}

          {/* Testimonials */}
          <div className="mt-[270px]">
            <div className="flex gap-4 text-center items-center justify-center mb-[55px]">
              <div>
                <Image src={love} width={120} height={120} alt="love" />
              </div>
              <div className="flex flex-col mb-[4px] text-center">
                <h1 className={header.pr_3}>
                What our “Early Users” say
                </h1>
                <h1 className={header.h2}>
                (Don’t just take our word for it).
                </h1>
              </div>
              <div>
                <Image src={wink} width={80} height={91.2} alt="love" />
              </div>
              <div>
                <Image src={glasses} width={68} height={70.2} alt="love" />
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <div className="flex flex-col w-[380px] h-[275px] space-y-[20px] bg-white rounded-3xl p-8 border shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1);]">
                <div className="flex items-center gap-4">
                  <div>
                    <Image src={cardImage} width={48} height={48} alt="card image" />
                  </div>
                  <div className="flex flex-col">
                    <div>Aldo P.</div>
                    <div>
                      <Image src={stars} width={124} height={16} alt="stars rating" />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-[8px] items-center">
                  <div className="w-[12px] h-[12px] flex rounded-full bg-[#A08CFF] items-center justify-center">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 19 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66699 5.16667L7.50033 11L17.5003 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left text-[12px] leading-[18px] text-[#A08CFF] font-medium">
                    Verified Testimonial
                  </div>
                </div>
                <div className="text-[16px] text-[#6D6E8A]">
                  Just wow, i used revolut in the UK, when i came to Africa, i came across Mizan App, it took minutes to setup. I’d say its like the Islamic “Revolt App” version.
                </div>
              </div>
              <div className="flex flex-col w-[380px] h-[275px] space-y-[20px] bg-white rounded-3xl p-8 border shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1);]">
                <div className="flex items-center gap-4">
                  <div>
                    <Image src={cardImage} width={48} height={48} alt="card image" />
                  </div>
                  <div className="flex flex-col">
                    <div>Aldo P.</div>
                    <div>
                      <Image src={stars} width={124} height={16} alt="stars rating" />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-[8px] items-center">
                  <div className="w-[12px] h-[12px] flex rounded-full bg-[#A08CFF] items-center justify-center">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 19 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66699 5.16667L7.50033 11L17.5003 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left text-[12px] leading-[18px] text-[#A08CFF] font-medium">
                    Verified Testimonial
                  </div>
                </div>
                <div className="text-[16px] text-[#6D6E8A]">
                  I never considered myself a saver until I started using Mizan – all hail the king of converge and roll.
                </div>
              </div>
              <div className="flex flex-col w-[380px] h-[275px] space-y-[20px] bg-white rounded-3xl p-8 border shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1);]">
                <div className="flex items-center gap-4">
                  <div>
                    <Image src={cardImage} width={48} height={48} alt="card image" />
                  </div>
                  <div className="flex flex-col">
                    <div>Aldo P.</div>
                    <div>
                      <Image src={stars} width={124} height={16} alt="stars rating" />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-[8px] items-center">
                  <div className="w-[12px] h-[12px] flex rounded-full bg-[#A08CFF] items-center justify-center">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 19 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.66699 5.16667L7.50033 11L17.5003 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left text-[12px] leading-[18px] text-[#A08CFF] font-medium">
                    Verified Testimonial
                  </div>
                </div>
                <div className="text-[16px] text-[#6D6E8A]">
                  I never considered myself a saver until I started using Mizan – all hail the king of converge and roll.
                </div>
              </div>
            </div>
          </div>
          {/* End */}

          {/* Peace of mind */}
          <div className="mt-[60px] mb-[49px] flex items-center justify-center">
            <div className="flex flex-col z-30">
              <div className="mb-[40px]">
                <h1 className={header.pr_3}>
                  And finally peace of mind
                </h1>
              </div>
              <div className="flex gap-[30px] items-center bg-white rounded-3xl shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1)] px-[24px] py-[17px] mb-[20px]">
                <div className="p-[9px] rounded-full bg-[#E0D2FF]">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.71 7.9957C26.1899 8.26904 26.8005 8.10159 27.0738 7.6217C27.3472 7.1418 27.1797 6.53118 26.6998 6.25783L25.71 7.9957ZM29.7477 32.4149C30.0965 31.9867 30.0321 31.3568 29.6039 31.008C29.1756 30.6592 28.5458 30.7237 28.197 31.1519L29.7477 32.4149ZM21.8462 37.4997L21.4029 36.6034L21.8462 37.4997ZM20.72 36.6207C15.2067 34.2374 11.9998 29.5765 10.1316 24.8971C8.26268 20.2158 7.77738 15.6176 7.65275 13.5589L5.65641 13.6798C5.78735 15.8428 6.29391 20.6785 8.27416 25.6387C10.2552 30.6007 13.7547 35.7886 19.9264 38.4565L20.72 36.6207ZM8.11529 12.7615L20.6012 5.64964L19.6114 3.91178L7.12542 11.0236L8.11529 12.7615ZM21.5911 5.64964L25.71 7.9957L26.6998 6.25783L22.581 3.91178L21.5911 5.64964ZM28.197 31.1519C26.4521 33.2942 24.2329 35.2038 21.4029 36.6034L22.2895 38.3961C25.4037 36.856 27.8424 34.7542 29.7477 32.4149L28.197 31.1519ZM7.65275 13.5589C7.63419 13.2524 7.79452 12.9442 8.11529 12.7615L7.12542 11.0236C6.19718 11.5523 5.5881 12.5515 5.65641 13.6798L7.65275 13.5589ZM19.9264 38.4565C20.6829 38.7835 21.5504 38.7617 22.2895 38.3961L21.4029 36.6034C21.1907 36.7083 20.9377 36.7148 20.72 36.6207L19.9264 38.4565ZM20.6012 5.64964C20.908 5.47489 21.2843 5.47489 21.5911 5.64964L22.581 3.91178C21.6605 3.38751 20.5318 3.38751 19.6114 3.91178L20.6012 5.64964Z" fill="#1B1C39"/>
                    <circle opacity="0.1" cx="28.4624" cy="17.0639" r="10.0639" fill="url(#paint0_linear_11_7237)" stroke="url(#paint1_linear_11_7237)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="28.5991" cy="16.9878" r="10.0639" stroke="#9A73CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25.7352 15.6389C25.3446 15.2483 24.7115 15.2483 24.321 15.6389C23.9304 16.0294 23.9304 16.6625 24.321 17.0531L25.7352 15.6389ZM28.2025 19.5204L27.4954 20.2275C27.886 20.6181 28.5191 20.6181 28.9096 20.2275L28.2025 19.5204ZM34.1042 15.0329C34.4948 14.6424 34.4948 14.0093 34.1042 13.6187C33.7137 13.2282 33.0805 13.2282 32.69 13.6187L34.1042 15.0329ZM24.321 17.0531L27.4954 20.2275L28.9096 18.8133L25.7352 15.6389L24.321 17.0531ZM28.9096 20.2275L34.1042 15.0329L32.69 13.6187L27.4954 18.8133L28.9096 20.2275Z" fill="url(#paint2_linear_11_7237)"/>
                    <defs>
                    <linearGradient id="paint0_linear_11_7237" x1="38.5263" y1="7" x2="18.3984" y2="27.1279" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8BB4F2"/>
                    <stop offset="0.51551" stop-color="#7C27D9" stop-opacity="0.887325"/>
                    <stop offset="1" stop-color="#DE52D0" stop-opacity="0.76"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_11_7237" x1="38.5263" y1="7" x2="18.3984" y2="27.1279" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8BB4F2"/>
                    <stop offset="0.51551" stop-color="#7C27D9" stop-opacity="0.887325"/>
                    <stop offset="1" stop-color="#DE52D0" stop-opacity="0.76"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_11_7237" x1="33.3971" y1="14.3258" x2="25.9496" y2="12.5282" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8BB4F2"/>
                    <stop offset="0.51551" stop-color="#7C27D9" stop-opacity="0.887325"/>
                    <stop offset="1" stop-color="#DE52D0" stop-opacity="0.76"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="">Swiss level bank security with PCI /DSS certified.</div>
              </div>
              <div className="flex gap-[30px] items-center bg-white rounded-3xl shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1)] px-[24px] py-[18px] mb-[20px]">
                <div className="p-[9px] rounded-full bg-[#E0D2FF]">
                  <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 20.0237V22C29 23.1046 28.1046 24 27 24H3C1.89543 24 1 23.1046 1 22V11.1253M15.0727 6H3C1.89543 6 1 6.89543 1 8V11.1253M1 11.1253H11.439" stroke="#1B1C39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M20.1289 8.25632H19C17.8954 8.25632 17 9.15175 17 10.2563V15C17 16.1046 17.8954 17 19 17H27C28.1046 17 29 16.1046 29 15V10.2563C29 9.15175 28.1046 8.25632 27 8.25632H20.1289ZM20.1289 8.25632V4.44759C20.1289 2.54354 21.6725 1 23.5765 1V1C25.4806 1 27.0241 2.54354 27.0241 4.44759V5.28163M23.2349 12.2732V13.4752" stroke="url(#paint0_linear_11_7248)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_11_7248" x1="29" y1="1" x2="13.64" y2="12.52" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8BB4F2"/>
                    <stop offset="0.51551" stop-color="#7C27D9" stop-opacity="0.887325"/>
                    <stop offset="1" stop-color="#DE52D0" stop-opacity="0.76"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="">Instantly freeze your lost card, wherever, whenever.</div>
              </div>
              <div className="flex gap-[30px] items-center bg-white rounded-3xl shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1)] px-[24px] py-[17px] mb-[20px]">
                <div className="p-[9px] rounded-full bg-[#E0D2FF]">
                  <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.0517" cy="14.541" r="9.16696" stroke="url(#paint0_linear_11_7256)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.2301 16.2004C16.923 18.5075 13.1824 18.5075 10.8753 16.2004" stroke="#9A73CB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.56 1H3C1.89543 1 1 1.89543 1 3V8.56" stroke="#1B1C39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8.56 27.9375H3C1.89543 27.9375 1 27.0421 1 25.9375V20.3775" stroke="#1B1C39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28 8.56L28 3C28 1.89543 27.1046 1 26 1L20.44 1" stroke="#1B1C39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M28 20.3775L28 25.9375C28 27.0421 27.1046 27.9375 26 27.9375L20.44 27.9375" stroke="#1B1C39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_11_7256" x1="24.2187" y1="5.37402" x2="5.88476" y2="23.7079" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#8BB4F2"/>
                    <stop offset="0.51551" stop-color="#7C27D9" stop-opacity="0.887325"/>
                    <stop offset="1" stop-color="#DE52D0" stop-opacity="0.76"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="">Biometrics login, with enhanced 2FA. No more (xh!#12@?3) passwords.</div>
              </div>
              <div className="flex gap-[30px] items-center bg-white rounded-3xl shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1)] px-[24px] py-[17px] mb-[20px]">
                <div className="p-[9px] rounded-full bg-[#E0D2FF]"> 
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.2436 33.3111L28.5926 27.3361C28.902 27.1575 29.0926 26.8273 29.0926 26.4701V21.837M18.2436 33.3111L7.89453 27.3361C7.58513 27.1575 7.39453 26.8273 7.39453 26.4701V14.52M18.2436 33.3111V20.688C18.2436 20.3127 18.0335 19.9691 17.6994 19.798L7.39453 14.52M7.39453 14.52L17.7436 8.54502C18.053 8.36639 18.4342 8.36639 18.7436 8.54502L22.4458 10.6825" stroke="#1B1C39" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22.002 10.4472V17.3974C22.002 17.7487 22.1863 18.0742 22.4875 18.2549L27.7512 21.4131C28.0678 21.6031 28.4635 21.6031 28.7801 21.4131L34.0438 18.2549C34.345 18.0742 34.5293 17.7487 34.5293 17.3974V11.0134C34.5293 10.6621 34.345 10.3366 34.0438 10.1559L28.7801 6.99766C28.4635 6.80765 28.0678 6.80765 27.7512 6.99766L22.002 10.4472ZM22.002 10.4472L28.2656 13.8933" stroke="url(#paint0_linear_11_7267)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <defs>
                    <linearGradient id="paint0_linear_11_7267" x1="34.5293" y1="6.68896" x2="19.7429" y2="19.011" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#80B2FF"/>
                    <stop offset="0.51551" stop-color="#7C27D9"/>
                    <stop offset="1" stop-color="#FF68F0"/>
                    </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="">Built on blockchain technology (will take approximately 1,000,000,000,000 years to crack).</div>
              </div>
            </div>
            <div className="relative">
              <div className="">
                <svg width="751" height="751" viewBox="0 0 751 751" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="375.5" cy="375.5" r="375.5" fill="url(#paint0_linear_11_6955)"/>
                  <defs>
                  <linearGradient id="paint0_linear_11_6955" x1="157.617" y1="1.08952e-05" x2="640.9" y2="710.437" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FAF9FE"/>
                  <stop offset="1" stop-color="#C6BAFF"/>
                  </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute bottom-0 right-10 top-28 z-10">
                <Image src={blackHand} width={561} height={803} alt="black hand holding phone" />
              </div>
              <div className="absolute bottom-0 right-20 top-56 -z-10">
                <Image src={blackShadow} width={596} height={748} alt="black hand holding phone" />
              </div>

            </div>
          </div>
          {/* End */}

          {/* Top Providers */}
          <div className="flex flex-col rounded-3xl py-[70px] bg-white shadow-[0px_-8px_100px_rgba(105,_67,_175,_0.1)] z-20 mb-[160px]">
            <div className="mb-[40px] pl-[82px]">
              <h1 className={header.pr_3}>
                We work with top providers
              </h1>
            </div>
            <div className="flex items-center gap-[20px] pl-[76px] pr-[84px]">
              <div className="flex items-center justify-center w-[280px] h-[201px] bg-white rounded-3xl p-8 border shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1);]">
                <Image src={shariyah2} width={123} height={115} alt="shariyah logo" />
              </div>
              <div className="flex items-center justify-center w-[280px] h-[201px] bg-white rounded-3xl p-8 border shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1);]">
                <Image src={codebase} alt="codebase technologies logo" />
              </div>
              <div className="flex items-center justify-center w-[280px] h-[201px] bg-white rounded-3xl p-8 border shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1);]">
                <Image src={duck} alt="duck design logo" />
              </div>
              <div className="flex items-center justify-center w-[280px] h-[201px] bg-white rounded-3xl p-8 border shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1);]">
                <Image src={cloud} alt="google cloud logo" />
              </div>
            </div>

          </div>
          {/* End */}

          {/* Backed By */}
          <div className="flex flex-col mb-[160px]">
            <div className="mb-[40px] pl-[82px]">
              <h1 className="text-[40px] leading[60px] font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#9E7AFC]">
                Backed by
                </span>
              </h1>
            </div>
            <div className="flex items-center justify-center gap-[20px]">
              <div className="flex flex-col w-[380px] h-[508px] bg-white rounded-3xl p-8 shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1);]">
                <div className="flex items-center justify-start gap-[20px]">
                  <div className="">
                    <Image src={backer1} alt="sponsor1" />
                  </div>
                  <div className="flex-1 text-[24px] leading-[36px] text-[#1B1C39] font-medium">Sheikh Abdullatif Essajee</div>
                </div>
                <div className="flex flex-col space-y-[20px] text-[14px] leading-[23.38px] text-[#6D6E8A]">
                  <p>
                    Essajee is a promoter of Islamic banking in Kenya, and co-founder and currently the Chairman of First Community Bank. 
                  </p>
                  <p>
                    He also served as its Executive Director in charge of support and control and later as its Managing Director, during his leave of absence from the University of Nairobi. 
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-[380px] h-[508px] bg-white rounded-3xl p-8 shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1);]">
                <div className="flex items-center justify-start gap-[20px]">
                  <div className="">
                    <Image src={backer2} alt="sponsor1" />
                  </div>
                  <div className="flex-1 text-[24px] leading-[36px] text-[#1B1C39] font-medium">Mufti Ismail menk</div>
                </div>
                <div className="flex flex-col space-y-[20px] text-[14px] leading-[23.38px] text-[#6D6E8A]">
                  <p>
                    Mufti Dr Ismail Menk is a leading global Islamic scholar born and raised in Zimbabwe. He studied Shariah in Madinah and holds a Doctorate of Social Guidance from Aldersgate University. 
                  </p>
                  <div className="flex flex-col space-y-[5px]">
                    <p className="font-medium">Awards</p>
                    <ul class="list-inside list-disc">
                      <li>Top 500 Most Influential Muslims in the World since 2010 to date.</li>
                      <li>KSBA Global Leadership Award Social Guidance</li>
                      <li>Honorary Doctorate Social Guidance Aldersgate University</li>
                      
                    </ul>  
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[380px] h-[508px] bg-white rounded-3xl p-8 shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1);]">
                <div className="flex items-center justify-start gap-[20px]">
                  <div className="">
                    <Image src={backer3} alt="sponsor1" />
                  </div>
                  <div className="flex-1 text-[24px] leading-[36px] text-[#1B1C39] font-medium">Sh. Muhammad Ahmad Shaikh</div>
                </div>
                <div className="flex flex-col space-y-[20px] text-[14px] leading-[23.38px] text-[#6D6E8A]">
                  <p>
                    Shaikh Muhammad has over 10 years of experience as a Shari’a consultant and academic in various parts of Islamic finance. He has worked predominantly in the financial services along with retail and investment banking and has expertise in corporate advisory and real-estate funds.  
                  </p>
                  <p>
                    His work ranges from redesigning conventional Sukuk, organizational structures of funds in the banking, insurance and private equity sector.  
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End */}

          {/* Zendesk */}
          <div className="flex flex-col mb-[160px]">
            <h1 className="text-[40px] leading[60px] font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#9E7AFC]">
                Any questions? 
              </span>
            </h1>
            <h1 className={header.h3}>
              Did not understand some products? Need any further explantion? or have a suggestion? Do let us know, we dont like leaving anything to chance 
            </h1>
          </div>
          {/* End */}

          <div className="mt-[1400px]"></div>
        </div>

        {/* Cards and shadow */}
        <div className="absolute inset-y-0 lg:left-[825px] top-[1997.22px] z-30">
          <Image src={card} alt="card" priority />
        </div>
        <div className="absolute inset-y-0 lg:left-[1094.83px] top-[2108.6px] z-30">
          <Image
            src={card2}
            width={280.04}
            height={381.74}
            alt="card2"
            priority
          />
        </div>
        <div className="absolute inset-y-0 lg:left-[850.72px] top-[2150.75px] z-20 opacity-40">
          <Image src={Shadow} alt="shadow" priority />
        </div>
        {/* End */}

        <div className="absolute inset-y-0 lg:right-0 z-20">
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

        {/* Pay with card and shadow */}
        <div className="lg:absolute inset-y-0 lg:right-0 top-[2400px] z-30">
          <Image src={pay} alt="pay-with-credit-card" priority />
        </div>
        <div className="lg:absolute inset-y-0 lg:right-0 top-[2405px] z-20">
          <Image src={paymask} alt="pay-with-credit-card" priority />
        </div>
        {/* End */}

        <div className="absolute inset-y-0 -left-[70px] top-[1814px] z-10">
          <svg
            width="1325"
            height="1602"
            viewBox="0 0 1325 1602"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.49"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M517.5 108C131.074 108 -182 418.164 -182 801C-182 1183.84 131.074 1494 517.5 1494C903.926 1494 1217 1183.84 1217 801C1217 418.383 903.926 108 517.5 108Z"
              stroke="url(#paint0_linear_11_6942)"
              strokeOpacity="0.11"
              strokeWidth="216"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11_6942"
                x1="678.114"
                y1="1547.69"
                x2="215.594"
                y2="149.905"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8F00E0" stopOpacity="0.22" />
                <stop offset="1" stopColor="#8F00E0" stopOpacity="0.39" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute inset-y-0 left-[42px] top-[2202px] z-10">
          <svg
            width="833"
            height="825"
            viewBox="0 0 833 825"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.19"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M416.5 825C646.396 825 833 640.387 833 412.5C833 184.613 646.597 0 416.5 0C186.403 0 -7.20296e-08 184.613 -1.60943e-07 412.5C-2.49857e-07 640.387 186.403 825 416.5 825ZM416.5 628.675C536.96 628.675 634.571 532.002 634.571 412.699C634.571 293.395 536.96 196.722 416.5 196.722C296.04 196.722 198.429 293.395 198.429 412.699C198.429 532.002 296.04 628.675 416.5 628.675Z"
              fill="url(#paint0_linear_11_6945)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11_6945"
                x1="82.5"
                y1="-98.5"
                x2="662.009"
                y2="856.494"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FAF2FF" stopOpacity="0.57" />
                <stop
                  offset="0.164053"
                  stopColor="#FAF2FF"
                  stopOpacity="0.57"
                />
                <stop offset="0.369168" stopColor="#EDDCF7" />
                <stop offset="0.711458" stopColor="#EAD0F8" />
                <stop offset="1" stopColor="#DA99FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Phones Pic */}
        <div className="lg:absolute inset-y-0 lg:left-[620px] top-[200px] z-30">
          <Image
            src={phonePic}
            alt="Phone"
            width={1836}
            height="1642.16"
            className="object-contain lg:object-cover"
            priority
          />
        </div>
        {/* End */}

        
        <div className="lg:absolute inset-y-0 lg:left-[793px] top-[8872px]">
          <svg
            width="647"
            height="918"
            viewBox="0 0 647 918"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="459"
              cy="459"
              r="365"
              stroke="url(#paint0_linear_11_6944)"
              stroke-opacity="0.36"
              stroke-width="188"
            />
            <defs>
              <linearGradient
                id="paint0_linear_11_6944"
                x1="521.816"
                y1="86.5053"
                x2="457.791"
                y2="917.907"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FAF2FF" stop-opacity="0.57" />
                <stop offset="0.645833" stop-color="#EDDCF7" />
                <stop offset="0.711458" stop-color="#EAD0F8" />
                <stop offset="1" stop-color="#DA99FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="pt-12">
        <div className={header.footer}>
          <div class="grid grid-cols-4 gap-4">
            <div className="flex flex-col space-y-[37px]">
              <div>
                <svg
                  width="150"
                  height="77"
                  viewBox="0 0 150 77"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.4768 2.34375C56.4768 1.04933 55.4275 0 54.1331 0C52.8386 0 51.7893 1.04933 51.7893 2.34375C51.7893 3.63817 52.8386 4.6875 54.1331 4.6875C55.4275 4.6875 56.4768 3.63817 56.4768 2.34375Z"
                    fill="white"
                  />
                  <path
                    d="M54.1331 8.16532C55.4275 8.16532 56.4768 9.21465 56.4768 10.5091V33.5686C56.4768 34.863 55.4275 35.9123 54.1331 35.9123C52.8386 35.9123 51.7893 34.863 51.7893 33.5686V10.5091C51.7893 9.21465 52.8386 8.16532 54.1331 8.16532Z"
                    fill="white"
                  />
                  <path
                    d="M61.0887 10.5091C61.0887 9.21465 62.1381 8.16532 63.4325 8.16532H80.6704C81.5555 8.16532 82.3651 8.66394 82.7634 9.45436C83.1617 10.2448 83.0808 11.1922 82.5541 11.9036L68.0835 31.4516H81.124C82.4184 31.4516 83.4677 32.5009 83.4677 33.7954C83.4677 35.0898 82.4184 36.1391 81.124 36.1391H63.4325C62.5474 36.1391 61.7378 35.6405 61.3395 34.8501C60.9411 34.0597 61.0221 33.1123 61.5487 32.4009L76.0193 12.8528H63.4325C62.1381 12.8528 61.0887 11.8035 61.0887 10.5091Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M110.988 33.7954C110.988 35.0898 112.037 36.1391 113.332 36.1391C114.626 36.1391 115.675 35.0898 115.675 33.7954V22.3034C115.675 14.6622 109.481 8.46774 101.84 8.46774C94.1985 8.46774 88.004 14.6622 88.004 22.3034C88.004 29.9447 94.1985 36.1391 101.84 36.1391C105.347 36.1391 108.549 34.8342 110.988 32.6833V33.7954ZM92.6915 22.3034C92.6915 17.251 96.7873 13.1552 101.84 13.1552C106.892 13.1552 110.988 17.251 110.988 22.3034C110.988 27.3558 106.892 31.4516 101.84 31.4516C96.7873 31.4516 92.6915 27.3558 92.6915 22.3034Z"
                    fill="white"
                  />
                  <path
                    d="M0 20.5645C0 13.3826 5.8221 7.56048 13.004 7.56048C17.3681 7.56048 21.23 9.71015 23.5887 13.0083C25.9474 9.71015 29.8094 7.56048 34.1734 7.56048C41.3553 7.56048 47.1774 13.3826 47.1774 20.5645V33.871C47.1774 35.2071 46.0942 36.2903 44.7581 36.2903C43.4219 36.2903 42.3387 35.2071 42.3387 33.871V20.5645C42.3387 16.0549 38.683 12.3992 34.1734 12.3992C29.6638 12.3992 26.0081 16.0549 26.0081 20.5645V33.871C26.0081 35.2071 24.9249 36.2903 23.5887 36.2903C22.2525 36.2903 21.1694 35.2071 21.1694 33.871V20.5645C21.1694 16.0549 17.5136 12.3992 13.004 12.3992C8.49445 12.3992 4.83871 16.0549 4.83871 20.5645V33.871C4.83871 35.2071 3.75553 36.2903 2.41935 36.2903C1.08318 36.2903 0 35.2071 0 33.871V20.5645Z"
                    fill="white"
                  />
                  <path
                    d="M125.202 22.379C125.202 16.8673 129.67 12.3992 135.181 12.3992C140.693 12.3992 145.161 16.8673 145.161 22.379V33.871C145.161 35.2071 146.244 36.2903 147.581 36.2903C148.917 36.2903 150 35.2071 150 33.871V22.379C150 14.195 143.366 7.56048 135.181 7.56048C126.997 7.56048 120.363 14.195 120.363 22.379V33.871C120.363 35.2071 121.446 36.2903 122.782 36.2903C124.118 36.2903 125.202 35.2071 125.202 33.871V22.379Z"
                    fill="white"
                  />
                  <path
                    d="M63.3569 41.129C64.6513 41.129 65.7006 42.1784 65.7006 43.4728C65.7006 44.7672 64.6513 45.8165 63.3569 45.8165C62.0624 45.8165 61.0131 44.7672 61.0131 43.4728C61.0131 42.1784 62.0624 41.129 63.3569 41.129Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M109.4 42.0363C104.181 42.0363 99.9496 46.2675 99.9496 51.4869C99.9496 53.2239 100.418 54.8514 101.236 56.25H94.316C95.0156 54.9702 95.4133 53.5018 95.4133 51.9405C95.4133 48.2267 93.1259 44.6677 89.5154 43.5735C89.4967 43.5678 89.4779 43.5624 89.459 43.5572L85.0739 42.3475C83.8261 42.0033 82.5355 42.7358 82.1912 43.9836C81.847 45.2314 82.5795 46.522 83.8273 46.8662L88.1798 48.0669C89.5487 48.4952 90.7258 50.0237 90.7258 51.9405C90.7258 54.3206 88.7964 56.25 86.4163 56.25H65.7762V51.6381C65.7762 50.3437 64.7269 49.2944 63.4325 49.2944C62.138 49.2944 61.0887 50.3437 61.0887 51.6381V74.4708C61.0887 75.7652 62.138 76.8145 63.4325 76.8145C64.7269 76.8145 65.7762 75.7652 65.7762 74.4708V60.9375H140.549C145.769 60.9375 150 56.7063 150 51.4869C150 46.2675 145.769 42.0363 140.549 42.0363H109.4ZM140.549 56.25H109.4C106.77 56.25 104.637 54.1175 104.637 51.4869C104.637 48.8563 106.77 46.7238 109.4 46.7238H140.549C143.18 46.7238 145.312 48.8563 145.312 51.4869C145.312 54.1175 143.18 56.25 140.549 56.25Z"
                    fill="white"
                  />
                  <path
                    d="M56.4768 43.5484V74.4708C56.4768 75.7652 55.4275 76.8145 54.1331 76.8145C52.8386 76.8145 51.7893 75.7652 51.7893 74.4708V43.5484C51.7893 42.254 52.8386 41.2046 54.1331 41.2046C55.4275 41.2046 56.4768 42.254 56.4768 43.5484Z"
                    fill="white"
                  />
                  <path
                    d="M76.5877 64.4153C77.8821 64.4153 78.9314 65.4647 78.9314 66.7591C78.9314 68.0535 77.8821 69.1028 76.5877 69.1028C75.2933 69.1028 74.2439 68.0535 74.2439 66.7591C74.2439 65.4647 75.2933 64.4153 76.5877 64.4153Z"
                    fill="white"
                  />
                  <path
                    d="M85.8871 66.7591C85.8871 65.4647 84.8378 64.4153 83.5434 64.4153C82.2489 64.4153 81.1996 65.4647 81.1996 66.7591C81.1996 68.0535 82.2489 69.1028 83.5434 69.1028C84.8378 69.1028 85.8871 68.0535 85.8871 66.7591Z"
                    fill="white"
                  />
                  <path
                    d="M11.586 46.7906C12.8338 46.4464 13.5663 45.1558 13.2221 43.908C12.8778 42.6602 11.5872 41.9277 10.3394 42.2719L5.95435 43.4816C5.93546 43.4868 5.91663 43.4922 5.89787 43.4979C2.28739 44.5921 0 48.1511 0 51.8649C0 56.8328 4.0264 60.8602 8.99386 60.8619H8.99698L38.1744 60.9375L38.1804 60.9375C43.1493 60.9375 47.1774 56.9094 47.1774 51.9405C47.1774 48.2267 44.89 44.6677 41.2795 43.5735C41.2608 43.5678 41.242 43.5624 41.2231 43.5572L36.838 42.3475C35.5902 42.0033 34.2996 42.7358 33.9554 43.9836C33.6111 45.2314 34.3436 46.522 35.5914 46.8662L39.9439 48.0669C41.3128 48.4952 42.4899 50.0237 42.4899 51.9405C42.4899 54.3197 40.5619 56.2486 38.1831 56.25H38.1804L9.00302 56.1744L8.99698 56.1744C6.61692 56.1744 4.6875 54.245 4.6875 51.8649C4.6875 49.9481 5.86461 48.4196 7.23354 47.9913L11.586 46.7906Z"
                    fill="white"
                  />
                  <path
                    d="M23.5887 41.129C24.8831 41.129 25.9325 42.1784 25.9325 43.4728C25.9325 44.7672 24.8831 45.8165 23.5887 45.8165C22.2943 45.8165 21.245 44.7672 21.245 43.4728C21.245 42.1784 22.2943 41.129 23.5887 41.129Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="font-medium text-white/[.58]">
                <ul class="list-none text-[14px] leading-[45px]">
                  <li>Terms and Conditions</li>
                  <li>Privacy Policy</li>
                  <li>Privacy Notice</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <h1 className="font-bold text-[16px] leading-[57px] tracking-[0.2px] text-white/[0.7]">
                  RESOURCES
                </h1>
              </div>
              <div>
                <ul class="list-none text-[16px] leading-[39px] text-white font-medium	">
                  <li>Support</li>
                  <li>Mizan Donate</li>
                  <li>Mizan Pay</li>
                  <li>Mizan Invest</li>
                  <li>Mizan Save</li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <h1 className="font-bold text-[16px] leading-[57px] tracking-[0.2px] text-white/[0.7]">
                  DOWNLOAD (BETA)
                </h1>
              </div>
              <div className="flex flex-col space-y-[26px] w-[214px]">
                <div className="rounded-full flex items-center justify-center px-[30px] py-[15px] bg-transparent border border-white">
                  <Image src={appleStore} priority alt="apple store logo" />
                </div>
                <div className="rounded-full flex items-center justify-center px-[30px] py-[15px] bg-transparent border border-white">
                  <Image src={googlePlay} priority alt="apple store logo" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <h1 className="font-bold text-[16px] leading-[57px] tracking-[0.2px] text-white/[0.7]">
                  FOLLOW THE MONEY
                </h1>
              </div>
              <div className="flex space-x-[26px] items-center ">
                <div className="items-center">
                  <Image
                    src={linkedin}
                    width={34.97}
                    height={35.25}
                    priority
                    alt="linkedin"
                  />
                </div>
                <div className="items-center">
                  <Image
                    src={youtube}
                    width={34.91}
                    height={27.44}
                    priority
                    alt="youtube"
                  />
                </div>
                <div className="items-center">
                  <Image
                    src={facebook}
                    width={36.79}
                    height={36.49}
                    priority
                    alt="facebook"
                  />
                </div>
                <div className="items-center">
                  <Image
                    src={twitter}
                    width={34.91}
                    height={31.09}
                    priority
                    alt="twitter"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-between mt-[106px]">
            <div className="w-1/4">
              <div className="text-white text-[15px] leading-[25px] font-medium">
                Mizan Financial Ltd.<br></br> All rights reserved 2022
              </div>
            </div>
            <div className="w-1/2">
              <p className="text-white text-[10px] leading-[16px] font-normal">
                Mizan Financial Ltd is a company registered in the Democratic
                Republic of Kenya (Certificate of Incorporation No. No.
                PVT-DLULVPV7) with a registered address: Le’Mac Towers, 4th
                floor, Rhapta road, Westlands, Nairobi, Kenya. Mizan Financial
                Ltd is a subsidiary of Mizan Group Ltd., registered in the Dubai
                International Financial Centre (License No. XXXX), with the
                registered address at: Unit 208, Level One, Gate Avenue, DIFC,
                Dubai, United Arab Emirates.
              </p>
            </div>
            <div className="flex w-1/4 justify-end">
              <Image
                src={pci2}
                width={123}
                height={48}
                priority
                alt="pci logo"
              />
            </div>
          </div>

          <div className="lg:absolute top-[12px] right-[15px]">
            <svg
              width="654"
              height="643"
              viewBox="0 0 654 643"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-[0.1]"
            >
              <path
                opacity="0.6"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M435.897 458.939C449.672 553.435 525.695 628.181 621.805 641.725C638.382 644.068 653.257 631.477 653.257 615.024L653.257 455.025C653.257 440.117 640.975 428.041 625.812 428.041L463.08 428.041C446.32 428.015 433.514 442.64 435.897 458.939ZM504.248 516.692C504.248 551.478 532.923 579.672 568.303 579.672C603.683 579.672 632.359 551.478 632.359 516.692C632.359 481.906 603.683 453.712 568.303 453.712C532.923 453.712 504.248 481.906 504.248 516.692ZM544.441 428.016C604.542 428.016 653.252 380.124 653.252 321.032C653.252 261.94 604.543 214.049 544.441 214.049C484.34 214.049 435.631 261.94 435.631 321.032C435.604 380.099 484.34 428.016 544.441 428.016ZM544.441 402.551C590.244 402.551 627.352 366.066 627.352 321.032C627.352 275.999 590.244 239.514 544.441 239.514C498.639 239.514 461.53 275.999 461.53 321.032C461.53 366.04 498.639 402.551 544.441 402.551ZM435.006 30.9474C421.231 125.443 345.207 200.19 249.098 213.733C232.521 216.077 217.646 203.486 217.646 187.033L217.646 27.0079C217.646 12.0998 229.928 0.0238888 245.091 0.0238901L407.823 0.0239043C424.583 0.0239058 437.389 14.6488 435.006 30.9474ZM598.86 321.007C598.86 350.566 574.479 374.511 544.442 374.511C514.378 374.511 490.023 350.566 490.023 321.007C490.023 291.448 514.378 267.502 544.442 267.502C574.505 267.502 598.86 291.448 598.86 321.007ZM572.934 321.033C572.934 336.507 560.181 349.046 544.442 349.046C528.703 349.046 515.949 336.507 515.949 321.033C515.949 305.558 528.703 293.019 544.442 293.019C560.181 293.019 572.934 305.558 572.934 321.033ZM467.061 0.307601C563.17 13.8511 639.194 88.598 652.969 183.094C655.352 199.392 642.572 214.017 625.786 213.991L463.054 213.991C447.891 213.991 435.609 201.915 435.609 187.007L435.609 27.0084C435.609 10.5553 450.484 -2.03548 467.061 0.307601ZM520.563 62.3606C555.942 62.3606 584.618 90.5549 584.618 125.341C584.618 160.126 555.942 188.321 520.563 188.321C485.183 188.321 456.507 160.126 456.507 125.341C456.507 90.5549 485.183 62.3606 520.563 62.3606ZM435.006 397.092C421.231 302.597 345.207 227.85 249.098 214.306C232.521 211.963 217.646 224.554 217.646 241.033C217.646 254.499 227.754 265.828 241.294 267.76C277.302 272.858 309.566 289.414 334.104 313.54C358.642 337.666 375.481 369.387 380.666 404.791C382.604 418.129 394.152 428.042 407.849 428.042C424.583 428.016 437.389 413.391 435.006 397.092ZM314.464 406.001C305.979 369.722 276.937 341.167 240.038 332.825C228.568 330.224 217.647 338.927 217.674 350.514L217.674 409.941C217.674 419.931 225.897 428.016 236.058 428.016L296.499 428.016C308.258 428.016 317.109 417.279 314.464 406.001ZM139.834 152.698C154.506 146.722 161.473 130.184 155.396 115.758C149.318 101.333 132.498 94.4822 117.826 100.458C103.154 106.433 96.1863 122.971 102.264 137.397C108.341 151.823 125.162 158.673 139.834 152.698ZM0.285807 183.067C14.0607 88.5716 90.0843 13.8248 186.194 0.28127C202.771 -2.06181 217.646 10.529 217.619 27.0078L217.619 187.007C217.619 201.915 205.337 213.991 190.174 213.991L27.4428 213.991C10.7088 213.991 -2.09725 199.366 0.285807 183.067ZM128.764 180.57C159.063 180.57 183.654 156.418 183.654 126.602C183.654 96.7853 159.063 72.6335 128.764 72.6335C98.4643 72.6335 73.874 96.811 73.874 126.602C73.874 156.392 98.4643 180.57 128.764 180.57Z"
                fill="#F1F6FB"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
