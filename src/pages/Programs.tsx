import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, Users, Target, Lightbulb, Award, BookOpen, Megaphone, Heart, Zap, Clock } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      category: "Akademik & Riset",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
      events: [
        {
          name: "TESLA (Teknik Elektro Selayang Pandang)",
          description: "Buletin tahunan dokumentasi kegiatan HME",
          date: "Desember 2024",
          status: "upcoming",
          organizer: "HME FT-UB"
        },
        {
          name: "Seminar Teknologi Terkini",
          description: "Webinar series tentang perkembangan teknologi elektro",
          date: "Setiap Bulan",
          status: "ongoing",
          organizer: "RisTIE"
        },
        {
          name: "Workshop Arduino & IoT",
          description: "Pelatihan praktis pengembangan sistem IoT",
          date: "November 2024",
          status: "upcoming",
          organizer: "Workshop HME"
        }
      ]
    },
    {
      category: "Pengembangan Diri",
      icon: Target,
      color: "from-green-500 to-green-600",
      events: [
        {
          name: "Leadership Training",
          description: "Pelatihan kepemimpinan untuk pengurus HME",
          date: "Oktober 2024",
          status: "ongoing",
          organizer: "EME PSDM"
        },
        {
          name: "Soft Skills Workshop",
          description: "Workshop komunikasi dan presentasi",
          date: "September 2024",
          status: "completed",
          organizer: "EME PSDM"
        },
        {
          name: "Personal Branding Seminar",
          description: "Membangun brand pribadi di era digital",
          date: "Desember 2024",
          status: "upcoming",
          organizer: "EME Medikraf"
        }
      ]
    },
    {
      category: "Kompetisi & Lomba",
      icon: Award,
      color: "from-purple-500 to-purple-600",
      events: [
        {
          name: "ELEKTRO Competition",
          description: "Kompetisi internal mahasiswa elektro",
          date: "November 2024",
          status: "upcoming",
          organizer: "Workshop HME"
        },
        {
          name: "Robotics Championship",
          description: "Kejuaraan robotika tingkat universitas",
          date: "Maret 2025",
          status: "planning",
          organizer: "Dept. Robotika"
        },
        {
          name: "Innovation Challenge",
          description: "Kompetisi inovasi teknologi elektro",
          date: "Mei 2025",
          status: "planning",
          organizer: "RisTIE"
        }
      ]
    },
    {
      category: "Sosial & Kemasyarakatan",
      icon: Heart,
      color: "from-red-500 to-red-600",
      events: [
        {
          name: "Bakti Sosial Ramadan",
          description: "Program berbagi dengan masyarakat sekitar",
          date: "Maret 2024",
          status: "completed",
          organizer: "EME Aksi"
        },
        {
          name: "Tech for Community",
          description: "Penerapan teknologi untuk membantu masyarakat",
          date: "Januari 2025",
          status: "planning",
          organizer: "EME Aksi"
        },
        {
          name: "Environmental Action",
          description: "Program peduli lingkungan dan sustainability",
          date: "April 2025",
          status: "planning",
          organizer: "EME Aksi"
        }
      ]
    },
    {
      category: "Networking & Karier",
      icon: Users,
      color: "from-yellow-500 to-yellow-600",
      events: [
        {
          name: "Career Talk Alumni",
          description: "Sharing session dengan alumni di industri",
          date: "Oktober 2024",
          status: "ongoing",
          organizer: "EME Eksternal"
        },
        {
          name: "Industry Visit",
          description: "Kunjungan ke perusahaan teknologi terkemuka",
          date: "November 2024",
          status: "upcoming",
          organizer: "EME Eksternal"
        },
        {
          name: "Job Fair Elektro",
          description: "Bursa kerja khusus mahasiswa elektro",
          date: "Februari 2025",
          status: "planning",
          organizer: "EME Eksternal"
        }
      ]
    },
    {
      category: "Kreatif & Inovasi",
      icon: Lightbulb,
      color: "from-indigo-500 to-indigo-600",
      events: [
        {
          name: "Design Thinking Workshop",
          description: "Workshop metodologi design thinking",
          date: "November 2024",
          status: "upcoming",
          organizer: "EME Medikraf"
        },
        {
          name: "Startup Bootcamp",
          description: "Intensive program pengembangan startup",
          date: "Januari 2025",
          status: "planning",
          organizer: "EME KWU"
        },
        {
          name: "Creative Campaign Contest",
          description: "Kompetisi kampanye kreatif mahasiswa",
          date: "Maret 2025",
          status: "planning",
          organizer: "EME Medikraf"
        }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { label: "Selesai", variant: "default" as const },
      ongoing: { label: "Berlangsung", variant: "secondary" as const },
      upcoming: { label: "Akan Datang", variant: "outline" as const },
      planning: { label: "Perencanaan", variant: "destructive" as const }
    };
    return statusConfig[status as keyof typeof statusConfig] || statusConfig.planning;
  };

  const stats = [
    { label: "Total Program", value: "18+", icon: Calendar },
    { label: "Kategori", value: "6", icon: Target },
    { label: "Organizer", value: "8+", icon: Users },
    { label: "Peserta/Tahun", value: "500+", icon: Megaphone }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6">
              <Calendar className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Program Kerja & Kegiatan
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-up">
              Rangkaian program inovatif untuk pengembangan mahasiswa elektro
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="text-center hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-card group cursor-pointer">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-glow">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                  <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs by Category */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Program Kerja per Kategori</h2>
            <p className="text-xl text-muted-foreground">Beragam program untuk mengembangkan potensi mahasiswa secara holistik</p>
          </div>
          
          <div className="space-y-12">
            {programs.map((category, categoryIndex) => (
              <div key={category.category} className="space-y-6">
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.events.map((event, eventIndex) => (
                    <Card key={event.name} className="hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-card group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 flex-1 mr-2">
                            {event.name}
                          </CardTitle>
                          <Badge variant={getStatusBadge(event.status).variant} className="text-xs">
                            {getStatusBadge(event.status).label}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.date}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
                          {event.description}
                        </p>
                        <div className="flex items-center text-sm">
                          <Users className="w-4 h-4 mr-2 text-primary" />
                          <span className="text-primary font-semibold">{event.organizer}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ikuti Program HME</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan untuk mengembangkan diri melalui berbagai program menarik dari HME FT-UB
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="hover:scale-110 transition-all duration-300 hover:shadow-glow">
              <Calendar className="w-5 h-5 mr-2" />
              Lihat Kalender Kegiatan
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-110 transition-all duration-300">
              <Zap className="w-5 h-5 mr-2" />
              Daftar Program
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;