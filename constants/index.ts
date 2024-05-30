// NAVIGATION
export const NAV_LINKS = [
  { href: "/tentangkami", key: "tentang", label: "Tentang Kami" },
  { href: "/programdonasi", key: "program-donasi", label: "Program Donasi" },
  { href: "/donasi", key: "donasi", label: "Donasi" },
  // { href: "/hubungikami", key: "hubungi-kami", label: "Hubungi Kami" },
];

// Info Data Bank
interface Card {
  imageSrc: string;
  title: string;
  reknumber: string;
  description: string;
  onClick?: () => void;
}

export const cardData: Card[] = [
  {
    imageSrc: "/bank-bri-logo.svg",
    title: "No Rek: 310801011553530",
    reknumber: "310801011553530",
    description: "a/n Panti Asuhan Muhammadiyah Sokaraja",
  },
  {
    imageSrc: "/bank-syariah-indonesia.svg",
    title: "No Rek: (451) 7265785397",
    reknumber: "7265785397",
    description: "a/n Panti Asuhan Muhammadiyah Sokaraja",
  },
];
