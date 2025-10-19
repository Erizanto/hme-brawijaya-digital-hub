import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const Partnership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6">
              <FileText className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Partnership Program
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Kerjasama Strategis untuk Kemajuan Bersama
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Media Partnership */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Media Partnership</h2>
            <p className="text-xl text-muted-foreground">Kerjasama strategis dengan media untuk publikasi dan branding</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                SOP Media Partnership
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>1. Ajukan proposal kerjasama media partnership</p>
                <p>2. Review proposal oleh tim media relations</p>
                <p>3. Presentasi proposal kepada pengurus HME</p>
                <p>4. Penandatanganan MOU jika disetujui</p>
                <p>5. Pelaksanaan kerjasama sesuai kesepakatan</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Form Pengajuan Media Partnership</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Media/Organisasi</label>
                  <input type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Jenis Kerjasama</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Publikasi Event</option>
                    <option>Content Partnership</option>
                    <option>Media Sponsor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Deskripsi Proposal</label>
                  <textarea className="w-full p-2 border rounded-md h-24"></textarea>
                </div>
                <Button className="w-full">Submit Proposal</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Visitasi Program */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Program Visitasi</h2>
            <p className="text-xl text-muted-foreground">Program kunjungan dan pertukaran untuk pengembangan jaringan</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                SOP Program Visitasi
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>1. Daftarkan lembaga/universitas untuk program visitasi</p>
                <p>2. Koordinasi jadwal dan agenda kunjungan</p>
                <p>3. Persiapan materi presentasi dan fasilitas</p>
                <p>4. Pelaksanaan program visitasi dan diskusi</p>
                <p>5. Evaluasi dan follow-up kerjasama</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Form Pengajuan Visitasi</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Institusi</label>
                  <input type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tujuan Visitasi</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Studi Banding</option>
                    <option>Kerjasama Akademik</option>
                    <option>Research Collaboration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Jumlah Peserta</label>
                  <input type="number" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tanggal yang Diinginkan</label>
                  <input type="date" className="w-full p-2 border rounded-md" />
                </div>
                <Button className="w-full">Submit Permohonan</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Collaboration */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Colaborasi Strategis</h2>
            <p className="text-xl text-muted-foreground">Kemitraan jangka panjang untuk inovasi dan pengembangan berkelanjutan</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-primary" />
                SOP Colaborasi Strategis
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>1. Identifikasi peluang colaborasi strategis</p>
                <p>2. Penyusunan proposal kerjasama bilateral</p>
                <p>3. Negosiasi terms dan kondisi kerjasama</p>
                <p>4. Penandatanganan agreement kerjasama</p>
                <p>5. Implementasi dan monitoring progress</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Form Pengajuan Colaborasi</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Organisasi/Perusahaan</label>
                  <input type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Jenis Colaborasi</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Research Collaboration</option>
                    <option>Industry Partnership</option>
                    <option>Academic Exchange</option>
                    <option>Joint Event</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bidang Kerjasama</label>
                  <input type="text" className="w-full p-2 border rounded-md" placeholder="e.g., Renewable Energy, AI, etc." />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Detail Proposal</label>
                  <textarea className="w-full p-2 border rounded-md h-24" placeholder="Jelaskan detail colaborasi yang diinginkan..."></textarea>
                </div>
                <Button className="w-full">Submit Proposal</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Mari Berkolaborasi</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan HME FT-UB dalam membangun kemitraan strategis untuk kemajuan pendidikan tinggi dan teknologi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              <FileText className="w-5 h-5 mr-2" />
              Download Partnership Brochure
            </Button>
            <Button variant="outline-accent" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Hubungi Tim Partnership
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnership;