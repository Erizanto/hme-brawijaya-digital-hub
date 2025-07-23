import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Scale, Eye, FileText, Users, Gavel, MessageSquare, CheckSquare, Shield } from 'lucide-react';

const BPME = () => {
  const functions = [
    {
      title: "Fungsi Legislatif",
      description: "Membuat dan menetapkan peraturan organisasi",
      icon: FileText,
      details: [
        "Menyusun AD/ART organisasi",
        "Membuat GBHK (Garis Besar Haluan Kerja)",
        "Menetapkan peraturan internal",
        "Merevisi aturan yang tidak relevan"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Fungsi Pengawasan",
      description: "Mengawasi pelaksanaan program kerja EME dan subunit",
      icon: Eye,
      details: [
        "Monitoring program kerja",
        "Evaluasi kinerja pengurus",
        "Audit keuangan organisasi",
        "Kontrol kebijakan organisasi"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Fungsi Aspirasi",
      description: "Menyerap dan menyalurkan aspirasi mahasiswa",
      icon: MessageSquare,
      details: [
        "Forum diskusi mahasiswa",
        "Penyaluran keluhan dan saran",
        "Mediasi konflik internal",
        "Representasi suara mahasiswa"
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const responsibilities = [
    {
      title: "Sidang Pleno",
      description: "Menyelenggarakan sidang untuk membahas isu-isu strategis organisasi",
      icon: Gavel
    },
    {
      title: "Evaluasi LPJ",
      description: "Menilai Laporan Pertanggungjawaban dari EME dan subunit organisasi",
      icon: CheckSquare
    },
    {
      title: "Penegakan Aturan",
      description: "Memastikan seluruh kegiatan organisasi sesuai dengan AD/ART",
      icon: Shield
    },
    {
      title: "Representasi Mahasiswa",
      description: "Mewakili aspirasi dan kepentingan mahasiswa elektro FT-UB",
      icon: Users
    }
  ];

  const achievements = [
    "15+ Sidang pleno per periode",
    "100% evaluasi LPJ terlaksana", 
    "50+ aspirasi mahasiswa tersalurkan",
    "3 kali revisi AD/ART"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6 animate-pulse">
              <Scale className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              BPME
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 opacity-90">
              Badan Perwakilan Mahasiswa Elektro
            </h2>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-up">
              Badan Legislatif dan Pengawas Organisasi HME FT-UB
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Tentang BPME</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Badan Perwakilan Mahasiswa Elektro (BPME) adalah badan legislatif dan pengawas 
              seluruh kegiatan organisasi HME FT-UB. BPME berperan penting dalam memastikan 
              tata kelola organisasi yang baik, transparan, dan sesuai dengan AD/ART serta 
              aspirasi mahasiswa elektro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-card group cursor-pointer">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-glow">
                    <Scale className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Functions */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Fungsi Utama BPME</h2>
            <p className="text-xl text-muted-foreground">Tiga pilar fungsi BPME dalam tata kelola organisasi</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {functions.map((func, index) => (
              <Card key={func.title} className="relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${func.color} group-hover:h-3 transition-all duration-300`}></div>
                <CardHeader className="text-center pt-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${func.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <func.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{func.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-6 group-hover:text-foreground transition-colors duration-300">
                    {func.description}
                  </p>
                  <div className="space-y-2">
                    {func.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Tanggung Jawab BPME</h2>
            <p className="text-xl text-muted-foreground">Tugas dan kewajiban dalam menjalankan fungsi organisasi</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {responsibilities.map((resp, index) => (
              <Card key={resp.title} className="hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-card group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-glow">
                      <resp.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{resp.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{resp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Aspirasi Form CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Sampaikan Aspirasimu</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            BPME siap mendengar dan menyalurkan aspirasi, keluhan, atau saran dari seluruh mahasiswa elektro FT-UB
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="hover:scale-110 transition-all duration-300 hover:shadow-glow">
              <MessageSquare className="w-5 h-5 mr-2" />
              Form Aspirasi
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-110 transition-all duration-300">
              <FileText className="w-5 h-5 mr-2" />
              Lihat AD/ART
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BPME;