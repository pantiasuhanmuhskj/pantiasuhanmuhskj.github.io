"use client";
import DonasiSlider from "@/components/DonasiSlider";
import Image from "next/image";

const ProgramDonasi = () => {
  return (
    <div className="">
      <div className="bg-bg-programdonasi bg-cover bg-center h-[200px] items-center flex flex-col justify-center"></div>
      <div className="max-container padding-container">
        <h1 className="text-3xl text-center font-bold mx-3 text-gray-90 mt-10 mb-3">
          DONASI <span className="text-blue-800 ">REHAB GEDUNG</span> PANTI
          ASUHAN
          <br />
          MUHAMMADIYAH SOKARAJA
        </h1>
        <div className="mb-3 flex flex-col items-center shadow-custom-shadow p-5 rounded-sm bg-[#fefefe]">
          <div className="flex flex-col items-center lg:flex-row justify-between">
            <p className="mb-3 lg:w-2/3">
              Panti Asuhan Muhammadiyah Sokaraja merupakan sebuah Lembaga
              Kesejahteraan Sosial Anak (LKSA) atau Amal Usaha Muhammadiyah
              (AUM) yang berada di bawah naungan Pimpinan Cabang Muhammadiyah
              Sokaraja. Saat ini, kami memiliki sepuluh anak asuh yang berasal
              dari berbagai wilayah di Kabupaten Banyumas dengan latar belakang
              keluarga yatim & dhuafa. Keseharian kami berjalan dengan
              memanfaatkan gedung lama yang kondisinya terbatas. Aktifitas
              tersebut meliputi makan, mandi, mencuci, belajar, diskusi dan
              berlatih kegiatan islami hingga beristirahat.
            </p>
            <Image
              src={"/gambar-10.jpg"}
              width={300}
              height={300}
              alt=""
              className="rounded-sm mb-3"
            />
          </div>
          <div className="flex flex-col items-center lg:flex-row justify-between">
            <p className="mb-3 lg:w-2/3 flex flex-col">
              <span className="mb-3 text-blue-500 text-xl font-semibold underline">
                Keadaan Panti Asuhan Saat ini
              </span>
              Kondisi panti dan ruang beraktifitas sangat sempit sehingga kurang
              layak untuk dijadikan tempat belajar. Minimnya fasilitas serta
              sarana dan prasarana yang tersedia dirasakan menghambat proses
              belajar sehingga mengulur waktu tercapainya tujuan utama
              pendidikan yaitu “Menciptakan Generasi Islami yang berakhlak mulia
              sesuai Al Qur’an dan sunnah Rasulullah Shallallhu’alahi wa
              Sallam”. Adapun bangunan kami terbagi menjadi 2 unit yang terdiri
              dari : ruang Sekretariat, Ruang Tamu, Ruang Aula/Serba Guna,
              Asrama Putri, Kamar Pengasuh, Kamar Mandi, Dapur, Space Olahraga,
              dan Tempat Parkir
            </p>
            <Image
              src={"/gambar-11.jpg"}
              width={300}
              height={300}
              alt=""
              className="rounded-sm mb-3"
            />
          </div>
        </div>
      </div>
      <div className="px-10">
        <DonasiSlider />
      </div>
    </div>
  );
};

export default ProgramDonasi;
