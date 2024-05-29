import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container padding-container py-10 ">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-x-5">
        {/* Left */}
        <div className="flex flex-col justify-center text-center max-w-[600px] lg:text-left ">
          <h1 className="text-4xl font-semibold">
            Panti Asuhan <br />
            Muhammadiyah Sokaraja
          </h1>
          <p className="my-5 text-gray-50">
            Lembaga Kesejahteraan Sosial Anak (LKSA) atau Amal Usaha
            Muhammadiyah (AUM) yang berada di bawah naungan Pimpinan Cabang
            Muhammadiyah Sokaraja.
          </p>
          <div className="flex gap-x-5 items-center">
            <Link href="/donasi">
              <Button
                sx={{ fontWeight: "bold", width: "200px", height: "50px" }}
                variant="contained">
                Donasi
              </Button>
            </Link>
            <p>atau lihat</p>
            <Link
              href="/programdonasi"
              className="underline hover:text-blue-500 duration-300">
              Program Donasi
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="mt-20 lg:mt-0 flex items-center justify-center">
          <Image
            className="w-2/3 lg:w-full"
            src="hero-5.svg"
            alt="banner"
            width={500}
            height={480}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
