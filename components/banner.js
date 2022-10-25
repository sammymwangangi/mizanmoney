import header from "../styles/header.module.css";

const banner = () => {
    return (
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
                        <div className={header.waitlist} style={{color: "white"}}>
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
    )
}

export default banner