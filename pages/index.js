import { useRouter } from 'next/router'
import Image from "next/image";
import header from "../styles/header.module.css";
import phonePic from "../public/phone2.png";
import kdic from "../public/clients/kdic.png";
import pci from "../public/clients/pci.png";
import shariyah from "../public/clients/shariyah.png";
import trustpilot from "../public/clients/trustpilot.png";
import phone from "../public/banking/phone3.png";
import pay from "../public/pay.png";
import kadi from "../public/kadi.png";
import paymask from "../public/payMask.png";
import feature1 from "../public/features/fe1.png";
import phone2 from "../public/features/Phone.png";
import phone3 from "../public/features/phone2.png";
import phoneInvest from "../public/phone_invest.png";
import cup from "../public/cup.png";
import ccb from "../public/ccb.png";
import ccb2 from "../public/ccb2.png";
import ccb3 from "../public/ccb3.png";
import love from "../public/profile/love.png";
import wink from "../public/profile/wink.png";
import glasses from "../public/profile/glasses.png";
import pray from "../public/profile/pray.png";
import cardImage from "../public/profile/card.png";
import stars from "../public/profile/stars.png";
import blackHand from "../public/blackHand.png";
import blackShadow from "../public/blackShadow.png";
import lady from "../public/lady.png";
import cloud from "../public/providers/cloud.png";
import codebase from "../public/providers/codebase.png";
import duck from "../public/providers/duck.png";
import shariyah2 from "../public/providers/shariyah.png";
import backer1 from "../public/backers/back1.png";
import backer2 from "../public/backers/back2.png";
import backer3 from "../public/backers/back3.png";
import zenD from "../public/zend.png";
import handShadow from "../public/hand.png";
import imagined from "../public/imagined.png";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";



const DynamicNavbar = dynamic(() => import("../components/navbar"), {
  suspense: true,
});
const DynamicFooter = dynamic(() => import("../components/footer"), {
  suspense: true,
});
const DynamicBanner = dynamic(() => import("../components/banner"), {
  suspense: true,
});

export default function Index() {
  const router = useRouter()
const { locale, locales, defaultLocale } = router

  return (
    <div className={header.body}>
      <div className="relative overflow-hidden">
        <div className="relative">
          <div className="z-50">
            <div className="relative z-10">
              {/* Navbar */}
              <Suspense fallback={`Loading...`}>
                <DynamicNavbar />
              </Suspense>
              {/* End */}

              {/* Salaam */}
              <Suspense fallback={`Loading...`}>
                <DynamicBanner />
              </Suspense>
              {/* End */}
            </div>
          </div>

          {/* Phones Pic */}
          <div className="lg:absolute inset-y-0 lg:left-[620px] top-[200px] z-30 hidden md:block w-xl">
            <Image
              src={phonePic}
              alt="Phone"
              priority
            />
          </div>
          {/* End */}

          {/* top desktop vector */}
          <div className="absolute inset-y-0 right-0 hidden lg:block">
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
          {/* End */}

          {/* top mobile vector */}
          <div className="absolute inset-0 lg:hidden w-full">
            <svg width="360" height="528" viewBox="0 0 360 528" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.2">
              <path fillRule="evenodd" clipRule="evenodd" d="M30.8984 87.8856C31.0423 50.9681 60.9338 21.1567 97.6629 21.2999C134.392 21.4431 164.05 51.4867 163.906 88.4041C163.762 125.322 133.871 155.133 97.1417 154.99C60.4126 154.847 30.7545 124.803 30.8984 87.8856ZM10.1159 87.8046C10.3048 39.3504 49.5374 0.222861 97.7444 0.410804C145.951 0.598747 184.878 40.031 184.689 88.4852C184.5 136.939 145.267 176.067 97.0603 175.879C48.8533 175.691 9.927 136.259 10.1159 87.8046Z" fill="#2603FF" fillOpacity="0.15"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M74.5421 88.0587C74.5916 75.3684 84.8668 65.1207 97.4924 65.1699C110.118 65.2191 120.313 75.5466 120.264 88.237C120.214 100.927 109.939 111.175 97.3132 111.126C84.6876 111.077 74.4926 100.749 74.5421 88.0587ZM53.7596 87.9777C53.8541 63.7506 73.4704 44.1869 97.5738 44.2808C121.677 44.3748 141.14 64.0909 141.046 88.318C140.952 112.545 121.335 132.109 97.2318 132.015C73.1283 131.921 53.6652 112.205 53.7596 87.9777Z" fill="#2603FF" fillOpacity="0.15"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M214.346 176.336C197.778 176.272 184.132 162.681 186.982 146.36C199.709 73.4847 257.149 16.1574 329.729 3.87292C346.065 1.10795 359.551 14.8631 359.487 31.4315L359.036 146.9C358.972 163.468 345.488 176.847 328.92 176.783L214.346 176.336ZM291.857 53.391C319.978 53.5007 342.685 76.5028 342.574 104.768C342.464 133.033 319.579 155.857 291.458 155.747C263.337 155.638 240.63 132.636 240.74 104.371C240.851 76.1058 263.736 53.2814 291.857 53.391Z" fill="#2603FF" fillOpacity="0.15"/>
              <path d="M162.529 176.135C174.581 176.182 184.454 186.039 182.934 197.995C172.842 277.378 110.012 340.104 30.9878 349.727C18.963 351.191 9.13204 341.188 9.17926 329.074C9.22649 316.961 19.1592 307.373 31.1116 305.403C86.0328 296.354 129.505 252.937 138.846 197.775C140.858 185.893 150.477 176.088 162.529 176.135Z" fill="#2603FF" fillOpacity="0.15"/>
              <path d="M9.58962 224.918C9.52502 241.487 23.3804 255.51 38.7795 249.396C58.9151 241.401 75.0083 225.325 83.0849 205.131C89.2377 189.748 75.3242 175.795 58.7558 175.73L39.7819 175.657C23.2135 175.592 9.72976 188.971 9.66517 205.539L9.58962 224.918Z" fill="#2603FF" fillOpacity="0.15"/>
              <path d="M328.236 352.251C344.805 352.315 358.556 338.832 355.833 322.488C343.675 249.516 286.684 191.743 214.202 178.893C197.888 176.001 184.295 189.65 184.23 206.219L183.78 321.687C183.715 338.256 197.094 351.739 213.663 351.804L328.236 352.251Z" fill="#2603FF" fillOpacity="0.15"/>
              <path d="M-37.6239 70.9104C-37.5744 58.22 -47.7694 47.8925 -60.3951 47.8433C-73.0207 47.794 -83.2959 58.0417 -83.3454 70.7321C-83.3948 83.4225 -73.1998 93.75 -60.5742 93.7992C-47.9486 93.8484 -37.6734 83.6008 -37.6239 70.9104Z" fill="#2603FF" fillOpacity="0.15"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M9.88649 145.541C9.8219 162.109 -3.77135 175.759 -20.0855 172.866C-92.5672 160.016 -149.559 102.243 -161.717 29.271C-164.439 12.9277 -150.688 -0.555843 -134.119 -0.491248L-19.5462 -0.0445658C-2.97774 0.0200289 10.4013 13.5038 10.3367 30.0722L9.88649 145.541ZM-16.8414 70.9914C-16.747 46.7643 -36.2101 27.0482 -60.3136 26.9542C-84.4171 26.8602 -104.033 46.424 -104.128 70.6511C-104.222 94.8782 -84.7591 114.594 -60.6557 114.688C-36.5522 114.782 -16.9359 95.2185 -16.8414 70.9914Z" fill="#2603FF" fillOpacity="0.15"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M357.67 497.839C357.605 514.408 344.012 528.057 327.698 525.165C255.216 512.315 198.225 454.541 186.067 381.569C183.344 365.226 197.095 351.742 213.664 351.807L328.237 352.254C344.805 352.318 358.184 365.802 358.12 382.371L357.67 497.839ZM235.356 419.782C235.466 391.517 258.351 368.693 286.472 368.802C314.593 368.912 337.3 391.914 337.19 420.179C337.079 448.444 314.194 471.268 286.073 471.159C257.952 471.049 235.245 448.047 235.356 419.782Z" fill="#2603FF" fillOpacity="0.15"/>
              </g>
            </svg>
          </div>
          {/* End */}

          {/* Clients */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[273] ml-[19px] md:ml-[130px] mt-[68px] md:mt-[157px] mb-[140px] place-content-center content-center">
            <div>
              <Image src={kdic} alt="kdic" width={190} height={80} priority />
            </div>
            <div>
              <Image src={pci} alt="pci" width={160} height={62} priority />
            </div>
            <div>
              <Image
                src={trustpilot}
                alt="trust-pilot"
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
          <div className="md:flex md:items-center mb-[50px] md:mb-[278px]">
            <div className="w-[539px] ml-[40px] md:ml-[108px] hidden md:block">
              <Image src={phone} alt="Iphone" objectFit='cover' priority />
            </div>
            <div className="absolute ml-[40px] mr-[54px] md:ml-[108px] block md:hidden z-10 top-[1100px]">
              <Image src={imagined} alt="Iphone" objectFit='cover' priority />
            </div>
            <div className="relative card1 flex flex-col pl-[24px] md:pl-[81px] pr-[24px] pt-[150px] md:pt-[50px] pb-[44px] bg-white rounded-3xl w-[320px] md:w-[760px] h-auto text-center ml-[20px] md:mr-[49px]">
              <style jsx>{`
                .card1 {
                  box-shadow: 0px -8px 100px 0px #6943AF1A;
                }
                .button2 {
                  box-shadow: 0px -8px 100px rgba(105, 67, 175, 0.1);
                }
              `}</style>
              <div className="mb-[36px] text-left pr-4 md:pr-[81px] mt-7 md:mt-0">
                <h1 className={header.pr_3}>Islamic Banking Reimagined</h1>
              </div>
              <div className="flex flex-col space-y-[22px] mb-[40px] pr-[24px] md:pr-[81px]">
                <div className="flex space-x-[15px] items-center">
                  <div className="w-[24px] md:w-[40px] h-[24px] md:h-[40px] flex rounded-full bg-[#6D6E8A] items-center justify-center">
                    <svg
                      className="w-[10px] h-[7px] md:w-[19px] md:h-[12px]"
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
                  <div className="flex-1 text-left text-sm md:text-xl text-black font-medium">
                    Halal ready without compromise.
                  </div>
                </div>
                <div className="flex space-x-[15px] items-center">
                  <div className="w-[24px] md:w-[40px] h-[24px] md:h-[40px] flex rounded-full bg-[#6D6E8A] items-center justify-center">
                  <svg
                      className="w-[10px] h-[7px] md:w-[19px] md:h-[12px]"
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
                  <div className="flex-1 text-left text-sm md:text-xl text-black font-medium">
                    Open your account in minutes (Goodbye paper work).
                  </div>
                </div>
                <div className="flex space-x-[15px] items-center">
                  <div className="w-[24px] md:w-[40px] h-[24px] md:h-[40px] flex rounded-full bg-[#6D6E8A] items-center justify-center">
                  <svg
                      className="w-[10px] h-[7px] md:w-[19px] md:h-[12px]"
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
                  <div className="flex-1 text-left text-sm md:text-xl text-black font-medium">
                    Get upto 3 days early salary.
                  </div>
                </div>
                <div className="flex space-x-[15px] items-center">
                  <div className="w-[24px] md:w-[40px] h-[24px] md:h-[40px] flex rounded-full bg-[#6D6E8A] items-center justify-center">
                  <svg
                      className="w-[10px] h-[7px] md:w-[19px] md:h-[12px]"
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
                  <div className="flex-1 text-left text-sm md:text-xl text-black font-medium">
                    Track every buck. Know your spend.
                  </div>
                </div>
                <div className="flex space-x-[15px] items-center">
                  <div className="w-[24px] md:w-[40px] h-[24px] md:h-[40px] flex rounded-full bg-[#6D6E8A] items-center justify-center">
                  <svg
                      className="w-[10px] h-[7px] md:w-[19px] md:h-[12px]"
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
                  <div className="flex-1 text-left text-sm md:text-xl text-black font-medium">
                    Buy now pay later,(interest free, forever).
                  </div>
                </div>
              </div>
              <div className="text-left mb-[55px] pr-[24px] md:pr-[81px]">
                <p className={header.pr_4}>
                  We didn’t just want to throw solutions around, in the hope
                  they find a problem to solve. Thats why we’ve chosen to run a
                  beta phase.
                </p>
              </div>
              <div className="rounded-full pr-[24px] md:pr-[81px]">
                <div className={header.button2} style={{ color: "white" }}>
                  <a href="#" className="items-center">
                    Apply for the Beta Progam
                  </a>
                </div>
              </div>
              <div className="absolute bottom-[70px] md:bottom-0 right-0 w-[272.73px] md:w-[342px] h-[240.16px] md:h-[342px]">
                <svg
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
          <div className="relative md:flex mb-[91px] md:mb-[541px]">
            <div className="flex flex-col space-y-[14px] md:space-y-[20px] ml-[19px] md:ml-[130px]">
              <div className="w-[321px] md:w-auto">
                <div className="text-[26px] md:text-[40px] leading-[36px] md:leading-[60px] font-bold">
                  <span className="bg-clip-text text-transparent bg-[linear-gradient(89.87deg,_#000000_30%,_#A488FF_99.84%)]">
                    Turn heads with our
                  </span>
                </div>
                <div className="text-[26px] md:text-[40px] leading-[36px] md:leading-[60px] font-bold">
                  <span className="bg-clip-text text-transparent bg-[linear-gradient(89.87deg,_#000000_30%,_#A488FF_99.84%)]">
                    cards made from steel.
                  </span>
                </div>
              </div>
              <div className="text-[20px] md:text-[35px] leading-[30px] md:leading-[52px] font-semibold w-[189px] md:w-auto">
                <span className="bg-clip-text text-transparent bg-[linear-gradient(102.76deg,_#000000_-19.68%,_#9E7AFC_56.42%)]">
                  Pay or get paid, wherever, whenever.
                </span>
              </div>
            </div>
            {/* Cards and shadow */}
            <div className="absolute right-0 top-[80px] md:-top-[100px] w-[200px] md:w-[680px]">
              <Image src={kadi} alt="card" priority />
            </div>
            {/* End */}

            {/* Pay with card and shadow */}
            <div className="absolute inset-y-0 right-0 top-[210px] md:top-[240px] z-30">
              <Image src={pay} alt="pay-with-credit-card" priority />
            </div>
            <div className="absolute inset-y-0 right-0 top-[210px] md:top-[240px] z-20">
              <Image src={paymask} alt="pay-with-credit-card" priority />
            </div>
            {/* End */}
          </div>
          {/* End */}

          {/* Features */}
          <div className="flex flex-col text-center bg-white py-[34px] mb-[291px] md:mb-auto">
              <div className={header.features}>Features</div>
              <div className="relative flex justify-center gap-4">
                <div className="hidden md:block rounded-[25px] px-[20px] py-[30px] w-[480px] h-[568px] -ml-[110px]">
                  <div className="flex flex-col">
                    <div className="rounded-[25px] bg-[linear-gradient(145.77deg,_#FAF9FE_8.5%,_#C6BAFF_90.85%)] justify-center">
                      <Image
                        src={phone2}
                        alt="phone2"
                      />
                    </div>
                    <div className="mt-[40px] mb-[87]">
                      <h1 className="text-[24px] leading-[36px] font-bold text-[#333333] mb-[31px]">
                        Track Ur buck. “The Ostrich-effect”
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="pace relative rounded-[25px] w-[320px] md:w-[580px] h-[271px] md:h-[692px] bg-white">
                  <style jsx>
                    {`
                      .pace{
                        border: 1.26px solid;
                        border-image-source: linear-gradient(355.46deg, #A08CFF -5.29%, rgba(160, 140, 255, 0) 28.96%);
                        box-shadow: 0px -8px 100px rgba(105, 67, 175, 0.26);
                      }
                    `}
                  </style>
                  <div className="flex flex-col">
                    <div>
                      <Image src={feature1} alt="feature" />
                    </div>
                    <div className={header.pace}>
                      <h1 className="text-[20px] md:text-[27px] leading-[30px] md:leading-[40.5px] font-bold text-[#333333] mb-[20px] md:mb-[31px]">
                        Mizan Pay - Shop now pay at your own pace
                      </h1>
                      <p className="text-[14px] md:text-[16px] leading-[25px] md:leading-[25.6px] font-medium text-[#6D6E8A]">
                        With our aethetically appealing mizan metal card, you can
                        easily spread your payments upto 12 months. No late
                        payment fees, no penalties. What you borrow is what you
                        will pay. Let’s just keep it at that.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block rounded-[25px] px-[20px] py-[30px] w-[480px] h-[568px] -mr-[110px]">
                  <div className="flex flex-col">
                    <div className="rounded-[25px] bg-[linear-gradient(145.77deg,_#FAF9FE_8.5%,_#C6BAFF_90.85%)] justify-center">
                      <Image
                        src={phone3}
                        alt="phone3"
                      />
                    </div>
                    <div className="mt-[40px] mb-[87]">
                      <h1 className="text-[24px] leading-[36px] font-bold text-[#333333] mb-[31px]">
                        Donate to a cause you care. (Effortlessly)
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="hidden md:absolute left-[38px] top-[200px] cursor-pointer md:flex items-center justify-center rounded-full w-[84px] h-[84px] bg-[rgba(27,_28,_57,_0.8)] shadow-[0px_15px_30px_rgba(57,_26,_115,_0.15)] rotate-[matrix(-1,_0,_0,_1,_0,_0)]">
                  <svg width="19" height="36" viewBox="0 0 19 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8333 1.66663L1.6414 17.8585C1.5633 17.9366 1.5633 18.0633 1.6414 18.1414L17.8333 34.3333" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <div className="hidden absolute right-[38px] top-[200px] cursor-pointer md:flex items-center justify-center rounded-full w-[84px] h-[84px] bg-[rgba(27,_28,_57,_0.8)] shadow-[0px_15px_30px_rgba(57,_26,_115,_0.15)] rotate-[matrix(-1,_0,_0,_1,_0,_0)]">    
                  <svg width="19" height="36" viewBox="0 0 19 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.16666 1.66663L17.3586 17.8585C17.4367 17.9366 17.4367 18.0633 17.3586 18.1414L1.16666 34.3333" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
              {/* dots */}
          </div>
          <div className="flex gap-1 items-center justify-center -mt-10 md:mt-0">
            <div className='rounded-full w-[8px] h-[8px] bg-[#A08CFF]'></div>
            <div className='rounded-full w-[8px] h-[8px] bg-[#CECFEA] cursor-pointer'></div>
            <div className='rounded-full w-[8px] h-[8px] bg-[#CECFEA] cursor-pointer'></div>
            <div className='rounded-full w-[8px] h-[8px] bg-[#CECFEA] cursor-pointer'></div>
            <div className='rounded-full w-[8px] h-[8px] bg-[#CECFEA] cursor-pointer'></div>
            <div className='rounded-full w-[8px] h-[8px] bg-[#CECFEA] cursor-pointer'></div>
            <div className='rounded-full w-[8px] h-[8px] bg-[#CECFEA] cursor-pointer'></div>
          </div>
          {/* End */}

          {/* Round Ups */}
          <div className="mt-20 relative card1 md:flex mx-[20px] md:mx-[49px] px-[20px] md:px-[79px] pt-[60px] md:pt-[123px] pb-[144px] md:pb-[44px] bg-white rounded-3xl md:h-[821px]">
            <style jsx>{`
              .card1 {
                box-shadow: 0px -8px 100px rgba(105, 67, 175, 0.1);
              }
              .button2 {
                box-shadow: 0px -8px 100px rgba(105, 67, 175, 0.1);
              }
            `}</style>
            <div className="md:w-[479px]">
              <div className="mb-[4px] text-left">
                <h1 className={header.pr_3}>How Round-Ups work</h1>
              </div>

              <div className="flex-1 text-left text-[20px] md:text-[27px] leading-[30px] md:leading-[40px] text-black font-normal mb-[60px]">
                Invest and save when you spend
              </div>
              <div className="text-left">
                <p className="text-[16px] md:text-[20px] leading-[28.8px] md:leading-[36px] text-[#1B1C39] font-normal">
                  Imagine you had collected all of your loose change over the
                  years from all your daily purchases—all of the sodas, coffees,
                  meals out—you name it. You’d likely have a good amount of
                  money saved up. Well, that’s the idea behind Round-Ups.
                </p>
              </div>
            </div>
            <div className="hidden md:block md:absolute md:top-[70px] md:left-[864px] mt-[29px] md:mt-auto">
              <Image src={cup} alt="cup" />
            </div>
            <div className="hidden md:block md:absolute md:top-[269px] md:left-[641px]">
              <Image src={phoneInvest} alt="phone invest" />
            </div>

            <div className="md:hidden flex justify-end md:absolute md:top-[70px] md:left-[864px] mt-[29px] md:mt-auto">
              <Image src={cup} alt="cup" width={178.42} height={178.42} />
            </div>
            <div className="md:hidden md:absolute md:top-[269px] md:left-[641px] -mt-[100px] md:mt-auto">
              <Image src={phoneInvest} alt="phone invest" width={173.74} height={201.83} />
            </div>
            {/* Desktop */}
            <div className="hidden md:block absolute top-[550px] md:left-[1000px]">
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
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="hidden md:block absolute top-[320px] md:left-[978px] -rotate-[20deg]">
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
                  strokeWidth="4"
                  strokeDasharray="22 22"
                />
              </svg>
            </div>
            {/* mobile */}
            <div className="md:hidden absolute top-[655px] md:top-[550px] left-[200px] md:left-[1000px]">
              <svg width="19" height="22" viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6786 1.98461L3.23291 8.43162L13.1738 19.5461" stroke="#C6BAFF" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
            <div className="md:hidden absolute top-[550px] md:top-[550px] left-[200px] md:left-[978px] -rotate-[10deg]">
              <svg width="120" height="117" viewBox="0 0 120 117" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M101.785 2C113.765 21.3771 126.376 65.7538 110.64 88.5511C94.2327 112.32 50.7415 122.655 1 108.703" stroke="#C6BAFF" stroke-width="4" stroke-dasharray="22 22"/>
              </svg>
            </div>

            <div className="absolute bottom-[21.47px] md:left-[32px] z-0">
              <svg
                width="566"
                height="563"
                viewBox="0 0 719 723"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.12">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M450.172 602.247C450.172 652.859 409.352 693.889 358.998 693.889C308.644 693.889 267.824 652.859 267.824 602.247C267.824 551.635 308.644 510.606 358.998 510.606C409.352 510.606 450.172 551.635 450.172 602.247ZM478.663 602.247C478.663 668.676 425.087 722.527 358.998 722.527C292.908 722.527 239.332 668.676 239.332 602.247C239.332 535.819 292.908 481.968 358.998 481.968C425.087 481.968 478.663 535.819 478.663 602.247Z"
                    fill="#2603FF"
                    fillOpacity="0.15"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M390.339 602.244C390.339 619.642 376.307 633.746 358.998 633.746C341.689 633.746 327.657 619.642 327.657 602.244C327.657 584.846 341.689 570.742 358.998 570.742C376.307 570.742 390.339 584.846 390.339 602.244ZM418.831 602.244C418.831 635.458 392.043 662.384 358.998 662.384C325.953 662.384 299.165 635.458 299.165 602.244C299.165 569.03 325.953 542.104 358.998 542.104C392.043 542.104 418.831 569.03 418.831 602.244Z"
                    fill="#2603FF"
                    fillOpacity="0.15"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M209.332 481.968C225.901 481.968 239.527 495.466 237.496 511.909C224.049 620.777 138.231 707.079 29.9398 720.663C13.5 722.725 0.00060778 709.095 0.000609226 692.527L0.00062498 511.968C0.000626426 495.399 13.4321 481.968 30.0006 481.968L209.332 481.968ZM92.5991 650.932C54.0468 650.932 22.7941 619.519 22.7941 580.769C22.7941 542.019 54.0469 510.606 92.5991 510.606C131.151 510.606 162.404 542.019 162.404 580.769C162.404 619.519 131.151 650.932 92.5991 650.932Z"
                    fill="#2603FF"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M269.246 481.965C252.724 481.965 239.135 468.505 241.155 452.106C254.569 343.2 340.404 256.857 448.722 243.27C465.162 241.208 478.661 254.908 478.661 271.476C478.661 288.045 465.127 301.282 448.789 304.033C373.511 316.708 314.113 376.475 301.599 452.171C298.904 468.472 285.769 481.965 269.246 481.965Z"
                    fill="#2603FF"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M478.654 403.142C478.654 386.573 464.962 372.72 449.029 377.266C413.004 387.544 384.627 416.1 374.449 452.33C369.967 468.281 383.817 481.966 400.385 481.966L448.654 481.966C465.223 481.966 478.654 468.534 478.654 451.966L478.654 403.142Z"
                    fill="#2603FF"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M29.9996 241.408C13.4311 241.408 -0.195693 254.906 1.8354 271.35C15.2826 380.217 101.101 466.52 209.392 480.103C225.832 482.165 239.331 468.536 239.331 451.967L239.331 271.408C239.331 254.84 225.9 241.408 209.331 241.408L29.9996 241.408Z"
                    fill="#2603FF"
                    fillOpacity="0.15"
                  />
                  <path
                    d="M544.217 625.153C544.217 642.551 558.249 656.654 575.558 656.654C592.867 656.654 606.899 642.551 606.899 625.153C606.899 607.755 592.867 593.651 575.558 593.651C558.249 593.651 544.217 607.755 544.217 625.153Z"
                    fill="#2603FF"
                    fillOpacity="0.15"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M478.685 511.965C478.685 495.396 492.184 481.767 508.624 483.829C616.915 497.412 702.733 583.715 716.18 692.582C718.211 709.026 704.585 722.524 688.016 722.524L508.685 722.524C492.116 722.524 478.685 709.092 478.685 692.524L478.685 511.965ZM515.725 625.153C515.725 658.367 542.513 685.292 575.558 685.292C608.603 685.292 635.391 658.367 635.391 625.153C635.391 591.938 608.603 565.013 575.558 565.013C542.513 565.013 515.725 591.938 515.725 625.153Z"
                    fill="#2603FF"
                    fillOpacity="0.15"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.000975251 30.8461C0.000975975 14.2775 13.5004 0.647933 29.9401 2.71006C138.231 16.2936 224.049 102.596 237.497 211.463C239.528 227.907 225.901 241.405 209.332 241.405L30.001 241.405C13.4324 241.405 0.000966634 227.973 0.000967359 211.405L0.000975251 30.8461ZM168.103 148.332C168.103 187.081 136.85 218.495 98.2978 218.495C59.7456 218.495 28.4928 187.081 28.4928 148.332C28.4928 109.582 59.7456 78.1685 98.2978 78.1685C136.85 78.1685 168.103 109.582 168.103 148.332Z"
                    fill="#2603FF"
                    fillOpacity="0.15"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className="relative z-20 mx-[34px] md:mx-[130px] -top-[130px] card1 md:flex md:gap-8 px-[20px] md:px-[40px] bg-white rounded-3xl h-[auto]">
            <style jsx>{`
              .card1 {
                box-shadow: 0px -8px 100px rgba(105, 67, 175, 0.1);
              }
              .button2 {
                box-shadow: 0px -8px 100px rgba(105, 67, 175, 0.1);
              }
            `}</style>
            <div className="md:w-[479px] pt-[40px] md:pt-[70px]">
              <div className="mb-[23px] text-left">
                <h1 className={header.pr_3}>Mizan Round-Ups</h1>
              </div>
              <div className="text-left mb-[58px] text-[16px] leading-[28.8px] text-[#535060] md:text-[18px] md:leading-[32.04px] md:font-medium">
                  When you make a purchase with your Mizan debit card or another
                  linked card, Mizan rounds up your transaction to the nearest
                  dollar and invests the spare change into your Invest account
                  portfolio or a charity of your choice.
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
                width="484"
                height="384"
                className="hidden md:block"
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
                  strokeWidth="0.909734"
                />
                <line
                  x1="161.545"
                  y1="247.626"
                  x2="161.545"
                  y2="1.52588e-05"
                  stroke="#E6E7F4"
                  strokeWidth="0.909734"
                />
                <line
                  x1="282.545"
                  y1="247.626"
                  x2="282.545"
                  y2="1.52588e-05"
                  stroke="#E6E7F4"
                  strokeWidth="0.909734"
                />
                <line
                  x1="403.545"
                  y1="247.626"
                  x2="403.545"
                  y2="1.52588e-05"
                  stroke="#E6E7F4"
                  strokeWidth="0.909734"
                />
                <line
                  x1="524.545"
                  y1="247.626"
                  x2="524.545"
                  y2="1.52588e-05"
                  stroke="#E6E7F4"
                  strokeWidth="0.909734"
                />
                <g filter="url(#filter0_d_11_7074)">
                  <path
                    d="M532.774 68.7663C532.774 73.7906 528.701 77.8636 523.676 77.8636C518.652 77.8636 514.579 73.7906 514.579 68.7663C514.579 63.742 518.652 59.6689 523.676 59.6689C528.701 59.6689 532.774 63.742 532.774 68.7663Z"
                    fill="white"
                    shapeRendering="crispEdges"
                  />
                  <path
                    d="M532.774 68.7663C532.774 73.7906 528.701 77.8636 523.676 77.8636C518.652 77.8636 514.579 73.7906 514.579 68.7663C514.579 63.742 518.652 59.6689 523.676 59.6689C528.701 59.6689 532.774 63.742 532.774 68.7663Z"
                    stroke="url(#paint0_linear_11_7074)"
                    strokeWidth="3.63894"
                    shapeRendering="crispEdges"
                  />
                </g>
                <g filter="url(#filter1_d_11_7074)">
                  <path
                    d="M48.0127 240.217C48.0127 245.188 43.9833 249.217 39.0127 249.217C34.0421 249.217 30.0127 245.188 30.0127 240.217C30.0127 235.247 34.0421 231.217 39.0127 231.217C43.9833 231.217 48.0127 235.247 48.0127 240.217Z"
                    fill="white"
                    shapeRendering="crispEdges"
                  />
                  <path
                    d="M48.0127 240.217C48.0127 245.188 43.9833 249.217 39.0127 249.217C34.0421 249.217 30.0127 245.188 30.0127 240.217C30.0127 235.247 34.0421 231.217 39.0127 231.217C43.9833 231.217 48.0127 235.247 48.0127 240.217Z"
                    stroke="url(#paint1_linear_11_7074)"
                    strokeWidth="3.63894"
                    shapeRendering="crispEdges"
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
                  strokeWidth="2.7292"
                  strokeLinecap="round"
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
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                    <stop stopColor="#8BB4F2" />
                    <stop
                      offset="0.51551"
                      stopColor="#7C27D9"
                      stopOpacity="0.887325"
                    />
                    <stop offset="1" stopColor="#DE52D0" stopOpacity="0.76" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_11_7074"
                    x1="48.0127"
                    y1="231.217"
                    x2="30.0127"
                    y2="249.217"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8BB4F2" />
                    <stop
                      offset="0.51551"
                      stopColor="#7C27D9"
                      stopOpacity="0.887325"
                    />
                    <stop offset="1" stopColor="#DE52D0" stopOpacity="0.76" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_11_7074"
                    x1="335.628"
                    y1="145.106"
                    x2="330.389"
                    y2="258.584"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8F00E0" />
                    <stop offset="1" stopColor="#8F00E0" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              <svg
                className="-mt-24 ml-6 hidden md:block"
                width="545"
                height="92"
                viewBox="0 0 545 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.6426 32.0725C236.793 32.0725 346.206 32.0725 541.356 32.0725"
                  stroke="#E7E8F4"
                  strokeWidth="7.27788"
                  strokeLinecap="round"
                />
                <line
                  x1="3.63894"
                  y1="32.3611"
                  x2="282.361"
                  y2="32.3611"
                  stroke="#BD61DC"
                  strokeWidth="7.27788"
                  strokeLinecap="round"
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
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                    <stop stopColor="#80B2FF" />
                    <stop offset="0.51551" stopColor="#7C27D9" />
                    <stop offset="1" stopColor="#FF68F0" />
                  </linearGradient>
                </defs>
              </svg>
              
              <svg width="299" height="183" className="md:hidden" viewBox="0 0 299 183" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6322_18738)">
                <line x1="92.2951" y1="247.626" x2="92.2951" stroke="#E6E7F4" stroke-width="0.909734"/>
                <line x1="150.045" y1="247.626" x2="150.045" stroke="#E6E7F4" stroke-width="0.909734"/>
                <line x1="207.795" y1="247.626" x2="207.795" stroke="#E6E7F4" stroke-width="0.909734"/>
                <line x1="265.545" y1="247.626" x2="265.545" stroke="#E6E7F4" stroke-width="0.909734"/>
                </g>
                <g filter="url(#filter0_d_6322_18738)">
                <path d="M269.783 32.9946C269.783 35.3907 267.841 37.3331 265.445 37.3331C263.049 37.3331 261.106 35.3907 261.106 32.9946C261.106 30.5986 263.049 28.6562 265.445 28.6562C267.841 28.6562 269.783 30.5986 269.783 32.9946Z" fill="white" shape-rendering="crispEdges"/>
                <path d="M269.783 32.9946C269.783 35.3907 267.841 37.3331 265.445 37.3331C263.049 37.3331 261.106 35.3907 261.106 32.9946C261.106 30.5986 263.049 28.6562 265.445 28.6562C267.841 28.6562 269.783 30.5986 269.783 32.9946Z" stroke="url(#paint0_linear_6322_18738)" stroke-width="3.63894" shape-rendering="crispEdges"/>
                </g>
                <g filter="url(#filter1_d_6322_18738)">
                <path d="M38.6036 120.292C38.6036 122.662 36.682 124.584 34.3116 124.584C31.9411 124.584 30.0195 122.662 30.0195 120.292C30.0195 117.922 31.9411 116 34.3116 116C36.682 116 38.6036 117.922 38.6036 120.292Z" fill="white" shape-rendering="crispEdges"/>
                <path d="M38.6036 120.292C38.6036 122.662 36.682 124.584 34.3116 124.584C31.9411 124.584 30.0195 122.662 30.0195 120.292C30.0195 117.922 31.9411 116 34.3116 116C36.682 116 38.6036 117.922 38.6036 120.292Z" stroke="url(#paint1_linear_6322_18738)" stroke-width="3.63894" shape-rendering="crispEdges"/>
                </g>
                <path opacity="0.13" d="M56.434 116.269C50.9161 116.869 46.9513 117.44 46.9513 117.84L46.9513 127.318L256.719 127.318L256.719 35.1979L242.742 49.5295C227.93 64.7169 205.737 70.9426 184.243 65.9403C164.463 61.337 143.976 66.2257 129.216 79.0709L114.416 91.9511C98.4359 105.858 78.0392 113.917 56.434 116.269Z" fill="url(#paint2_linear_6322_18738)"/>
                <path d="M49.342 117.151L60.7026 116.082C81.6237 114.114 101.11 105.696 116.351 92.0438L130.825 79.0788C145.404 66.0187 165.919 61.0178 185.698 65.7023V65.7023C207.023 70.7529 229.077 64.5272 243.666 49.3379L257.138 35.311" stroke="#8F00E0" stroke-width="2.7292" stroke-linecap="round"/>
                <path d="M26.2791 139.44V140.184H24.7991V145H23.8871V140.184H22.3991V139.44H26.2791ZM29.1147 145.072C28.6987 145.072 28.3227 144.979 27.9867 144.792C27.6507 144.6 27.3867 144.333 27.1947 143.992C27.0027 143.645 26.9067 143.245 26.9067 142.792C26.9067 142.344 27.0054 141.947 27.2027 141.6C27.4 141.253 27.6694 140.987 28.0107 140.8C28.352 140.613 28.7334 140.52 29.1547 140.52C29.576 140.52 29.9574 140.613 30.2987 140.8C30.64 140.987 30.9094 141.253 31.1067 141.6C31.304 141.947 31.4027 142.344 31.4027 142.792C31.4027 143.24 31.3014 143.637 31.0987 143.984C30.896 144.331 30.6187 144.6 30.2667 144.792C29.92 144.979 29.536 145.072 29.1147 145.072ZM29.1147 144.28C29.3494 144.28 29.568 144.224 29.7707 144.112C29.9787 144 30.1467 143.832 30.2747 143.608C30.4027 143.384 30.4667 143.112 30.4667 142.792C30.4667 142.472 30.4054 142.203 30.2827 141.984C30.16 141.76 29.9974 141.592 29.7947 141.48C29.592 141.368 29.3734 141.312 29.1387 141.312C28.904 141.312 28.6854 141.368 28.4827 141.48C28.2854 141.592 28.128 141.76 28.0107 141.984C27.8934 142.203 27.8347 142.472 27.8347 142.792C27.8347 143.267 27.9547 143.635 28.1947 143.896C28.44 144.152 28.7467 144.28 29.1147 144.28ZM32.0002 142.776C32.0002 142.333 32.0909 141.941 32.2722 141.6C32.4589 141.259 32.7096 140.995 33.0242 140.808C33.3442 140.616 33.6989 140.52 34.0882 140.52C34.3762 140.52 34.6589 140.584 34.9362 140.712C35.2189 140.835 35.4429 141 35.6082 141.208V139.08H36.5282V145H35.6082V144.336C35.4589 144.549 35.2509 144.725 34.9842 144.864C34.7229 145.003 34.4216 145.072 34.0802 145.072C33.6962 145.072 33.3442 144.976 33.0242 144.784C32.7096 144.587 32.4589 144.315 32.2722 143.968C32.0909 143.616 32.0002 143.219 32.0002 142.776ZM35.6082 142.792C35.6082 142.488 35.5442 142.224 35.4162 142C35.2936 141.776 35.1309 141.605 34.9282 141.488C34.7256 141.371 34.5069 141.312 34.2722 141.312C34.0376 141.312 33.8189 141.371 33.6162 141.488C33.4136 141.6 33.2482 141.768 33.1202 141.992C32.9976 142.211 32.9362 142.472 32.9362 142.776C32.9362 143.08 32.9976 143.347 33.1202 143.576C33.2482 143.805 33.4136 143.981 33.6162 144.104C33.8242 144.221 34.0429 144.28 34.2722 144.28C34.5069 144.28 34.7256 144.221 34.9282 144.104C35.1309 143.987 35.2936 143.816 35.4162 143.592C35.5442 143.363 35.6082 143.096 35.6082 142.792ZM37.4221 142.776C37.4221 142.333 37.5128 141.941 37.6941 141.6C37.8808 141.259 38.1315 140.995 38.4461 140.808C38.7661 140.616 39.1181 140.52 39.5021 140.52C39.8488 140.52 40.1501 140.589 40.4061 140.728C40.6675 140.861 40.8755 141.029 41.0301 141.232V140.592H41.9501V145H41.0301V144.344C40.8755 144.552 40.6648 144.725 40.3981 144.864C40.1315 145.003 39.8275 145.072 39.4861 145.072C39.1075 145.072 38.7608 144.976 38.4461 144.784C38.1315 144.587 37.8808 144.315 37.6941 143.968C37.5128 143.616 37.4221 143.219 37.4221 142.776ZM41.0301 142.792C41.0301 142.488 40.9661 142.224 40.8381 142C40.7155 141.776 40.5528 141.605 40.3501 141.488C40.1475 141.371 39.9288 141.312 39.6941 141.312C39.4595 141.312 39.2408 141.371 39.0381 141.488C38.8355 141.6 38.6701 141.768 38.5421 141.992C38.4195 142.211 38.3581 142.472 38.3581 142.776C38.3581 143.08 38.4195 143.347 38.5421 143.576C38.6701 143.805 38.8355 143.981 39.0381 144.104C39.2461 144.221 39.4648 144.28 39.6941 144.28C39.9288 144.28 40.1475 144.221 40.3501 144.104C40.5528 143.987 40.7155 143.816 40.8381 143.592C40.9661 143.363 41.0301 143.096 41.0301 142.792ZM47.116 140.592L44.412 147.072H43.468L44.364 144.928L42.628 140.592H43.644L44.884 143.952L46.172 140.592H47.116Z" fill="#6D6E8A"/>
                <path d="M248.826 139.952H246.146V141.544C246.258 141.395 246.424 141.269 246.642 141.168C246.866 141.067 247.104 141.016 247.354 141.016C247.802 141.016 248.165 141.112 248.442 141.304C248.725 141.496 248.925 141.739 249.042 142.032C249.165 142.325 249.226 142.635 249.226 142.96C249.226 143.355 249.149 143.707 248.994 144.016C248.845 144.32 248.618 144.56 248.314 144.736C248.016 144.912 247.648 145 247.21 145C246.629 145 246.162 144.856 245.81 144.568C245.458 144.28 245.248 143.899 245.178 143.424H246.066C246.125 143.675 246.256 143.875 246.458 144.024C246.661 144.168 246.914 144.24 247.218 144.24C247.597 144.24 247.88 144.125 248.066 143.896C248.258 143.667 248.354 143.363 248.354 142.984C248.354 142.6 248.258 142.307 248.066 142.104C247.874 141.896 247.592 141.792 247.218 141.792C246.957 141.792 246.736 141.859 246.554 141.992C246.378 142.12 246.25 142.296 246.17 142.52H245.306V139.152H248.826V139.952ZM254.91 145.056C254.392 145.056 253.915 144.936 253.478 144.696C253.046 144.451 252.702 144.112 252.446 143.68C252.195 143.243 252.07 142.752 252.07 142.208C252.07 141.664 252.195 141.176 252.446 140.744C252.702 140.312 253.046 139.976 253.478 139.736C253.915 139.491 254.392 139.368 254.91 139.368C255.432 139.368 255.91 139.491 256.342 139.736C256.779 139.976 257.123 140.312 257.374 140.744C257.624 141.176 257.75 141.664 257.75 142.208C257.75 142.752 257.624 143.243 257.374 143.68C257.123 144.112 256.779 144.451 256.342 144.696C255.91 144.936 255.432 145.056 254.91 145.056ZM254.91 144.264C255.278 144.264 255.606 144.181 255.894 144.016C256.182 143.845 256.406 143.605 256.566 143.296C256.731 142.981 256.814 142.619 256.814 142.208C256.814 141.797 256.731 141.437 256.566 141.128C256.406 140.819 256.182 140.581 255.894 140.416C255.606 140.251 255.278 140.168 254.91 140.168C254.542 140.168 254.214 140.251 253.926 140.416C253.638 140.581 253.411 140.819 253.246 141.128C253.086 141.437 253.006 141.797 253.006 142.208C253.006 142.619 253.086 142.981 253.246 143.296C253.411 143.605 253.638 143.845 253.926 144.016C254.214 144.181 254.542 144.264 254.91 144.264ZM258.343 142.792C258.343 142.339 258.434 141.941 258.615 141.6C258.802 141.253 259.058 140.987 259.383 140.8C259.709 140.613 260.082 140.52 260.503 140.52C261.037 140.52 261.477 140.648 261.823 140.904C262.175 141.155 262.413 141.515 262.535 141.984H261.551C261.471 141.765 261.343 141.595 261.167 141.472C260.991 141.349 260.77 141.288 260.503 141.288C260.13 141.288 259.831 141.421 259.607 141.688C259.389 141.949 259.279 142.317 259.279 142.792C259.279 143.267 259.389 143.637 259.607 143.904C259.831 144.171 260.13 144.304 260.503 144.304C261.031 144.304 261.381 144.072 261.551 143.608H262.535C262.407 144.056 262.167 144.413 261.815 144.68C261.463 144.941 261.026 145.072 260.503 145.072C260.082 145.072 259.709 144.979 259.383 144.792C259.058 144.6 258.802 144.333 258.615 143.992C258.434 143.645 258.343 143.245 258.343 142.792ZM264.508 141.336V143.776C264.508 143.941 264.545 144.061 264.62 144.136C264.7 144.205 264.833 144.24 265.02 144.24H265.58V145H264.86C264.449 145 264.135 144.904 263.916 144.712C263.697 144.52 263.588 144.208 263.588 143.776V141.336H263.068V140.592H263.588V139.496H264.508V140.592H265.58V141.336H264.508ZM268.883 143.76C269.395 143.317 269.797 142.955 270.091 142.672C270.389 142.384 270.637 142.085 270.835 141.776C271.032 141.467 271.131 141.157 271.131 140.848C271.131 140.528 271.053 140.277 270.899 140.096C270.749 139.915 270.512 139.824 270.187 139.824C269.872 139.824 269.627 139.925 269.451 140.128C269.28 140.325 269.189 140.592 269.179 140.928H268.299C268.315 140.32 268.496 139.856 268.843 139.536C269.195 139.211 269.64 139.048 270.179 139.048C270.76 139.048 271.213 139.208 271.539 139.528C271.869 139.848 272.035 140.275 272.035 140.808C272.035 141.192 271.936 141.563 271.739 141.92C271.547 142.272 271.315 142.589 271.043 142.872C270.776 143.149 270.435 143.472 270.019 143.84L269.659 144.16H272.195V144.92H268.307V144.256L268.883 143.76ZM272.996 142.008C272.996 141.085 273.151 140.365 273.46 139.848C273.775 139.325 274.313 139.064 275.076 139.064C275.839 139.064 276.375 139.325 276.684 139.848C276.999 140.365 277.156 141.085 277.156 142.008C277.156 142.941 276.999 143.672 276.684 144.2C276.375 144.723 275.839 144.984 275.076 144.984C274.313 144.984 273.775 144.723 273.46 144.2C273.151 143.672 272.996 142.941 272.996 142.008ZM276.26 142.008C276.26 141.576 276.231 141.211 276.172 140.912C276.119 140.613 276.007 140.371 275.836 140.184C275.665 139.992 275.412 139.896 275.076 139.896C274.74 139.896 274.487 139.992 274.316 140.184C274.145 140.371 274.031 140.613 273.972 140.912C273.919 141.211 273.892 141.576 273.892 142.008C273.892 142.456 273.919 142.832 273.972 143.136C274.025 143.44 274.137 143.685 274.308 143.872C274.484 144.059 274.74 144.152 275.076 144.152C275.412 144.152 275.665 144.059 275.836 143.872C276.012 143.685 276.127 143.44 276.18 143.136C276.233 142.832 276.26 142.456 276.26 142.008ZM278.625 143.76C279.137 143.317 279.54 142.955 279.833 142.672C280.132 142.384 280.38 142.085 280.577 141.776C280.774 141.467 280.873 141.157 280.873 140.848C280.873 140.528 280.796 140.277 280.641 140.096C280.492 139.915 280.254 139.824 279.929 139.824C279.614 139.824 279.369 139.925 279.193 140.128C279.022 140.325 278.932 140.592 278.921 140.928H278.041C278.057 140.32 278.238 139.856 278.585 139.536C278.937 139.211 279.382 139.048 279.921 139.048C280.502 139.048 280.956 139.208 281.281 139.528C281.612 139.848 281.777 140.275 281.777 140.808C281.777 141.192 281.678 141.563 281.481 141.92C281.289 142.272 281.057 142.589 280.785 142.872C280.518 143.149 280.177 143.472 279.761 143.84L279.401 144.16H281.937V144.92H278.049V144.256L278.625 143.76ZM283.242 143.76C283.754 143.317 284.157 142.955 284.45 142.672C284.749 142.384 284.997 142.085 285.194 141.776C285.391 141.467 285.49 141.157 285.49 140.848C285.49 140.528 285.413 140.277 285.258 140.096C285.109 139.915 284.871 139.824 284.546 139.824C284.231 139.824 283.986 139.925 283.81 140.128C283.639 140.325 283.549 140.592 283.538 140.928H282.658C282.674 140.32 282.855 139.856 283.202 139.536C283.554 139.211 283.999 139.048 284.538 139.048C285.119 139.048 285.573 139.208 285.898 139.528C286.229 139.848 286.394 140.275 286.394 140.808C286.394 141.192 286.295 141.563 286.098 141.92C285.906 142.272 285.674 142.589 285.402 142.872C285.135 143.149 284.794 143.472 284.378 143.84L284.018 144.16H286.554V144.92H282.666V144.256L283.242 143.76Z" fill="#6D6E8A"/>
                <defs>
                <filter id="filter0_d_6322_18738" x="231.995" y="13.1907" width="66.9" height="66.8999" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="13.646"/>
                <feGaussianBlur stdDeviation="13.646"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.223889 0 0 0 0 0.103125 0 0 0 0 0.45 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6322_18738"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6322_18738" result="shape"/>
                </filter>
                <filter id="filter1_d_6322_18738" x="0.908161" y="100.535" width="66.8067" height="66.807" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="13.646"/>
                <feGaussianBlur stdDeviation="13.646"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.223889 0 0 0 0 0.103125 0 0 0 0 0.45 0 0 0 0.15 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6322_18738"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6322_18738" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_6322_18738" x1="269.783" y1="28.6562" x2="261.106" y2="37.3331" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8BB4F2"/>
                <stop offset="0.51551" stop-color="#7C27D9" stop-opacity="0.887325"/>
                <stop offset="1" stop-color="#DE52D0" stop-opacity="0.76"/>
                </linearGradient>
                <linearGradient id="paint1_linear_6322_18738" x1="38.6036" y1="116" x2="30.0195" y2="124.584" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8BB4F2"/>
                <stop offset="0.51551" stop-color="#7C27D9" stop-opacity="0.887325"/>
                <stop offset="1" stop-color="#DE52D0" stop-opacity="0.76"/>
                </linearGradient>
                <linearGradient id="paint2_linear_6322_18738" x1="175.767" y1="69.4001" x2="173.268" y2="123.517" gradientUnits="userSpaceOnUse">
                <stop stop-color="#8F00E0"/>
                <stop offset="1" stop-color="#8F00E0" stop-opacity="0"/>
                </linearGradient>
                <clipPath id="clip0_6322_18738">
                <rect width="231" height="132" fill="white" transform="translate(35)"/>
                </clipPath>
                </defs>
              </svg>

              <div className="flex gap-2 items-center">
                <div className="text-[12px] md:text-[18px] font-medium leading-[18px] md:leading-[27px] text-[#1B1C39]">
                  Enter a recurring monthly/weekly deposit
                </div>
                <div className={header.btn10}>
                  <div className="text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#1B1828]">
                      $ 10.00
                  </div>
                </div>
              </div>
              <div className="md:w-[539px]">
                <p className="text-[12px] text-[#1B1C39] leading-[20.52px] mt-[25px] mb-[37px]">
                  Use this tool to see how round-ups and depositing money each
                  month can impact the long term value of your account.
                </p>
              </div>
              <div className="absolute md:top-[59px] md:left-[500px]">
                <div className={header.btn3}>
                  <div className="flex mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="items-center text-center text-[13.65px] text-[#1B1C39] leading-[20px] py-[15px] px-[15px]"
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M-110.367 92.1307C-109.777 -59.2684 12.8082 -181.525 163.435 -180.938C314.061 -180.351 435.69 -57.1418 435.099 94.2572C434.509 245.656 311.924 367.913 161.297 367.326C10.6707 366.739 -110.958 243.53 -110.367 92.1307ZM-195.597 91.7984C-194.822 -106.913 -33.9286 -267.375 163.769 -266.604C361.466 -265.834 521.103 -104.122 520.329 94.5895C519.554 293.301 358.66 453.763 160.963 452.992C-36.734 452.222 -196.371 290.51 -195.597 91.7984Z"
                  fill="#2603FF"
                  fillOpacity="0.02"
                />
              </svg>
            </div>
          </div>
          {/* End */}

          {/* Pricing */}
          <div className={header.pricing}>
            <div className="mb-[4px] text-left md:text-center">
              <h1 className={header.pr_3}>
                Simple Pricing. No Complex Contracts
              </h1>
            </div>
            <div className="md:flex space-x-[20px] justify-center">
              {/* Purple */}
              <div className="md:flex">
                <div className={header.price1}>
                  <div className="relative flex flex-col py-[50px]">
                    <div className="pl-[20px]">
                      <div className="flex justify-between gap-[63px] md:gap-[80px] pl-[10px]">
                        <div className="text-[26px] md:text-[30px] leading-[39px] md:leading-[45px] text-[#A08CFF] font-semibold">
                          Purple
                        </div>
                        <div className="text-[#1B1C39] pr-[20px]">
                          <span className="font-medium text-[28px] leading-[42px]">
                            $1.00
                          </span>
                          <span className="text-[12px] leading-[18px]">
                            /per month
                          </span>
                        </div>
                      </div>
                      <div className="border-b border-[#1B1828]/0.12 mt-[33px] mb-[19px] md:mb-[30px] w-[280px] md:w-[340px]"></div>
                      <div className="pl-[10px]">
                        <ul className="list-inside list-disc text-[#6D6E8A] tex-[18px] md:text-[20px] leading-[27px] md:leading-[30px] space-y-[10px] marker:text-[#8F00E0]">
                          <li>Bank Better</li>
                          <li>Pay Later</li>
                          <li>Customizable Virtual Cards</li>
                        </ul>
                      </div>
                      <div className="absolute top-[335px] md:top-[234px]">
                        <Image src={ccb} alt="card control" />
                      </div>
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
              <div className="md:flex relative">
                <div className={header.price2}>
                  <div className="absolute top-0 left-0 right-0 rounded-t-[25px] w-[320px] md:w-[380px] text-center text-[15px] leading-[22.5px] bg-[#6D6E8A] text-white py-2 mb-[25px]">
                    Recommended
                  </div>
                  <div className="relative flex flex-col py-[50px]">
                    <div className="pl-[20px] pr-[20px]">
                      <div className="flex justify-between gap-[22px] md:gap-[61px] pl-[10px]">
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
                      <div className="border-b border-[#1B1828]/0.12 mt-[23px] mb-[19px] pr-[22px]"></div>
                      <div className="pl-[10px] text-[16px] leading-[24px] font-semibold text-[#6D6E8A] mb-[15px]">
                        Everything in Purple plus:
                      </div>
                      <div className="pl-[10px]">
                        <ul className="list-inside list-disc text-[#6D6E8A] text-[18px] md:text-[20px] leading-[27px] md:leading-[30px] space-y-[10px] marker:text-[#8F00E0]">
                          <li>Bank Better +</li>
                          <li>Pay Later +</li>
                          <li>Spend Better +</li>
                          <li>Physical Card</li>
                          <li>Save Better +</li>
                        </ul>
                      </div>
                      <div className="absolute top-[347px] md:top-[294px]">
                        <Image src={ccb2} alt="card control" />
                      </div>
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
              <div className="md:flex">
                <div className={header.price3}>
                  <div className="relative flex flex-col py-[38px]">
                    <div className="pl-[20px]">
                      <div className="flex justify-between gap-[61px] pl-[10px] pr-[20px]">
                        <div className="text-[#393939] text-[30px] leading-[45px] font-medium">
                          Metal
                        </div>
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
                      <div className="border-b border-[#1B1828]/0.12 mt-[14px] mb-[15px] w-[340px]"></div>
                      <div className="text-[16px] leading-[24px] font-semibold text-[#6D6E8A] mb-[18px] pl-[10px]">
                        Everything in Premium plus:
                      </div>
                      <div className="relative pl-[10px]">
                        <ul className="list-inside list-disc text-[#6D6E8A] text-[20px] leading-[30px] space-y-[10px] marker:text-[#8F00E0]">
                          <li>Bank Better Pro</li>
                          <li>Pay Later Pro</li>
                          <li>Spend Better Pro</li>
                          <li>Signature Metal card</li>
                          <li>Invest better Pro</li>
                        </ul>
                      </div>
                      <div className="absolute top-[300px] md:top-[245px]">
                        <Image src={ccb3} alt="card control" />
                      </div>
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
          <div className="relative mt-[1700px] md:mt-[270px]">
            <div className="absolute top-[90px] md:top-0 left-0 pt-[80px] px-[23px]">
              <svg
                width="99"
                height="70"
                viewBox="0 0 99 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.48"
                  d="M31.304 69.12H0.296L29.48 0.111992H49.24L31.304 69.12ZM80.552 69.12H49.544L78.728 0.111992H98.488L80.552 69.12Z"
                  fill="#6D6E8A"
                />
              </svg>
            </div>
            <div className="absolute top-[490px] right-0">
              <svg
                width="99"
                height="70"
                viewBox="0 0 99 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.48"
                  d="M18.664 0.111992H49.368L20.184 69.12H0.728L18.664 0.111992ZM67.912 0.111992H98.616L69.432 69.12H49.672L67.912 0.111992Z"
                  fill="#6D6E8A"
                />
              </svg>
            </div>
            <div className="flex absolute inset-x-0 top-[490px] rounded-[30px] justify-center">
              <Image src={pray} width={90} height={98.44} alt="pray" />
            </div>

            <div className="relative flex flex-col md:flex md:flex-row md:gap-[20px] text-center items-center justify-center mb-[55px] md:mx-[130px]">
              <div className="absolute md:relative bottom-[130px] md:bottom-0 left-0">
                <Image src={love} width={120} height={120} alt="love" />
              </div>
              <div className="flex flex-col space-y-[9px] md:space-y-0 mb-[4px] px-[20px] text-left md:text-center">
                <h1 className={header.pr_3}>What our “Early Users” say</h1>
                <h1 className={header.h2}>
                  (Don’t just take our word for it).
                </h1>
              </div>
              <div className="absolute md:relative top-[130px] md:top-0 right-[100px] md:right-0">
                <Image src={wink} width={80} height={91.2} alt="love" />
              </div>
              <div className="absolute top-[110px] right-6 md:-top-[10px] md:right-[50px]">
                <Image src={glasses} width={68} height={70.2} alt="love" />
              </div>
            </div>
            <div className="flex flex-col md:flex md:flex-row items-center gap-4 justify-center md:mx-[130px] mt-[150px] md:mt-[120px] md:mt-0">
              <div className={header.aldo}>
                <div className="flex items-center gap-4 mb-[20px]">
                  <div>
                    <Image
                      src={cardImage}
                      width={48}
                      height={48}
                      alt="card image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>Aldo P.</div>
                    <div>
                      <Image
                        src={stars}
                        width={124}
                        height={16}
                        alt="stars rating"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-[8px] mb-[24px] items-center">
                  <div className="p-0.5 flex rounded-full bg-[#A08CFF] items-center justify-center">
                    <svg
                      width="10"
                      height="10"
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
                <div className="text-[16px] leading-[24px] text-[#6D6E8A]">
                  Just wow, i used revolut in the UK, when i came to Africa, i
                  came across Mizan App, it took minutes to setup. I’d say its
                  like the Islamic “Revolt App” version.
                </div>
              </div>
              <div className={header.aldo}>
                <div className="flex items-center gap-4">
                  <div>
                    <Image
                      src={cardImage}
                      width={48}
                      height={48}
                      alt="card image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>Aldo P.</div>
                    <div>
                      <Image
                        src={stars}
                        width={124}
                        height={16}
                        alt="stars rating"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-[8px] items-center mt-[20px]">
                  <div className="p-0.5 flex rounded-full bg-[#A08CFF] items-center justify-center">
                    <svg
                      width="10"
                      height="10"
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
                <div className="text-[16px] leading-[24px] text-[#6D6E8A] mt-[20px]">
                Just wow, i used revolut in the UK, when i came to Africa, i came across Mizan App, it took minutes to setup. I’d say its like the Islamic “Revolt App” version.
                </div>
              </div>
              <div className={header.aldo}>
                <div className="flex items-center gap-4">
                  <div>
                    <Image
                      src={cardImage}
                      width={48}
                      height={48}
                      alt="card image"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div>Aldo P.</div>
                    <div>
                      <Image
                        src={stars}
                        width={124}
                        height={16}
                        alt="stars rating"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-[8px] items-center mt-[20px]">
                  <div className="p-0.5 flex rounded-full bg-[#A08CFF] items-center justify-center">
                    <svg
                      width="10"
                      height="10"
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
                <div className="text-[16px] leading-[24px] text-[#6D6E8A] mt-[20px]">
                When i joined beta program, i got to experience first hand how my financial future will be revolutionized. Ditching my bank for G.
                </div>
              </div>
            </div>
          </div>
          {/* End */}

          {/* Peace of mind */}
          <div className="relative mt-[172px] mb-[49px] max-w-[1290px] mx-auto sm:mx-[20px] md:mx-[130px] xl:mx-[130px]">
            <div className="absolute left-[500px] -top-20 -z-20">
              <svg
                width="751"
                height="751"
                viewBox="0 0 751 751"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="375.5"
                  cy="375.5"
                  r="375.5"
                  fill="url(#paint0_linear_11_6955)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_11_6955"
                    x1="157.617"
                    y1="1.08952e-05"
                    x2="640.9"
                    y2="710.437"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FAF9FE" />
                    <stop offset="1" stopColor="#C6BAFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>  
            <div className="absolute w-[561px] h-[803px] left-[600px] top-[20px] -z-10">
              <Image
                src={blackHand}
                width={561}
                height={803}
                alt="black hand holding phone"
              />
            </div>
            <div className="absolute w-full left-[500px] -z-20 top-[200px]">
              <Image
                src={handShadow}
                width={596}
                height={748}
                alt="black hand holding phone"
              />
            </div>
            <div className="flex">
              <div className="flex flex-col z-30 ">
                <div className="mb-[40px]">
                  <h1 className={header.pr_3}>And finally peace of mind</h1>
                </div>
                <div className="flex gap-[30px] w-[579px] items-center z-10 bg-white rounded-3xl shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1)] px-[24px] py-[17px] mb-[20px]">
                  <div className="p-[9px] rounded-full bg-[#E0D2FF]">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.71 7.9957C26.1899 8.26904 26.8005 8.10159 27.0738 7.6217C27.3472 7.1418 27.1797 6.53118 26.6998 6.25783L25.71 7.9957ZM29.7477 32.4149C30.0965 31.9867 30.0321 31.3568 29.6039 31.008C29.1756 30.6592 28.5458 30.7237 28.197 31.1519L29.7477 32.4149ZM21.8462 37.4997L21.4029 36.6034L21.8462 37.4997ZM20.72 36.6207C15.2067 34.2374 11.9998 29.5765 10.1316 24.8971C8.26268 20.2158 7.77738 15.6176 7.65275 13.5589L5.65641 13.6798C5.78735 15.8428 6.29391 20.6785 8.27416 25.6387C10.2552 30.6007 13.7547 35.7886 19.9264 38.4565L20.72 36.6207ZM8.11529 12.7615L20.6012 5.64964L19.6114 3.91178L7.12542 11.0236L8.11529 12.7615ZM21.5911 5.64964L25.71 7.9957L26.6998 6.25783L22.581 3.91178L21.5911 5.64964ZM28.197 31.1519C26.4521 33.2942 24.2329 35.2038 21.4029 36.6034L22.2895 38.3961C25.4037 36.856 27.8424 34.7542 29.7477 32.4149L28.197 31.1519ZM7.65275 13.5589C7.63419 13.2524 7.79452 12.9442 8.11529 12.7615L7.12542 11.0236C6.19718 11.5523 5.5881 12.5515 5.65641 13.6798L7.65275 13.5589ZM19.9264 38.4565C20.6829 38.7835 21.5504 38.7617 22.2895 38.3961L21.4029 36.6034C21.1907 36.7083 20.9377 36.7148 20.72 36.6207L19.9264 38.4565ZM20.6012 5.64964C20.908 5.47489 21.2843 5.47489 21.5911 5.64964L22.581 3.91178C21.6605 3.38751 20.5318 3.38751 19.6114 3.91178L20.6012 5.64964Z"
                        fill="#1B1C39"
                      />
                      <circle
                        opacity="0.1"
                        cx="28.4624"
                        cy="17.0639"
                        r="10.0639"
                        fill="url(#paint0_linear_11_7237)"
                        stroke="url(#paint1_linear_11_7237)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="28.5991"
                        cy="16.9878"
                        r="10.0639"
                        stroke="#9A73CB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25.7352 15.6389C25.3446 15.2483 24.7115 15.2483 24.321 15.6389C23.9304 16.0294 23.9304 16.6625 24.321 17.0531L25.7352 15.6389ZM28.2025 19.5204L27.4954 20.2275C27.886 20.6181 28.5191 20.6181 28.9096 20.2275L28.2025 19.5204ZM34.1042 15.0329C34.4948 14.6424 34.4948 14.0093 34.1042 13.6187C33.7137 13.2282 33.0805 13.2282 32.69 13.6187L34.1042 15.0329ZM24.321 17.0531L27.4954 20.2275L28.9096 18.8133L25.7352 15.6389L24.321 17.0531ZM28.9096 20.2275L34.1042 15.0329L32.69 13.6187L27.4954 18.8133L28.9096 20.2275Z"
                        fill="url(#paint2_linear_11_7237)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_11_7237"
                          x1="38.5263"
                          y1="7"
                          x2="18.3984"
                          y2="27.1279"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#8BB4F2" />
                          <stop
                            offset="0.51551"
                            stopColor="#7C27D9"
                            stopOpacity="0.887325"
                          />
                          <stop
                            offset="1"
                            stopColor="#DE52D0"
                            stopOpacity="0.76"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_11_7237"
                          x1="38.5263"
                          y1="7"
                          x2="18.3984"
                          y2="27.1279"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#8BB4F2" />
                          <stop
                            offset="0.51551"
                            stopColor="#7C27D9"
                            stopOpacity="0.887325"
                          />
                          <stop
                            offset="1"
                            stopColor="#DE52D0"
                            stopOpacity="0.76"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_11_7237"
                          x1="33.3971"
                          y1="14.3258"
                          x2="25.9496"
                          y2="12.5282"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#8BB4F2" />
                          <stop
                            offset="0.51551"
                            stopColor="#7C27D9"
                            stopOpacity="0.887325"
                          />
                          <stop
                            offset="1"
                            stopColor="#DE52D0"
                            stopOpacity="0.76"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-[16px] leading-[28px] text-[#1B1C39]">
                    Swiss level bank security with PCI /DSS certified.
                  </div>
                </div>
                <div className="flex gap-[30px] w-[579px] items-center z-10 bg-white rounded-3xl shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1)] px-[24px] py-[18px] mb-[20px]">
                  <div className="p-[9px] rounded-full bg-[#E0D2FF]">
                    <svg
                      width="30"
                      height="25"
                      viewBox="0 0 30 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29 20.0237V22C29 23.1046 28.1046 24 27 24H3C1.89543 24 1 23.1046 1 22V11.1253M15.0727 6H3C1.89543 6 1 6.89543 1 8V11.1253M1 11.1253H11.439"
                        stroke="#1B1C39"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.1289 8.25632H19C17.8954 8.25632 17 9.15175 17 10.2563V15C17 16.1046 17.8954 17 19 17H27C28.1046 17 29 16.1046 29 15V10.2563C29 9.15175 28.1046 8.25632 27 8.25632H20.1289ZM20.1289 8.25632V4.44759C20.1289 2.54354 21.6725 1 23.5765 1V1C25.4806 1 27.0241 2.54354 27.0241 4.44759V5.28163M23.2349 12.2732V13.4752"
                        stroke="url(#paint0_linear_11_7248)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_11_7248"
                          x1="29"
                          y1="1"
                          x2="13.64"
                          y2="12.52"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#8BB4F2" />
                          <stop
                            offset="0.51551"
                            stopColor="#7C27D9"
                            stopOpacity="0.887325"
                          />
                          <stop
                            offset="1"
                            stopColor="#DE52D0"
                            stopOpacity="0.76"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-[16px] leading-[28px] text-[#1B1C39]">
                    Instantly freeze your lost card, wherever, whenever.
                  </div>
                </div>
                <div className="flex gap-[30px] w-[579px] items-center z-10 bg-white rounded-3xl shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1)] px-[24px] py-[17px] mb-[20px]">
                  <div className="p-[9px] rounded-full bg-[#E0D2FF]">
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="15.0517"
                        cy="14.541"
                        r="9.16696"
                        stroke="url(#paint0_linear_11_7256)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.2301 16.2004C16.923 18.5075 13.1824 18.5075 10.8753 16.2004"
                        stroke="#9A73CB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.56 1H3C1.89543 1 1 1.89543 1 3V8.56"
                        stroke="#1B1C39"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.56 27.9375H3C1.89543 27.9375 1 27.0421 1 25.9375V20.3775"
                        stroke="#1B1C39"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28 8.56L28 3C28 1.89543 27.1046 1 26 1L20.44 1"
                        stroke="#1B1C39"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28 20.3775L28 25.9375C28 27.0421 27.1046 27.9375 26 27.9375L20.44 27.9375"
                        stroke="#1B1C39"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_11_7256"
                          x1="24.2187"
                          y1="5.37402"
                          x2="5.88476"
                          y2="23.7079"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#8BB4F2" />
                          <stop
                            offset="0.51551"
                            stopColor="#7C27D9"
                            stopOpacity="0.887325"
                          />
                          <stop
                            offset="1"
                            stopColor="#DE52D0"
                            stopOpacity="0.76"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-[16px] leading-[28px] text-[#1B1C39]">
                    Biometrics login, with enhanced 2FA. No more (xh!#12@?3)
                    passwords.
                  </div>
                </div>
                <div className="flex gap-[30px] w-[579px] items-center z-10 bg-white rounded-3xl shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1)] px-[24px] py-[17px] mb-[20px]">
                  <div className="p-[9px] rounded-full bg-[#E0D2FF]">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.2436 33.3111L28.5926 27.3361C28.902 27.1575 29.0926 26.8273 29.0926 26.4701V21.837M18.2436 33.3111L7.89453 27.3361C7.58513 27.1575 7.39453 26.8273 7.39453 26.4701V14.52M18.2436 33.3111V20.688C18.2436 20.3127 18.0335 19.9691 17.6994 19.798L7.39453 14.52M7.39453 14.52L17.7436 8.54502C18.053 8.36639 18.4342 8.36639 18.7436 8.54502L22.4458 10.6825"
                        stroke="#1B1C39"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.002 10.4472V17.3974C22.002 17.7487 22.1863 18.0742 22.4875 18.2549L27.7512 21.4131C28.0678 21.6031 28.4635 21.6031 28.7801 21.4131L34.0438 18.2549C34.345 18.0742 34.5293 17.7487 34.5293 17.3974V11.0134C34.5293 10.6621 34.345 10.3366 34.0438 10.1559L28.7801 6.99766C28.4635 6.80765 28.0678 6.80765 27.7512 6.99766L22.002 10.4472ZM22.002 10.4472L28.2656 13.8933"
                        stroke="url(#paint0_linear_11_7267)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_11_7267"
                          x1="34.5293"
                          y1="6.68896"
                          x2="19.7429"
                          y2="19.011"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#80B2FF" />
                          <stop offset="0.51551" stopColor="#7C27D9" />
                          <stop offset="1" stopColor="#FF68F0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="text-[16px] leading-[28px] text-[#1B1C39]">
                    Built on blockchain technology (will take approximately
                    1,000,000,000,000 years to crack).
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          {/* End */}

          {/* Top Providers */}
          <div className="flex flex-col rounded-3xl py-[70px] bg-white shadow-[0px_-8px_100px_rgba(105,_67,_175,_0.1)] z-20 mt-[180px] mb-[160px] max-w-[1290px] ml-[54px]">
            <div className="mb-[40px] pl-[82px]">
              <h1 className={header.pr_3}>We work with top providers</h1>
            </div>
            <div className="lg:flex items-center gap-[20px] pl-[76px] pr-[84px]">
              <div className={header.provider}>
                <Image
                  src={shariyah2}
                  width={123}
                  height={115}
                  alt="shariyah logo"
                />
              </div>
              <div className={header.codebase}>
                <Image src={codebase} alt="codebase technologies logo" />
              </div>
              <div className={header.duck}>
                <Image src={duck} alt="duck design logo" />
              </div>
              <div className={header.cloud}>
                <Image src={cloud} alt="google cloud logo" />
              </div>
            </div>
          </div>
          {/* End */} 

          {/* Backed By */}
          <div className="flex flex-col mb-[160px] md:mx-[130px]">
            <div className="mb-[40px]">
              <h1 className="text-[40px] leading-[60px] font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#9E7AFC]">
                  Backed by
                </span>
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-y-10 gap-x-[20px] sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-3">
              <div className="bg-white rounded-3xl pl-[30px] pt-[40px] pr-[28px] pb-[40px] shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1);]">
                <div className="flex gap-[20px]">
                  <div className="h-24 w-24 rounded-full flex-shrink-0 overflow-hidden drop-shadow-[0px_30px_50px_rgba(53,_60,_119,_0.1)]">
                    <Image src={backer1} alt="sponsor1" />
                  </div>
                  <div className="h-[72px] text-[24px] leading-[36px] text-[#1B1C39] font-medium">
                    Sheikh Abdullatif Essajee
                  </div>
                </div>
                <div className="mt-[33px] flex flex-col space-y-[20px] text-[14px] leading-[23.38px] text-[#6D6E8A]">
                  <p>
                    Essajee is a promoter of Islamic banking in Kenya, and
                    co-founder and currently the Chairman of First Community
                    Bank.
                  </p>
                  <p>
                    He also served as its Executive Director in charge of
                    support and control and later as its Managing Director,
                    during his leave of absence from the University of Nairobi.
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-3xl pl-[30px] pt-[40px] pr-[28px] pb-[40px] shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1);]">
                <div className="flex items-center justify-start">
                  <div className="mr-[20px] h-24 w-24 rounded-full flex-shrink-0 overflow-hidden drop-shadow-[0px_30px_50px_rgba(53,_60,_119,_0.1)]">
                    <Image src={backer2} alt="sponsor1" />
                  </div>
                  <div className="h-[72px] flex-1 text-[24px] leading-[36px] text-[#1B1C39] font-medium">
                    Mufti Ismail menk
                  </div>
                </div>
                <div className="mt-[33px] flex flex-col space-y-[20px] text-[14px] leading-[23.38px] text-[#6D6E8A]">
                  <p>
                    Mufti Dr Ismail Menk is a leading global Islamic scholar
                    born and raised in Zimbabwe. He studied Shariah in Madinah
                    and holds a Doctorate of Social Guidance from Aldersgate
                    University.
                  </p>
                  <div className="flex flex-col space-y-[5px]">
                    <p className="font-medium">Awards</p>
                    <ul className="list-inside list-disc">
                      <li>
                        Top 500 Most Influential Muslims in the World since 2010
                        to date.
                      </li>
                      <li>KSBA Global Leadership Award Social Guidance</li>
                      <li>
                        Honorary Doctorate Social Guidance Aldersgate University
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-3xl pl-[30px] pt-[40px] pr-[28px] pb-[40px] shadow-[0px_20px_40px_rgba(105,_67,_175,_0.1);]">
                <div className="flex">
                  <div className="mr-[20px] flex-shrink-0 overflow-hidden drop-shadow-[0px_30px_50px_rgba(53,_60,_119,_0.1)]">
                    <Image src={backer3} alt="sponsor1" />
                  </div>
                  <div className="h-[72px] text-[24px] leading-[36px] text-[#1B1C39] font-medium">
                    Sh. Muhammad Ahmad Shaikh
                  </div>
                </div>
                <div className="mt-[33px] flex flex-col space-y-[20px] text-[14px] leading-[23.38px] text-[#6D6E8A]">
                  <p>
                    Shaikh Muhammad has over 10 years of experience as a Shari’a
                    consultant and academic in various parts of Islamic finance.
                    He has worked predominantly in the financial services along
                    with retail and investment banking and has expertise in
                    corporate advisory and real-estate funds.
                  </p>
                  <p>
                    His work ranges from redesigning conventional Sukuk,
                    organizational structures of funds in the banking, insurance
                    and private equity sector.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End */}

          {/* Zendesk */}
          <div className="relative flex flex-col mb-[160px] mx-auto sm:mx-[20px] md:mx-[20px] lg:mx-[130px] xl:mx-[130px]">
            <h1 className="text-[40px] leading[60px] font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#000000] to-[#9E7AFC]">
                Any questions?
              </span>
            </h1>
            <h1 className={header.h3}>
              Did not understand some products? Need any further explantion? or
              have a suggestion? Do let us know, we dont like leaving anything
              to chance
            </h1>
            <div className="flex items-center justify-center gap-[150px] mt-[40px]">
              <div className="flex flex-col text-center">
                <div>
                  <svg
                    width="350"
                    height="350"
                    viewBox="0 0 350 350"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.1"
                      d="M275.744 93.2728C316.129 133.658 313.288 204.241 266.235 251.293C219.183 298.346 139.909 322.38 73.1244 255.595C32.7389 215.21 38.1439 144.327 85.1967 97.274C132.25 50.2212 218.241 35.7695 275.744 93.2728Z"
                      fill="url(#paint0_linear_11_7217)"
                    />
                    <path
                      opacity="0.4"
                      d="M174.708 248.721C134.03 259.506 94.3836 228.099 83.5988 187.42C72.8139 146.742 106.838 94.4778 147.516 83.693C188.195 72.9081 229.914 97.1415 240.699 137.82C251.483 178.498 215.386 237.936 174.708 248.721Z"
                      fill="url(#paint1_linear_11_7217)"
                    />
                    <path
                      opacity="0.4"
                      d="M263.603 158.756C282.545 196.336 264.644 245.751 220.86 267.82C177.076 289.889 111.705 255.197 92.7628 217.618C73.8211 180.038 93.9598 131.683 137.744 109.614C181.528 87.5451 244.662 121.176 263.603 158.756Z"
                      fill="url(#paint2_linear_11_7217)"
                    />
                    <g opacity="0.6" filter="url(#filter0_f_11_7217)">
                      <ellipse
                        cx="168.094"
                        cy="214.06"
                        rx="64.033"
                        ry="44.8231"
                        fill="url(#paint3_linear_11_7217)"
                      />
                    </g>
                    <circle
                      cx="168.092"
                      cy="176.921"
                      r="64.033"
                      fill="url(#paint4_linear_11_7217)"
                    />
                    <path
                      d="M165.054 171.912C167.178 171.139 169.487 171.139 171.611 171.912C172.738 172.322 173.986 171.748 174.399 170.63C174.812 169.512 174.233 168.274 173.107 167.864C170.017 166.74 166.648 166.74 163.558 167.864C162.432 168.274 161.853 169.512 162.266 170.63C162.679 171.748 163.927 172.322 165.054 171.912Z"
                      fill="url(#paint5_linear_11_7217)"
                    />
                    <path
                      d="M170.123 178.065C168.952 177.758 167.741 177.758 166.569 178.065C165.409 178.369 164.22 177.682 163.914 176.531C163.608 175.38 164.3 174.201 165.46 173.897C167.359 173.399 169.334 173.399 171.233 173.897C172.393 174.201 173.085 175.38 172.779 176.531C172.472 177.682 171.284 178.369 170.123 178.065Z"
                      fill="url(#paint6_linear_11_7217)"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M154.573 168.652C154.573 161.11 160.731 155 168.332 155C175.934 155 182.092 161.11 182.092 168.652V184.459C182.092 192.001 175.934 198.111 168.332 198.111C160.731 198.111 154.573 192.001 154.573 184.459V168.652ZM168.332 159.311C163.13 159.311 158.918 163.491 158.918 168.652V184.459C158.918 189.62 163.13 193.8 168.332 193.8C173.534 193.8 177.747 189.62 177.747 184.459V168.652C177.747 163.491 173.534 159.311 168.332 159.311Z"
                      fill="url(#paint7_linear_11_7217)"
                    />
                    <path
                      d="M146.173 176.986C147.372 176.986 148.345 177.951 148.345 179.142V184.028C148.345 194.966 157.308 203.859 168.333 203.859C179.357 203.859 188.32 194.966 188.32 184.028V179.142C188.32 177.951 189.293 176.986 190.492 176.986C191.692 176.986 192.665 177.951 192.665 179.142V184.028C192.665 196.62 182.914 206.982 170.505 208.075V214.637C170.505 215.827 169.532 216.792 168.332 216.792C167.132 216.792 166.16 215.827 166.16 214.637V208.075C153.751 206.982 144 196.62 144 184.028V179.142C144 177.951 144.973 176.986 146.173 176.986Z"
                      fill="url(#paint8_linear_11_7217)"
                    />
                    <g filter="url(#filter1_f_11_7217)">
                      <ellipse
                        cx="210.52"
                        cy="136.458"
                        rx="37.7794"
                        ry="17.3613"
                        transform="rotate(44.7926 210.52 136.458)"
                        fill="#91DCFC"
                      />
                    </g>
                    <g opacity="0.5" filter="url(#filter2_f_11_7217)">
                      <ellipse
                        cx="132.4"
                        cy="224.823"
                        rx="37.7794"
                        ry="17.3613"
                        transform="rotate(44.7926 132.4 224.823)"
                        fill="#FFB9A3"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_11_7217"
                        x="64.0605"
                        y="129.237"
                        width="208.066"
                        height="169.646"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="20"
                          result="effect1_foregroundBlur_11_7217"
                        />
                      </filter>
                      <filter
                        id="filter1_f_11_7217"
                        x="157.044"
                        y="83.1201"
                        width="106.952"
                        height="106.675"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="12"
                          result="effect1_foregroundBlur_11_7217"
                        />
                      </filter>
                      <filter
                        id="filter2_f_11_7217"
                        x="78.9238"
                        y="171.486"
                        width="106.952"
                        height="106.675"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="12"
                          result="effect1_foregroundBlur_11_7217"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_11_7217"
                        x1="110.909"
                        y1="112.39"
                        x2="251.42"
                        y2="236.488"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.433611" stopColor="#FF68F0" />
                        <stop
                          offset="1"
                          stopColor="#FF68F0"
                          stopOpacity="0.18"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_11_7217"
                        x1="250.38"
                        y1="174.338"
                        x2="88.6556"
                        y2="195.608"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.404924" stopColor="#B377FF" />
                        <stop
                          offset="1"
                          stopColor="#FF9E68"
                          stopOpacity="0.45"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_11_7217"
                        x1="152.248"
                        y1="126.125"
                        x2="221.939"
                        y2="245.389"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.433611" stopColor="#FF68F0" />
                        <stop
                          offset="1"
                          stopColor="#FF68F0"
                          stopOpacity="0.18"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_11_7217"
                        x1="232.126"
                        y1="169.237"
                        x2="147.895"
                        y2="289.567"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_11_7217"
                        x1="232.125"
                        y1="112.888"
                        x2="104.059"
                        y2="240.954"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#80B2FF" />
                        <stop offset="0.51551" stopColor="#7C27D9" />
                        <stop offset="1" stopColor="#FF68F0" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_11_7217"
                        x1="192.665"
                        y1="152.586"
                        x2="159.051"
                        y2="227.134"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint6_linear_11_7217"
                        x1="192.665"
                        y1="152.586"
                        x2="159.051"
                        y2="227.134"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint7_linear_11_7217"
                        x1="192.665"
                        y1="152.586"
                        x2="159.051"
                        y2="227.134"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient
                        id="paint8_linear_11_7217"
                        x1="192.665"
                        y1="152.586"
                        x2="159.051"
                        y2="227.134"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div>
                  <Image src={zenD} width={100} height={56.25} alt="" />
                </div>
              </div>
              <div className={header.zendesk}>
                <div className="flex items-center gap-2">
                  <div>
                    <Image
                      src={lady}
                      width={64}
                      height={64}
                      alt="lady zendesk"
                    />
                  </div>
                  <div className="relative">
                    <svg
                      width="451"
                      height="52"
                      viewBox="0 0 451 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.6881 26C20.6881 11.6406 32.3287 0 46.6881 0H425C439.359 0 451 11.6406 451 26C451 40.3594 439.44 52 425.081 52C334.544 52 35.9217 52 0 52C20.6881 48.5588 20.6881 29.8235 20.6881 29.8235V26Z"
                        fill="#6943AF"
                        fillOpacity="0.1"
                      />
                    </svg>
                    <div className="absolute left-[44px] top-[15px] text-[#6D6E8A] tex-[15px] leading-[19px]">
                      Hi! My name’s Sofie, how can we help you?
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <svg
                    width="520"
                    height="62"
                    viewBox="0 0 520 62"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="520" height="62" rx="31" fill="#F3F1F9" />
                  </svg>
                  <div className="absolute flex items-center gap-[20px] left-[25px] top-[18px] text-[#6D6E8A] tex-[15px] leading-[19px]">
                    <span>
                      <svg
                        width="23"
                        height="24"
                        viewBox="0 0 23 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_11_7201)">
                          <path
                            d="M20.0117 14.8051V18.4273H6.51172L1.01172 22.4766V3.47656H4.53966"
                            stroke="#A276FF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="14.5227"
                            cy="8.75019"
                            r="7.04804"
                            stroke="#A276FF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.502 9.58204C15.4087 10.6753 13.6362 10.6753 12.543 9.58204"
                            stroke="#A276FF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="11.3973"
                            cy="6.87826"
                            r="1.1141"
                            fill="#A276FF"
                          />
                          <circle
                            cx="17.6473"
                            cy="6.87826"
                            r="1.1141"
                            fill="#A276FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_11_7201">
                            <rect width="23" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span>Start typing..</span>
                  </div>
                </div>
              </div>
            </div>

            
          </div>
          {/* End */}

          
        </div>

        <div className="lg:absolute inset-y-0 lg:right-0 top-[8872px] -z-10">
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
              strokeOpacity="0.36"
              strokeWidth="188"
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
                <stop stopColor="#FAF2FF" stopOpacity="0.57" />
                <stop offset="0.645833" stopColor="#EDDCF7" />
                <stop offset="0.711458" stopColor="#EAD0F8" />
                <stop offset="1" stopColor="#DA99FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute inset-y-0 lg:left-[32px] top-[8271px] -z-10">
          <svg width="1226" height="2076" viewBox="0 0 1226 2076" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1038" cy="1038" r="820" stroke="url(#paint0_linear_11_6943)" strokeOpacity="0.1" strokeWidth="435"/>
            <defs>
            <linearGradient id="paint0_linear_11_6943" x1="1150.22" y1="372.541" x2="1035.84" y2="1857.83" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FAF2FF" stopOpacity="0.57"/>
            <stop offset="0.645833" stopColor="#EDDCF7"/>
            <stop offset="0.711458" stopColor="#EAD0F8"/>
            <stop offset="1" stopColor="#DA99FF"/>
            </linearGradient>
            </defs>
          </svg>
        </div>

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

        <div className="absolute -z-10 bottom-[1108px] left-[-144px] opacity-[0.6]">
          <svg width="1437" height="1426" viewBox="0 0 1437 1426" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M468.796 406.626C438.2 196.734 269.338 30.7075 55.8604 0.62484C19.04 -4.57958 -13.9996 23.387 -13.9996 59.9322L-13.9997 415.319C-13.9997 448.433 13.2811 475.256 46.9605 475.256L408.417 475.256C445.645 475.313 474.089 442.828 468.796 406.626ZM316.977 278.346C316.977 201.081 253.283 138.456 174.698 138.456C96.1131 138.456 32.4184 201.08 32.4184 278.346C32.4184 355.611 96.113 418.236 174.698 418.236C253.283 418.236 316.977 355.612 316.977 278.346ZM227.689 475.312C94.1926 475.312 -14.0005 581.687 -14.0005 712.942C-14.0005 844.196 94.1926 950.572 227.689 950.572C361.184 950.572 469.377 844.196 469.377 712.942C469.435 581.745 361.185 475.312 227.689 475.312ZM227.689 531.874C125.952 531.874 43.5279 612.914 43.5279 712.942C43.5279 812.969 125.952 894.009 227.689 894.009C329.425 894.009 411.849 812.969 411.849 712.942C411.849 612.971 329.425 531.874 227.689 531.874ZM470.772 1357.26C501.368 1147.37 670.231 981.341 883.708 951.258C920.529 946.054 953.567 974.02 953.567 1010.57L953.567 1366.01C953.567 1399.12 926.287 1425.95 892.607 1425.95H531.15C493.923 1425.95 465.478 1393.46 470.772 1357.26ZM106.816 712.998C106.816 647.343 160.971 594.155 227.69 594.155C294.467 594.155 348.563 647.343 348.563 712.998C348.563 778.654 294.467 831.842 227.69 831.842C160.913 831.842 106.816 778.654 106.816 712.998ZM164.403 712.941C164.403 678.569 192.731 650.717 227.69 650.717C262.649 650.717 290.977 678.569 290.977 712.941C290.977 747.313 262.649 775.165 227.69 775.165C192.731 775.165 164.403 747.313 164.403 712.941ZM399.576 1425.32C186.099 1395.23 17.2371 1229.21 -13.3593 1019.32C-18.6526 983.114 9.73348 950.629 47.0193 950.686L408.476 950.686C442.156 950.686 469.436 977.509 469.436 1010.62L469.436 1366.01C469.436 1402.55 436.397 1430.52 399.576 1425.32ZM280.739 1287.49C202.154 1287.49 138.46 1224.86 138.46 1147.6C138.46 1070.33 202.154 1007.71 280.739 1007.71C359.324 1007.71 423.018 1070.33 423.018 1147.6C423.018 1224.86 359.324 1287.49 280.739 1287.49ZM470.772 543.998C501.368 753.891 670.231 919.917 883.708 950C920.528 955.204 953.567 927.237 953.567 890.635C953.567 860.724 931.115 835.56 901.042 831.27C821.061 819.946 749.397 783.172 694.894 729.584C640.39 675.996 602.988 605.536 591.471 526.898C587.166 497.273 561.515 475.254 531.093 475.254C493.923 475.311 465.478 507.796 470.772 543.998ZM738.523 524.211C757.369 604.793 821.878 668.219 903.837 686.749C929.314 692.525 953.571 673.194 953.513 647.458L953.513 515.461C953.513 493.27 935.248 475.312 912.678 475.312H778.426C752.308 475.312 732.648 499.161 738.523 524.211ZM1126.4 1086.84C1093.81 1100.12 1078.34 1136.85 1091.84 1168.89C1105.34 1200.93 1142.7 1216.15 1175.29 1202.88C1207.88 1189.6 1223.35 1152.87 1209.85 1120.83C1196.36 1088.79 1158.99 1073.57 1126.4 1086.84ZM1436.36 1019.37C1405.77 1229.27 1236.91 1395.29 1023.43 1425.38C986.608 1430.58 953.568 1402.61 953.626 1366.01V1010.62C953.626 977.51 980.908 950.687 1014.59 950.687H1376.04C1413.21 950.687 1441.66 983.172 1436.36 1019.37ZM1150.99 1024.92C1083.69 1024.92 1029.07 1078.57 1029.07 1144.79C1029.07 1211.02 1083.69 1264.67 1150.99 1264.67C1218.29 1264.67 1272.91 1210.96 1272.91 1144.79C1272.91 1078.62 1218.29 1024.92 1150.99 1024.92Z" fill="#8F00E0" fill-opacity="0.04"/>
          </svg>
        </div>

      </div>
      {/* footer */}
      <div>
        <Suspense fallback={`Loading...`}>
          <DynamicFooter />
        </Suspense>
      </div>
      {/* end */}
    </div>
  );
}
