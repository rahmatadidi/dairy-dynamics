import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function About() {
  return (
    <div>
      <div className="container mx-auto px-4 pt-20 text-black">
        <h1 className="text-3xl font-bold mb-6">Kelompok 7</h1>
        <div className="max-w-3xl mx-auto flex gap-6">
          <Card className="mb-6 w-72 text-center bg-neutral-400 shadow-gray-800/70">
            <CardHeader>
              <CardTitle>Ammar Malik</CardTitle>
            </CardHeader>
            <CardContent>F3401231050</CardContent>
          </Card>
          <Card className="mb-6 w-72 text-center bg-neutral-400 shadow-gray-800/70">
            <CardHeader>
              <CardTitle>Wardah Dalilah Syarifudin</CardTitle>
            </CardHeader>
            <CardContent>F3401231008</CardContent>
          </Card>
          <Card className="mb-6 w-72 text-center bg-neutral-400 shadow-gray-800/70">
            <CardHeader>
              <CardTitle>Melita Eka Rahmawati</CardTitle>
            </CardHeader>
            <CardContent>F3401231044</CardContent>
          </Card>
        </div>
        <h1 className="text-3xl font-bold mt-12 mb-6">Sumber Data</h1>
        <div className="mb-10">
          <ol className="list-decimal pl-6">
            <li>
              <a
                className="text-black underline underline-offset-4"
                href="https://ourworldindata.org/grapher/share-of-children-younger-than-5-who-suffer-from-stunting"
              >
                https://ourworldindata.org/grapher/share-of-children-younger-than-5-who-suffer-from-stunting
              </a>
            </li>
            <li>
              <a
                className="text-black underline underline-offset-4"
                href="https://ourworldindata.org/grapher/per-capita-milk-consumption"
              >
                https://ourworldindata.org/grapher/per-capita-milk-consumption
              </a>
            </li>
            <li>
              <a
                className="text-black underline underline-offset-4"
                href="https://aksi.bangda.kemendagri.go.id/emonev/DashPrev"
              >
                https://aksi.bangda.kemendagri.go.id/emonev/DashPrev
              </a>
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
