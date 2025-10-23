import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Clock, Users, MapPin, ArrowRight, Megaphone, Star, Award, Lightbulb, BookOpen, Zap, Download, Eye, TrendingUp, Activity, Target } from 'lucide-react';
import heroHme from '@/assets/hero-hme.jpg';

const News = () => {
  const [activeTab, setActiveTab] = useState('berita');

  // TESLA Data
  const teslaEditions = [
    {
      edition: "Edisi Terbaru",
      period: "Semester Ganjil 2024/2025",
      published: "January 2025",
      highlights: 15,
      status: "Latest",
      features: ["Recap Kegiatan", "Prestasi Mahasiswa", "Program Kerja", "Spotlight Alumni"]
    },
    {
      edition: "Edisi Spesial", 
      period: "Dies Natalis HME",
      published: "October 2024",
      highlights: 12,
      status: "Special",
      features: ["Sejarah HME", "Alumni Stories", "Milestone Achievements"]
    },
    {
      edition: "Edisi Perdana",
      period: "Awal Kepengurusan 2024/2025", 
      published: "August 2024",
      highlights: 10,
      status: "Archive",
      features: ["Visi Misi", "Program Unggulan", "Perkenalan Pengurus"]
    }
  ];

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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6">
              <Megaphone className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Berita, Acara & TESLA
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-up">
              Update terbaru kegiatan, prestasi, agenda, dan buletin HME FT-UB
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 h-auto p-1">
              <TabsTrigger value="berita" className="text-center py-3">Berita & Prestasi</TabsTrigger>
              <TabsTrigger value="acara" className="text-center py-3">Acara Mendatang</TabsTrigger>
              <TabsTrigger value="tesla" className="text-center py-3">TESLA</TabsTrigger>
            </TabsList>

            {/* Tab Berita */}
            <TabsContent value="berita" className="space-y-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">Berita Utama</h2>
                <p className="text-xl text-muted-foreground">Sorotan berita dan pencapaian terbaru</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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

              <div className="mt-12">
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
            </TabsContent>

            {/* Tab Acara */}
            <TabsContent value="acara" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Acara Mendatang</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Daftar kegiatan dan event yang akan diselenggarakan oleh HME FT-UB
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            </TabsContent>

            {/* Tab TESLA */}
            <TabsContent value="tesla" className="space-y-12">
              {/* TESLA Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-muted/50 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                    <Award className="w-8 h-8" />
                    50+
                  </div>
                  <div className="text-muted-foreground">Kegiatan Terdokumentasi</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                    <Star className="w-8 h-8" />
                    25+
                  </div>
                  <div className="text-muted-foreground">Prestasi Mahasiswa</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                    <TrendingUp className="w-8 h-8" />
                    100+
                  </div>
                  <div className="text-muted-foreground">Alumni Terlibat</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                    <Activity className="w-8 h-8" />
                    3
                  </div>
                  <div className="text-muted-foreground">Edisi Per Tahun</div>
                </div>
              </div>

              {/* TESLA Editions */}
              <div>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
                    <Zap className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Buletin TESLA</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Dokumentasi lengkap kegiatan dan pencapaian HME FT-UB dalam buletin tahunan
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {teslaEditions.map((edition, index) => (
                    <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group cursor-pointer">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{edition.edition}</CardTitle>
                          <Badge 
                            variant={edition.status === 'Latest' ? 'default' : edition.status === 'Special' ? 'secondary' : 'outline'}
                            className={`transition-all duration-300 group-hover:scale-110 ${
                              edition.status === 'Latest' 
                                ? 'bg-accent text-accent-foreground' 
                                : edition.status === 'Special'
                                ? 'bg-primary/10 text-primary'
                                : ''
                            }`}
                          >
                            {edition.status}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          {edition.period}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Star className="w-4 h-4" />
                          {edition.highlights} Highlights
                        </div>
                        
                        <div>
                          <div className="text-sm font-medium mb-2">Konten Utama:</div>
                          <div className="flex flex-wrap gap-1">
                            {edition.features.map((feature) => (
                              <Badge key={feature} variant="outline" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2 pt-4">
                          <Button variant="default" size="sm" className="flex-1">
                            <Eye className="w-4 h-4" />
                            Baca
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1">
                            <Download className="w-4 h-4" />
                            Download
                          </Button>
                        </div>
                        
                        <div className="text-xs text-muted-foreground border-t pt-2">
                          Published: {edition.published}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
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