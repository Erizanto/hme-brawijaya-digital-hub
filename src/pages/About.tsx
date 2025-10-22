import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Users, Award, BookOpen, Lightbulb, Heart, ChevronLeft, ChevronRight, Trophy } from 'lucide-react';
import labScene from '@/assets/lab-scene.jpg';

const About = () => {
  const [currentPeriod, setCurrentPeriod] = useState(0);
  const [showFullStructure, setShowFullStructure] = useState(false);

  const visionMission = [
    {
      title: "Visi",
      icon: Target,
      content: "Menjadi himpunan mahasiswa elektro yang unggul, inovatif, dan berdaya saing tinggi dalam mengembangkan teknologi elektro untuk kemajuan bangsa.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Misi",
      icon: Lightbulb,
      content: "Mengembangkan potensi mahasiswa elektro melalui kegiatan akademik, penelitian, dan pengabdian masyarakat yang berkelanjutan.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const values = [
    {
      title: "Inovasi",
      description: "Selalu menghadirkan ide-ide kreatif dan solusi teknologi terdepan",
      icon: Lightbulb
    },
    {
      title: "Integritas",
      description: "Menjalankan setiap kegiatan dengan jujur dan bertanggung jawab",
      icon: Heart
    },
    {
      title: "Kolaborasi",
      description: "Membangun kerjasama yang solid antar anggota dan stakeholder",
      icon: Users
    },
    {
      title: "Prestasi",
      description: "Berkomitmen untuk meraih pencapaian terbaik di setiap kegiatan",
      icon: Award
    }
  ];

  const achievements = [
    {
      title: "Juara 1 Kompetisi Robotika Nasional 2024",
      description: "Tim robotika HME berhasil meraih juara pertama",
      year: "2024"
    },
    {
      title: "Best Paper Award ICEET 2024",
      description: "Publikasi ilmiah terbaik di konferensi internasional",
      year: "2024"
    },
    {
      title: "Penghargaan Organisasi Mahasiswa Terbaik",
      description: "Dari Fakultas Teknik Universitas Brawijaya",
      year: "2023"
    },
    {
      title: "Juara 2 Smart Grid Competition",
      description: "Kompetisi desain sistem smart grid tingkat nasional",
      year: "2023"
    }
  ];

  const periodPhotos = [
    {
      period: "2024-2025",
      cabinet: "Gardaraksa Anakarta",
      image: labScene,
      description: "Periode kepengurusan saat ini dengan fokus pada inovasi dan kolaborasi"
    },
    {
      period: "2023-2024",
      cabinet: "Kabinet Sebelumnya",
      image: labScene,
      description: "Periode kepengurusan dengan pencapaian luar biasa di berbagai bidang"
    },
    {
      period: "2022-2023",
      cabinet: "Kabinet Terdahulu",
      image: labScene,
      description: "Periode kepengurusan dengan fokus pada pengembangan SDM"
    }
  ];

  const batches = [
    { year: 2002, name: "Loren ipsum" },
    { year: 2003, name: "Loren ipsum" },
    { year: 2004, name: "Loren ipsum" },
    { year: 2005, name: "Loren ipsum" },
    { year: 2006, name: "Loren ipsum" },
    { year: 2007, name: "Loren ipsum" },
    { year: 2008, name: "Loren ipsum" },
    { year: 2009, name: "Loren ipsum" },
    { year: 2010, name: "Loren ipsum" },
    { year: 2011, name: "Loren ipsum" },
    { year: 2012, name: "Loren ipsum" },
    { year: 2013, name: "Loren ipsum" },
    { year: 2014, name: "Loren ipsum" },
    { year: 2015, name: "Loren ipsum" },
    { year: 2016, name: "Loren ipsum" },
    { year: 2017, name: "Loren ipsum" },
    { year: 2018, name: "Loren ipsum" },
    { year: 2019, name: "Loren ipsum" },
    { year: 2020, name: "RECTIFO" },
    { year: 2021, name: "ARDUINO" },
    { year: 2022, name: "NORTON" },
    { year: 2023, name: "PIEZO" },
    { year: 2024, name: "THEVENIN" }
  ];

  // Main organizational structure
  const mainStructure = {
    ketua: { position: "Ketua HME", name: "Iqbal", period: "2025-2026" },
    core: [
      { position: "Wakil Ketua HME", name: "Evan", period: "2025-2026" },
      { position: "Sekretaris Umum HME", name: "Aurel", period: "2025-2026" },
      { position: "Bendahara Umum HME", name: "Devina", period: "2025-2026" }
    ],
    lso: [
      { position: "Ketua Umum Workshop", name: "Mulki", period: "2025-2026" },
      { position: "Ketua Umum RisTIE", name: "Aza", period: "2025-2026" }
    ]
  };

  // Full detailed structure (alat kelengkapan)
  const fullStructure = [
    {
      unit: "Badan Perwakilan Mahasiswa Elektro (BPME)",
      members: [
        { position: "Koordinator BPME", name: "Alif" },
        { position: "Legislatif", name: "" },
        { position: "Yudikatif", name: "" }
      ]
    },
    {
      unit: "Eksekutif Mahasiswa Elektro (EME)",
      members: [
        { position: "Kepala Departemen Internal", name: "Dimas" },
        { position: "Kepala Departemen Eksternal", name: "Reimas" },
        { position: "Kepala Departemen PSDM", name: "Rafly" },
        { position: "Kepala Departemen Medikraf", name: "Nabil" },
        { position: "Kepala Departemen Aksi", name: "Fadhlan" },
        { position: "Kepala Departemen KWU", name: "Adit" },

      ]
    },
    {
      unit: "Workshop HME",
      members: [
        { position: "Ketua Umum Workshop", name: "Mulki" },
        { position: "Sekretaris Umum Workshop", name: "Panji" },
        { position: "Bendahara Umum Workshop", name: "Lady" },
        { position: "Project Management", name: "Akmal Hadi" },
        { position: "Media Komunikasi & Informasi", name: "Adim" },
        { position: "Media Komunikasi & Informasi", name: "Nadia" },
        { position: "Business Management", name: "Farid" },
        { position: "Kepala Departemen EF", name: "Adit" },
        { position: "Kepala Departemen Internet of Things", name: "Andri" },
        { position: "Kepala Departemen Otomasi", name: "Haykal" },
        { position: "Kepala Departemen Line Tracer Community", name: "Yasir" },
        { position: "Kepala Departemen Aeronautika", name: "Daoni" },
        { position: "Kepala Departemen Robotika", name: "Almas" }
      ]
    },
    {
      unit: "RisTIE (Riset Teknologi Informasi Elektro)",
      members: [
        { position: "Ketua Umum RisTIE", name: "Aza" },
        { position: "Sekretaris Umum RisTIE", name: "Rizal" },
        { position: "Kepala Departemen Education", name: "Sakho Noob" },
        { position: "Kepala Departemen Research & Development", name: "Adib" },
        { position: "Kepala Departemen Media Digital", name: "Wawan" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Tentang HME FT-UB
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-up">
              Organisasi Mahasiswa Teknik Elektro Terdepan
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
              <Trophy className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">Pencapaian HME</h2>
            <p className="text-xl text-muted-foreground">Prestasi dan penghargaan yang telah diraih</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 group">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                        {achievement.title}
                      </CardTitle>
                    </div>
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{achievement.description}</p>
                  <p className="text-sm text-accent font-semibold">{achievement.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Period Slideshow */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Perjalanan Kepengurusan</h2>
            <p className="text-xl text-muted-foreground">Dokumentasi periode kepengurusan HME</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              <div 
                className="h-96 bg-cover bg-center bg-no-repeat relative"
                style={{ backgroundImage: `url(${periodPhotos[currentPeriod].image})` }}
              >
                <div className="absolute inset-0 bg-black/60 flex items-end">
                  <div className="p-8 text-white w-full">
                    <h3 className="text-3xl font-bold mb-2">{periodPhotos[currentPeriod].cabinet}</h3>
                    <p className="text-xl text-accent mb-2">Periode {periodPhotos[currentPeriod].period}</p>
                    <p className="text-lg opacity-90">{periodPhotos[currentPeriod].description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slideshow Controls */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPeriod((prev) => (prev === 0 ? periodPhotos.length - 1 : prev - 1))}
                className="hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex space-x-2">
                {periodPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPeriod(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentPeriod ? 'bg-primary scale-125' : 'bg-muted-foreground/50 hover:bg-muted-foreground/80'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPeriod((prev) => (prev === periodPhotos.length - 1 ? 0 : prev + 1))}
                className="hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Visi & Misi</h2>
            <p className="text-xl text-muted-foreground">Landasan filosofi yang mengarahkan setiap langkah HME</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {visionMission.map((item, index) => (
              <Card key={item.title} className="relative overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
                <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${item.color} group-hover:h-3 transition-all duration-300`}></div>
                <CardHeader className="text-center pt-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground text-center leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Nilai-Nilai HME</h2>
            <p className="text-xl text-muted-foreground">Prinsip dasar yang menjadi pedoman dalam berorganisasi</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-card group cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-glow">
                    <value.icon className="w-8 h-8 text-primary-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">Sejarah HME</h2>
              <p className="text-xl text-muted-foreground">Perjalanan panjang dalam mengembangkan pendidikan teknik elektro</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={labScene} 
                  alt="HME History" 
                  className="w-full h-80 object-cover rounded-2xl shadow-elegant"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Didirikan Tahun 1985</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Himpunan Mahasiswa Elektro FT-UB didirikan pada tahun 1985 sebagai wadah untuk 
                    mengembangkan potensi mahasiswa teknik elektro Universitas Brawijaya.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Selama lebih dari 35 tahun, HME telah berkembang menjadi organisasi mahasiswa 
                    yang aktif dalam berbagai bidang mulai dari akademik, penelitian, hingga 
                    pengabdian masyarakat.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dengan lebih dari 200 anggota aktif dan alumni yang tersebar di berbagai 
                    industri, HME terus berkomitmen untuk menghasilkan lulusan teknik elektro 
                    yang kompeten dan berdaya saing tinggi.
                  </p>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="gradient" size="lg" className="mt-6 hover:scale-110 transition-all duration-300 hover:shadow-glow">
                      Lihat Nama Angkatan
                      <BookOpen className="w-5 h-5 hover:rotate-12 transition-transform duration-300" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Nama Angkatan HME</DialogTitle>
                      <DialogDescription>
                        Daftar nama angkatan mahasiswa Teknik Elektro dari tahun 2002 hingga sekarang
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {batches.map((batch) => (
                        <Card key={batch.year} className="border-0 shadow-card hover:shadow-elegant transition-all duration-300">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-bold text-primary text-lg">{batch.year}</p>
                                <p className="text-muted-foreground">{batch.name}</p>
                              </div>
                              <Award className="w-6 h-6 text-accent" />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section id="structure" className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Struktur Organisasi</h2>
            <p className="text-xl opacity-90">Kabinet Sangkara Anantara Periode 2025-2026</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Main Structure - Simplified View */}
            {!showFullStructure && (
              <div className="space-y-6">
                {/* Ketua - Top Position */}
                <div className="flex justify-center">
                  <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 w-full max-w-sm">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-10 h-10 text-accent-foreground" />
                      </div>
                      <CardTitle className="text-xl">{mainStructure.ketua.position}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="font-bold text-accent text-lg mb-2">{mainStructure.ketua.name}</p>
                      <p className="text-sm opacity-80">{mainStructure.ketua.period}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Core Team - Wakhim, Sekretaris, Bendahara */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mainStructure.core.map((member, index) => (
                    <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-8 h-8 text-accent-foreground" />
                        </div>
                        <CardTitle className="text-lg">{member.position}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="font-semibold text-accent mb-2">{member.name}</p>
                        <p className="text-sm opacity-80">{member.period}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* LSO Heads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                  {mainStructure.lso.map((member, index) => (
                    <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300">
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-8 h-8 text-accent-foreground" />
                        </div>
                        <CardTitle className="text-lg">{member.position}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="font-semibold text-accent mb-2">{member.name}</p>
                        <p className="text-sm opacity-80">{member.period}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Full Structure - Detailed View (Alat Kelengkapan) */}
            {showFullStructure && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {fullStructure.map((unit, index) => (
                  <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
                    <CardHeader>
                      <CardTitle className="text-xl text-center text-accent">{unit.unit}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {unit.members.map((member, idx) => (
                        <div key={idx} className="bg-primary-foreground/5 p-3 rounded-lg">
                          <p className="font-semibold text-sm">{member.position}</p>
                          <p className="text-accent">{member.name}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            
            <div className="text-center mt-12">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => setShowFullStructure(!showFullStructure)}
              >
                {showFullStructure ? 'Tampilkan Struktur Sederhana' : 'Lihat Struktur Lengkap (Alat Kelengkapan)'}
                <Users className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
