import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Plane, 
  Car, 
  Wifi, 
  Activity, 
  Cog, 
  Bot,
  Trophy,
  Users,
  Calendar,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import labScene from '@/assets/lab-scene.jpg';

const Workshop = () => {
  const departments = [
    {
      name: "Aeronautika",
      icon: Plane,
      description: "Pengembangan teknologi penerbangan dan sistem navigasi udara",
      focus: ["Drone Technology", "Flight Control Systems", "Aerodynamics"],
      achievements: ["Juara 1 Kompetisi Drone Racing 2024", "Best Innovation Award UAV Contest"],
      color: "from-blue-500 to-blue-600",
      instagram: "@aero_hme"
    },
    {
      name: "Elektroauto Forschungsteam (EF)",
      icon: Car,
      description: "Riset dan pengembangan kendaraan listrik dan sistem energi terbarukan",
      focus: ["Electric Vehicle Design", "Battery Management", "Motor Control"],
      achievements: ["Top 10 Shell Eco Marathon", "Best Efficiency Award 2024"],
      color: "from-green-500 to-green-600",
      instagram: "@ef_hme"
    },
    {
      name: "Internet of Things (IoT)",
      icon: Wifi,
      description: "Pengembangan sistem IoT dan smart devices untuk solusi industri 4.0",
      focus: ["Smart Home Systems", "Industrial IoT", "Sensor Networks"],
      achievements: ["Best IoT Project Gemastik 2024", "Smart City Innovation Award"],
      color: "from-purple-500 to-purple-600",
      instagram: "@iot_hme"
    },
    {
      name: "Line Tracer Community (LTC)",
      icon: Activity,
      description: "Kompetisi dan pengembangan robot line tracer dengan AI navigation",
      focus: ["Path Following Algorithms", "Computer Vision", "Speed Optimization"],
      achievements: ["Juara 1 KRCI 2024", "Fastest Line Tracer Competition"],
      color: "from-red-500 to-red-600",
      instagram: "@ltc_hme"
    },
    {
      name: "Otomasi",
      icon: Cog,
      description: "Sistem otomasi industri dan kontrol proses manufacturing",
      focus: ["PLC Programming", "SCADA Systems", "Process Control"],
      achievements: ["Industrial Automation Championship", "Best Control System Design"],
      color: "from-orange-500 to-orange-600",
      instagram: "@otomasi_hme"
    },
    {
      name: "Robotika",
      icon: Bot,
      description: "Pengembangan robot humanoid, manipulator, dan sistem robotik cerdas",
      focus: ["Humanoid Robotics", "Robotic Arms", "AI & Machine Learning"],
      achievements: ["KRTI 2024 Winner", "Best Autonomous Robot Award"],
      color: "from-indigo-500 to-indigo-600",
      instagram: "@robotika_hme"
    }
  ];

  const recentProjects = [
    {
      title: "Smart Campus Monitoring System",
      department: "IoT",
      description: "Sistem monitoring real-time untuk efisiensi energi kampus",
      status: "Completed",
      year: "2024"
    },
    {
      title: "Autonomous Delivery Drone",
      department: "Aeronautika",
      description: "Drone otonom untuk pengiriman barang dalam kampus",
      status: "In Progress",
      year: "2024"
    },
    {
      title: "Electric Go-Kart Prototype",
      department: "EF",
      description: "Prototipe go-kart listrik dengan efisiensi tinggi",
      status: "Completed",
      year: "2024"
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
              <Cog className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Workshop HME FT-UB
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 opacity-90">
              Lembaga Semi Otonom Riset & Kompetisi
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Lembaga Semi Otonom yang berfokus pada riset dan kompetisi bidang teknologi dengan 
              enam departemen unggulan untuk mengembangkan inovasi teknologi elektro
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <Users className="w-8 h-8" />
                80+
              </div>
              <div className="text-muted-foreground">Anggota Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <Trophy className="w-8 h-8" />
                25+
              </div>
              <div className="text-muted-foreground">Prestasi Kompetisi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <Cog className="w-8 h-8" />
                15+
              </div>
              <div className="text-muted-foreground">Proyek Inovasi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <Calendar className="w-8 h-8" />
                6
              </div>
              <div className="text-muted-foreground">Departemen Aktif</div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Departemen Workshop HME</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enam departemen spesialisasi yang mengembangkan teknologi mutakhir
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="text-sm font-semibold mb-2">Focus Areas:</div>
                    <div className="flex flex-wrap gap-1">
                      {dept.focus.map((area) => (
                        <Badge key={area} variant="outline" className="text-xs">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold mb-2">Recent Achievements:</div>
                    <div className="space-y-1">
                      {dept.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Trophy className="w-3 h-3 text-accent" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t mt-4">
                    <a 
                      href={`https://instagram.com/${dept.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      {dept.instagram}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Proyek Terbaru</h2>
            <p className="text-xl text-muted-foreground">
              Inovasi dan karya terbaru dari departemen Workshop HME
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recentProjects.map((project, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="font-medium text-primary">
                    {project.department} • {project.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button variant="ghost" size="sm" className="w-full">
                    Lihat Detail
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bergabung dengan Workshop HME
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Kembangkan passion teknologi Anda bersama departemen Workshop HME FT-UB. 
            Wujudkan inovasi dan raih prestasi di kompetisi nasional dan internasional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline-accent" size="hero" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Lihat Portofolio
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workshop;