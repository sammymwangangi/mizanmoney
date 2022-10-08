import Link from "next/link";
import { Popover } from '@headlessui/react'

export default function Home() {
  return (
    <div>
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <Link href="#">
                <svg
                  width="150"
                  height="76"
                  viewBox="0 0 150 76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M56.4768 2.3189C56.4768 1.03821 55.4275 0 54.1331 0C52.8386 0 51.7893 1.03821 51.7893 2.3189C51.7893 3.59959 52.8386 4.63779 54.1331 4.6378C55.4275 4.6378 56.4768 3.59959 56.4768 2.3189Z"
                    fill="url(#paint0_linear_7_238)"
                  />
                  <path
                    d="M54.1331 8.07874C55.4275 8.07874 56.4768 9.11694 56.4768 10.3976V33.2126C56.4768 34.4933 55.4275 35.5315 54.1331 35.5315C52.8386 35.5315 51.7893 34.4933 51.7893 33.2126V10.3976C51.7893 9.11694 52.8386 8.07874 54.1331 8.07874Z"
                    fill="url(#paint1_linear_7_238)"
                  />
                  <path
                    d="M61.0887 10.3976C61.0887 9.11694 62.1381 8.07874 63.4325 8.07874H80.6704C81.5555 8.07874 82.3651 8.57207 82.7634 9.35411C83.1617 10.1361 83.0808 11.0735 82.5541 11.7773L68.0835 31.1181H81.124C82.4184 31.1181 83.4677 32.1563 83.4677 33.437C83.4677 34.7177 82.4184 35.7559 81.124 35.7559H63.4325C62.5474 35.7559 61.7378 35.2626 61.3395 34.4805C60.9411 33.6985 61.0221 32.7612 61.5487 32.0573L76.0193 12.7165H63.4325C62.1381 12.7165 61.0887 11.6783 61.0887 10.3976Z"
                    fill="url(#paint2_linear_7_238)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M110.988 33.437C110.988 34.7177 112.037 35.7559 113.332 35.7559C114.626 35.7559 115.675 34.7177 115.675 33.437V22.0669C115.675 14.5067 109.481 8.37795 101.84 8.37795C94.1985 8.37795 88.004 14.5067 88.004 22.0669C88.004 29.6271 94.1985 35.7559 101.84 35.7559C105.347 35.7559 108.549 34.4648 110.988 32.3367V33.437ZM92.6915 22.0669C92.6915 17.0681 96.7873 13.0157 101.84 13.0157C106.892 13.0157 110.988 17.0681 110.988 22.0669C110.988 27.0658 106.892 31.1181 101.84 31.1181C96.7873 31.1181 92.6915 27.0658 92.6915 22.0669Z"
                    fill="url(#paint3_linear_7_238)"
                  />
                  <path
                    d="M0 20.3465C0 13.2407 5.8221 7.48031 13.004 7.48031C17.3681 7.48031 21.23 9.60719 23.5887 12.8704C25.9474 9.60719 29.8094 7.48031 34.1734 7.48031C41.3553 7.48031 47.1774 13.2407 47.1774 20.3465V33.5118C47.1774 34.8338 46.0942 35.9055 44.7581 35.9055C43.4219 35.9055 42.3387 34.8338 42.3387 33.5118V20.3465C42.3387 15.8847 38.683 12.2677 34.1734 12.2677C29.6638 12.2677 26.0081 15.8847 26.0081 20.3465V33.5118C26.0081 34.8338 24.9249 35.9055 23.5887 35.9055C22.2525 35.9055 21.1694 34.8338 21.1694 33.5118V20.3465C21.1694 15.8847 17.5136 12.2677 13.004 12.2677C8.49445 12.2677 4.83871 15.8847 4.83871 20.3465V33.5118C4.83871 34.8338 3.75553 35.9055 2.41935 35.9055C1.08318 35.9055 0 34.8338 0 33.5118V20.3465Z"
                    fill="url(#paint4_linear_7_238)"
                  />
                  <path
                    d="M125.202 22.1417C125.202 16.6885 129.67 12.2677 135.181 12.2677C140.693 12.2677 145.161 16.6885 145.161 22.1417V33.5118C145.161 34.8338 146.244 35.9055 147.581 35.9055C148.917 35.9055 150 34.8338 150 33.5118V22.1417C150 14.0445 143.365 7.48031 135.181 7.48031C126.997 7.48031 120.363 14.0445 120.363 22.1417V33.5118C120.363 34.8338 121.446 35.9055 122.782 35.9055C124.118 35.9055 125.202 34.8338 125.202 33.5118V22.1417Z"
                    fill="url(#paint5_linear_7_238)"
                  />
                  <path
                    d="M63.3568 40.6929C64.6513 40.6929 65.7006 41.7311 65.7006 43.0118C65.7006 44.2925 64.6513 45.3307 63.3568 45.3307C62.0624 45.3307 61.0131 44.2925 61.0131 43.0118C61.0131 41.7311 62.0624 40.6929 63.3568 40.6929Z"
                    fill="url(#paint6_linear_7_238)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M109.4 41.5905C104.181 41.5905 99.9496 45.7769 99.9496 50.9409C99.9496 52.6595 100.418 54.2698 101.236 55.6535H94.316C95.0156 54.3874 95.4133 52.9345 95.4133 51.3898C95.4133 47.7153 93.1259 44.194 89.5154 43.1115C89.4967 43.1059 89.4778 43.1005 89.459 43.0953L85.0739 41.8985C83.8261 41.5579 82.5355 42.2826 82.1912 43.5172C81.847 44.7518 82.5795 46.0287 83.8273 46.3693L88.1798 47.5572C89.5487 47.981 90.7258 49.4932 90.7258 51.3898C90.7258 53.7446 88.7964 55.6535 86.4163 55.6535H65.7762V51.0905C65.7762 49.8098 64.7269 48.7716 63.4325 48.7716C62.138 48.7716 61.0887 49.8098 61.0887 51.0905V73.6811C61.0887 74.9618 62.138 76 63.4325 76C64.7269 76 65.7762 74.9618 65.7762 73.6811V60.2913H140.549C145.769 60.2913 150 56.105 150 50.9409C150 45.7769 145.769 41.5905 140.549 41.5905H109.4ZM140.549 55.6535H109.4C106.77 55.6535 104.637 53.5436 104.637 50.9409C104.637 48.3382 106.77 46.2283 109.4 46.2283H140.549C143.18 46.2283 145.313 48.3382 145.313 50.9409C145.313 53.5436 143.18 55.6535 140.549 55.6535Z"
                    fill="url(#paint7_linear_7_238)"
                  />
                  <path
                    d="M56.4768 43.0866V73.6811C56.4768 74.9618 55.4275 76 54.1331 76C52.8386 76 51.7893 74.9618 51.7893 73.6811V43.0866C51.7893 41.8059 52.8386 40.7677 54.1331 40.7677C55.4275 40.7677 56.4768 41.8059 56.4768 43.0866Z"
                    fill="url(#paint8_linear_7_238)"
                  />
                  <path
                    d="M76.5877 63.7323C77.8821 63.7323 78.9315 64.7705 78.9315 66.0512C78.9315 67.3319 77.8821 68.3701 76.5877 68.3701C75.2933 68.3701 74.244 67.3319 74.244 66.0512C74.244 64.7705 75.2933 63.7323 76.5877 63.7323Z"
                    fill="url(#paint9_linear_7_238)"
                  />
                  <path
                    d="M85.8871 66.0512C85.8871 64.7705 84.8378 63.7323 83.5433 63.7323C82.2489 63.7323 81.1996 64.7705 81.1996 66.0512C81.1996 67.3319 82.2489 68.3701 83.5433 68.3701C84.8378 68.3701 85.8871 67.3319 85.8871 66.0512Z"
                    fill="url(#paint10_linear_7_238)"
                  />
                  <path
                    d="M11.586 46.2945C12.8338 45.9539 13.5663 44.677 13.2221 43.4424C12.8778 42.2078 11.5872 41.4831 10.3394 41.8237L5.95435 43.0205C5.93546 43.0257 5.91663 43.031 5.89787 43.0367C2.28739 44.1192 0 47.6405 0 51.315C0 56.2301 4.0264 60.2149 8.99386 60.2165H8.99698L38.1744 60.2913L38.1804 60.2913C43.1493 60.2913 47.1774 56.306 47.1774 51.3898C47.1774 47.7153 44.89 44.194 41.2795 43.1115C41.2608 43.1059 41.242 43.1005 41.2231 43.0953L36.838 41.8985C35.5902 41.5579 34.2996 42.2826 33.9554 43.5172C33.6111 44.7518 34.3436 46.0287 35.5914 46.3693L39.9439 47.5572C41.3128 47.981 42.4899 49.4932 42.4899 51.3898C42.4899 53.7437 40.5619 55.6521 38.1831 55.6535H38.1804L9.00302 55.5788L8.99698 55.5787C6.61692 55.5787 4.6875 53.6698 4.6875 51.315C4.6875 49.4184 5.86461 47.9062 7.23354 47.4824L11.586 46.2945Z"
                    fill="url(#paint11_linear_7_238)"
                  />
                  <path
                    d="M23.5887 40.6929C24.8831 40.6929 25.9325 41.7311 25.9325 43.0118C25.9325 44.2925 24.8831 45.3307 23.5887 45.3307C22.2943 45.3307 21.245 44.2925 21.245 43.0118C21.245 41.7311 22.2943 40.6929 23.5887 40.6929Z"
                    fill="url(#paint12_linear_7_238)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_7_238"
                      x1="150"
                      y1="0"
                      x2="88.7183"
                      y2="120.951"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80B2FF" />
                      <stop offset="0.51551" stopColor="#7C27D9" />
                      <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_7_238"
                      x1="150"
                      y1="0"
                      x2="88.7183"
                      y2="120.951"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80B2FF" />
                      <stop offset="0.51551" stopColor="#7C27D9" />
                      <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_7_238"
                      x1="150"
                      y1="0"
                      x2="88.7183"
                      y2="120.951"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80B2FF" />
                      <stop offset="0.51551" stopColor="#7C27D9" />
                      <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_7_238"
                      x1="150"
                      y1="0"
                      x2="88.7183"
                      y2="120.951"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80B2FF" />
                      <stop offset="0.51551" stopColor="#7C27D9" />
                      <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_7_238"
                      x1="150"
                      y1="0"
                      x2="88.7183"
                      y2="120.951"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80B2FF" />
                      <stop offset="0.51551" stopColor="#7C27D9" />
                      <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                      id="paint5_linear_7_238"
                      x1="150"
                      y1="0"
                      x2="88.7183"
                      y2="120.951"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80B2FF" />
                      <stop offset="0.51551" stopColor="#7C27D9" />
                      <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                      id="paint6_linear_7_238"
                      x1="150"
                      y1="0"
                      x2="88.7183"
                      y2="120.951"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80B2FF" />
                      <stop offset="0.51551" stopColor="#7C27D9" />
                      <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                      id="paint7_linear_7_238"
                      x1="150"
                      y1="0"
                      x2="88.7183"
                      y2="120.951"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80B2FF" />
                      <stop offset="0.51551" stopColor="#7C27D9" />
                      <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                      id="paint8_linear_7_238"
                      x1="150"
                      y1="0"
                      x2="88.7183"
                      y2="120.951"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80B2FF" />
                      <stop offset="0.51551" stopColor="#7C27D9" />
                      <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                      id="paint9_linear_7_238"
                      x1="150"
                      y1="0"
                      x2="88.7183"
                      y2="120.951"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80B2FF" />
                      <stop offset="0.51551" stopColor="#7C27D9" />
                      <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                      id="paint10_linear_7_238"
                      x1="150"
                      y1="0"
                      x2="88.7183"
                      y2="120.951"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80B2FF" />
                      <stop offset="0.51551" stopColor="#7C27D9" />
                      <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                      id="paint11_linear_7_238"
                      x1="150"
                      y1="0"
                      x2="88.7183"
                      y2="120.951"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#80B2FF" />
                      <stop offset="0.51551" stopColor="#7C27D9" />
                      <stop offset="1" stopColor="#FF68F0" />
                    </linearGradient>
                    <linearGradient
                      id="paint12_linear_7_238"
                      x1="150"
                      y1="0"
                      x2="88.7183"
                      y2="120.951"
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
            <div className="hidden md:flex md:gap-x-6 items-center">
              <a href="#" className="inline-block rounded-lg py-1 px-8 text-lg text-[#6D6E8A] font-semibold">
                Personal
              </a>
              <a href="#" className="inline-block rounded-lg py-1 px-8 text-lg text-[#1B1C39] font-semibold">
                Brand Story
              </a>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <a href="#" className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600">
                <span>
                  Get Started
                </span>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
