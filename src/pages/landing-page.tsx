import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Footer from "@/components/footer";

function LandingPage() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto py-12">
          <h1 className="text-4xl font-bold mb-6 text-black">
            Unlocking the Link: Milk Consumption and Stunting Around the World
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-black">
            Discover the global impact of dairy consumption on health and
            development
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
          <img
            src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732692848/landingpage-pict_v91k1f.png"
            alt="Dairy cows in a field"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black">
              Latar Belakang
            </h2>
            <h3 className="text-black font-bold">
              Stunting dan Pentingnya Gizi Anak
            </h3>
            <br />
            <p className="text-black ">
              Stunting adalah masalah malnutrisi kronis yang memengaruhi
              perkembangan fisik dan kognitif anak di bawah usia 5 tahun.
              Kondisi ini sering disebabkan oleh kekurangan gizi, terutama pada
              masa pertumbuhan. Salah satu cara untuk meningkatkan gizi anak
              adalah melalui konsumsi susu, yang kaya akan protein dan kalsium
              penting untuk perkembangan mereka.
            </p>
            <p className="text-black">Peran Konsumsi Susu dalam Gizi Anak </p>
            <br />
            <p className="text-black ">
              Konsumsi susu per kapita mencerminkan seberapa baik masyarakat
              memenuhi kebutuhan gizi, terutama untuk anak-anak. Program makan
              bergizi dan susu gratis yang di rencanakan oleh negara bertujuan
              untuk memperbaiki status gizi anak-anak dan mencegah stunting.
            </p>
            <p className="text-black">
              Keterkaitan Antara Konsumsi Susu dan Stunting{" "}
            </p>
            <br />
            <p className="text-black ">
              Menganalisis hubungan antara konsumsi susu dan angka stunting
              penting untuk memastikan program tersebut tepat sasaran dan
              efektif dalam meningkatkan status gizi anak-anak di seluruh
              Indonesia.
            </p>
          </div>
          <div className="h-3/4">
            <img
              src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732693032/Image_rrredd.png"
              alt="Dairy products"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">
            Why Milk Matters?
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732693516/Card_mywekz.png"
                alt="Dairy farming"
                className="rounded-lg mb-4 w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732693996/Image_1_syqzg5.png"
                alt="Milk processing"
                className="rounded-lg mb-4 w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732694010/Image_2_fd9tjq.png"
                alt="Child development"
                className="rounded-lg mb-4 w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-black mt-8">
            Susu sangat penting bagi pertumbuhan anak karena kaya akan nutrisi
            seperti protein, kalsium, dan vitamin yang mendukung perkembangan
            tulang, sistem kekebalan tubuh, serta pertumbuhan fisik dan kognitif
            secara keseluruhan. Di Indonesia, stunting menjadi masalah kesehatan
            yang signifikan, dengan banyak anak balita yang mengalami kekurangan
            gizi kronis akibat asupan makanan yang tidak mencukupi kebutuhan
            gizi mereka. Konsumsi susu yang rendah masih menjadi masalah utama,
            terutama di daerah-daerah dengan akses terbatas terhadap pangan
            bergizi. Konsumsi susu yang cukup dapat mencegah stunting karena
            kandungan gizi dalam susu sangat penting untuk pertumbuhan anak.
            Oleh karena itu, meningkatkan konsumsi susu, khususnya di daerah
            dengan angka stunting tinggi, dapat membantu mengurangi masalah gizi
            buruk dan mendukung perkembangan anak-anak di Indonesia secara lebih
            baik.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black">Fun Facts!</h2>
          <h4 className="text-black mb-6">
            Fakta Menarik tentang Susu dan StuntingFakta Menarik tentang Susu
            dan Stunting
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <img
                  src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732694496/Image_3_jyr3du.png"
                  alt="Children drinking milk"
                  className="rounded-lg mb-4 w-full h-440 object-cover"
                />
                <h4 className="text-black font-bold">Susu = Kalsium</h4>
                <p className="text-sm text-muted-foreground">
                  Satu cangkir susu mengandung 300 mg kalsium, sekitar 30% dari
                  kebutuhan harian anak.
                </p>
                <h4 className="text-black font-bold mt-2">
                  Meningkatkan Daya Tahan Tubuh
                </h4>
                <p className="text-sm text-muted-foreground">
                  Susu kaya akan vitamin D dan protein yang memperkuat sistem
                  kekebalan tubuh anak.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <img
                  src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732694490/Image_4_sljpk0.png"
                  alt="Global milk production"
                  className="rounded-lg mb-4 w-full h-440 object-cover"
                />
                <h4 className="text-black font-bold">
                  Stunting Hambat Perkembangan Otak
                </h4>
                <p className="text-sm text-muted-foreground">
                  Anak stunting berisiko memiliki IQ lebih rendah dan
                  keterbatasan dalam belajar.
                </p>
                <h4 className="text-black font-bold mt-2">
                  Stunting di IndonesiaStunting di Indonesia
                </h4>
                <p className="text-sm text-muted-foreground">
                  1 dari 3 anak Indonesia masih mengalami stunting.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-10">
            Berita Terbaru tentang Stunting di Indonesia
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="h-80">
              <CardContent className="p-6">
                <div className="mb-8">
                  <a
                    href="https://www.liputan6.com/lifestyle/read/5797630/anri-rilis-panduan-tematis-arsip-statis-penanganan-stunting-di-indonesia-apa-kaitannya-dengan-program-makan-gratis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-bold underline underline-offset-4"
                  >
                    ANRI Rilis Panduan Tematis Arsip Statis Penanganan Stunting
                    di Indonesia, Apa Kaitannya dengan Program Makan Gratis?ANRI
                    Rilis Panduan Tematis Arsip Statis Penanganan Stunting di
                    Indonesia, Apa Kaitannya dengan Program Makan Gratis?
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732695186/Avatar_poijsr.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">Liputan6.com</p>
                    <p>21 Nov 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="h-80">
              <CardContent className="p-6">
                <div className="mb-32">
                  <a
                    href="https://www.kompas.tv/regional/554698/peningkatan-gizi-dan-stunting-menjadi-fokus-bersama#google_vignette"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-bold underline underline-offset-4"
                  >
                    Peningkatan Gizi Dan Stunting Menjadi Fokus Bersama
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732696779/Avatar_1_syt7o3.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">Kompas.Tv</p>
                    <p>20 Nov 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>{" "}
            <Card className="h-80">
              <CardContent className="p-6">
                <div className="mb-28">
                  <a
                    href="https://wartaekonomi.co.id/read549881/integrasi-makan-bergizi-gratis-dengan-program-kementerian-hingga-daerah-solusi-tekan-stunting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black font-bold underline underline-offset-4"
                  >
                    Integrasi Makan Bergizi Gratis dengan Program Kementerian
                    hingga Daerah Solusi Tekan Stunting
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732695186/Avatar_poijsr.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold">Warta Ekonomi</p>
                    <p>18 Nov 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
