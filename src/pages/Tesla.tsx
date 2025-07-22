import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  BookOpen, 
  Download, 
  Eye, 
  Calendar,
  Users,
  Award,
  Zap,
  Star,
  TrendingUp,
  Activity,
  Target,
  Search,
  Filter,
  Upload,
  ExternalLink
} from 'lucide-react';
import labScene from '@/assets/lab-scene.jpg';
import heroHme from '@/assets/hero-hme.jpg';

const Tesla = () => {
  const [activeTab, setActiveTab] = useState('current');

  const bulletinInfo = {
    title: "TESLA Recap",
    fullTitle: "HME FT-UB Bulletin - Gardaraksa Anakarta 2024/2025",
    period: "Gardaraksa Anakarta 2024/2025",
    description: "Merangkum seluruh kegiatan, pencapaian, dan perkembangan HME FT-UB"
  };

  const editions = [
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

  const teamTesla = [
    { 
      role: "Koordinator TESLA", 
      name: "Khoirul Anam",
      position: "Ketua HME Gardaraksa Anakarta",
      department: "Departemen Riset & Pengembangan"
    },
    { 
      role: "Editor & Content", 
      name: "Sari Indah Pratiwi",
      position: "Sekretaris HME",
      department: "Departemen Humas & Media"
    },
    { 
      role: "Design & Layout", 
      name: "Ahmad Rizki Maulana",
      position: "Koordinator Media",
      department: "Departemen Humas & Media"
    },
    { 
      role: "Documentation", 
      name: "Putri Maharani",
      position: "Staff PSDM",
      department: "Departemen PSDM"
    }
  ];

  const highlights = [
    {
      title: "Kegiatan Unggulan",
      description: "Kompetisi, workshop, seminar, dan kegiatan pengembangan mahasiswa"
    },
    {
      title: "Prestasi Mahasiswa", 
      description: "Penghargaan dan pencapaian mahasiswa Teknik Elektro FT-UB"
    },
    {
      title: "Program Kerja LSO",
      description: "Update dan progress dari Workshop HME dan RisTIE"
    },
    {
      title: "Spotlight Alumni",
      description: "Cerita inspiratif dan pencapaian alumni Teknik Elektro"
    },
    {
      title: "Behind The Scene",
      description: "Dokumentasi kegiatan dan momen berkesan pengurus HME"
    },
    {
      title: "Upcoming Events",
      description: "Preview kegiatan dan program kerja yang akan datang"
    }
  ];

  const upcomingSchedule = [
    {
      edition: "Edisi Semester Genap",
      period: "Semester Genap 2024/2025",
      deadline: "May 15, 2025",
      launch: "June 15, 2025"
    },
    {
      edition: "Edisi Akhir Kepengurusan",
      period: "Peralihan Kepengurusan 2025",
      deadline: "July 15, 2025",
      launch: "August 15, 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroHme})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Zap className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              TESLA Recap
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 opacity-90">
              Gardaraksa Anakarta 2024/2025
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              TESLA Recap Gardaraksa Anakarta hadir untuk merangkum seluruh kegiatan, pencapaian, 
              dan perkembangan HME FT-UB selama periode kepengurusan Gardaraksa Anakarta 2024/2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="accent" size="hero">
                Baca Edisi Terbaru
                <Eye className="w-5 h-5" />
              </Button>
              <Button variant="outline-accent" size="hero" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Lihat Arsip
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Bulletin Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-12 h-auto p-1">
              <TabsTrigger value="current" className="text-center py-3">Edisi Terbaru</TabsTrigger>
              <TabsTrigger value="archives" className="text-center py-3">Arsip Edisi</TabsTrigger>
              <TabsTrigger value="highlights" className="text-center py-3">Konten Unggulan</TabsTrigger>
              <TabsTrigger value="team" className="text-center py-3">Tim TESLA</TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="space-y-8">
              <Card className="border-0 shadow-elegant">
                <CardHeader className="bg-gradient-primary text-primary-foreground rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Zap className="w-8 h-8" />
                    Edisi Terbaru: {editions[0].edition}
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/80 text-lg">
                    Published: {editions[0].published}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <img 
                        src={heroHme} 
                        alt="TESLA Recap Cover" 
                        className="w-full h-64 object-cover rounded-lg shadow-card"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Highlights Edisi Ini</h3>
                        <div className="flex flex-wrap gap-2">
                          {editions[0].features.map((feature) => (
                            <Badge key={feature} className="bg-accent/10 text-accent border-accent/20">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-4">
                          Edisi terbaru ini menampilkan {editions[0].highlights} highlight utama yang merangkum 
                          perjalanan HME FT-UB selama periode {editions[0].period}.
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <Button variant="default" size="lg">
                          <Download className="w-5 h-5" />
                          Download PDF
                        </Button>
                        <Button variant="outline" size="lg">
                          <Eye className="w-5 h-5" />
                          Baca Online
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>


            <TabsContent value="archives" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Arsip Edisi TESLA</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Koleksi lengkap buletin TESLA dari berbagai periode kepengurusan
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {editions.map((edition, index) => (
                  <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{edition.edition}</CardTitle>
                        <Badge 
                          variant={edition.status === 'Latest' ? 'default' : edition.status === 'Special' ? 'secondary' : 'outline'}
                          className={
                            edition.status === 'Latest' 
                              ? 'bg-accent text-accent-foreground' 
                              : edition.status === 'Special'
                              ? 'bg-primary/10 text-primary'
                              : ''
                          }
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
            </TabsContent>

            <TabsContent value="highlights" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Konten Unggulan</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Jenis konten yang selalu hadir di setiap edisi TESLA Recap
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        {index === 0 && <Award className="w-8 h-8 text-primary-foreground" />}
                        {index === 1 && <Star className="w-8 h-8 text-primary-foreground" />}
                        {index === 2 && <TrendingUp className="w-8 h-8 text-primary-foreground" />}
                        {index === 3 && <Users className="w-8 h-8 text-primary-foreground" />}
                        {index === 4 && <Eye className="w-8 h-8 text-primary-foreground" />}
                        {index === 5 && <Calendar className="w-8 h-8 text-primary-foreground" />}
                      </div>
                      <CardTitle className="text-xl text-primary">{highlight.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-center">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="team" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Tim TESLA</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Tim yang bertanggung jawab dalam pembuatan dan penerbitan TESLA Recap
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teamTesla.map((member, index) => (
                  <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2 bg-accent/10 text-accent">{member.role}</Badge>
                          <CardTitle className="text-xl">{member.name}</CardTitle>
                          <CardDescription className="font-medium">{member.position}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {member.department}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12">
                <Card className="border-0 shadow-card bg-muted/50">
                  <CardHeader>
                    <CardTitle className="text-center">Jadwal Publikasi</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingSchedule.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-background rounded-lg">
                          <div>
                            <h4 className="font-semibold text-primary">{schedule.edition}</h4>
                            <p className="text-sm text-muted-foreground">{schedule.period}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">Launch: {schedule.launch}</div>
                            <div className="text-sm text-muted-foreground">Deadline: {schedule.deadline}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tesla;