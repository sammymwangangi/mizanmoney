import Image from "next/image";
import header from "../styles/header.module.css";
import dynamic from 'next/dynamic'
import Brand1 from "../public/brand1.png"
import Brand2 from "../public/brand2.png"
import Brand3 from "../public/brand3.png"
import Brand4 from "../public/brand4.png"
import Brand5 from "../public/brand5.png"
import Brand6 from "../public/brand6.png"
import Brand7 from "../public/brand7.png"
import Brand8 from "../public/brand8.png"
import Brand9 from "../public/brand9.png"
import Brand10 from "../public/brand10.png"
import Brand11 from "../public/brand11.png"
import {Suspense, useEffect} from 'react'


const DynamicNavbar = dynamic(() => import('../components/Nav'), {
    suspense: true,
})
const DynamicFooter = dynamic(() => import('../components/footer'), {
    suspense: true,
})

export default function BrandStory() {
    return (
        <div className={header.body}>
            <div className="relative overflow-hidden">
                <div className="md:mx-auto">
                    <div className="mx-auto max-w-[1290px] mb-[60.58px] md:mb-0">
                        {/* Navbar */}
                        <Suspense fallback={`Loading...`}>
                            <DynamicNavbar />
                        </Suspense>
                        {/* End */}
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-[120px] md:items-start md:pt-[200px] mb-[106px] md:mb-[128px] md:-ml-[75px]">
                        <div className="hidden md:block">
                            <svg width="610" height="178" viewBox="0 0 610 178" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M207.207 0.94873C158.319 0.94873 118.688 40.3856 118.688 89.0335C118.688 111.154 126.882 131.369 140.414 146.839H-95.694C-104.097 146.839 -110.908 153.617 -110.908 161.979C-110.908 170.34 -104.097 177.118 -95.694 177.118H521.482C570.37 177.118 610.001 137.681 610.001 89.0335C610.001 40.3856 570.37 0.94873 521.482 0.94873H207.207ZM521.482 146.839C553.564 146.839 579.573 120.959 579.573 89.0335C579.573 57.1083 553.564 31.2279 521.482 31.2279H207.207C175.124 31.2279 149.116 57.1083 149.116 89.0335C149.116 120.959 175.124 146.839 207.207 146.839H521.482Z" fill="url(#paint0_linear_11_7982)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_11_7982" x1="-35.9106" y1="231.769" x2="473.23" y2="-107.658" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#D155FF"/>
                                        <stop offset="0.1429" stopColor="#B532F2"/>
                                        <stop offset="0.2827" stopColor="#A016E8"/>
                                        <stop offset="0.4061" stopColor="#9406E2"/>
                                        <stop offset="0.5" stopColor="#8F00E0"/>
                                        <stop offset="1" stopColor="#A08CFF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="block md:hidden mb-[34.33px] md:mb-auto"> 
                            <svg width="255" height="80" viewBox="0 0 255 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M75.394 0.671387C53.5949 0.671387 35.9232 18.3554 35.9232 40.1697C35.9232 50.0886 39.5768 59.1536 45.6108 66.0905H-59.6701C-63.4168 66.0905 -66.4541 69.1299 -66.4541 72.8792C-66.4541 76.6286 -63.4168 79.668 -59.6701 79.668H215.53C237.329 79.668 255 61.984 255 40.1697C255 18.3554 237.329 0.671387 215.53 0.671387H75.394ZM215.53 66.0905C229.835 66.0905 241.432 54.4853 241.432 40.1697C241.432 25.8541 229.835 14.2489 215.53 14.2489H75.394C61.0883 14.2489 49.4913 25.8541 49.4913 40.1697C49.4913 54.4853 61.0883 66.0905 75.394 66.0905H215.53Z" fill="url(#paint0_linear_6322_19752)"/>
                                <defs>
                                    <linearGradient id="paint0_linear_6322_19752" x1="-33.0126" y1="104.174" x2="194.797" y2="-46.8485" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#D155FF"/>
                                    <stop offset="0.1429" stop-color="#B532F2"/>
                                    <stop offset="0.2827" stop-color="#A016E8"/>
                                    <stop offset="0.4061" stop-color="#9406E2"/>
                                    <stop offset="0.5" stop-color="#8F00E0"/>
                                    <stop offset="1" stop-color="#A08CFF"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="mx-[20px] md:mx-auto">
                            <h1 className={header.heading}>Mizan Money Brand Story</h1>
                        </div>
                    </div>
                    <div className="md:px-[58px] mx-[20px] md:mx-0">
                        <div className="mb-[60px]">
                            <h1 className={header.what}>What is<br></br> Mizan?</h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-[50px] md:gap-[99px]">
                            <div className="flex flex-col w-[318px] md:w-[500px]">
                                <div>
                                    <p className="text-[18px] md:text-[22px] leading-[32.4px] md:leading-[39.6px] text-[#1B1C39]">
                                        <span className="text-[#8F00E0]">Mizan</span> is an Arabic term for ”balance”.
                                        Our aim is to put a financial balance in
                                        our everyday lives.
                                        It’s a “neo” way to: borrow better, spend
                                        better, save better & invest better.
                                    </p>
                                    <p className="text-[18px] md:text-[22px] leading-[32.4px] md:leading-[39.6px] text-[#1B1C39] mt-[40px]">
                                        So, naturally, our first challenge will be focused on spending. With “Mizan - Pay later” you can easily spread your payments without worrying about interest.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col text-[34px] md:text-[60px] leading-[42.67px] md:leading-[75.3px] font-light justify-center">
                                <div className="flex gap-0"><span className="text-[#8F00E0]">M</span>icro-lending &</div>
                                <div className="flex gap-0"><span className="text-[#8F00E0]">I</span>nvestment</div>
                                <div className="flex gap-0"><span className="text-[#8F00E0]">Z</span>ero-interest</div>
                                <div className="flex gap-0"><span className="text-[#8F00E0]">A</span>pplication for</div>
                                <div className="flex gap-0"><span className="text-[#8F00E0]">N</span>ovice.</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[100px] md:mt-[95px] mb-[40px] md:mb-[60px] md:px-[58px] mx-[20px] md:mx-auto">
                        <h1 className={header.what}>Where faith meets finance</h1>
                    </div>
                    <div>
                        <Image src={Brand1} alt="first brand" />
                    </div>
                    <div className="relative flex mt-[120px] gap-0 px-0 md:px-[58px]">
                        <div className="flex-1 flex-col">
                            <div className="mb-[60px] w-[320px] md:w-[603px] mx-[20px] md:mx-0">
                                <h1 className="font-semibold text-[#1B1C39] text-[46px] md:text-[80px] leading-[55px] md:leading-[82px]">What is<br></br> a Neobank?</h1>
                            </div>
                            <div className="w-[320px] md:w-[580px] mx-[20px] md:mx-0">
                                <p className="tex-[18px] md:text-[20px] leading-[32.4px] md:leading-[36px] text-[#1B1C39]">
                                    “Time” at it’s essence, is money. At Mizan, we set sail to disrupt traditional banking ways which has costed us the most important currency; TIME.
                                </p>
                                <p className="tex-[18px] md:text-[20px] leading-[32.4px] md:leading-[36px] text-[#1B1C39] mt-[40px]">
                                    We are tired of those long queues, 9-4 customer service, hidden-fees, tricks and cost of accessing halal credit. At Mizan, we embarked on a journey to help people make more out of their money without the need of physical human interaction.
                                </p>
                                <p className="tex-[18px] md:text-[20px] leading-[32.4px] md:leading-[36px] text-[#1B1C39] mt-[40px]">
                                    Different by traditional design, we are not building a bank but more. A mobile first, customer-obssessed, innovative financial technology company that is built on 100% islamic shariah legal framework. That’s neo banking.
                                </p>
                            </div>
                        </div>
                        <div className="absolute right-0 pr-[100px] hidden md:block">
                            <svg width="654" height="643" viewBox="0 0 654 643" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" fillRule="evenodd" clipRule="evenodd" d="M435.897 458.939C449.672 553.435 525.695 628.181 621.805 641.725C638.382 644.068 653.257 631.477 653.257 615.024L653.257 455.025C653.257 440.117 640.975 428.041 625.812 428.041L463.08 428.041C446.32 428.015 433.514 442.64 435.897 458.939ZM504.248 516.692C504.248 551.478 532.923 579.672 568.303 579.672C603.683 579.672 632.359 551.478 632.359 516.692C632.359 481.906 603.683 453.712 568.303 453.712C532.923 453.712 504.248 481.906 504.248 516.692ZM544.441 428.016C604.542 428.016 653.252 380.124 653.252 321.032C653.252 261.94 604.543 214.049 544.441 214.049C484.34 214.049 435.631 261.94 435.631 321.032C435.604 380.099 484.34 428.016 544.441 428.016ZM544.441 402.551C590.244 402.551 627.352 366.066 627.352 321.032C627.352 275.999 590.244 239.514 544.441 239.514C498.639 239.514 461.53 275.999 461.53 321.032C461.53 366.04 498.639 402.551 544.441 402.551ZM435.006 30.9474C421.231 125.443 345.207 200.19 249.098 213.733C232.521 216.077 217.646 203.486 217.646 187.033L217.646 27.0079C217.646 12.0998 229.928 0.0238888 245.091 0.0238901L407.823 0.0239043C424.583 0.0239058 437.389 14.6488 435.006 30.9474ZM598.86 321.007C598.86 350.566 574.479 374.511 544.442 374.511C514.378 374.511 490.023 350.566 490.023 321.007C490.023 291.448 514.378 267.502 544.442 267.502C574.506 267.502 598.86 291.448 598.86 321.007ZM572.934 321.033C572.934 336.507 560.181 349.046 544.442 349.046C528.703 349.046 515.949 336.507 515.949 321.033C515.949 305.558 528.703 293.019 544.442 293.019C560.181 293.019 572.934 305.558 572.934 321.033ZM467.061 0.307601C563.17 13.8511 639.194 88.598 652.969 183.094C655.352 199.392 642.572 214.017 625.786 213.991L463.054 213.991C447.891 213.991 435.609 201.916 435.609 187.007L435.609 27.0084C435.609 10.5553 450.484 -2.03548 467.061 0.307601ZM520.563 62.3606C555.942 62.3606 584.618 90.5549 584.618 125.341C584.618 160.126 555.942 188.321 520.563 188.321C485.183 188.321 456.507 160.126 456.507 125.341C456.507 90.5549 485.183 62.3606 520.563 62.3606ZM435.006 397.092C421.231 302.597 345.207 227.85 249.098 214.306C232.521 211.963 217.646 224.554 217.646 241.033C217.646 254.499 227.754 265.828 241.294 267.76C277.302 272.858 309.566 289.414 334.104 313.54C358.642 337.666 375.481 369.387 380.666 404.791C382.604 418.129 394.152 428.042 407.849 428.042C424.583 428.016 437.389 413.391 435.006 397.092ZM314.464 406.001C305.979 369.722 276.937 341.167 240.038 332.825C228.568 330.224 217.647 338.927 217.674 350.514L217.674 409.941C217.674 419.931 225.897 428.016 236.058 428.016L296.499 428.016C308.258 428.016 317.109 417.279 314.464 406.001ZM139.834 152.698C154.506 146.722 161.473 130.184 155.396 115.758C149.318 101.333 132.498 94.4822 117.826 100.458C103.154 106.433 96.1863 122.971 102.264 137.397C108.341 151.823 125.162 158.673 139.834 152.698ZM0.285807 183.067C14.0607 88.5716 90.0843 13.8248 186.194 0.28127C202.771 -2.06181 217.646 10.529 217.62 27.0078L217.619 187.007C217.619 201.915 205.337 213.991 190.174 213.991L27.4428 213.991C10.7088 213.991 -2.09725 199.366 0.285807 183.067ZM128.764 180.57C159.063 180.57 183.654 156.418 183.654 126.602C183.654 96.7853 159.063 72.6335 128.764 72.6335C98.4643 72.6335 73.874 96.811 73.874 126.602C73.874 156.392 98.4643 180.57 128.764 180.57Z" fill="#F1F6FB"/>
                            </svg>
                        </div>
                        <div className="absolute left-10 -top-[105px] md:hidden opacity-60">
                            <svg width="309" height="303" viewBox="0 0 309 303" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M205.7 216.574C212.201 261.167 248.076 296.44 293.431 302.831C301.253 303.937 308.273 297.995 308.273 290.231L308.273 214.727C308.273 207.692 302.477 201.993 295.322 201.993L218.528 201.993C210.619 201.981 204.576 208.882 205.7 216.574ZM237.955 243.828C237.955 260.243 251.487 273.548 268.183 273.548C284.879 273.548 298.411 260.243 298.411 243.828C298.411 227.412 284.879 214.107 268.183 214.107C251.487 214.107 237.955 227.412 237.955 243.828ZM256.923 201.981C285.285 201.981 308.271 179.381 308.271 151.496C308.271 123.61 285.285 101.01 256.923 101.01C228.561 101.01 205.575 123.61 205.575 151.496C205.563 179.369 228.561 201.981 256.923 201.981ZM256.923 189.964C278.537 189.964 296.049 172.747 296.049 151.496C296.049 130.244 278.537 113.027 256.923 113.027C235.309 113.027 217.797 130.244 217.797 151.496C217.797 172.735 235.309 189.964 256.923 189.964ZM205.28 14.6038C198.779 59.1966 162.903 94.4699 117.549 100.861C109.726 101.967 102.707 96.0252 102.707 88.2609L102.707 12.7448C102.707 5.70955 108.503 0.0109078 115.658 0.0109085L192.452 0.0109152C200.361 0.0109159 206.404 6.91247 205.28 14.6038ZM282.603 151.483C282.603 165.432 271.098 176.732 256.923 176.732C242.736 176.732 231.243 165.432 231.243 151.483C231.243 137.534 242.736 126.234 256.923 126.234C271.11 126.234 282.603 137.534 282.603 151.483ZM270.369 151.496C270.369 158.798 264.35 164.715 256.923 164.715C249.496 164.715 243.478 158.798 243.478 151.496C243.478 144.193 249.496 138.276 256.923 138.276C264.35 138.276 270.369 144.193 270.369 151.496ZM220.406 0.144859C265.761 6.5361 301.637 41.8094 308.137 86.4022C309.262 94.0935 303.231 100.995 295.309 100.983L218.516 100.983C211.36 100.983 205.564 95.2842 205.564 88.249L205.564 12.745C205.564 4.9808 212.584 -0.960854 220.406 0.144859ZM245.654 29.4279C262.35 29.4279 275.882 42.7328 275.882 59.1483C275.882 75.5638 262.35 88.8687 245.654 88.8687C228.958 88.8687 215.426 75.5638 215.426 59.1483C215.426 42.7328 228.958 29.4278 245.654 29.4279ZM205.28 187.388C198.779 142.796 162.903 107.522 117.549 101.131C109.726 100.025 102.707 105.967 102.707 113.744C102.707 120.098 107.477 125.445 113.866 126.356C130.859 128.762 146.084 136.575 157.664 147.96C169.243 159.345 177.189 174.314 179.636 191.022C180.551 197.316 186.001 201.994 192.464 201.994C200.361 201.981 206.404 195.08 205.28 187.388ZM148.397 191.593C144.393 174.472 130.688 160.997 113.275 157.06C107.863 155.833 102.709 159.94 102.722 165.408L102.722 193.452C102.722 198.166 106.602 201.981 111.397 201.981L139.92 201.981C145.468 201.981 149.646 196.914 148.397 191.593ZM65.9877 72.0579C72.9115 69.238 76.1994 61.4336 73.3314 54.626C70.4634 47.8185 62.5256 44.5858 55.6019 47.4056C48.6781 50.2255 45.3902 58.03 48.2582 64.8375C51.1262 71.645 59.0639 74.8777 65.9877 72.0579ZM0.134815 86.3899C6.63522 41.7971 42.511 6.5239 87.8655 0.132671C95.6882 -0.973041 102.708 4.96861 102.695 12.745L102.695 88.249C102.695 95.2842 96.8991 100.983 89.7438 100.983L12.9503 100.983C5.05342 100.983 -0.989789 94.0813 0.134815 86.3899ZM60.7639 85.2113C75.0623 85.2113 86.6666 73.8141 86.6666 59.7436C86.6666 45.6732 75.0623 34.2759 60.764 34.2759C46.4656 34.2759 34.8613 45.6853 34.8613 59.7436C34.8613 73.8019 46.4655 85.2113 60.7639 85.2113Z" fill="#F1F6FB"/>
                            </svg>
                        </div>
                    </div>
                    <div className="md:flex gap-[20px] mx-[20px] md:mx-0 md:px-[58px] mt-[50px] md:mt-[36px]">
                        <div className="md:mt-[190px]">
                            <Image src={Brand2} alt="brand2" />
                        </div>
                        <div>
                            <Image src={Brand3} alt="brand3" />
                        </div>
                    </div>
                    <div className="mx-[20px] md:mx-0 md:px-[58px] mt-[100px] md:mt-[120px]">
                        <div className="font-semibold text-[#1B1C39] text-[46px] md:text-[80px] leading-[55px] md:leading-[82px] mb-[40px] md:mb-[60px]">Halal Certification</div>
                        <div className="flex flex-col md:flex-row gap-[41px]">
                             <div className="text-[18px] md:text-[22px] leading-[32.4px] md:leading-[39.6px] text-[#1B1C39] w-[320px] md:w-[559px]">
                                 <p>
                                    To find the best, we spoke to different experts around the world and appointed Shariah Review Bureau (www.shariyah.net) as an independent shariah board to oversee our shariah compliance.
                                 </p>
                             </div>
                            <div className="flex flex-col space-y-[40px] w-[320px] md:w-[479px]">
                                <div className="flex space-x-[30px] items-center">
                                    <div className="w-[48px] md:w-[58px] h-[48px] md:h-[58px] flex rounded-full bg-[rgba(230,_220,_249,_0.38)] items-center justify-center">
                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="#8F00E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="black" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1 text-left text-[16px] md:text-[20px] leading-[28.8px] md:leading-[36px] text-[#1B1C39]">
                                        First shariah compliant buy now pay later in Africa.
                                    </div>
                                </div>
                                <div className="flex space-x-[30px] items-center">
                                    <div className="w-[48px] md:w-[58px] h-[48px] md:h-[58px] flex rounded-full bg-[rgba(230,_220,_249,_0.38)] items-center justify-center">
                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="#8F00E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="black" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1 text-left text-[16px] md:text-[20px] leading-[28.8px] md:leading-[36px] text-[#1B1C39]">
                                        Globally recognized shariah independent audit  committee
                                    </div>
                                </div>
                                <div className="flex space-x-[30px] items-center">
                                <div className="w-[48px] md:w-[58px] h-[48px] md:h-[58px] flex rounded-full bg-[rgba(230,_220,_249,_0.38)] items-center justify-center">
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5.16667L6.89474 11L17 1" stroke="#8F00E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M1 5.16667L6.89474 11L17 1" stroke="black" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="flex-1 text-left text-[16px] md:text-[20px] leading-[28.8px] md:leading-[36px] text-[#1B1C39]">
                                    Shariah compliant investment banking (coming soon).
                                </div>
                            </div>
                                <div className="flex space-x-[30px] items-center">
                                    <div className="w-[48px] md:w-[58px] h-[48px] md:h-[58px] flex rounded-full bg-[rgba(230,_220,_249,_0.38)] items-center justify-center">
                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="#8F00E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="black" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1 text-left text-[16px] md:text-[20px] leading-[28.8px] md:leading-[36px] text-[#1B1C39]">
                                        Sukuks, and Islamic fund structuring (coming soon).
                                    </div>
                                </div>
                                <div className="flex space-x-[30px] items-center">
                                    <div className="w-[48px] md:w-[58px] h-[48px] md:h-[58px] flex rounded-full bg-[rgba(230,_220,_249,_0.38)] items-center justify-center">
                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="#8F00E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="black" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1 text-left text-[16px] md:text-[20px] leading-[28.8px] md:leading-[36px] text-[#1B1C39]">
                                        Shariah merchant & corporate banking (coming soon).
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[100px] md:mt-[95px] mb-[40px] md:mb-[60px] mx-[20px] md:mx-0 md:px-[58px]">
                        <h1 className={header.what}>Money outside the box</h1>
                    </div>
                    <div>
                        <Image src={Brand4} alt="first brand" />
                    </div>
                    <div className="relative flex mt-[140px] md:mt-[120px] gap-0 mx-[20px] md:mx-0 md:px-[58px]">
                        <div className="flex-1 flex-col">
                            <div className="mb-[40px] md:mb-[60px] w-[320px] md:w-[580px]">
                                <h1 className={header.what}>Our Ethos</h1>
                            </div>
                            <div className="w-[320px] md:w-[580px]">
                                <p className="text-[18px] md:text-[22px] leading-[32.4px] md:leading-[39.6px] text-[#1B1C39]">
                                    Mainstream? No, thanks. We are on mission to change your relationship with the word «Bank». The B-word is outdated and relatable to stress, and outdated financial products.
                                </p>
                                <p className="text-[18px] md:text-[22px] leading-[32.4px] md:leading-[39.6px] text-[#1B1C39] mt-[30px] md:mt-[40px]">
                                    To remove the exisiting frictions and painpoints of the traditional banking sytems, we asked over 1,000 millenials what they would like from modern financial technology company, and we listened.
                                </p>
                                <p className="text-[18px] md:text-[22px] leading-[32.4px] md:leading-[39.6px] text-[#1B1C39] mt-[30px] md:mt-[40px]">
                                    We started off by committing to no hidden fees, tricks or catches, just a simple way to navigate your money.Our purpose is to help people make more out of their money, and spend smarter.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 hidden md:block">
                            <svg className="absolute bottom-40 -z-10" width="710" height="1084" viewBox="0 0 710 1084" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" fillRule="evenodd" clipRule="evenodd" d="M550.999 1084C855.342 1084 1102 841.372 1102 542C1102 242.629 855.342 0.000148297 550.999 9.55309e-05C246.656 4.27646e-05 1.0634e-05 242.628 -4.21568e-05 542C-0.132706 841.241 246.656 1084 550.999 1084ZM550.999 954.989C782.936 954.989 970.847 770.149 970.847 542C970.847 313.852 782.937 129.011 550.999 129.011C319.062 129.011 131.151 313.851 131.151 542C131.151 770.018 319.062 954.989 550.999 954.989Z" fill="#8F00E0" fillOpacity="0.04"/>
                            </svg>
                        </div>
                        <div className="flex-1 md:hidden absolute -top-[400px] -right-[50px] rotate-40 -z-10">
                            <svg width="241" height="474" viewBox="0 0 241 474" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M241 474C374.115 474 482 367.906 482 237C482 106.094 374.115 6.48631e-05 241 4.17839e-05C107.884 1.87047e-05 4.65618e-06 106.094 -1.84276e-05 237C-0.0580439 367.849 107.884 474 241 474ZM241 417.588C342.446 417.588 424.636 336.763 424.636 237C424.636 137.238 342.446 56.4124 241 56.4124C139.553 56.4124 57.3638 137.238 57.3638 237C57.3637 336.705 139.553 417.588 241 417.588Z" fill="#8F00E0" fill-opacity="0.04"/>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[20px] mx-[20px] md:mx-0 md:px-[58px] mt-[36px]">
                        <div className="mt-[50px] md:mt-[190px]">
                            <Image src={Brand5} alt="brand2" />
                        </div>
                        <div>
                            <Image src={Brand6} alt="brand3" />
                        </div>
                    </div>
                    <div className="mx-[20px] md:mx-0 md:px-[58px] mt-[100px] md:mt-[120px]">
                        <div className="text-[46px] md:text-[80px] leading-[55px] md:leading-[82px] text-[#1B1C39] font-semibold mb-[40px] md:mb-[60px]">Mizan Knowledge Central</div>
                        <div className="flex flex-col md:flex-row gap-[50px] md:gap-[100px]">
                            <div className="flex flex-col space-y-[30px] md:space-y-[40px] text-[18px] md:text-[22px] leading-[32.4px] md:leading-[39.6px] text-[#1B1C39] w-[320px] md:w-[500px]">
                                <p>
                                    We understand your busy lifestyle, we understand that in as much as Mizan will do the heavy-lifting on your finances, you’d love to learn a thing or two about , “sukuks” or islamic bonds.
                                </p>
                                <p>
                                    We are busy curating a free learning experience to ensure you are upto date with say “ESG,Stock investing, blockchain and future of finance”, through MizanLearn, our exclusive in-app content platform.
                                </p>
                            </div>
                            <div className="w-[320px] md:w-[479px] lg:mt-[288px]">
                                <Image src={Brand7} alt="brand7" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[100px] md:mt-[95px] mb-[40px] md:mb-[60px] mx-[20px] md:mx-0 md:px-[58px]">
                        <h1 className={header.what}>Meet the team</h1>
                    </div>
                    <div>
                        <Image src={Brand8} alt="first brand" />
                    </div>
                    <div className="mx-[20px] md:mx-0 md:px-[58px] mt-[140px] md:mt-[120px]">
                        <div className="text-[46px] md:text-[80px] leading-[55px] md:leading-[82px] text-[#1B1C39] font-semibold mb-[40px] md:mb-[60px]">What is a Halal <br></br>Buy now pay later?</div>
                        <div className="relative md:flex">
                            <div className="flex flex-col space-y-[40px] text-[18px] md:text-[22px] leading-[32.4px] md:leading-[39.6px] text-[#1B1C39] w-[320px] md:w-[580px]">
                                <p>
                                    The client purchases only permitted goods/services from mizan via the merchant with a cost plus financing structure (Murabaha) or no cost plus financing structure (Tawliyah).
                                </p>
                                <p>
                                    The client purchases only permitted goods/services from mizan via the merchant with a cost plus financing structure (Murabaha) or no cost plus financing structure (Tawliyah).
                                </p>
                                <p>
                                    The client signs two separate shariah-compliant and approved agreements in order to conclude and execute an effective Shariah compliant Murabaha transaction.
                                </p>
                                <p>
                                    The client signs two separate shariah-compliant and approved agreements in order to conclude and execute an effective Shariah compliant Murabaha transaction.
                                </p>
                            </div>
                            <div className="hidden md:block absolute left-[570px]">
                                <svg width="663" height="651" viewBox="0 0 663 651" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.6" d="M1.83132 94.1423C43.7318 381.581 274.982 608.947 567.331 650.144C617.755 657.272 663 618.972 663 568.847C663 527.885 632.252 493.424 591.069 487.549C481.538 472.042 383.398 421.681 308.757 348.294C234.117 274.907 182.896 178.416 167.124 70.7241C161.229 30.1538 126.1 0.000104117 84.4385 9.32516e-05C33.5365 0.0784491 -5.41763 44.565 1.83132 94.1423Z" fill="#8F00E0" fillOpacity="0.04"/>
                                    <path opacity="0.6" d="M573.698 379.708C426.36 346.431 310.392 232.529 276.512 87.8145C265.951 42.8288 301.295 0.00011929 348.246 0.000131535L589.592 0.000194478C630.165 0.00020506 663 32.2501 663 72.1004L663 309.148C663.104 355.367 619.499 390.081 573.698 379.708Z" fill="#8F00E0" fillOpacity="0.04"/>
                                </svg>
                            </div>
                            <div className="md:hidden absolute -top-[430px]"> 
                                <svg width="329" height="324" viewBox="0 0 329 324" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" d="M0.942242 46.7109C21.7324 189.332 136.474 302.146 281.531 322.587C306.55 326.124 329 307.12 329 282.249C329 261.925 313.744 244.826 293.309 241.911C238.962 234.217 190.267 209.229 153.232 172.816C116.197 136.403 90.7827 88.5255 82.9567 35.0912C80.0319 14.9611 62.6018 -0.000496723 41.9302 -0.000502114C16.6737 0.0383707 -2.65452 22.1116 0.942242 46.7109Z" fill="#8F00E0" fill-opacity="0.04"/>
                                <path opacity="0.6" d="M284.69 188.403C211.584 171.891 154.044 115.375 137.233 43.5712C131.993 21.2503 149.53 -0.000382499 172.826 -0.000376424L292.577 -0.000345193C312.708 -0.000339942 329 16.0014 329 35.7742L329 153.392C329.052 176.325 307.416 193.55 284.69 188.403Z" fill="#8F00E0" fill-opacity="0.04"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex gap-[20px] mx-[20px] md:mx-0 md:px-[58px] md:mt-[36px]">
                        <div className="mt-[50px] md:mt-[190px]">
                            <Image src={Brand9} alt="brand9" />
                        </div>
                        <div>
                            <Image src={Brand10} alt="brand10" />
                        </div>
                    </div>
                    <div className="mt-[100px] md:mt-[95px] mb-[40px] md:mb-[60px] mx-[20px] md:mx-0 md:px-[58px]">
                        <h1 className={header.what}>Mizan Donate - <br></br>First Islamic crowdfunding</h1>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[30px] md:gap-[70px] mb-[50px] md:mb-[60px] mx-[20px] md:mx-0 md:px-[58px] text-[18px] md:text-[22px] leading-[32.4px] md:leading-[39.6px] text-[#1B1C39]">
                        <div className="w-[320px] md:w-[530px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                        </div>
                        <div className="w-[320px] md:w-[530px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                        </div>
                    </div>
                    <div className="mb-[70px]">
                        <Image src={Brand11} alt="brand11" />
                    </div>
                </div>
            </div>
            {/* footer */}
            <div className="pt-12">
                <Suspense fallback={`Loading...`}>
                    <DynamicFooter />
                </Suspense>
            </div>
            {/* end */}
        </div>
    );
}