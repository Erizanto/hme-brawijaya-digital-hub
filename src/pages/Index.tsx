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
  Lightbulb,
  Eye
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

  const quickAccess = [
    {
      name: "Portal Alumni",
      description: "Jaringan profesional dan mentoring mahasiswa elektro",
      icon: Users,
      color: "from-blue-500 to-blue-600",
      link: "/alumni"
    },
    {
      name: "TESLA Recap",
      description: "Buletin dokumentasi tahunan kegiatan HME",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
      link: "/tesla"
    },
    {
      name: "Workshop HME",
      description: "LSO riset dan kompetisi teknologi",
      icon: Zap,
      color: "from-green-500 to-green-600",
      link: "/workshop"
    },
    {
      name: "RisTIE",
      description: "Riset teknologi informasi elektro",
      icon: Target,
      color: "from-orange-500 to-orange-600",
      link: "/ristie"
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
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
              Himpunan Mahasiswa
              <span className="block text-accent animate-float">Elektro</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90 animate-slide-up [animation-delay:0.2s]">
              Fakultas Teknik Universitas Brawijaya
            </p>
            
            {/* Vision & Mission Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 animate-slide-up [animation-delay:0.3s]">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-accent">Visi</h3>
                </div>
                <p className="text-sm opacity-90">
                  Menjadi himpunan mahasiswa elektro yang unggul, inovatif, dan berdaya saing tinggi
                </p>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4 border border-primary-foreground/20">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-accent" />
                  <h3 className="font-semibold text-accent">Misi</h3>
                </div>
                <p className="text-sm opacity-90">
                  Mengembangkan potensi mahasiswa melalui kegiatan akademik dan penelitian
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-slide-up [animation-delay:0.6s]">
              <Link to="/about">
                <Button variant="accent" size="hero" className="text-lg hover:scale-105 transition-all duration-300">
                  Jelajahi HME
                  <ArrowRight className="w-5 h-5 hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline-accent" size="hero" className="text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Tentang Kami
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </Link>
            </div>
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
            {quickAccess.map((item, index) => (
              <Link key={item.name} to={item.link}>
                <Card className="group cursor-pointer hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 hover:scale-102 border-0 shadow-card">
                  <CardHeader className="text-center pb-2">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300`}>
                      <item.icon className="w-8 h-8 text-white group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-all duration-300">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="mb-4 group-hover:text-foreground transition-colors duration-300">{item.description}</CardDescription>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary group-hover:bg-accent/20 transition-all duration-300">
                      Akses Sekarang
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Carousel */}
      <section className="py-20 bg-primary text-primary-foreground">
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

      {/* Portal Alumni Highlight */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
              <h2 className="text-4xl font-bold text-primary-foreground mb-6">
                Portal Alumni HME
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Terhubung dengan jaringan alumni elektro FT-UB yang tersebar di berbagai industri teknologi. 
                Dapatkan mentoring, informasi karier, dan kesempatan kolaborasi.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">Jaringan Profesional</h3>
                  <p className="text-sm text-primary-foreground/80">Terhubung dengan 500+ alumni</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">Mentoring Program</h3>
                  <p className="text-sm text-primary-foreground/80">Bimbingan karier personal</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">Peluang Karier</h3>
                  <p className="text-sm text-primary-foreground/80">Lowongan eksklusif dari alumni</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/alumni">
                    <Button variant="accent" size="hero" className="hover:scale-105 transition-all duration-300">
                      Akses Portal Alumni
                      <ArrowRight className="w-5 h-5 hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                </Link>
                <Button variant="outline-accent" size="hero" className="text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Daftar Sebagai Alumni
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;