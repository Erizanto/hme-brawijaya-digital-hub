import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Menu, Search, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Simple search functionality - you can enhance this later
      const searchResults = navItems.flatMap(item => {
        const matches = [];
        if (item.name.toLowerCase().includes(query.toLowerCase())) {
          matches.push(item);
        }
        if (item.dropdown) {
          item.dropdown.forEach(subItem => {
            if (subItem.name.toLowerCase().includes(query.toLowerCase())) {
              matches.push(subItem);
            }
          });
        }
        return matches;
      });
      
      if (searchResults.length > 0) {
        // Navigate to first result
        window.location.href = searchResults[0].href;
      }
    }
  };
  const location = useLocation();

  const navItems = [
    { 
      name: 'Tentang HME', 
      href: '/about',
      dropdown: [
        { name: 'Profile', href: '/about' },
        { name: 'Berita & Acara', href: '/news' },
        { name: 'Galeri & Dokumentasi', href: '/gallery' },
        { name: 'Kontak', href: '/contact' },
      ]
    },
    { 
      name: 'Alat Kelengkapan', 
      href: '/subunit',
      dropdown: [
        { name: 'BPME', href: '/bpme' },
        { name: 'EME', href: '/eme' },
        { name: 'RisTIE', href: '/ristie' },
        { name: 'Workshop', href: '/workshop' },
      ]
    },
    { 
      name: 'Portal & Program', 
      href: '/portal',
      dropdown: [
        { name: 'Portal Alumni & Info', href: '/alumni' },
        { name: 'Publikasi', href: '/publications' },
        { name: 'Partnership', href: '/partnership' },
      ]
    },
    { 
      name: 'More', 
      href: '/more',
      dropdown: [
        { name: 'Merchandise', href: '/merch' },
        { name: 'Tools', href: '/tools' },
      ]
    },
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
        <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center hover:rotate-12 transition-transform duration-300 shadow-sm">
            <span className="text-primary-foreground font-bold text-lg">HME</span>
          </div>
          <div className="hidden md:block">
            <h1 className="font-bold text-lg text-primary">HME FT-UB</h1>
            <p className="text-xs text-muted-foreground">Universitas Brawijaya</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="font-medium text-foreground hover:text-primary">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56 bg-background/95 backdrop-blur border">
                    {item.dropdown.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link
                          to={subItem.href}
                          className="w-full cursor-pointer"
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavLink item={item} />
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Search */}
          <div className="relative hidden lg:flex">
            {searchOpen ? (
              <div className="flex items-center space-x-2 absolute right-0 top-0 bg-background border rounded-lg shadow-lg p-2 min-w-[280px] z-50">
                <Input
                  type="text"
                  placeholder="Cari..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch(searchQuery);
                      setSearchOpen(false);
                      setSearchQuery('');
                    }
                  }}
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => {
                    if (searchQuery.trim()) {
                      handleSearch(searchQuery);
                    }
                    setSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="hover:scale-110 transition-all duration-300 shrink-0"
                >
                  {searchQuery.trim() ? <Search className="h-4 w-4" /> : <X className="h-4 w-4" />}
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setSearchOpen(true)}
                className="hover:scale-110 transition-all duration-300"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden hover:scale-110 transition-all duration-300 hover:rotate-180">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <ScrollArea className="h-full">
                <div className="flex flex-col space-y-3 mt-8 pb-8">
                  {/* Mobile Search */}
                  <div className="px-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <Input
                        type="text"
                        placeholder="Cari..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleSearch(searchQuery);
                            setIsOpen(false);
                            setSearchQuery('');
                          }
                        }}
                      />
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => {
                          if (searchQuery.trim()) {
                            handleSearch(searchQuery);
                            setIsOpen(false);
                          }
                          setSearchQuery('');
                        }}
                        className="shrink-0"
                      >
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {navItems.map((item) => (
                    <div key={item.name} className="space-y-2">
                      {item.dropdown ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              variant="ghost" 
                              className="w-full justify-between font-medium text-foreground hover:text-primary"
                            >
                              {item.name}
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start" className="w-56 bg-background/95 backdrop-blur border">
                            {item.dropdown.map((subItem) => (
                              <DropdownMenuItem key={subItem.name} asChild>
                                <Link
                                  to={subItem.href}
                                  className="w-full cursor-pointer"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <div onClick={() => setIsOpen(false)}>
                          <NavLink item={item} className="w-full" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;