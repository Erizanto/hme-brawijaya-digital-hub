import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Instagram, Youtube, Globe, Users } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      value: "+62 341 551611",
      description: "Senin - Jumat, 08:00 - 16:00",
      action: "tel:+62341551611"
    },
    {
      icon: Mail,
      title: "Email",
      value: "hme@ft.ub.ac.id",
      description: "Respon dalam 24 jam",
      action: "mailto:hme@ft.ub.ac.id"
    },
    {
      icon: MapPin,
      title: "Alamat",
      value: "Gedung Fakultas Teknik",
      description: "Jl. MT. Haryono 167, Malang, Jawa Timur 65145",
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      value: "Senin - Jumat",
      description: "08:00 - 16:00 WIB",
      action: null
    }
  ];

  const socialMedia = [
    {
      platform: "Instagram",
      handle: "@hme_ftub",
      url: "https://instagram.com/hme_ftub",
      icon: Instagram,
      color: "from-pink-500 to-purple-600"
    },
    {
      platform: "YouTube",
      handle: "HME FT-UB",
      url: "https://youtube.com",
      icon: Youtube,
      color: "from-red-500 to-red-600"
    },
    {
      platform: "Website",
      handle: "hme-ftub.ac.id",
      url: "https://hme-ftub.ac.id",
      icon: Globe,
      color: "from-blue-500 to-blue-600"
    }
  ];

  const departments = [
    {
      name: "Sekretariat HME",
      email: "sekretariat@hme-ftub.ac.id",
      description: "Informasi umum dan administrasi"
    },
    {
      name: "EME (Eksekutif Mahasiswa)",
      email: "eme@hme-ftub.ac.id",
      description: "Program kerja dan kegiatan kemahasiswaan"
    },
    {
      name: "Workshop HME",
      email: "workshop@hme-ftub.ac.id",
      description: "Riset, kompetisi, dan pengembangan teknologi"
    },
    {
      name: "RisTIE",
      email: "ristie@hme-ftub.ac.id",
      description: "Riset teknologi informasi elektro"
    },
    {
      name: "BPME",
      email: "bpme@hme-ftub.ac.id",
      description: "Aspirasi dan pengawasan organisasi"
    }
  ];

  const faqs = [
    {
      question: "Bagaimana cara bergabung dengan HME FT-UB?",
      answer: "Untuk bergabung dengan HME, Anda dapat mengikuti open recruitment yang biasanya diadakan di awal semester. Pantau terus media sosial kami untuk informasi terbaru."
    },
    {
      question: "Apakah non-mahasiswa elektro bisa ikut kegiatan HME?",
      answer: "Beberapa kegiatan umum seperti seminar dan workshop terbuka untuk umum. Namun untuk kegiatan internal organisasi khusus untuk mahasiswa elektro FT-UB."
    },
    {
      question: "Bagaimana cara mendapatkan informasi lowongan kerja dari alumni?",
      answer: "Anda dapat mengakses Portal Alumni di website kami atau menghubungi EME Eksternal untuk informasi lebih lanjut mengenai networking alumni."
    },
    {
      question: "Apakah ada program mentoring untuk mahasiswa baru?",
      answer: "Ya, HME memiliki program mentoring melalui EME PSDM dan juga melalui Portal Alumni untuk bimbingan karier dari alumni yang berpengalaman."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6">
              <MessageSquare className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Kontak & Bantuan
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-up">
              Hubungi kami untuk informasi, kerjasama, atau bantuan
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Informasi Kontak</h2>
            <p className="text-xl text-muted-foreground">Berbagai cara untuk menghubungi HME FT-UB</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((contact, index) => (
              <Card key={contact.title} className="text-center hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-card group cursor-pointer">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-glow">
                    <contact.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{contact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-2">{contact.value}</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{contact.description}</p>
                  {contact.action && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="mt-3 hover:scale-110 transition-all duration-300"
                      onClick={() => window.open(contact.action!, '_blank')}
                    >
                      Hubungi
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Kirim Pesan</h3>
              <Card className="hover:shadow-elegant transition-all duration-500 border-0 shadow-card">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input 
                          id="name" 
                          placeholder="Masukkan nama lengkap" 
                          className="hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="email@example.com" 
                          className="hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subjek</Label>
                      <Input 
                        id="subject" 
                        placeholder="Subjek pesan" 
                        className="hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="department">Tujuan Departemen</Label>
                      <select className="w-full p-2 border border-input bg-background rounded-md hover:scale-105 transition-transform duration-200">
                        <option value="">Pilih departemen</option>
                        {departments.map((dept) => (
                          <option key={dept.name} value={dept.email}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Pesan</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tulis pesan Anda di sini..." 
                        rows={6}
                        className="hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full hover:scale-105 transition-all duration-300 hover:shadow-glow"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Departments */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Lokasi & Kontak Departemen</h3>
              
              {/* Map Placeholder */}
              <Card className="mb-6 hover:shadow-elegant transition-all duration-500 border-0 shadow-card overflow-hidden group">
                <div className="h-64 bg-muted flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Fakultas Teknik Universitas Brawijaya</p>
                    <p className="text-sm text-muted-foreground">Jl. MT. Haryono 167, Malang, Jawa Timur</p>
                  </div>
                </div>
              </Card>
              
              {/* Department Contacts */}
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <Card key={dept.name} className="hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0 shadow-card group cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-glow">
                          <Mail className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary group-hover:scale-105 transition-transform duration-300">{dept.name}</h4>
                          <p className="text-sm text-muted-foreground mb-1 group-hover:text-foreground transition-colors duration-300">{dept.description}</p>
                          <p className="text-sm font-medium text-primary">{dept.email}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Media Sosial</h2>
            <p className="text-xl text-muted-foreground">Ikuti dan hubungi kami melalui platform digital</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {socialMedia.map((social, index) => (
              <Card key={social.platform} className="text-center hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-0 shadow-card group cursor-pointer">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-glow`}>
                    <social.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{social.platform}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-primary mb-4">{social.handle}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:scale-110 transition-all duration-300"
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    Kunjungi
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Pertanyaan yang sering diajukan tentang HME FT-UB</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-0 shadow-card group">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Masih Ada Pertanyaan?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Tim HME FT-UB siap membantu dan menjawab semua pertanyaan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="hover:scale-110 transition-all duration-300 hover:shadow-glow">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Langsung
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:scale-110 transition-all duration-300">
              <Users className="w-5 h-5 mr-2" />
              Live Chat
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;