import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  GraduationCap,
  FlaskConical,
  Camera,
  Brain,
  Globe,
  Smartphone,
  Network,
  Users,
  BookOpen,
  Award,
  Calendar,
  ArrowRight,
  ExternalLink,
  Download
} from 'lucide-react';
import labScene from '@/assets/lab-scene.jpg';

const RisTIE = () => {
  const departments = [
    {
      name: "Education",
      icon: GraduationCap,
      description: "Menyediakan pelatihan dan workshop teknologi informasi untuk mengembangkan skill mahasiswa",
      programs: ["Workshop Web Development", "Mobile App Training", "AI/ML Bootcamp", "Cybersecurity Workshop"],
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Research & Development",
      icon: FlaskConical,
      description: "Melakukan riset teknologi informasi dan mengembangkan solusi inovatif",
      programs: ["IoT Research", "Machine Learning Projects", "Web Technologies", "Mobile Development"],
      color: "from-green-500 to-green-600"
    },
    {
      name: "Media Digital",
      icon: Camera,
      description: "Mengelola konten digital dan dokumentasi kegiatan RisTIE",
      programs: ["Digital Content Creation", "Photography & Videography", "Social Media Management", "Graphic Design"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const focusAreas = [
    {
      title: "Machine Learning",
      icon: Brain,
      description: "Pengembangan model AI dan deep learning untuk berbagai aplikasi"
    },
    {
      title: "Web & App Development",
      icon: Smartphone,
      description: "Pembuatan aplikasi web dan mobile dengan teknologi terkini"
    },
    {
      title: "Jaringan",
      icon: Network,
      description: "Desain dan implementasi arsitektur jaringan yang efisien"
    }
  ];

  const publications = [
    {
      title: "Modul Training: IoT Development Fundamentals",
      authors: "RisTIE Education Team",
      journal: "RisTIE Publications",
      year: "2024",
      type: "Modul Training"
    },
    {
      title: "Dokumentasi Project: Smart Campus Energy Monitoring",
      authors: "RisTIE Research Team",
      journal: "Project Documentation",
      year: "2024",
      type: "Dokumentasi Project"
    },
    {
      title: "Modul Training: Machine Learning for Beginners",
      authors: "Ahmad Rizki, Sari Indah",
      journal: "RisTIE Publications",
      year: "2024",
      type: "Modul Training"
    },
    {
      title: "Dokumentasi Project: Web Development Best Practices",
      authors: "RisTIE Development Team",
      journal: "Project Documentation",
      year: "2023",
      type: "Dokumentasi Project"
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
          style={{ backgroundImage: `url(${labScene})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <Brain className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              RisTIE
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 opacity-90">
              Riset Teknologi Informasi Elektro
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              LSO yang berfokus pada pengembangan teknologi informasi, memfasilitasi mahasiswa 
              dalam pengembangan keterampilan dan riset di bidang IT dan publikasi ilmiah
            </p>
          </div>
        </div>
      </section>

      {/* RisTIE Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <Users className="w-8 h-8" />
                60+
              </div>
              <div className="text-muted-foreground">Anggota Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <BookOpen className="w-8 h-8" />
                15+
              </div>
              <div className="text-muted-foreground">Publikasi Ilmiah</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <Award className="w-8 h-8" />
                10+
              </div>
              <div className="text-muted-foreground">Project Portfolio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <Calendar className="w-8 h-8" />
                20+
              </div>
              <div className="text-muted-foreground">Training & Workshop</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="departments" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 h-auto p-1">
              <TabsTrigger value="departments" className="text-center py-3">Departemen</TabsTrigger>
              <TabsTrigger value="focus" className="text-center py-3">Bidang Riset</TabsTrigger>
              <TabsTrigger value="publications" className="text-center py-3">Publikasi</TabsTrigger>
            </TabsList>

            <TabsContent value="departments" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Departemen RisTIE</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Tiga departemen utama yang menjalankan misi RisTIE dalam pengembangan teknologi informasi
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {departments.map((dept, index) => (
                  <Card key={dept.name} className="border-0 shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group cursor-pointer">
                    <CardHeader className="text-center">
                      <div className={`w-20 h-20 bg-gradient-to-r ${dept.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-glow`}>
                        <dept.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <CardTitle className="text-xl text-primary group-hover:scale-105 transition-transform duration-300">{dept.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-center text-base leading-relaxed">
                        {dept.description}
                      </CardDescription>
                      
                      <div>
                        <div className="text-sm font-semibold mb-2">Programs:</div>
                        <div className="space-y-1">
                          {dept.programs.map((program, i) => (
                            <div key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              {program}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="focus" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Bidang Riset & Pengembangan</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Area fokus penelitian dan pengembangan teknologi di RisTIE
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {focusAreas.map((area, index) => (
                  <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                          <area.icon className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-primary group-hover:scale-105 transition-transform duration-300">{area.title}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{area.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="publications" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Publikasi Ilmiah</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Hasil penelitian dan karya ilmiah yang dipublikasikan oleh anggota RisTIE
                </p>
              </div>

              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-2">{pub.title}</CardTitle>
                          <CardDescription className="text-base">
                            <div className="flex items-center gap-2 mb-1">
                              <Users className="w-4 h-4" />
                              {pub.authors}
                            </div>
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-4 h-4" />
                              {pub.journal} • {pub.year}
                            </div>
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="ml-4">
                          {pub.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4" />
                          Lihat Paper
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bergabung dengan RisTIE
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Kembangkan skill teknologi informasi Anda bersama RisTIE. Terlibat dalam riset, 
            publikasi ilmiah, dan pengembangan solusi teknologi inovatif.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="accent" size="hero">
              Daftar RisTIE
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline-accent" size="hero" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Lihat Proyek
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RisTIE;