import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Users, Award, BookOpen, Lightbulb, Heart } from 'lucide-react';
import labScene from '@/assets/lab-scene.jpg';

const About = () => {
  const visionMission = [
    {
      title: "Visi",
      icon: Target,
      content: "Menjadi himpunan mahasiswa elektro yang unggul, inovatif, dan berdaya saing tinggi dalam mengembangkan teknologi elektro untuk kemajuan bangsa.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Misi",
      icon: Lightbulb,
      content: "Mengembangkan potensi mahasiswa elektro melalui kegiatan akademik, penelitian, dan pengabdian masyarakat yang berkelanjutan.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const values = [
    {
      title: "Inovasi",
      description: "Selalu menghadirkan ide-ide kreatif dan solusi teknologi terdepan",
      icon: Lightbulb
    },
    {
      title: "Integritas",
      description: "Menjalankan setiap kegiatan dengan jujur dan bertanggung jawab",
      icon: Heart
    },
    {
      title: "Kolaborasi",
      description: "Membangun kerjasama yang solid antar anggota dan stakeholder",
      icon: Users
    },
    {
      title: "Prestasi",
      description: "Berkomitmen untuk meraih pencapaian terbaik di setiap kegiatan",
      icon: Award
    }
  ];

  const orgStructure = [
    { position: "Ketua HME", name: "Iqbal", period: "2025-2026" },
    { position: "Wakil Ketua HME", name: "Evan", period: "2025-2026" },
    { position: "Sekretaris HME", name: "Aurel", period: "2025-2026" },
    { position: "Bendahara", name: "Devina", period: "2025-2026" },
    { position: "Ketua Umum Workshop", name: "Mulki", period: "2025-2026" },
    { position: "Ketua Umum RisTIE", name: "Aza", period: "2025-2026" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Tentang HME FT-UB
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-up">
              Organisasi Mahasiswa Teknik Elektro Terdepan
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Visi & Misi</h2>
            <p className="text-xl text-muted-foreground">Landasan filosofi yang mengarahkan setiap langkah HME</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {visionMission.map((item, index) => (
              <Card key={item.title} className="relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color} group-hover:h-3 transition-all duration-300`}></div>
                <CardHeader className="text-center pt-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Nilai-Nilai HME</h2>
            <p className="text-xl text-muted-foreground">Prinsip dasar yang menjadi pedoman dalam berorganisasi</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-card group cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-glow">
                    <value.icon className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Sejarah HME</h2>
              <p className="text-xl text-muted-foreground">Perjalanan panjang dalam mengembangkan pendidikan teknik elektro</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={labScene} 
                  alt="HME History" 
                  className="w-full h-80 object-cover rounded-2xl shadow-elegant"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Didirikan Tahun 1985</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Himpunan Mahasiswa Elektro FT-UB didirikan pada tahun 1985 sebagai wadah untuk 
                    mengembangkan potensi mahasiswa teknik elektro Universitas Brawijaya.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Selama lebih dari 35 tahun, HME telah berkembang menjadi organisasi mahasiswa 
                    yang aktif dalam berbagai bidang mulai dari akademik, penelitian, hingga 
                    pengabdian masyarakat.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dengan lebih dari 200 anggota aktif dan alumni yang tersebar di berbagai 
                    industri, HME terus berkomitmen untuk menghasilkan lulusan teknik elektro 
                    yang kompeten dan berdaya saing tinggi.
                  </p>
                </div>
                
                <Button variant="gradient" size="lg" className="mt-6 hover:scale-110 transition-all duration-300 hover:shadow-glow">
                  Pelajari Lebih Lanjut
                  <BookOpen className="w-5 h-5 hover:rotate-12 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section id="structure" className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Struktur Organisasi</h2>
            <p className="text-xl opacity-90">Kabinet Sangkara Anantara Periode 2025-2026</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orgStructure.map((member, index) => (
                <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-lg">{member.position}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-semibold text-accent mb-2">{member.name}</p>
                    <p className="text-sm opacity-80">{member.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button variant="accent" size="lg">
                Lihat Struktur Lengkap
                <Users className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;