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


const DynamicNavbar = dynamic(() => import('../components/navbar'), {
    suspense: true,
})
const DynamicFooter = dynamic(() => import('../components/footer'), {
    suspense: true,
})

export default function BrandStory() {
    return (
        <div className={header.body}>
            <div className="relative overflow-hidden">
                <div className="mx-auto">
                    <div className="mx-auto max-w-[1290px]">
                        {/* Navbar */}
                        <Suspense fallback={`Loading...`}>
                            <DynamicNavbar />
                        </Suspense>
                        {/* End */}
                    </div>
                    <div className="lg:flex gap-[120px] items-start lg:pt-[200px] mb-[128px] -ml-[75px]">
                        <div className="">
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
                        <div className="">
                            <h1 className="heading">Mizan Money Brand Story</h1>
                            <style jsx>{`
                                .heading {
                                  font-family: 'Poppins';
                                    font-style: normal;
                                    font-weight: 700;
                                    font-size: 86px;
                                    line-height: 82px;
                                    background: linear-gradient(271.13deg, #3A353C 0.09%, #A18DFF 90.29%, #A18DFF 90.29%);
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                    background-clip: text;
                                    text-fill-color: transparent;
                                }
                          ` }</style>
                        </div>
                    </div>
                    <div className=" px-[58px]">
                        <div className="mb-[60px]">
                            <h1 className="what">What is<br></br> Mizan?</h1>
                            <style jsx>{`
                                    .what {
                                      font-weight: 600;
                                        font-size: 80px;
                                        line-height: 82px;
                                        color: #1B1C39;
                                    }`}</style>
                        </div>
                        <div className="flex gap-[99px]">
                            <div className="flex w-[500px] flex-col">
                                <div>
                                    <p className="text-[22px] leading-[39.6px] text-[#1B1C39]">
                                        <span className="text-[#8F00E0]">Mizan</span> is an Arabic term for ”balance”.
                                        Our aim is to put a financial balance in
                                        our everyday lives.
                                        It’s a “neo” way to: borrow better, spend
                                        better, save better & invest better.
                                    </p>
                                    <p className="text-[22px] leading-[39.6px] text-[#1B1C39] mt-[40px]">
                                        So, naturally, our first challenge will be focused on spending. With “Mizan - Pay later” you can easily spread your payments without worrying about interest.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col text-[60px] leading-[75.3px] font-light justify-center">
                                <div className="flex gap-0"><span className="text-[#8F00E0]">M</span>icro-lending &</div>
                                <div className="flex gap-0"><span className="text-[#8F00E0]">I</span>nvestment</div>
                                <div className="flex gap-0"><span className="text-[#8F00E0]">Z</span>ero-interest</div>
                                <div className="flex gap-0"><span className="text-[#8F00E0]">A</span>pplication for</div>
                                <div className="flex gap-0"><span className="text-[#8F00E0]">N</span>ovice.</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[95px] mb-[60px] px-[58px]">
                        <h1 className="what">Where faith meets finance</h1>
                        <style jsx>{`
                            .what {
                              font-weight: 600;
                                font-size: 80px;
                                line-height: 82px;
                                color: #1B1C39;
                            }`}</style>
                    </div>
                    <div>
                        <Image src={Brand1} alt="first brand" />
                    </div>
                    <div className="relative flex mt-[120px] gap-0 px-[58px]">
                        <div className="flex-1 flex-col">
                            <div className="mb-[60px] w-[603px]">
                                <h1 className="what">What is<br></br> a Neobank?</h1>
                                <style jsx>{`
                                    .what {
                                      font-weight: 600;
                                        font-size: 80px;
                                        line-height: 82px;
                                        color: #1B1C39;
                                    }`}</style>
                            </div>
                            <div className="w-[580px]">
                                <p className="text-[20px] leading-[36px] text-[#1B1C39]">
                                    “Time” at it’s essence, is money. At Mizan, we set sail to disrupt traditional banking ways which has costed us the most important currency; TIME.
                                </p>
                                <p className="text-[20px] leading-[36px] text-[#1B1C39] mt-[40px]">
                                    We are tired of those long queues, 9-4 customer service, hidden-fees, tricks and cost of accessing halal credit. At Mizan, we embarked on a journey to help people make more out of their money without the need of physical human interaction.
                                </p>
                                <p className="text-[20px] leading-[36px] text-[#1B1C39] mt-[40px]">
                                    Different by traditional design, we are not building a bank but more. A mobile first, customer-obssessed, innovative financial technology company that is built on 100% islamic shariah legal framework. That’s neo banking.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <svg className="absolute right-10" width="654" height="643" viewBox="0 0 654 643" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" fillRule="evenodd" clipRule="evenodd" d="M435.897 458.939C449.672 553.435 525.695 628.181 621.805 641.725C638.382 644.068 653.257 631.477 653.257 615.024L653.257 455.025C653.257 440.117 640.975 428.041 625.812 428.041L463.08 428.041C446.32 428.015 433.514 442.64 435.897 458.939ZM504.248 516.692C504.248 551.478 532.923 579.672 568.303 579.672C603.683 579.672 632.359 551.478 632.359 516.692C632.359 481.906 603.683 453.712 568.303 453.712C532.923 453.712 504.248 481.906 504.248 516.692ZM544.441 428.016C604.542 428.016 653.252 380.124 653.252 321.032C653.252 261.94 604.543 214.049 544.441 214.049C484.34 214.049 435.631 261.94 435.631 321.032C435.604 380.099 484.34 428.016 544.441 428.016ZM544.441 402.551C590.244 402.551 627.352 366.066 627.352 321.032C627.352 275.999 590.244 239.514 544.441 239.514C498.639 239.514 461.53 275.999 461.53 321.032C461.53 366.04 498.639 402.551 544.441 402.551ZM435.006 30.9474C421.231 125.443 345.207 200.19 249.098 213.733C232.521 216.077 217.646 203.486 217.646 187.033L217.646 27.0079C217.646 12.0998 229.928 0.0238888 245.091 0.0238901L407.823 0.0239043C424.583 0.0239058 437.389 14.6488 435.006 30.9474ZM598.86 321.007C598.86 350.566 574.479 374.511 544.442 374.511C514.378 374.511 490.023 350.566 490.023 321.007C490.023 291.448 514.378 267.502 544.442 267.502C574.506 267.502 598.86 291.448 598.86 321.007ZM572.934 321.033C572.934 336.507 560.181 349.046 544.442 349.046C528.703 349.046 515.949 336.507 515.949 321.033C515.949 305.558 528.703 293.019 544.442 293.019C560.181 293.019 572.934 305.558 572.934 321.033ZM467.061 0.307601C563.17 13.8511 639.194 88.598 652.969 183.094C655.352 199.392 642.572 214.017 625.786 213.991L463.054 213.991C447.891 213.991 435.609 201.916 435.609 187.007L435.609 27.0084C435.609 10.5553 450.484 -2.03548 467.061 0.307601ZM520.563 62.3606C555.942 62.3606 584.618 90.5549 584.618 125.341C584.618 160.126 555.942 188.321 520.563 188.321C485.183 188.321 456.507 160.126 456.507 125.341C456.507 90.5549 485.183 62.3606 520.563 62.3606ZM435.006 397.092C421.231 302.597 345.207 227.85 249.098 214.306C232.521 211.963 217.646 224.554 217.646 241.033C217.646 254.499 227.754 265.828 241.294 267.76C277.302 272.858 309.566 289.414 334.104 313.54C358.642 337.666 375.481 369.387 380.666 404.791C382.604 418.129 394.152 428.042 407.849 428.042C424.583 428.016 437.389 413.391 435.006 397.092ZM314.464 406.001C305.979 369.722 276.937 341.167 240.038 332.825C228.568 330.224 217.647 338.927 217.674 350.514L217.674 409.941C217.674 419.931 225.897 428.016 236.058 428.016L296.499 428.016C308.258 428.016 317.109 417.279 314.464 406.001ZM139.834 152.698C154.506 146.722 161.473 130.184 155.396 115.758C149.318 101.333 132.498 94.4822 117.826 100.458C103.154 106.433 96.1863 122.971 102.264 137.397C108.341 151.823 125.162 158.673 139.834 152.698ZM0.285807 183.067C14.0607 88.5716 90.0843 13.8248 186.194 0.28127C202.771 -2.06181 217.646 10.529 217.62 27.0078L217.619 187.007C217.619 201.915 205.337 213.991 190.174 213.991L27.4428 213.991C10.7088 213.991 -2.09725 199.366 0.285807 183.067ZM128.764 180.57C159.063 180.57 183.654 156.418 183.654 126.602C183.654 96.7853 159.063 72.6335 128.764 72.6335C98.4643 72.6335 73.874 96.811 73.874 126.602C73.874 156.392 98.4643 180.57 128.764 180.57Z" fill="#F1F6FB"/>
                            </svg>
                        </div>
                    </div>
                    <div className="lg:flex gap-[20px] px-[58px]">
                        <div className="mt-[212px]">
                            <Image src={Brand2} alt="brand2" />
                        </div>
                        <div>
                            <Image src={Brand3} alt="brand3" />
                        </div>
                    </div>
                    <div className="px-[58px] mt-[120px]">
                        <div className="text-[80px] leading-[82px] text-[#1B1C39] font-semibold mb-[60px]">Halal Certification</div>
                        <div className="flex gap-[41px]">
                             <div className="text-[22px] leading-[39.6px] text-[#1B1C39] w-[559px]">
                                 <p>
                                    To find the best, we spoke to different experts around the world and appointed Shariah Review Bureau (www.shariyah.net) as an independent shariah board to oversee our shariah compliance.
                                 </p>
                             </div>
                            <div className="flex flex-col space-y-[40px] w-[479px]">
                                <div className="flex space-x-[30px] items-center">
                                    <div className="w-[58px] h-[58px] flex rounded-full bg-[rgba(230,_220,_249,_0.38)] items-center justify-center">
                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="#8F00E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="black" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1 text-left text-[20px] leading-[36px] text-[#1B1C39]">
                                        First shariah compliant buy now pay later in Africa.
                                    </div>
                                </div>
                                <div className="flex space-x-[30px] items-center">
                                    <div className="w-[58px] h-[58px] flex rounded-full bg-[rgba(230,_220,_249,_0.38)] items-center justify-center">
                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="#8F00E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="black" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1 text-left text-[20px] leading-[36px] text-[#1B1C39]">
                                        Globally recognized shariah independent audit  committee
                                    </div>
                                </div>
                                <div className="flex space-x-[30px] items-center">
                                <div className="w-[58px] h-[58px] flex rounded-full bg-[rgba(230,_220,_249,_0.38)] items-center justify-center">
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 5.16667L6.89474 11L17 1" stroke="#8F00E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M1 5.16667L6.89474 11L17 1" stroke="black" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className="flex-1 text-left text-[20px] leading-[36px] text-[#1B1C39]">
                                    Shariah compliant investment banking (coming soon).
                                </div>
                            </div>
                                <div className="flex space-x-[30px] items-center">
                                    <div className="w-[58px] h-[58px] flex rounded-full bg-[rgba(230,_220,_249,_0.38)] items-center justify-center">
                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="#8F00E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="black" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1 text-left text-[20px] leading-[36px] text-[#1B1C39]">
                                        Sukuks, and Islamic fund structuring (coming soon).
                                    </div>
                                </div>
                                <div className="flex space-x-[30px] items-center">
                                    <div className="w-[58px] h-[58px] flex rounded-full bg-[rgba(230,_220,_249,_0.38)] items-center justify-center">
                                        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="#8F00E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M1 5.16667L6.89474 11L17 1" stroke="black" strokeOpacity="0.2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1 text-left text-[20px] leading-[36px] text-[#1B1C39]">
                                        Shariah merchant & corporate banking (coming soon).
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[95px] mb-[60px] px-[58px]">
                        <h1 className="what">Money outside the box</h1>
                        <style jsx>{`
                            .what {
                              font-weight: 600;
                                font-size: 80px;
                                line-height: 82px;
                                color: #333333;
                            }`}</style>
                    </div>
                    <div>
                        <Image src={Brand4} alt="first brand" />
                    </div>
                    <div className="relative flex mt-[120px] gap-0 px-[58px]">
                        <div className="flex-1 flex-col">
                            <div className="mb-[60px] w-[580px]">
                                <h1 className="what">Our Ethos</h1>
                                <style jsx>{`
                                    .what {
                                      font-weight: 600;
                                        font-size: 80px;
                                        line-height: 82px;
                                        color: #1B1C39;
                                    }`}</style>
                            </div>
                            <div className="w-[559px]">
                                <p className="text-[22px] leading-[39.6px] text-[#1B1C39]">
                                    Mainstream? No, thanks. We are on mission to change your relationship with the word «Bank». The B-word is outdated and relatable to stress, and outdated financial products.
                                </p>
                                <p className="text-[22px] leading-[39.6px] text-[#1B1C39] mt-[40px]">
                                    To remove the exisiting frictions and painpoints of the traditional banking sytems, we asked over 1,000 millenials what they would like from modern financial technology company, and we listened.
                                </p>
                                <p className="text-[22px] leading-[39.6px] text-[#1B1C39] mt-[40px]">
                                    We started off by committing to no hidden fees, tricks or catches, just a simple way to navigate your money.Our purpose is to help people make more out of their money, and spend smarter.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1">
                            <svg className="absolute bottom-40 -z-10" width="710" height="1084" viewBox="0 0 710 1084" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M550.999 1084C855.342 1084 1102 841.372 1102 542C1102 242.629 855.342 0.000148297 550.999 9.55309e-05C246.656 4.27646e-05 1.0634e-05 242.628 -4.21568e-05 542C-0.132706 841.241 246.656 1084 550.999 1084ZM550.999 954.989C782.936 954.989 970.847 770.149 970.847 542C970.847 313.852 782.937 129.011 550.999 129.011C319.062 129.011 131.151 313.851 131.151 542C131.151 770.018 319.062 954.989 550.999 954.989Z" fill="#8F00E0" fill-opacity="0.04"/>
                            </svg>
                        </div>
                    </div>
                    <div className="lg:flex gap-[20px] px-[58px]">
                        <div className="mt-[212px]">
                            <Image src={Brand5} alt="brand2" />
                        </div>
                        <div>
                            <Image src={Brand6} alt="brand3" />
                        </div>
                    </div>
                    <div className="px-[58px] mt-[120px]">
                        <div className="text-[80px] leading-[82px] text-[#1B1C39] font-semibold mb-[60px]">Mizan Knowledge Central</div>
                        <div className="flex gap-[100px]">
                            <div className="flex flex-col space-y-[40px] text-[22px] leading-[39.6px] text-[#1B1C39] w-[500px]">
                                <p>
                                    We understand your busy lifestyle, we understand that in as much as Mizan will do the heavy-lifting on your finances, you’d love to learn a thing or two about , “sukuks” or islamic bonds.
                                </p>
                                <p>
                                    We are busy curating a free learning experience to ensure you are upto date with say “ESG,Stock investing, blockchain and future of finance”, through MizanLearn, our exclusive in-app content platform.
                                </p>
                            </div>
                            <div className="w-[479px] lg:mt-[288px]">
                                <Image src={Brand7} alt="brand7" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[95px] mb-[60px] px-[58px]">
                        <h1 className="what">Meet the team</h1>
                        <style jsx>{`
                            .what {
                              font-weight: 600;
                                font-size: 80px;
                                line-height: 82px;
                                color: #1B1C39;
                            }`}</style>
                    </div>
                    <div>
                        <Image src={Brand8} alt="first brand" />
                    </div>
                    <div className="px-[58px] mt-[120px]">
                        <div className="text-[80px] leading-[82px] text-[#1B1C39] font-semibold mb-[60px]">What is a Halal <br></br>Buy now pay later?</div>
                        <div className="relative lg:flex">
                            <div className="flex flex-col space-y-[40px] text-[22px] leading-[39.6px] text-[#1B1C39] w-[565px]">
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
                            <div className="absolute left-[570px]">
                                <svg width="663" height="651" viewBox="0 0 663 651" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.6" d="M1.83132 94.1423C43.7318 381.581 274.982 608.947 567.331 650.144C617.755 657.272 663 618.972 663 568.847C663 527.885 632.252 493.424 591.069 487.549C481.538 472.042 383.398 421.681 308.757 348.294C234.117 274.907 182.896 178.416 167.124 70.7241C161.229 30.1538 126.1 0.000104117 84.4385 9.32516e-05C33.5365 0.0784491 -5.41763 44.565 1.83132 94.1423Z" fill="#8F00E0" fill-opacity="0.04"/>
                                    <path opacity="0.6" d="M573.698 379.708C426.36 346.431 310.392 232.529 276.512 87.8145C265.951 42.8288 301.295 0.00011929 348.246 0.000131535L589.592 0.000194478C630.165 0.00020506 663 32.2501 663 72.1004L663 309.148C663.104 355.367 619.499 390.081 573.698 379.708Z" fill="#8F00E0" fill-opacity="0.04"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex gap-[20px] px-[58px]">
                        <div className="mt-[212px]">
                            <Image src={Brand9} alt="brand9" />
                        </div>
                        <div>
                            <Image src={Brand10} alt="brand10" />
                        </div>
                    </div>
                    <div className="mt-[95px] mb-[60px] px-[58px]">
                        <h1 className="what">Mizan Donate - First Islamic crowdfunding</h1>
                        <style jsx>{`
                            .what {
                              font-weight: 600;
                                font-size: 80px;
                                line-height: 82px;
                                color: #1B1C39;
                            }`}</style>
                    </div>
                    <div className="flex gap-[47px] mb-[60px] px-[58px] text-[22px] leading-[39.6px] text-[#1B1C39]">
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                        </div>
                        <div>
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