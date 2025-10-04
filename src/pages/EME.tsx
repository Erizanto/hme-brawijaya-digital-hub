import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, Target, Briefcase, Heart, Megaphone, TrendingUp, HandHeart, Star } from 'lucide-react';

const EME = () => {
  const departments = [
    {
      name: "Internal",
      description: "Mengelola administrasi dan koordinasi internal organisasi",
      icon: Users,
      responsibilities: [
        "Koordinasi antar departemen",
        "Manajemen administrasi",
        "Pengelolaan asset organisasi",
        "Evaluasi kinerja internal"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Eksternal",
      description: "Membangun hubungan dengan pihak luar dan kemitraan strategis",
      icon: Megaphone,
      responsibilities: [
        "Kerjasama dengan organisasi lain",
        "Hubungan dengan alumni",
        "Partnership dengan industri",
        "Networking eksternal"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      name: "Kewirausahaan (KWU)",
      description: "Mengembangkan jiwa entrepreneurship mahasiswa elektro",
      icon: TrendingUp,
      responsibilities: [
        "Workshop bisnis dan startup",
        "Mentoring entrepreneur",
        "Business plan competition",
        "Inkubasi ide bisnis"
      ],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Media dan Kreativitas (Medikraf)",
      description: "Mengelola konten kreatif dan media komunikasi HME",
      icon: Star,
      responsibilities: [
        "Desain grafis dan branding",
        "Konten media sosial",
        "Dokumentasi kegiatan",
        "Campaign kreatif"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Pengembangan Sumber Daya Mahasiswa (PSDM)",
      description: "Mengembangkan kompetensi dan kapasitas mahasiswa",
      icon: Target,
      responsibilities: [
        "Training dan pelatihan",
        "Leadership development",
        "Skill enhancement program",
        "Personal branding workshop"
      ],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Advokasi dan Sosial (Aksi)",
      description: "Menyuarakan aspirasi mahasiswa dan kegiatan sosial kemasyarakatan",
      icon: HandHeart,
      responsibilities: [
        "Advokasi mahasiswa",
        "Kegiatan sosial masyarakat",
        "Program pengabdian",
        "Isu-isu kemahasiswaan"
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  const achievements = [
    "Menyelenggarakan 25+ program kerja per tahun",
    "Melibatkan 150+ mahasiswa aktif",
    "Berkolaborasi dengan 10+ organisasi eksternal",
    "Menghasilkan 5+ entrepreneur muda per tahun"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6">
              <Briefcase className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              EME - Eksekutif Mahasiswa Elektro
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-up">
              Organisasi Pelaksana Kegiatan dan Pengembangan Kemahasiswaan
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-6">Tentang EME</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eksekutif Mahasiswa Elektro (EME) adalah organisasi pelaksana kegiatan dan pengembangan 
              kemahasiswaan di bawah HME FT-UB. EME berperan dalam pengembangan karakter, kompetensi, 
              dan kesejahteraan mahasiswa melalui berbagai program kerja yang inovatif dan berkelanjutan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-card group cursor-pointer">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-glow">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Departemen EME</h2>
            <p className="text-xl text-muted-foreground">Enam departemen yang bekerja sinergis untuk kemajuan mahasiswa elektro</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <Card key={dept.name} className="relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${dept.color} group-hover:h-3 transition-all duration-300`}></div>
                <CardHeader className="text-center pt-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${dept.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <dept.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-6 group-hover:text-foreground transition-colors duration-300">
                    {dept.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-center mb-3">Tanggung Jawab:</h4>
                    {dept.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        {resp}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EME;