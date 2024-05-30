"use client";
import CardGrid from "@/components/CardGrid";
import DonasiLangsung from "@/components/DonasiLangsung";
import HubungiKami from "@/components/HubungiKami";
import { cardData } from "@/constants";
import React, { useState } from "react";

const sections: {
  id: string;
  title: string;
  description?: React.ReactNode;
  content: React.ReactNode;
}[] = [
  {
    id: "transfer bank",
    title: "Transfer Bank",
    description:
      "Untuk Donasi, kami menyediakan beberapa pilihan bank yaitu sebagai beriku:",
    content: <CardGrid cardData={cardData} />,
  },
  {
    id: "donasi langsung",
    title: "Donasi Langsung",
    description:
      "Selain rekening bank kita juga menerima donasi langsung, silahkan datang langsung ke lokasi kami:",
    content: <DonasiLangsung />,
  },
  {
    id: "hubungi kami",
    title: "Hubungi Kami",
    description:
      "Jika ada hal yang mau ditanyakan, silahkan hubungi nomor-nomor dibawah ini:",
    content: <HubungiKami />,
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
                {sections.find((s) => s.id === activeSection)?.description}
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
