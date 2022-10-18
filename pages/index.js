import Image from "next/image";

import splashScreen from "../public/splash.png";
import header from "../styles/header.module.css";

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-[1290px] overflow-hidden">
        <Image
          src={splashScreen}
          alt="Phone"
          width={1440}
          height={880}
          priority
        />
      </div>
    </div>
  );
}
