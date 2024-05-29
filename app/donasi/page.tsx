"use client";
import CardGrid from "@/components/CardGrid";
import { cardData } from "@/constants";
import React, { useState } from "react";

const sections: { id: string; title: string; content: React.ReactNode }[] = [
  {
    id: "transfer bank",
    title: "Transfer Bank",
    content: <CardGrid cardData={cardData} />,
  },
  {
    id: "donasi langsung",
    title: "Donasi Langsung",
    content: "This is the map section.",
  },
  {
    id: "hubungi kami",
    title: "Hubungi Kami",
    content: "This is the transfer section.",
  },
];

export default function Page() {
  const [activeSection, setActiveSection] = useState<string | null>(
    "transfer bank"
  );

  const handleMenuClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="max-container padding-container my-10">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
        {/* Left Section (Menu) */}
        <div className="lg:w-1/2 lg:mr-32 bg-gray-100 p-4 shadow-md rounded-md">
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`block py-2 px-4 text-left ${
                    activeSection === section.id
                      ? "bg-blue-500 w-full text-white rounded-lg"
                      : ""
                  }`}
                  onClick={() => handleMenuClick(section.id)}>
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Right Section (Content) */}
        <div className="w-full py-3 lg:py-0 lg:mx-5">
          {activeSection && (
            <div id={activeSection}>
              <p className="my-5 lg:my-0 lg:mb-5">
                Untuk Donasi, kami menyediakan beberapa pilihan bank yaitu
                sebagai beriku:{" "}
              </p>
              {/* <h2>{sections.find((s) => s.id === activeSection)?.title}</h2> */}
              {sections.find((s) => s.id === activeSection)?.content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
