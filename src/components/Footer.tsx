import { Car, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

interface FooterProps {
  language: 'id' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    id: {
      company: "Sulawesi Car Rental",
      tagline: "Partner terpercaya untuk petualangan Anda di Sulawesi",
      services: {
        title: "Layanan",
        items: ["Rental Mobil", "Lepas Kunci", "Antar Jemput", "Tour Wisata", "Custom Trip"]
      },
      destinations: {
        title: "Destinasi",
        items: ["Pantai Bira", "Toraja", "Danau Tempe", "Malino", "Rammang-Rammang"]
      },
      contact: {
        title: "Kontak",
        phone: "+62 812-3456-7890",
        email: "info@sulawesicarrental.com",
        address: "Makassar, Sulawesi Selatan"
      },
      copyright: "© 2024 Sulawesi Car Rental. Semua hak dilindungi."
    },
    en: {
      company: "Sulawesi Car Rental",
      tagline: "Your trusted partner for adventures in Sulawesi",
      services: {
        title: "Services", 
        items: ["Car Rental", "Self Drive", "Transfer", "Tour Package", "Custom Trip"]
      },
      destinations: {
        title: "Destinations",
        items: ["Bira Beach", "Toraja", "Lake Tempe", "Malino", "Rammang-Rammang"]
      },
      contact: {
        title: "Contact",
        phone: "+62 812-3456-7890",
        email: "info@sulawesicarrental.com", 
        address: "Makassar, South Sulawesi"
      },
      copyright: "© 2024 Sulawesi Car Rental. All rights reserved."
    }
  };

  const t = content[language];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-8 w-8" />
              <span className="text-xl font-bold">{t.company}</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              {t.tagline}
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-smooth cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-smooth cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.services.title}</h3>
            <ul className="space-y-2">
              {t.services.items.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-smooth"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.destinations.title}</h3>
            <ul className="space-y-2">
              {t.destinations.items.map((destination, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-white transition-smooth"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t.contact.title}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-white/60" />
                <span className="text-white/80">{t.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-white/60" />
                <span className="text-white/80 text-sm">{t.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-white/60" />
                <span className="text-white/80">{t.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">{t.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;