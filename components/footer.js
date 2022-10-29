import header from "../styles/header.module.css";
import Image from "next/image";
import appleStore from "../public/apple.png";
import googlePlay from "../public/gplay.png";
import linkedin from "../public/socials/linkedin.png";
import facebook from "../public/socials/facebook.png";
import twitter from "../public/socials/twitter.png";
import youtube from "../public/socials/youtube.png";
import pci2 from "../public/pci.png";

const Footer = () => {
  return (
    <div className={header.footer}>
        <div className="lg:grid lg:grid-cols-4 gap-4">
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
                fillRule="evenodd"
                clipRule="evenodd"
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
                fillRule="evenodd"
                clipRule="evenodd"
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
            <ul className="list-none text-[14px] leading-[45px]">
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
            <ul className="list-none text-[16px] leading-[39px] text-white font-medium	">
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

        <div className="lg:flex lg:justify-between mt-[106px]">
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
  )
}

export default Footer