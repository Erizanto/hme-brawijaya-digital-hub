import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Users, 
  BookOpen, 
  Calendar, 
  Award,
  ChevronRight,
  ExternalLink,
  ArrowRight,
  Zap,
  Target,
  Lightbulb
} from 'lucide-react';
import heroImage from '@/assets/hero-hme.jpg';
import labScene from '@/assets/lab-scene.jpg';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const highlights = [
    {
      title: "TESLA Journal Vol. 15 Published",
      description: "Latest research papers in electrical engineering now available",
      image: labScene,
      date: "Dec 2024"
    },
    {
      title: "Workshop Arduino & IoT",
      description: "Successfully conducted with 100+ participants",
      image: labScene,
      date: "Nov 2024"
    },
    {
      title: "RisTIE Innovation Challenge",
      description: "Annual competition for engineering solutions",
      image: labScene,
      date: "Oct 2024"
    }
  ];

  const quickStats = [
    { icon: Users, label: "Active Members", value: "200+" },
    { icon: BookOpen, label: "Research Papers", value: "50+" },
    { icon: Calendar, label: "Annual Events", value: "25+" },
    { icon: Award, label: "Achievements", value: "15+" }
  ];

  const departments = [
    {
      name: "Riset & Pengembangan",
      description: "Mengembangkan inovasi teknologi elektro terdepan",
      icon: Lightbulb,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "PSDM",
      description: "Pengembangan sumber daya mahasiswa elektro",
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Humas & Media",
      description: "Komunikasi dan publikasi kegiatan HME",
      icon: Target,
      color: "from-green-500 to-green-600"
    },
    {
      name: "Acara & Kegiatan",
      description: "Penyelenggara berbagai event dan workshop",
      icon: Calendar,
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Auto slide for highlights carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Himpunan Mahasiswa
              <span className="block text-accent animate-float">Elektro</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up [animation-delay:0.2s]">
              Fakultas Teknik Universitas Brawijaya
            </p>
            <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto animate-slide-up [animation-delay:0.4s]">
              Organisasi mahasiswa yang aktif, inovatif, dan profesional dalam mengembangkan 
              potensi di bidang teknik elektro dan teknologi
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up [animation-delay:0.6s]">
              <Button variant="accent" size="hero" className="text-lg">
                Bergabung dengan HME
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline-accent" size="hero" className="text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Tentang Kami
                <ExternalLink className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-elegant">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Akses Cepat</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Jelajahi berbagai program dan layanan yang tersedia di HME FT-UB
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={dept.name} className="group cursor-pointer hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">{dept.description}</CardDescription>
                  <Button variant="ghost" size="sm" className="group-hover:text-primary">
                    Lihat Detail
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Carousel */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Highlights & Berita Terbaru</h2>
            <p className="text-xl opacity-90">
              Ikuti perkembangan terbaru dari kegiatan dan prestasi HME
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`${index === currentSlide ? 'block' : 'hidden'} relative`}
                >
                  <div 
                    className="h-96 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/50 flex items-end">
                      <div className="p-8 text-white">
                        <div className="text-accent text-sm font-semibold mb-2">{item.date}</div>
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <p className="text-lg opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-accent scale-125' : 'bg-primary-foreground/50 hover:bg-primary-foreground/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link to="/news">
              <Button variant="accent" size="lg">
                Lihat Semua Berita
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Bergabung dengan Komunitas HME
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari organisasi mahasiswa terdepan di bidang teknik elektro. 
            Kembangkan potensi dan raih prestasi bersama kami.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient" size="hero">
              Daftar LSO
              <Zap className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="hero">
              Submit Artikel TESLA
              <BookOpen className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="hero">
              Kirim Prestasi
              <Award className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;