"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden relative z-50">
      <button onClick={toggleMenu} className="focus:outline-none">
        {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="absolute top-full w-full bg-white p-8 rounded shadow-lg space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="block text-gray-800 hover:text-gray-600"
                  onClick={toggleMenu} // Close menu after clicking link
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
