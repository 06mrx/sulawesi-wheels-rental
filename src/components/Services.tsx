import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Key, Plane, Mountain, MapPin, Route } from "lucide-react";

interface ServicesProps {
  language: 'id' | 'en';
}

const Services = ({ language }: ServicesProps) => {
  const content = {
    id: {
      title: "Layanan Kami",
      subtitle: "Solusi lengkap untuk perjalanan Anda di Sulawesi",
      services: [
        {
          icon: Car,
          title: "Rental Mobil Dalam/Luar Kota",
          description: "Rental mobil harian atau mingguan untuk keperluan dalam kota atau perjalanan luar kota dengan driver berpengalaman."
        },
        {
          icon: Key,
          title: "Pelayanan Lepas Kunci",
          description: "Rental mobil tanpa driver untuk Anda yang ingin mengemudi sendiri dengan kebebasan penuh."
        },
        {
          icon: Plane,
          title: "Antar Jemput Bandara",
          description: "Layanan antar jemput dari/ke Bandara Sultan Hasanuddin dengan pelayanan yang punctual dan nyaman."
        },
        {
          icon: Mountain,
          title: "Tour ke Bira & Toraja",
          description: "Paket wisata khusus ke destinasi favorit seperti pantai Bira dan dataran tinggi Toraja."
        },
        {
          icon: MapPin,
          title: "Custom Pick Point",
          description: "Fleksibilitas untuk menentukan titik penjemputan dan tujuan sesuai kebutuhan Anda."
        },
        {
          icon: Route,
          title: "Custom Destinasi",
          description: "Rencana perjalanan khusus ke berbagai destinasi menarik di Sulawesi sesuai keinginan Anda."
        }
      ]
    },
    en: {
      title: "Our Services",
      subtitle: "Complete solutions for your journey in Sulawesi",
      services: [
        {
          icon: Car,
          title: "City & Intercity Car Rental",
          description: "Daily or weekly car rental for city needs or intercity travel with experienced drivers."
        },
        {
          icon: Key,
          title: "Self-Drive Service",
          description: "Car rental without driver for those who want to drive themselves with complete freedom."
        },
        {
          icon: Plane,
          title: "Airport Transfer",
          description: "Transfer service from/to Sultan Hasanuddin Airport with punctual and comfortable service."
        },
        {
          icon: Mountain,
          title: "Bira & Toraja Tours",
          description: "Special tour packages to favorite destinations like Bira beach and Toraja highlands."
        },
        {
          icon: MapPin,
          title: "Custom Pick Point",
          description: "Flexibility to determine pickup points and destinations according to your needs."
        },
        {
          icon: Route,
          title: "Custom Destinations",
          description: "Special travel plans to various interesting destinations in Sulawesi according to your wishes."
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-soft hover:shadow-medium transition-smooth bg-white/50 backdrop-blur-sm group hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-ocean w-fit group-hover:scale-110 transition-smooth">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-foreground/80 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;