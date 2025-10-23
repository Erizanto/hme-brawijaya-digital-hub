import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Users, 
  MapPin, 
  Calendar,
  Mail,
  Phone,
  ExternalLink,
  Search,
  Filter,
  Plus,
  Star,
  Award,
  Target
} from 'lucide-react';
import heroHme from '@/assets/hero-hme.jpg';

const Alumni = () => {
  const [activeSection, setActiveSection] = useState('portal');

  const jobOpportunities = [
    {
      id: 1,
      title: "Software Engineer",
      company: "PT. Telkom Indonesia",
      location: "Jakarta",
      type: "Full-time",
      salary: "8-12 juta",
      posted: "2 hari yang lalu",
      deadline: "15 Feb 2025",
      requirements: ["S1 Teknik Elektro/Informatika", "Pengalaman 1-2 tahun", "JavaScript, React"],
      description: "Posisi untuk fresh graduate atau junior developer..."
    },
    {
      id: 2,
      title: "Power Systems Engineer",
      company: "PLN (Persero)",
      location: "Surabaya",
      type: "Full-time",
      salary: "9-15 juta",
      posted: "5 hari yang lalu", 
      deadline: "20 Feb 2025",
      requirements: ["S1 Teknik Elektro", "Fresh Graduate Welcome", "SCADA, AutoCAD"],
      description: "Kesempatan bergabung dengan BUMN terbesar..."
    },
    {
      id: 3,
      title: "Electronics Design Engineer",
      company: "Schneider Electric",
      location: "Batam",
      type: "Full-time",
      salary: "10-14 juta",
      posted: "1 minggu yang lalu",
      deadline: "25 Feb 2025",
      requirements: ["S1 Teknik Elektro", "PCB Design", "Altium Designer"],
      description: "Posisi untuk merancang sistem elektronik..."
    }
  ];

  const internshipOpportunities = [
    {
      id: 1,
      title: "Engineering Intern",
      company: "Google Indonesia",
      location: "Jakarta",
      duration: "6 bulan",
      stipend: "4-6 juta",
      posted: "3 hari yang lalu",
      deadline: "10 Mar 2025",
      requirements: ["Mahasiswa S1 Sem 6-8", "GPA min 3.0", "Python, TensorFlow"],
      description: "Program magang di divisi AI Research..."
    },
    {
      id: 2,
      title: "Power Engineering Intern",
      company: "Pertamina",
      location: "Balikpapan",
      duration: "4 bulan",
      stipend: "3-5 juta",
      posted: "1 minggu yang lalu",
      deadline: "15 Mar 2025",
      requirements: ["Mahasiswa Teknik Elektro", "Semester 6+", "ETAP, PowerWorld"],
      description: "Kesempatan magang di kilang minyak..."
    }
  ];

  const collaborationProjects = [
    {
      title: "Smart Grid Monitoring System",
      initiator: "Prof. Dr. Hadi Suyono (Dosen)",
      type: "Research Project",
      duration: "8 bulan",
      team: "4-6 orang",
      skills: ["IoT", "Data Analytics", "Power Systems"],
      status: "Open",
      deadline: "28 Feb 2025"
    },
    {
      title: "Renewable Energy Integration Platform",
      initiator: "Dr. Eng. Siti Rahma (Dosen)",
      type: "Research Project",
      duration: "10 bulan",
      team: "5-7 orang",
      skills: ["Power Electronics", "Control Systems", "Web Development"],
      status: "Open",
      deadline: "15 Mar 2025"
    },
    {
      title: "EV Charging Station App",
      initiator: "Alumni Startup",
      type: "Commercial Project", 
      duration: "6 bulan",
      team: "3-5 orang",
      skills: ["Mobile Development", "Backend", "UI/UX"],
      status: "Open",
      deadline: "5 Mar 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroHme})` }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
              <GraduationCap className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
              Portal Alumni
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 opacity-90">
              HME FT-UB Alumni Network
            </h2>
            <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
              Menghubungkan mahasiswa dengan alumni, menyediakan kesempatan kerja, 
              magang, mentoring, dan kolaborasi untuk pengembangan karir dan inovasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="accent" size="hero" className="hover:scale-110 transition-all duration-300 hover:shadow-glow">
                Daftar Alumni
                <Users className="w-5 h-5 hover:rotate-12 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Stats */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <Users className="w-8 h-8" />
                500+
              </div>
              <div className="text-muted-foreground">Alumni Terdaftar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <Briefcase className="w-8 h-8" />
                150+
              </div>
              <div className="text-muted-foreground">Lowongan Kerja</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <Heart className="w-8 h-8" />
                50+
              </div>
              <div className="text-muted-foreground">Project Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-2">
                <Target className="w-8 h-8" />
                200+
              </div>
              <div className="text-muted-foreground">Mahasiswa Terbantu</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Selector */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 max-w-2xl mx-auto">
            <Button
              variant={activeSection === 'portal' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setActiveSection('portal')}
              className="flex-1 hover:scale-105 transition-all duration-300"
            >
              <Users className="w-5 h-5 mr-2" />
              Portal Alumni
            </Button>
            <Button
              variant={activeSection === 'info' ? 'default' : 'outline'}
              size="lg"
              onClick={() => setActiveSection('info')}
              className="flex-1 hover:scale-105 transition-all duration-300"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              Informasi Umum
            </Button>
          </div>
          <p className="text-center text-muted-foreground mt-4">
            {activeSection === 'portal' 
              ? 'Khusus untuk alumni HME yang sudah terdaftar' 
              : 'Informasi terbuka untuk mahasiswa dan alumni'}
          </p>
        </div>
      </section>

      {/* Portal Alumni Section */}
      {activeSection === 'portal' && (
        <>
          {/* Main Content */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
              <Tabs defaultValue="opportunities" className="max-w-7xl mx-auto">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12 h-auto p-1">
                  <TabsTrigger value="opportunities" className="text-center py-3">Lowongan Kerja</TabsTrigger>
                  <TabsTrigger value="internships" className="text-center py-3">Info Magang</TabsTrigger>
                  <TabsTrigger value="collaboration" className="text-center py-3">Kolaborasi Project</TabsTrigger>
                </TabsList>

            <TabsContent value="opportunities" className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input 
                      placeholder="Cari berdasarkan posisi, perusahaan, lokasi..." 
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="w-5 h-5" />
                </Button>
                <Button variant="accent">
                  <Plus className="w-5 h-5" />
                  Post Lowongan
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {jobOpportunities.map((job) => (
                  <Card key={job.id} className="border-0 shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group cursor-pointer">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-xl text-primary group-hover:scale-105 transition-transform duration-300">{job.title}</CardTitle>
                          <CardDescription className="text-base font-medium group-hover:text-foreground transition-colors duration-300">{job.company}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                          {job.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.salary}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm mb-2">{job.description}</p>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-2">Requirements:</div>
                        <div className="flex flex-wrap gap-1">
                          {job.requirements.map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4">
                        <div className="text-xs text-muted-foreground">
                          Deadline: {job.deadline}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button variant="default" size="sm">
                            Apply Now
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="internships" className="space-y-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input 
                      placeholder="Cari program magang..." 
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button variant="accent">
                  <Plus className="w-5 h-5" />
                  Post Magang
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {internshipOpportunities.map((internship) => (
                  <Card key={internship.id} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-xl text-primary">{internship.title}</CardTitle>
                          <CardDescription className="text-base font-medium">{internship.company}</CardDescription>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          Magang
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {internship.location}
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {internship.duration}
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Briefcase className="w-4 h-4" />
                          {internship.stipend}
                        </div>
                        <div className="text-muted-foreground">
                          {internship.posted}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm mb-2">{internship.description}</p>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-2">Requirements:</div>
                        <div className="flex flex-wrap gap-1">
                          {internship.requirements.map((req, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {req}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4">
                        <div className="text-xs text-muted-foreground">
                          Deadline: {internship.deadline}
                        </div>
                        <Button variant="default" size="sm">
                          Apply Now
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="collaboration" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Kolaborasi Project</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Platform untuk berkolaborasi dalam project penelitian, startup, 
                  dan pengembangan teknologi bersama alumni dan mahasiswa
                </p>
              </div>

              <div className="flex justify-between items-center mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                    <Input 
                      placeholder="Cari project atau skill yang dibutuhkan..." 
                      className="pl-10"
                    />
                  </div>
                </div>
                <Button variant="accent" className="ml-4">
                  <Plus className="w-5 h-5" />
                  Buat Project
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {collaborationProjects.map((project, index) => (
                  <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                          <CardDescription className="text-base">by {project.initiator}</CardDescription>
                        </div>
                        <Badge 
                          variant={project.type === 'Research Project' ? 'secondary' : 'default'}
                          className={project.type === 'Research Project' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'}
                        >
                          {project.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {project.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {project.team}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium mb-2">Skills Dibutuhkan:</div>
                        <div className="flex flex-wrap gap-1">
                          {project.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${project.status === 'Open' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                          <span className="text-sm text-muted-foreground">{project.status}</span>
                        </div>
                        <Button variant="default" size="sm">
                          Join Project
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="text-xs text-muted-foreground border-t pt-2">
                        Apply before: {project.deadline}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )}

  {/* Informasi Umum Section */}
  {activeSection === 'info' && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Informasi Umum Alumni</h2>
              <p className="text-xl text-muted-foreground">
                Informasi dan kesempatan yang terbuka untuk semua
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Cara Bergabung */}
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Cara Mendaftar Alumni</CardTitle>
                  <CardDescription className="text-base">
                    Langkah-langkah untuk bergabung dengan Portal Alumni HME
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Isi Formulir Pendaftaran</h4>
                        <p className="text-sm text-muted-foreground">Lengkapi data diri dan informasi kontak Anda</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Verifikasi Data</h4>
                        <p className="text-sm text-muted-foreground">Tim HME akan memverifikasi data alumni Anda</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-accent font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Akses Portal</h4>
                        <p className="text-sm text-muted-foreground">Setelah terverifikasi, Anda dapat mengakses semua fitur portal</p>
                      </div>
                    </div>
                  </div>
                  <Button variant="default" size="lg" className="w-full mt-6">
                    <Mail className="w-5 h-5 mr-2" />
                    Daftar Sekarang
                  </Button>
                </CardContent>
              </Card>

              {/* Benefit Bergabung */}
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                    <Star className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Benefit Alumni</CardTitle>
                  <CardDescription className="text-base">
                    Keuntungan yang Anda dapatkan sebagai alumni terdaftar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Akses Lowongan Kerja Eksklusif</h4>
                        <p className="text-sm text-muted-foreground">Dapatkan info lowongan dari perusahaan partner</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Networking Alumni</h4>
                        <p className="text-sm text-muted-foreground">Terhubung dengan 500+ alumni di berbagai industri</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Mentoring & Kolaborasi</h4>
                        <p className="text-sm text-muted-foreground">Berbagi pengalaman dan berkolaborasi dalam project</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Event & Workshop Gratis</h4>
                        <p className="text-sm text-muted-foreground">Akses ke semua event HME tanpa biaya</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <Card className="border-0 shadow-elegant mt-8">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Butuh Bantuan?</CardTitle>
                <CardDescription className="text-base">
                  Hubungi kami untuk informasi lebih lanjut
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">alumni@hme-ftub.com</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <p className="text-sm text-muted-foreground">+62 812-3456-7890</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold mb-1">Instagram</h4>
                    <p className="text-sm text-muted-foreground">@hme_ftub</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Alumni;