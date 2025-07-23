import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search, Users, BookOpen, Calendar, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Beranda', href: '/', exact: true },
    { 
      name: 'Tentang HME', 
      href: '/about',
      dropdown: [
        { name: 'Visi & Misi', href: '/about#vision' },
        { name: 'Struktur Organisasi', href: '/about#structure' },
        { name: 'Sejarah', href: '/about#history' },
      ]
    },
    { 
      name: 'Subunit Organisasi', 
      href: '/subunit',
      dropdown: [
        { name: 'Workshop HME FT-UB', href: '/workshop' },
        { name: 'RisTIE', href: '/ristie' },
        { name: 'EME - Eksekutif Mahasiswa', href: '/eme' },
        { name: 'BPME - Badan Perwakilan', href: '/bpme' },
      ]
    },
    { name: 'TESLA Recap', href: '/tesla' },
    { 
      name: 'Portal & Program', 
      href: '/portal',
      dropdown: [
        { name: 'Portal Alumni', href: '/alumni' },
        { name: 'Program Kerja & Kegiatan', href: '/programs' },
      ]
    },
    { 
      name: 'Media', 
      href: '/media',
      dropdown: [
        { name: 'Galeri & Dokumentasi', href: '/gallery' },
        { name: 'Berita & Acara', href: '/news' },
      ]
    },
    { name: 'Kontak', href: '/contact' },
  ];

  const isActive = (href: string, exact = false) => {
    if (exact) return location.pathname === href;
    return location.pathname.startsWith(href);
  };

  const NavLink = ({ item, className = "" }: { item: any, className?: string }) => (
    <Link
      to={item.href}
      className={cn(
        "flex items-center px-4 py-2 rounded-lg transition-all duration-300 font-medium",
        isActive(item.href, item.exact)
          ? "bg-primary/10 text-primary"
          : "text-foreground hover:bg-muted hover:text-primary",
        className
      )}
    >
      {item.name}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">HME</span>
          </div>
          <div className="hidden md:block">
            <h1 className="font-bold text-lg text-primary">HME FT-UB</h1>
            <p className="text-xs text-muted-foreground">Universitas Brawijaya</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                {item.dropdown ? (
                  <>
                    <NavigationMenuTrigger className="h-auto p-2 font-medium text-foreground hover:text-primary">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[400px] gap-3 p-4">
                        {item.dropdown.map((subItem) => (
                          <NavigationMenuLink key={subItem.name} asChild>
                            <Link
                              to={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{subItem.name}</div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <NavLink item={item} />
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="accent" size="sm" className="hidden md:flex">
            Join HME
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <NavLink item={item} />
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <Button variant="accent" className="w-full">
                    Join HME
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;