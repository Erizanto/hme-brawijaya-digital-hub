import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Camera, Image, Video, Calendar, Users, Award, Filter, Search, Download, Eye } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua', icon: Image },
    { id: 'events', label: 'Event & Kegiatan', icon: Calendar },
    { id: 'workshops', label: 'Workshop & Pelatihan', icon: Users },
    { id: 'competitions', label: 'Kompetisi', icon: Award },
    { id: 'behind-scenes', label: 'Behind The Scenes', icon: Camera }
  ];

  const galleries = [
    {
      id: 1,
      title: "TESLA 2024 Launch",
      description: "Peluncuran buletin tahunan TESLA edisi 2024",
      category: "events",
      date: "Desember 2024",
      images: 12,
      videos: 3,
      thumbnail: "/placeholder.svg",
      featured: true,
      organizer: "HME FT-UB"
    },
    {
      id: 2,
      title: "Arduino Workshop Series",
      description: "Workshop pengembangan sistem Arduino dan IoT",
      category: "workshops",
      date: "November 2024",
      images: 25,
      videos: 5,
      thumbnail: "/placeholder.svg",
      featured: false,
      organizer: "Workshop HME"
    },
    {
      id: 3,
      title: "Robotics Competition 2024",
      description: "Kompetisi robotika mahasiswa elektro",
      category: "competitions",
      date: "Oktober 2024",
      images: 35,
      videos: 8,
      thumbnail: "/placeholder.svg",
      featured: true,
      organizer: "Dept. Robotika"
    },
    {
      id: 4,
      title: "Leadership Training",
      description: "Pelatihan kepemimpinan untuk pengurus HME",
      category: "workshops",
      date: "September 2024",
      images: 18,
      videos: 2,
      thumbnail: "/placeholder.svg",
      featured: false,
      organizer: "EME PSDM"
    },
    {
      id: 5,
      title: "Tech Talk with Alumni",
      description: "Sharing session dengan alumni di industri teknologi",
      category: "events",
      date: "Agustus 2024",
      images: 20,
      videos: 4,
      thumbnail: "/placeholder.svg",
      featured: false,
      organizer: "EME Eksternal"
    },
    {
      id: 6,
      title: "Behind The Scenes - Oprec 2024",
      description: "Dokumentasi proses open recruitment HME",
      category: "behind-scenes",
      date: "Juli 2024",
      images: 30,
      videos: 6,
      thumbnail: "/placeholder.svg",
      featured: false,
      organizer: "EME Medikraf"
    },
    {
      id: 7,
      title: "Innovation Challenge Finals",
      description: "Final kompetisi inovasi teknologi elektro",
      category: "competitions",
      date: "Juni 2024",
      images: 28,
      videos: 7,
      thumbnail: "/placeholder.svg",
      featured: true,
      organizer: "RisTIE"
    },
    {
      id: 8,
      title: "Soft Skills Workshop",
      description: "Workshop pengembangan soft skills mahasiswa",
      category: "workshops",
      date: "Mei 2024",
      images: 15,
      videos: 2,
      thumbnail: "/placeholder.svg",
      featured: false,
      organizer: "EME PSDM"
    }
  ];

  const filteredGalleries = activeFilter === 'all' 
    ? galleries 
    : galleries.filter(gallery => gallery.category === activeFilter);

  const stats = [
    { label: "Total Album", value: "50+", icon: Image },
    { label: "Foto", value: "2000+", icon: Camera },
    { label: "Video", value: "100+", icon: Video },
    { label: "Event Terdokumentasi", value: "25+", icon: Calendar }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6 animate-pulse">
              <Camera className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Galeri & Dokumentasi
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-up">
              Dokumentasi visual perjalanan dan pencapaian HME FT-UB
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

      {/* Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.id)}
                className="hover:scale-110 transition-all duration-300"
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGalleries.map((gallery) => (
              <Card key={gallery.id} className="overflow-hidden hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-card group cursor-pointer">
                <div className="relative">
                  <img 
                    src={gallery.thumbnail} 
                    alt={gallery.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {gallery.featured && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button variant="secondary" size="sm" className="hover:scale-110 transition-all duration-300">
                      <Eye className="w-4 h-4 mr-2" />
                      Lihat Album
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 flex-1">
                      {gallery.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    {gallery.date}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 group-hover:text-foreground transition-colors duration-300">
                    {gallery.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-primary">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="font-semibold">{gallery.organizer}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center text-muted-foreground">
                        <Image className="w-4 h-4 mr-1" />
                        {gallery.images}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Video className="w-4 h-4 mr-1" />
                        {gallery.videos}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ingin Berkontribusi?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan tim dokumentasi HME atau kirimkan foto/video kegiatan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="hover:scale-110 transition-all duration-300 hover:shadow-glow">
              <Camera className="w-5 h-5 mr-2" />
              Gabung Tim Medikraf
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-110 transition-all duration-300">
              <Download className="w-5 h-5 mr-2" />
              Upload Konten
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;