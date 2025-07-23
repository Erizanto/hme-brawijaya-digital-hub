import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Handshake, Users, Building, Globe, Camera, BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Partnership = () => {
  const mediaPartners = [
    {
      name: "ElektroMedia",
      type: "Digital Platform",
      description: "Platform digital yang fokus pada perkembangan teknologi elektro",
      benefits: ["Publikasi kegiatan", "Liputan event", "Konten edukasi"]
    },
    {
      name: "TechNews Indonesia",
      type: "Media Online",
      description: "Portal berita teknologi terdepan di Indonesia",
      benefits: ["Press release", "Wawancara eksklusif", "Feature artikel"]
    },
    {
      name: "Engineering Channel",
      type: "YouTube Channel",
      description: "Channel YouTube tentang dunia engineering dan teknologi",
      benefits: ["Video dokumenter", "Tutorial teknis", "Live streaming event"]
    }
  ];

  const visitasiPrograms = [
    {
      title: "Kunjungan Industri",
      description: "Program kunjungan ke berbagai industri teknologi untuk pembelajaran praktis",
      features: ["PT. PLN Indonesia", "PT. Telkom Indonesia", "Schneider Electric", "ABB Indonesia"],
      icon: Building
    },
    {
      title: "Study Excursion",
      description: "Kunjungan edukatif ke universitas dan lembaga penelitian ternama",
      features: ["ITB Bandung", "UI Depok", "ITS Surabaya", "BRIN Jakarta"],
      icon: BookOpen
    },
    {
      title: "International Exchange",
      description: "Program pertukaran mahasiswa dengan universitas luar negeri",
      features: ["Technical University", "Research Institute", "Innovation Center", "Industry Partnership"],
      icon: Globe
    }
  ];

  const collaborations = [
    {
      category: "Akademik",
      partnerships: [
        "Universitas Brawijaya",
        "Institut Teknologi Bandung",
        "Institut Teknologi Sepuluh Nopember",
        "Universitas Indonesia"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Industri",
      partnerships: [
        "PT. PLN (Persero)",
        "PT. Telkom Indonesia",
        "Schneider Electric",
        "Siemens Indonesia"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      category: "Pemerintah",
      partnerships: [
        "Kementerian ESDM",
        "BRIN",
        "Pemkot Malang",
        "Dinas Kominfo Jatim"
      ],
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6 animate-pulse">
              <Handshake className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Partnership
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-up">
              Membangun Kolaborasi Strategis untuk Kemajuan Teknologi Elektro
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Media Partner Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 animate-pulse">
              <Camera className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">Media Partner</h2>
            <p className="text-xl text-muted-foreground">Berkolaborasi dengan media untuk memperluas jangkauan dan dampak</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {mediaPartners.map((partner, index) => (
              <Card key={partner.name} className="hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-card group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-glow">
                    <Camera className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{partner.name}</CardTitle>
                  <p className="text-sm text-primary font-semibold">{partner.type}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">{partner.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Benefits:</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center group-hover:text-foreground transition-colors duration-300">
                          <div className="w-2 h-2 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visitasi Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 animate-pulse">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">Program Visitasi</h2>
            <p className="text-xl text-muted-foreground">Kunjungan edukatif untuk memperluas wawasan dan networking</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {visitasiPrograms.map((program, index) => (
              <Card key={program.title} className="hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-card group cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-glow">
                    <program.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">{program.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary">Destinasi:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-2 text-center group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 hover:scale-105">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 animate-pulse">
              <Users className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">Kolaborasi Strategis</h2>
            <p className="text-xl text-muted-foreground">Kemitraan dengan berbagai institusi untuk pengembangan berkelanjutan</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {collaborations.map((collab, index) => (
              <Card key={collab.category} className="relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${collab.color} group-hover:h-3 transition-all duration-300`}></div>
                <CardHeader className="text-center pt-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${collab.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{collab.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {collab.partnerships.map((partner, idx) => (
                      <div key={idx} className="flex items-center p-3 bg-muted/30 rounded-lg group-hover:bg-primary/5 transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="w-3 h-3 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{partner}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Tertarik Berkolaborasi?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Mari bergabung dengan jaringan partnership HME FT-UB untuk menciptakan inovasi dan dampak positif bersama
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="hover:scale-110 transition-all duration-300 hover:shadow-glow">
              <Mail className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-110 transition-all duration-300">
              <Phone className="w-5 h-5 mr-2" />
              Konsultasi Partnership
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnership;