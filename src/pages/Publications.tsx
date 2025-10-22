import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BookOpen, Download, ExternalLink, FileText, Award, TrendingUp } from 'lucide-react';

const Publications = () => {
  const publications = {
    ristie: [
      {
        title: "Implementasi IoT untuk Smart Grid System",
        authors: "Ahmad Rizki, Siti Nurhaliza",
        year: "2024",
        category: "Research Paper",
        abstract: "Penelitian tentang implementasi Internet of Things dalam sistem smart grid untuk efisiensi energi.",
        downloads: 245,
        citations: 12
      },
      {
        title: "Machine Learning untuk Prediksi Beban Listrik",
        authors: "Budi Santoso, Dewi Lestari",
        year: "2024",
        category: "Research Paper",
        abstract: "Penggunaan machine learning dalam memprediksi beban listrik untuk optimasi distribusi energi.",
        downloads: 189,
        citations: 8
      },
      {
        title: "Renewable Energy Integration dalam Microgrid",
        authors: "Fikri Hakim, Nurul Aini",
        year: "2023",
        category: "Research Paper",
        abstract: "Studi integrasi energi terbarukan dalam sistem microgrid untuk meningkatkan keandalan.",
        downloads: 312,
        citations: 15
      }
    ],
    workshop: [
      {
        title: "Panduan Lengkap Arduino untuk Pemula",
        authors: "Tim Workshop HME",
        year: "2024",
        category: "Tutorial",
        abstract: "Panduan komprehensif penggunaan Arduino dari dasar hingga proyek lanjutan.",
        downloads: 567,
        citations: 5
      },
      {
        title: "ESP32 dan IoT: From Zero to Hero",
        authors: "Tim Workshop HME",
        year: "2024",
        category: "Tutorial",
        abstract: "Pembelajaran lengkap ESP32 untuk aplikasi IoT mulai dari instalasi hingga deployment.",
        downloads: 423,
        citations: 3
      },
      {
        title: "Robotika Dasar dengan ROS",
        authors: "Tim Workshop HME",
        year: "2023",
        category: "Tutorial",
        abstract: "Pengenalan Robot Operating System (ROS) untuk pengembangan aplikasi robotika.",
        downloads: 298,
        citations: 7
      }
    ],
    tesla: [
      {
        title: "TESLA Recap 2024 - Gardaraksa Anakarta",
        authors: "Tim TESLA HME",
        year: "2024",
        category: "Bulletin",
        abstract: "Dokumentasi lengkap kegiatan HME periode Gardaraksa Anakarta 2024/2025.",
        downloads: 892,
        citations: 0
      },
      {
        title: "TESLA Special Edition - Dies Natalis",
        authors: "Tim TESLA HME",
        year: "2024",
        category: "Bulletin",
        abstract: "Edisi spesial memperingati hari jadi HME FT-UB dengan cerita alumni dan sejarah.",
        downloads: 645,
        citations: 0
      },
      {
        title: "TESLA Recap 2023 - Kabinet Sebelumnya",
        authors: "Tim TESLA HME",
        year: "2023",
        category: "Bulletin",
        abstract: "Rangkuman kegiatan dan prestasi HME periode kepengurusan 2023/2024.",
        downloads: 734,
        citations: 0
      }
    ],
    others: [
      {
        title: "Proposal Program Kerja HME 2024/2025",
        authors: "Pengurus HME",
        year: "2024",
        category: "Document",
        abstract: "Proposal lengkap program kerja HME untuk periode 2024/2025.",
        downloads: 456,
        citations: 0
      },
      {
        title: "Laporan Pertanggungjawaban Kegiatan",
        authors: "Pengurus HME",
        year: "2024",
        category: "Document",
        abstract: "LPJ kegiatan-kegiatan HME selama periode kepengurusan.",
        downloads: 321,
        citations: 0
      }
    ]
  };

  const stats = [
    { label: "Total Publikasi", value: "50+", icon: FileText },
    { label: "Total Download", value: "5000+", icon: Download },
    { label: "Peneliti Aktif", value: "30+", icon: Award },
    { label: "Sitasi", value: "100+", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Publikasi HME
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-up">
              Karya ilmiah, tutorial, dan dokumentasi dari HME FT-UB
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Koleksi Publikasi</h2>
            <p className="text-xl text-muted-foreground">
              Browse publikasi berdasarkan kategori
            </p>
          </div>

          <Tabs defaultValue="ristie" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12 h-auto p-1">
              <TabsTrigger value="ristie" className="text-center py-3">RisTIE</TabsTrigger>
              <TabsTrigger value="workshop" className="text-center py-3">Workshop</TabsTrigger>
              <TabsTrigger value="tesla" className="text-center py-3">TESLA</TabsTrigger>
              <TabsTrigger value="others" className="text-center py-3">Lainnya</TabsTrigger>
            </TabsList>

            {/* RisTIE Publications */}
            <TabsContent value="ristie" className="space-y-6">
              {publications.ristie.map((pub, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 mb-2">
                          {pub.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {pub.authors} • {pub.year}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{pub.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{pub.abstract}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {pub.downloads} downloads
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {pub.citations} citations
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button variant="default" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Workshop Publications */}
            <TabsContent value="workshop" className="space-y-6">
              {publications.workshop.map((pub, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 mb-2">
                          {pub.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {pub.authors} • {pub.year}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{pub.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{pub.abstract}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {pub.downloads} downloads
                        </span>
                        <span className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {pub.citations} citations
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button variant="default" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* TESLA Publications */}
            <TabsContent value="tesla" className="space-y-6">
              {publications.tesla.map((pub, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 mb-2">
                          {pub.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {pub.authors} • {pub.year}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{pub.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{pub.abstract}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {pub.downloads} downloads
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button variant="default" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            {/* Others Publications */}
            <TabsContent value="others" className="space-y-6">
              {publications.others.map((pub, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 mb-2">
                          {pub.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {pub.authors} • {pub.year}
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{pub.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{pub.abstract}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Download className="w-4 h-4" />
                          {pub.downloads} downloads
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button variant="default" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Publications;
