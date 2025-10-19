import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import IPKCalculator from '@/components/IPKCalculator';
import { Calculator } from 'lucide-react';

const Tools = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6">
              <Calculator className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Tools & Utilities
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Berbagai alat bantu untuk memudahkan perjalanan akademik Anda
            </p>
          </div>
        </div>
      </section>

      {/* IPK Calculator Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
              <Calculator className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">Kalkulator IPK</h2>
            <p className="text-xl text-muted-foreground">Hitung dan pantau prestasi akademik Anda dengan mudah</p>
          </div>
          
          <IPKCalculator />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tools;
