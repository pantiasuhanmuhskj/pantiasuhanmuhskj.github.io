// components
import Image from "next/image";

const Tentang = () => {
  return (
    <div className="font-poppins text-black flex flex-col items-center justify-center w-full">
      {/* Container */}
      <div className="max-container padding-container flex flex-col mt-4">
        {/* Text Container */}
        <div className="flex flex-col gap-4">
          {/* Bagian 1 */}
          <div className="flex flex-col xl:flex-row bg-[#fefefe] shadow-custom-shadow rounded-lg p-5 items-center">
            {/* Image 1 */}
            <Image
              src={"/gambar 1.jpg"}
              width={400}
              height={400}
              alt=""
              className="m-3 rounded-xl"
            />
            {/* Text 2 */}
            <div className="xl:m-3">
              <h1 className="text-2xl font-semibold text-center text-red-700 m-2 mt-1">
                Panti Asuhan Muhammadiyah Sokaraja
              </h1>
              <p className="pb-3">
                Panti Asuhan Muhammadiyah Sokaraja merupakan sebuah Lembaga
                Kesejahteraan Sosial Anak (LKSA) atau Amal Usaha Muhammadiyah
                (AUM) yang berada di bawah naungan Pimpinan Cabang Muhammadiyah
                Sokaraja. Kami berdiri pada 14 November 2004 sebagai bentuk
                tanggungjawab kepada negara serta mengamalkan Pancasila dan UUD
                1945 yaitu memelihara dan mensejahterakan masyarakat.
              </p>
              <p className="pb-3">
                Saat ini, kami memiliki sepuluh anak asuh yang berasal dari
                beberapa wilayah di kabupaten banyumas dengan latar belakang
                keluarga yatim & dhuafa. Anak asuh kami menjalani pendidikan di
                beberapa jenjang mulai dari SMP, SMA dan mahasiswa.
              </p>
            </div>
          </div>
          <div className="m-10 xl:m-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
