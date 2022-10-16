import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import splashScreen from "../public/splash.png";
import header from "../styles/header.module.css";

const personal = [{ name: "Personal", href: "#" }];

const brand = [{ name: "Brand Story", href: "#" }];

export default function Home() {
  return (
    <div>
      <div className={header.banner}>
        <Image
          src={splashScreen}
          alt="Phone"
          layout="fill"
          priority
          className="object-contain lg:object-cover"
        />
      </div>
    </div>
  );
}
