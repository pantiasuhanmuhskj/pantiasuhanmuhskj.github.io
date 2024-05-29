"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

type NavBarProps = {
  containerStyle: string;
  LinkStyles: string;
  underLineStyles: string;
};

const NavBar = ({
  containerStyle,
  LinkStyles,
  underLineStyles,
}: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const href = usePathname();

  const isMobile = useMediaQuery({ query: "(max-width: 399px)" });

  return (
    <nav className="py-3 shadow-sm bg-white">
      <div className="flex items-center justify-between max-container padding-container z-30">
        {/* Logo */}
        <Link href="/">
          <Image
            src="logo-nav.png"
            alt="Logo Panti Asuhan"
            width={isMobile ? 200 : 300}
            height={isMobile ? 30 : 50}
          />
        </Link>
        {/* Link Pages */}
        <div className={`${containerStyle}`}>
          <ul
            className={`flex flex-col lg:flex-row gap-x-10 gap-y-5 lg:gap-y-0 py-10 lg:py-0 absolute lg:static left-0 w-full items-start px-5 bg-white z-30 ${
              isOpen ? "top-[7.5%] duration-300" : "top-[-100%] duration-1000"
            }`}>
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                onClick={() => {
                  setTimeout(() => {
                    toggleMenu();
                  }, 300); // Close the menu after 300 milliseconds
                }}
                className={`left-2 lg:left-0 regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${LinkStyles}`}>
                {link.href === href && (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ type: "tween" }}
                    layoutId="underline"
                    className={`${underLineStyles}`}></motion.span>
                )}
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-0 sm:gap-4">
          {/* Button */}
          <div className="hidden xs:flex gap-2">
            <Link href="https://wa.me/+6287736060452">
              <Button
                type="button"
                title="Donasi"
                icon={<FaHandHoldingHeart />}
                variant="btn_dark_green"></Button>
            </Link>
          </div>
          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <div className="flex items-center justify-center">
              <button onClick={toggleMenu}>
                <div className="">
                  {isOpen ? <IoIosClose size={40} /> : <IoIosMenu size={40} />}
                </div>
                {/* <MobileNav /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
