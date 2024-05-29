import Image from "next/image";
import Link from "next/link";
import {
  FaSquareFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-blue-500 mt-10 text-white">
      {/* Top */}
      <div className="max-container padding-container flex flex-col lg:flex-row justify-between gap-10 lg:gap-24 py-10">
        {/* Left */}
        <div className="lg:w-1/2 flex flex-col gap-1 text-sm w-full">
          <Link href="/">
            <div className="flex gap-2">
              <Image
                src="/logo-panti.png"
                alt="Logo Panti Asuhan"
                width={70}
                height={30}
              />
              <Image
                src="nav-logo.svg"
                alt="Logo Panti Asuhan"
                width={325}
                height={20}
              />
            </div>
          </Link>
          <div className="mt-10">
            <p>
              Jl. Karangbangkang No. 29 Sokaraja Tengah, Kec. Sokaraja, Kab.
              Banyumas 53181.
            </p>
            <p>
              <span className="italic">E-mail:</span>{" "}
              pantiasuhanmuhskj@gmail.com
            </p>
          </div>
        </div>
        {/* Center */}
        <div className="lg:w-1/4 w-full">
          <h1 className="text-2xl font-bold mb-2">Sosial Media</h1>
          <div className="flex flex-col gap-2">
            <Link
              className="group"
              href="https://www.facebook.com/profile.php?id=61556897998435">
              <div className="flex gap-2 items-center group-hover:translate-x-2 transition-transform duration-300">
                <FaSquareFacebook />
                Facebook
              </div>
            </Link>
            <Link
              className="group"
              href="https://www.instagram.com/pantiasuhanmuhskj">
              <div className="flex gap-2 items-center group-hover:translate-x-2 transition-transform duration-300">
                <FaInstagram /> Instagram
              </div>
            </Link>
            <Link
              className="group"
              href="https://www.tiktok.com/@pantiasuhanmuhskj">
              <div className="flex gap-2 items-center group-hover:translate-x-2 transition-transform duration-300">
                <FaTiktok /> Tiktok
              </div>
            </Link>
            <Link
              className="group"
              href="https://youtube.com/@pantiasuhanmuhskj">
              <div className="flex gap-2 items-center group-hover:translate-x-2 transition-transform duration-300">
                <FaYoutube /> YouTube
              </div>
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="lg:w-1/4 w-full">
          <h1 className="text-2xl font-bold mb-2">Kontak Kami</h1>
          <div className="text-sm">
            <p>
              Ketua: Bpk. Suharyadi
              <br />
              0812-2588-3713
            </p>
            <p>
              Sekretaris: Bpk. Faisal
              <br />
              0895-3012-1461
            </p>
            <p>
              Bendahara: Bpk. Tarnyu
              <br />
              0877-3606-0452
            </p>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="bg-blue-700 flex items-center justify-center text-sm py-2 shadow-inner">
        <div className="max-container padding-container">
          <p>
            &copy; 2024 All Right Reserved. Developed by Panti Asuhan
            Muhammadiyah Sokaraja
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
