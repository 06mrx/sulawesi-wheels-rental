import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Car, MapPin, Globe } from "lucide-react";
import heroImage from "@/assets/hero-bira.jpg";
import BookingModal from "@/components/BookingModal";

interface HeroProps {
  language: 'id' | 'en';
  onLanguageChange: () => void;
}

const Hero = ({ language, onLanguageChange }: HeroProps) => {
  const [showBookingModal, setShowBookingModal] = useState(false);
  
  const content = {
    id: {
      title: "Jelajahi Sulawesi dengan Nyaman",
      subtitle: "Rental Mobil Terpercaya untuk Petualangan Anda",
      description: "Dari pantai eksotis Bira hingga pegunungan Toraja yang menawan. Kami menyediakan layanan rental mobil berkualitas dengan driver berpengalaman untuk menjelajahi keindahan Sulawesi Selatan.",
      cta: "Mulai Perjalanan",
      services: "Lihat Layanan"
    },
    en: {
      title: "Explore Sulawesi in Comfort", 
      subtitle: "Trusted Car Rental for Your Adventure",
      description: "From the exotic beaches of Bira to the enchanting highlands of Toraja. We provide quality car rental services with experienced drivers to explore the beauty of South Sulawesi.",
      cta: "Start Your Journey",
      services: "View Services"
    }
  };

  const t = content[language];

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${heroImage})` 
        }}
      />
      
      {/* Language Toggle */}
      <Button
        onClick={onLanguageChange}
        variant="outline"
        size="sm"
        className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-sm hover:bg-white border-white/50"
      >
        <Globe className="h-4 w-4 mr-2" />
        {language === 'id' ? 'EN' : 'ID'}
      </Button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Car className="h-8 w-8 text-white" />
            <span className="text-white/90 font-medium">Sulawesi Car Rental</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
            {t.subtitle}
          </p>
          
          <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-ocean hover:shadow-medium transition-smooth text-lg px-8 py-6"
              onClick={() => setShowBookingModal(true)}
            >
              <MapPin className="mr-2 h-5 w-5" />
              {t.cta}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-smooth text-lg px-8 py-6"
            >
              {t.services}
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-white/70 text-sm">{language === 'id' ? 'Mobil Tersedia' : 'Cars Available'}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5+</div>
              <div className="text-white/70 text-sm">{language === 'id' ? 'Destinasi Wisata' : 'Tour Destinations'}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-white/70 text-sm">{language === 'id' ? 'Layanan' : 'Service'}</div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        language={language}
      />
    </section>
  );
};

export default Hero;