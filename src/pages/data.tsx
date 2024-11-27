import Footer from "@/components/footer";

function Data() {
  return (
    <div>
      <div className="container mx-auto px-4 pt-20">
        <div className="grid gap-6">
          <h1 className="text-black font-bold">
            Bagaimana Persebaran Stunting Di Indonesia?
          </h1>

          <div className="relative h-[514px] rounded-lg overflow-hidden mb-2">
            <img
              src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732715927/Image_5_r24hm4.png"
              alt="Indonesia stunting map"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="prose max-w-none text-black">
            <p>
              Berdasarkan hasil pemetaan di atas, dapat dilihat bagaimana
              distribusi stunting di setiap provinsi di Indonesia berdasarkan
              kategori tingkat keparahannya. Warna merah menunjukkan angka
              stunting sangat tinggi, jingga menunjukkan angka stunting kategori
              tinggi, kuning menunjukkan angka stunting dengan kategori sedang,
              dan putih menunjukkan angka stunting rendah pada daerah tersebut.
            </p>
          </div>
          <h1 className="text-black font-bold">
            Top 5 Provinsi dengan Angka Stunting Tertinggi Di Indonesia
          </h1>
          <div className="flex gap-6 text-black">
            <img
              src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732716382/Group_16_jqxjat.png"
              alt="top 5 Provinsi"
              className="w-4/5"
            />
            <p>
              Berikut 5 provinsi dengan tingkat angka stunting tertinggi di
              Indonesia yang perlu menjadi perhatian utama pemerintah dalam
              penerapan program susu gratis, sebagai bentuk tindakan memastikan
              kecupukan gizi anak Indonesia. Pada data disamping ditunjukkan
              bahwa Provinsi Nusa Tenggara Timur menjadi daerah provinsi dengan
              angka stunting tertinggi yaitu 23% dari total jumlah balita
              sebesar 385.605 anak. Hal itu menunjukkan bahwa pemberian asupan
              gizi anak belum tersebar merata terutama pada konsumsi susu di
              Indonesia yang masih rendah sehingga mengakibatkan angka kasus
              stunting masih melonjak tinggi.
            </p>
          </div>
          <h1 className="text-black font-bold">Kesimpulan</h1>
          <p className="text-black">
            Dari hasil analisis yang telah dilakukan, dapat kita lihat bahwa
            Indonesia termasuk negara dengan angka konsumsi susu terendah
            sehingga angka stunting yang dihasil termasuk tinggi dibandingkan
            dengan negara-negara Asia lainnya. Hal tersebut memiliki beberapa
            alasan mengapa konsumsi susu di Indonesia masih rendah, yaitu
            dikarenakan indonesia masih belum memiliki cukup ketersediaan susu
            di Indonesia dan belum adanya kebiasaan masyarakat untuk minum susu
            sejak dini. Berbeda halnya dengan beberapa negara Asia lainnya
            seperti Thailand dan Jepang yang telah menerapkan program pemberian
            susu kepada anak sejak mereka kecil atau bahkan sejak masih dalam
            kandungan. Sehingga program susu gratis yang direncanakan pemerintah
            dapat menjadi langkah besar dalam memperbaiki gizi anak terutama
            dalam mengatasi permasalahan kasus stunting di Indonesia.
          </p>
          <h1 className="text-black font-bold">Basic Analysis Data</h1>
          <div className="flex items-center gap-6 mb-10">
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732716803/1_xwqsbw.png"
                alt="filltering"
              />
              <h2 className="text-black font-bold">Filtering and Shorting</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732716806/2_kixcjr.png"
                alt="Grouping"
              />
              <h2 className="text-black font-bold">Grouping</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732716810/3_uh3dfl.png"
                alt="Visualisasi Data"
              />
              <h2 className="text-black font-bold">Visualisasi Data</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Data;
