"use client";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll: EventListenerOrEventListenerObject = () => {
      setHeader(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // remove event
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
    // className={`${
    //   header ? "bg-white py-2 shadow-lg" : "py-3 shadow-sm"
    // } sticky top-0 z-30 transition-all }`}
    >
      <NavBar
        containerStyle="flex gap-x-8 lg:items-center"
        LinkStyles="relative hover:text-primary transition-all"
        underLineStyles="absolute left-0 top-full h-[2px] bg-blue-500 w-full"
      />
    </header>
  );
};

export default Header;
