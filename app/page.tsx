import Hero from "@/components/Hero";
import Image from "next/image";
import Tentang from "./tentangkami/page";
import ButuhDonasi from "@/components/ButuhDonasi";

export default function Home() {
  return (
    <>
      <Hero />
      <ButuhDonasi />
      <Tentang />
    </>
  );
}
