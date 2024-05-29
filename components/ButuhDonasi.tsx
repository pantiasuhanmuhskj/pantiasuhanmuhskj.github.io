import Link from "next/link";
import React from "react";

const ButuhDonasi = () => {
  return (
    <div className="w-full bg-green-200 py-10">
      <div className="flex flex-col items-center justify-center">
        <h1>Sedang Membutuhkan Donasi Segera...</h1>
        <p>
          Senilai <span className="font-bold">Rp 737.910.000</span>
        </p>
        <p className="mt-5">
          Info donasi lebih lengkap klik{" "}
          <Link href="/programdonasi" className="underline hover:text-blue-300">
            Program Donasi
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ButuhDonasi;
