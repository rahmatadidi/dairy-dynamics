import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { Card, CardContent } from "../components/ui/card";

function Dashboard() {
  const readRef = useRef<HTMLDivElement>(null);
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <div
        className="bg-cover bg-center h-[700px]"
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/ddfdf66n7/image/upload/v1732700819/1_9_dudy5w.png)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full text-center gap-6">
          <h1 className="text-white text-6xl font-bold justify-center">
            Analisis Pentingnya Konsumsi Susu Terhadap Kasus Stunting di
            Indonesia
          </h1>
          <h3 className="text-2xl">
            Lihatlah fakta seberapa pentingnya program konsumsi susu untuk
            Indonesia
          </h3>
          <Button
            onClick={() => {
              scrollToSection(readRef);
            }}
            className="w-20 h-15 p-3"
          >
            Baca
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-20">
        <div className="grid gap-6">
          <div className="flex flex-col gap-6">
            <section ref={readRef}>
              <h1 className="text-black font-bold">
                Persebaran Rata-Rata Kasus Stunting di Dunia
              </h1>
              <Card>
                <CardContent>
                  <div className="relative h-full rounded-lg overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732710764/Group_12_kohmm9.png"
                      alt="Malnutrition cases map"
                      className="object-cover w-full h-full mb-4 rounded-lg"
                    />
                    <p>
                      Berikut di tunjukkan data persebaran jumlah konsumsi susu
                      di seluruh dunia, dapat dilihat bahwa negara dengan warna
                      biru gelap memiliki jumlah konsumsi susu paling besar yang
                      berada di negara Montenegro dan negara yang memiliki warna
                      biru paling cerah memiliki jumlah konsumsi susu yang
                      relatif sedikit yaitu terdapat pada negara East Timor.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
            <h1 className="text-black font-bold">
              Pesebaran Rata-Rata Konsumsi Susu Terbesar di Dunia
            </h1>
            <Card>
              <CardContent>
                <div className="relative h-full rounded-lg overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732710671/Group_11_ikihzf.png"
                    alt="Malnutrition cases map"
                    className="object-cover w-full h-full mb-4 rounded-lg "
                  />
                  <p>
                    Berdasarkan persebaran data stunting di dunia, menunjukkan
                    bahwa daerah yang memiliki warna lebih pekat memiliki
                    tingkat stunting yang tinggi, dan daerah dengan warna daerah
                    lebih cerah memiliki angka stunting yang relatif rendah.
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="flex items-center">
              <div className="w-4/5 text-black">
                <h1 className="text-black font-bold">
                  Susu dengan Stunting ada Korelasinya?
                </h1>
                <br />
                <p>
                  Berdasarkan hasil analisis data dari tahun 2017-2021 yang
                  ditunjukkan pada grafik, menunjukkan bahwa konsumsi susu dan
                  stunting memiliki korelasi negatif yang berarti jika tingkat
                  konsumsi susu meningkat pada suatu negara maka tingkat
                  terjadinya kasus stunting di negara tersebut akan menurun.
                  Yang berarti bahwa susu merupakan salah satu faktor penting
                  dalam terpenuhinya gizi anak.
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732711428/Group_14_ni71go.png"
                alt="Malnutrition cases map"
                className="object-cover w-full h-full mb-4 rounded-lg "
              />
            </div>
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/ddfdf66n7/image/upload/v1732711675/Group_15_kugm4u.png"
                alt="Malnutrition cases map"
                className="object-cover w-full h-full mb-4 rounded-lg "
              />
              <div className="w-4/5 text-black">
                <h1 className="text-black font-bold">
                  Indonesia Waspada Stunting!
                </h1>
                <br />
                <p>
                  Menurut data dari ourworldindata.org yang di dikeluarkan oleh
                  Food and Agriculture Organization of the United Nations,
                  menunjukkan rata-rata konsumsi susu di Indonesia termasuk yang
                  paling rendah dibandingkan dengan beberapa negara Asia lainnya
                  sehingga kasus stunting di Indonesia termasuk salah satu
                  negara dengan tingkat kasus stunting tertinggi di Asia
                  Tenggara.
                </p>
                <Button className="mt-6 p-3">Yuk Cek Datanya</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-400 flex items-center justify-center p-10 ">
        <h1 className="text-black w-3/4">
          Penasaran Dengan Sebaran Stunting di Indonesia?
        </h1>
        <Button className="mt-6 p-3">Selanjutnya</Button>
      </div>
    </div>
  );
}

export default Dashboard;
