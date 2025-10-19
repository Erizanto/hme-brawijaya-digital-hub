import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Instagram, 
  Youtube, 
  Mail, 
  MapPin, 
  Phone,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Tentang HME', href: '/about' },
    { name: 'Departemen', href: '/departments' },
    { name: 'LSO', href: '/lso' },
    { name: 'TESLA Journal', href: '/tesla' },
  ];

  const lsoLinks = [
    { name: 'Workshop HME', href: '/lso/workshop' },
    { name: 'RisTIE', href: '/lso/ristie' },
  ];

  const resources = [
    { name: 'Portal Alumni', href: '/alumni' },
    { name: 'Berita & Acara', href: '/news' },
    { name: 'Dokumentasi', href: '/gallery' },
    { name: 'Kontak', href: '/contact' },
  ];

  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">HME</span>
              </div>
              <div>
                <h3 className="font-bold text-xl">HME FT-UB</h3>
                <p className="text-sm opacity-80">Universitas Brawijaya</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-6">
              Himpunan Mahasiswa Elektro Fakultas Teknik Universitas Brawijaya. 
              Organisasi mahasiswa yang aktif, inovatif, dan profesional di bidang teknik elektro.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <Button 
                variant="outline-accent" 
                size="icon" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="https://instagram.com/hme_ftub" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline-accent" 
                size="icon" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="https://youtube.com/@hme_ftub" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="outline-accent" 
                size="icon" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="mailto:hme@ft.ub.ac.id">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LSO */}
          <div>
            <h4 className="font-semibold text-lg mb-4">LSO</h4>
            <ul className="space-y-2">
              {lsoLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-300 flex items-center"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <h5 className="font-semibold text-base mb-3">Kontak & Alamat</h5>
              <div className="flex items-start space-x-2 text-sm opacity-90">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Gedung Elektro, Fakultas Teknik<br />Universitas Brawijaya, Malang</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-90">
                <Phone className="h-4 w-4" />
                <span>+62 341 587711</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-90">
                <Mail className="h-4 w-4" />
                <span>hme@ft.ub.ac.id</span>
              </div>
              <div className="flex items-center space-x-2 text-sm opacity-90 pt-2">
                <ExternalLink className="h-4 w-4" />
                <a 
                  href="https://linkedin.com/company/hme-ftub" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LinkedIn: HME FT-UB
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-80">
              © {currentYear} Himpunan Mahasiswa Elektro FT-UB. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link 
                to="/privacy" 
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;