import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, Users, MapPin, ArrowRight, Megaphone, Star, Award, Lightbulb, BookOpen } from 'lucide-react';

const News = () => {
  const news = [
    {
      id: 1,
      title: "Mahasiswa Elektro FT-UB Raih Juara 1 Kompetisi Robotika Nasional",
      summary: "Tim robotika HME FT-UB berhasil meraih juara pertama dalam kompetisi robotika tingkat nasional dengan inovasi robot autonomous navigation.",
      content: "Prestasi membanggakan kembali diraih oleh mahasiswa Teknik Elektro Fakultas Teknik Universitas Brawijaya...",
      category: "achievement",
      date: "2024-11-15",
      author: "EME Medikraf",
      featured: true,
      tags: ["Robotika", "Kompetisi", "Prestasi"],
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Seminar Nasional 'AI in Electrical Engineering' Sukses Diselenggarakan",
      summary: "HME FT-UB menyelenggarakan seminar nasional tentang penerapan AI dalam bidang teknik elektro dengan 500+ peserta.",
      content: "Seminar nasional dengan tema 'Artificial Intelligence in Electrical Engineering' telah sukses diselenggarakan...",
      category: "event",
      date: "2024-11-10",
      author: "RisTIE",
      featured: true,
      tags: ["AI", "Seminar", "Teknologi"],
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Workshop IoT dan Smart Home System Batch 3",
      summary: "Workshop praktis pengembangan sistem IoT untuk smart home kembali dibuka dengan kuota terbatas.",
      content: "Melanjutkan kesuksesan batch sebelumnya, Workshop HME FT-UB kembali membuka workshop IoT...",
      category: "workshop",
      date: "2024-11-08",
      author: "Workshop HME",
      featured: false,
      tags: ["IoT", "Workshop", "Smart Home"],
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Open Recruitment EME dan BPME Periode 2024/2025",
      summary: "Kesempatan bergabung dengan keluarga besar HME FT-UB melalui open recruitment EME dan BPME.",
      content: "Himpunan Mahasiswa Elektro FT-UB membuka kesempatan bagi mahasiswa untuk bergabung...",
      category: "recruitment",
      date: "2024-11-05",
      author: "HME FT-UB",
      featured: false,
      tags: ["Recruitment", "EME", "BPME"],
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Kolaborasi Penelitian dengan Industry Partner",
      summary: "HME FT-UB memulai kolaborasi penelitian dengan beberapa industry partner untuk proyek inovasi teknologi.",
      content: "Dalam upaya meningkatkan kualitas penelitian dan menghadirkan inovasi yang berdampak...",
      category: "collaboration",
      date: "2024-11-01",
      author: "EME Eksternal",
      featured: false,
      tags: ["Penelitian", "Industri", "Kolaborasi"],
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "TESLA 2024: Dokumentasi Perjalanan Satu Tahun HME",
      summary: "Buletin tahunan TESLA edisi 2024 siap diluncurkan dengan dokumentasi lengkap kegiatan HME sepanjang tahun.",
      content: "TESLA (Teknik Elektro Selayang Pandang) edisi 2024 merupakan kompilasi dokumentasi...",
      category: "publication",
      date: "2024-10-28",
      author: "Tim TESLA",
      featured: true,
      tags: ["TESLA", "Dokumentasi", "Publikasi"],
      image: "/placeholder.svg"
    }
  ];

  const upcomingEvents = [
    {
      title: "Tech Talk: Future of Renewable Energy",
      date: "2024-11-25",
      time: "13:00 - 15:00",
      location: "Auditorium FT-UB",
      organizer: "RisTIE",
      status: "open"
    },
    {
      title: "Workshop Machine Learning for Engineers",
      date: "2024-12-02",
      time: "09:00 - 16:00",
      location: "Lab Komputer FT",
      organizer: "RisTIE",
      status: "limited"
    },
    {
      title: "Industry Visit to PLN Research Institute",
      date: "2024-12-10",
      time: "08:00 - 17:00",
      location: "Jakarta",
      organizer: "EME Eksternal",
      status: "full"
    },
    {
      title: "ELEKTRO Innovation Challenge 2024",
      date: "2024-12-15",
      time: "08:00 - 18:00",
      location: "FT-UB",
      organizer: "Workshop HME",
      status: "open"
    }
  ];

  const getCategoryConfig = (category: string) => {
    const configs = {
      achievement: { label: "Prestasi", variant: "default" as const, icon: Award },
      event: { label: "Event", variant: "secondary" as const, icon: Calendar },
      workshop: { label: "Workshop", variant: "outline" as const, icon: BookOpen },
      recruitment: { label: "Recruitment", variant: "destructive" as const, icon: Users },
      collaboration: { label: "Kolaborasi", variant: "secondary" as const, icon: Lightbulb },
      publication: { label: "Publikasi", variant: "outline" as const, icon: Star }
    };
    return configs[category as keyof typeof configs] || configs.event;
  };

  const getEventStatus = (status: string) => {
    const configs = {
      open: { label: "Pendaftaran Terbuka", color: "text-green-600", bg: "bg-green-100" },
      limited: { label: "Kuota Terbatas", color: "text-yellow-600", bg: "bg-yellow-100" },
      full: { label: "Penuh", color: "text-red-600", bg: "bg-red-100" }
    };
    return configs[status as keyof typeof configs] || configs.open;
  };

  const featuredNews = news.filter(item => item.featured);
  const regularNews = news.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6 animate-pulse">
              <Megaphone className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Berita & Acara
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-up">
              Update terbaru kegiatan, prestasi, dan agenda HME FT-UB
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Berita Utama</h2>
            <p className="text-xl text-muted-foreground">Sorotan berita dan pencapaian terbaru</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredNews.slice(0, 2).map((article) => {
              const categoryConfig = getCategoryConfig(article.category);
              return (
                <Card key={article.id} className="overflow-hidden hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-card group cursor-pointer">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant={categoryConfig.variant} className="flex items-center">
                        <categoryConfig.icon className="w-3 h-3 mr-1" />
                        {categoryConfig.label}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(article.date).toLocaleDateString('id-ID', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                      <span className="mx-2">•</span>
                      <span>{article.author}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300 line-clamp-3">
                      {article.summary}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {article.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="hover:scale-110 transition-all duration-300">
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regular News and Upcoming Events */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Regular News */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">Berita Terbaru</h3>
              <div className="space-y-6">
                {regularNews.map((article) => {
                  const categoryConfig = getCategoryConfig(article.category);
                  return (
                    <Card key={article.id} className="hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0 shadow-card group cursor-pointer">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 flex-1 line-clamp-2">
                            {article.title}
                          </CardTitle>
                          <Badge variant={categoryConfig.variant} className="ml-2">
                            <categoryConfig.icon className="w-3 h-3 mr-1" />
                            {categoryConfig.label}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(article.date).toLocaleDateString('id-ID', { 
                            day: 'numeric', 
                            month: 'long' 
                          })}
                          <span className="mx-2">•</span>
                          <span>{article.author}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground text-sm mb-3 group-hover:text-foreground transition-colors duration-300 line-clamp-2">
                          {article.summary}
                        </p>
                        <Button variant="ghost" size="sm" className="p-0 h-auto hover:scale-110 transition-all duration-300">
                          Baca Selengkapnya
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8">Acara Mendatang</h3>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => {
                  const statusConfig = getEventStatus(event.status);
                  return (
                    <Card key={index} className="hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0 shadow-card group cursor-pointer">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 flex-1">
                            {event.title}
                          </CardTitle>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${statusConfig.bg} ${statusConfig.color}`}>
                            {statusConfig.label}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0 space-y-2">
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(event.date).toLocaleDateString('id-ID', { 
                            day: 'numeric', 
                            month: 'long', 
                            year: 'numeric' 
                          })}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="w-4 h-4 mr-2 text-primary" />
                          <span className="text-primary font-semibold">{event.organizer}</span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Ikuti terus update terbaru dari HME FT-UB melalui media sosial dan newsletter kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="hover:scale-110 transition-all duration-300 hover:shadow-glow">
              <Megaphone className="w-5 h-5 mr-2" />
              Subscribe Newsletter
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-110 transition-all duration-300">
              <Users className="w-5 h-5 mr-2" />
              Follow Social Media
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;