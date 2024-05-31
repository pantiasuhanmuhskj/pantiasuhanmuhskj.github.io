"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { GiReceiveMoney, GiMoneyStack } from "react-icons/gi";

const ButuhDonasi = () => {
  // const [donationCount, setDonationCount] = useState(0);

  // useEffect(() => {
  //   async function getDonationCount() {
  //     const response = await fetch("/api/donation-count");
  //     const data = await response.json();
  //     setDonationCount(data.count);
  //   }

  //   getDonationCount();
  // }, []);

  return (
    <div className="w-full bg-green-100 py-10 text-gray-900">
      <div className="flex flex-col items-center justify-center">
        <h1>Sedang Membutuhkan Donasi Segera...</h1>
        {/* <p>
          Senilai <span className="font-bold">Rp 737.910.000</span>
        </p> */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-20 my-5 items-center">
          {/* Total Donasi Dibutuhkan */}
          <div>
            <div className="flex flex-col items-center gap-3">
              <div>
                <p className="text-xl font-semibold">Total Donasi Dibutuhkan</p>
              </div>
              <div className="flex items-end justify-center">
                <GiReceiveMoney size={40} className="mr-5" color="#00796B" />
                <div className="flex font-semibold gap-1 text-lg">
                  <p>Rp. </p>
                  <CountUp
                    end={737910000}
                    duration={10}
                    formattingFn={(value) =>
                      value.toLocaleString("id-ID", {
                        minimumFractionDigits: 2,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Total Donasi Terkumpul */}
          <div>
            <div className="flex flex-col items-center gap-3">
              <div>
                <p className="text-xl font-semibold">Total Donasi Terkumpul</p>
              </div>
              <div className="flex items-end justify-center">
                <GiMoneyStack size={40} className="mr-5" color="#00796B" />
                <div className="flex font-semibold gap-1 text-lg">
                  <p>Rp. </p>
                  <CountUp
                    end={100955000}
                    duration={10}
                    formattingFn={(value) =>
                      value.toLocaleString("id-ID", {
                        minimumFractionDigits: 2,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="">
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
