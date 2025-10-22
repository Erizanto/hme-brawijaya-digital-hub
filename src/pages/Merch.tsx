import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ShoppingCart, Star, Shirt, Zap, MessageCircle } from 'lucide-react';

const Merch = () => {
  const [cart, setCart] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "HME T-Shirt Official",
      price: "Rp 85.000",
      category: "Apparel",
      image: "/placeholder.svg",
      rating: 4.8,
      stock: "Available",
      description: "T-shirt resmi HME dengan desain eksklusif"
    },
    {
      id: 2,
      name: "HME Hoodie Premium",
      price: "Rp 175.000",
      category: "Apparel",
      image: "/placeholder.svg",
      rating: 4.9,
      stock: "Limited",
      description: "Hoodie premium dengan bahan berkualitas tinggi"
    },
    {
      id: 3,
      name: "HME Totebag Canvas",
      price: "Rp 45.000",
      category: "Accessories",
      image: "/placeholder.svg",
      rating: 4.7,
      stock: "Available",
      description: "Totebag canvas dengan desain minimalis"
    },
    {
      id: 4,
      name: "HME Sticker Pack",
      price: "Rp 15.000",
      category: "Accessories",
      image: "/placeholder.svg",
      rating: 4.6,
      stock: "Available",
      description: "Paket sticker HME (isi 10 pcs)"
    },
    {
      id: 5,
      name: "HME Pin Collection",
      price: "Rp 25.000",
      category: "Accessories",
      image: "/placeholder.svg",
      rating: 4.5,
      stock: "Available",
      description: "Koleksi pin HME berbagai desain"
    },
    {
      id: 6,
      name: "HME Lanyard",
      price: "Rp 20.000",
      category: "Accessories",
      image: "/placeholder.svg",
      rating: 4.7,
      stock: "Available",
      description: "Lanyard dengan logo HME"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <Shirt className="w-10 h-10 text-accent-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              HME Merchandise
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 animate-slide-up">
              Koleksi merchandise resmi HME FT-UB
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Produk Kami</h2>
            <p className="text-xl text-muted-foreground">
              Dapatkan merchandise resmi HME FT-UB berkualitas tinggi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge 
                      className={`absolute top-4 right-4 ${
                        product.stock === 'Limited' 
                          ? 'bg-yellow-500 text-white' 
                          : 'bg-green-500 text-white'
                      }`}
                    >
                      {product.stock}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="mb-4">
                    {product.description}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-primary">
                      {product.price}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>

                  <Button 
                    variant="default" 
                    className="w-full"
                    onClick={() => setCart([...cart, product.id])}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Tambah ke Keranjang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">Cara Pemesanan</h2>
              <p className="text-xl text-muted-foreground">
                Mudah dan cepat dalam 3 langkah
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingCart className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle>1. Pilih Produk</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pilih merchandise yang kamu inginkan dari katalog kami
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle>2. Hubungi Kami</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Konfirmasi pesanan melalui WhatsApp atau Instagram
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-card">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle>3. Terima Produk</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tunggu konfirmasi dan terima produk sesuai jadwal
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button variant="default" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Hubungi via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Merch;
